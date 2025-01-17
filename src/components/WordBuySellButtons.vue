<template>
  <div>
    <div class="buttons">
      <OutlinedButton
        class="green unpadded mr-1"
        @click="() => {
          showBuyModal = true; buyValue()
        }"
      >
        {{ $t('components.WordBuySellButtons.Buy') }}
      </OutlinedButton>

      <OutlinedButton
        class="red unpadded"
        :disabled="tokenBalance === 0"
        @click="() => {
          showSellModal = true; sellValue()
        }"
      >
        {{ $t('components.WordBuySellButtons.Sell') }}
      </OutlinedButton>
    </div>

    <Modal
      v-if="showBuyModal"
      @close="showBuyModal = false"
    >
      <Loader
        v-if="loading"
        :progress-message="progressMessage"
        :message="$t('components.WordBuySellButtons.ConfirmMessage')"
      />
      <template v-else>
        <div class="label">
          {{ $t('components.WordBuySellButtons.AccountBalance') }}
        </div>
        <AeAmount
          :amount="tokenBalance"
          :token="tokenAddress"
        />
        <div class="mt-3 label">
          {{ $t('components.WordBuySellButtons.AmountBuying') }}
        </div>
        <div class="input-group mb-2">
          <AeInputAmount
            v-model="buyAmount"
            :token="tokenAddress"
            no-dropdown
            no-fiatvalue
            class="input-amount"
            @keyup="buyValue"
          />
        </div>
        <div class="mt-3 label">
          {{ $t('components.WordBuySellButtons.BuyPrice') }}
        </div>
        <div class="return-amount">
          <AeAmountFiat
            :amount="buyPrice"
            aettos
          />
        </div>
        <div class="mt-3 label">
          {{ $t('components.WordBuySellButtons.TotalPay') }}
        </div>
        <div class="return-amount">
          <AeAmountFiat
            v-if="buyAeAmount !== null"
            :amount="buyAeAmount"
            aettos
          />
          <Loading
            v-if="buyAeAmount === null || updatingValue"
            :class="{ 'update-loading': buyAeAmount !== null && updatingValue }"
            small
            class="p-0"
          />
        </div>
        <div class="mt-3 text-center">
          <OutlinedButton
            :disabled="buyAeAmount <= 0"
            class="green buy-sell"
            @click="buy"
          >
            <span>
              {{ $t('components.WordBuySellButtons.Buy') }}
            </span>
          </OutlinedButton>
        </div>
      </template>
    </Modal>

    <Modal
      v-if="showSellModal"
      @close="showSellModal = false"
    >
      <Loader
        v-if="loading"
        :progress-message="progressMessage"
        :message="$t('components.WordBuySellButtons.ConfirmMessage')"
      />
      <template v-else>
        <div class="label">
          {{ $t('components.WordBuySellButtons.AccountBalance') }}
        </div>
        <AeAmount
          :amount="tokenBalance"
          :token="tokenAddress"
        />
        <div class="mt-3 label">
          {{ $t('components.WordBuySellButtons.AmountSelling') }}
        </div>
        <div class="input-group mb-2">
          <AeInputAmount
            v-model="sellAmount"
            :token="tokenAddress"
            no-dropdown
            no-fiatvalue
            class="input-amount"
            @keyup="sellValue"
          />
        </div>
        <div class="mt-3 label">
          {{ $t('components.WordBuySellButtons.SellPrice') }}
        </div>
        <div class="return-amount">
          <AeAmountFiat
            :amount="sellPrice"
            aettos
          />
        </div>
        <div class="mt-3 label">
          {{ $t('components.WordBuySellButtons.TotalGet') }}
        </div>
        <div class="return-amount">
          <AeAmountFiat
            v-if="sellAeAmount !== null"
            :amount="sellAeAmount"
            aettos
          />
          <Loading
            v-if="sellAeAmount === null || updatingValue"
            :class="{ 'update-loading': sellAeAmount !== null && updatingValue }"
            small
            class="p-0"
          />
        </div>
        <div class="mt-3 text-center">
          <OutlinedButton
            :disabled="sellAeAmount <= 0"
            class="red buy-sell"
            @click="sell"
          >
            <span>{{ $t('components.WordBuySellButtons.Sell') }}</span>
          </OutlinedButton>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BigNumber from 'bignumber.js';
import Backend from '../utils/backend';
import { EventBus } from '../utils/eventBus';
import AeAmount from './AeAmount.vue';
import Loading from './Loading.vue';
import OutlinedButton from './OutlinedButton.vue';
import Modal from './Modal.vue';
import AeAmountFiat from './AeAmountFiat.vue';
import { shiftDecimalPlaces } from '../utils';
import AeInputAmount from './AeInputAmount.vue';
import Loader from './Loader.vue';

export default {
  name: 'WordBuySellButtons',
  components: {
    AeInputAmount,
    AeAmountFiat,
    AeAmount,
    Loading,
    OutlinedButton,
    Modal,
    Loader,
  },
  props: {
    sale: { type: String, required: true },
  },
  data: () => ({
    buyPrice: null,
    sellPrice: null,
    buyAmount: 1,
    sellAmount: 1,
    totalSupply: null,
    tokenAddress: null,
    buyAeAmount: null,
    sellAeAmount: null,
    showBuyModal: false,
    showSellModal: false,
    loading: true,
    updatingValue: true,
    progressMessage: '',
  }),
  computed: {
    ...mapState(['address', 'balance', 'tokenBalances']),
    tokenBalance() {
      const balance = this.tokenBalances && this.tokenAddress
        && this.tokenBalances.find((t) => t.token === this.tokenAddress);

      return new BigNumber(balance ? balance.balance : '0').toNumber();
    },
  },
  created() {
    this.reloadData();
    EventBus.$on('reloadData', () => {
      this.reloadData();
    });
    setInterval(() => this.reloadData(), 120 * 1000);
  },
  methods: {
    async reloadData() {
      this.totalSupply = null;
      this.buyPrice = null;

      const data = await Backend.getWordSale(this.sale);
      this.tokenAddress = data.tokenAddress;
      this.buyPrice = data.buyPrice;
      this.sellPrice = data.sellPrice;

      this.buyAmount = 1;
      this.sellAmount = 1;

      this.loading = false;
      this.showSellModal = false;
      this.showBuyModal = false;
    },
    async buyValue() {
      this.updatingValue = true;

      const amount = shiftDecimalPlaces(this.buyAmount || 0, 18).toFixed();

      const value = await this.$store.dispatch('aeternity/tokenSaleMethod',
        {
          contractAddress: this.sale,
          method: 'calculate_buy_price',
          args: [amount],
        });

      this.buyAeAmount = value;
      this.updatingValue = false;
      return { amount, value };
    },
    async sellValue() {
      this.updatingValue = true;

      const amount = shiftDecimalPlaces(this.sellAmount || 0, 18).toFixed();
      this.sellAeAmount = await this.$store.dispatch('aeternity/tokenSaleMethod',
        {
          contractAddress: this.sale,
          method: 'calculate_sell_return',
          args: [amount],
        }).catch(() => 0);
      this.updatingValue = false;
    },
    async buy() {
      this.loading = true;
      this.progressMessage = this.$t('components.WordBuySellButtons.Buying');

      try {
        const { amount, value } = await this.buyValue();
        await this.$store.dispatch('aeternity/tokenSaleMethod',
          {
            contractAddress: this.sale,
            method: 'buy',
            args: [amount],
            options: { amount: value },
          });

        await Backend.invalidateTokenCache(this.tokenAddress);
        await Backend.invalidateWordSaleCache(this.sale);
      } catch (error) {
        this.$store.dispatch('modals/open', {
          name: 'failure',
          title: error.message,
          body: 'Transaction was not made!',
          primaryButtonText: 'OK',
        });
      } finally {
        EventBus.$emit('reloadData', () => {
          this.loading = false;
          this.progressMessage = '';
        });
      }
    },
    async sell() {
      this.loading = true;
      this.progressMessage = this.$t('components.WordBuySellButtons.Selling[0]');
      try {
        const amount = shiftDecimalPlaces(this.sellAmount, 18).toFixed();

        await this.$store.dispatch('aeternity/createOrChangeAllowance', {
          contractAddress: this.tokenAddress,
          amount,
          forAccount: this.sale.replace('ct_', 'ak_'),
        }).catch(() => { throw new Error('Insufficient Account Balance'); });
        this.progressMessage = this.$t('components.WordBuySellButtons.Selling[1]');
        await this.$store.dispatch('aeternity/tokenSaleMethod',
          {
            contractAddress: this.sale,
            method: 'sell',
            args: [amount],
          });

        await Backend.invalidateTokenCache(this.tokenAddress);
        await Backend.invalidateWordSaleCache(this.sale);
      } catch (error) {
        this.$store.dispatch('modals/open', {
          name: 'failure',
          title: error.message,
          body: 'Transaction was not made!',
          primaryButtonText: 'OK',
        });
      } finally {
        EventBus.$emit('reloadData', () => {
          this.loading = false;
          this.progressMessage = '';
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  button {
    @include smallest {
      margin-bottom: 0.25rem;
    }
  }
}

.not-bootstrap-modal ::v-deep .not-bootstrap-modal-content {
  background-color: $article_content_color;
  border-radius: 0.5rem;
  margin: 0 -6.3rem;
  padding: 1rem;
  width: 192px;
  min-height: 248px;
  font-size: 0.75rem;

  @include smallest {
    padding: 0.5rem;
  }
}

.input-amount {
  max-width: 10rem;
}

.return-amount {
  display: flex;
  flex-direction: row;

  .update-loading {
    margin-left: 0.5rem;
    width: auto;
    opacity: 0.6;
  }
}

.buy-sell {
  padding: 4px;
  min-width: 80px;
}
</style>
