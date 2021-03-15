<template>
  <div
    class="error-modal"
    @click="resolve"
  >
    <div class="modal-body" @click.stop>
      <IconClose
        class="close-modal"
        @click="resolve"
      />
      <template v-if="step === 1">
        <FailureIcon />
        <h1>{{ $t('reportBug.Title') }}</h1>
        <h2>{{ $t('reportBug.SubTitle') }}</h2>
        <p class="description">
          {{ $t('reportBug.Description') }}
        </p>
        <div
          class="detailsButton"
          @click="toggleDetails"
        >
          <IconEye />
          {{ $t('reportBug.ViewDetails') }}
        </div>
        <p v-show="details">
          {{ JSON.stringify(error) }}
        </p>
        <h2 class="reportTitle">
          {{ $t('reportBug.DescriptionTitle') }}
        </h2>
        <textarea
          v-model="report"
          class="report-text"
          :placeholder="$t('reportBug.Placeholder')"
        />
        <button
          class="button cancel"
          @click="resolve"
        >
          {{ $t('reportBug.Cancel') }}
        </button>
        <button
          class="button"
          @click="send"
        >
          {{ $t('reportBug.Send') }}
        </button>
      </template>
      <template v-else>
        <IconOK />
        <h1 class="successTitle">
          {{ $t('reportBug.Success.Title') }}
        </h1>
        <h2 class="successSubTitle">
          {{ $t('reportBug.Success.SubTitle') }}
        </h2>
        <p class="successDescription">
          {{ $t('reportBug.Success.Description') }}
        </p>
        <button
          class="button"
          @click="resolve"
        >
          {{ $t('reportBug.Success.Return') }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { detect } from 'detect-browser';
import FailureIcon from '../assets/APIError.svg?icon-component';
import IconClose from '../assets/iconCloseRebranded.svg?icon-component';
import IconEye from '../assets/iconEye.svg?icon-component';
import IconOK from '../assets/iconOK.svg?icon-component';
import { backendFetch } from '../utils/backend';

export default {
  components: {
    FailureIcon,
    IconClose,
    IconEye,
    IconOK,
  },
  props: {
    resolve: { type: Function, required: true },
    error: { type: [Error, PromiseRejectionEvent], required: true },
  },
  data() {
    return {
      report: '',
      step: 1,
      details: false,
    };
  },
  methods: {
    async send() {
      const report = {
        appVersion: process.env.npm_package_version,
        browser: detect(),
        error: this.error,
        platform: 'superhero-ui',
        description: this.report,
        time: Date.now(),
      };

      await backendFetch('errorreport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report),
      });

      this.step = 2;
    },
    toggleDetails() {
      this.details = !this.details;
    },
  },
};
</script>

<style lang="scss" scoped>
.error-modal {
  vertical-align: middle;
  padding-top: 5rem;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-body {
    text-align: center;
    margin: 0 auto;
    padding: 2.5rem 1.6em 3.5rem 1.6em;
    background: #131313;
    border-radius: 0.25rem;
    border: 1px solid $card_border_color;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    width: 448px;

    @include smallest {
      width: 100%;
      padding: 1rem;
    }

    img {
      height: 2rem;
      margin-bottom: 0.85rem;
    }

    h1 {
      color: $standard_font_color;
      font-size: 1rem;
      font-weight: 500;
      font-family: "Roboto Regular ";
    }

    h2 {
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
    }

    .description {
      font-size: 15px;
      line-height: 24px;
      color: #babac0;
    }

    .reportTitle {
      font-size: 15px;
      color: #787878;
      text-align: left;
    }

    .button {
      background-color: $secondary_color;
      border: none;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-weight: 700;
      justify-self: center;
      line-height: 1.125;
      padding: 0.65rem 1rem;
      color: #fff;

      &.cancel {
        background: #232323;
        color: #babac0;
        margin-right: 24px;
      }
    }
  }

  .report-text {
    width: 100%;
    background: #171717;
    border-radius: 6px;
    border: 1px solid #171717;
    resize: vertical;
    height: 40px;
    margin-bottom: 15px;
    padding: 0.5em 0.9em;
    color: #fff;
    font-size: 14px;
    line-height: 24px;

    &:focus {
      background: #000;
      border: 1px solid #1161fe;
      outline: none;
      height: 63px;
    }

    &::placeholder {
      font-size: 14px;
    }
  }

  .detailsButton {
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 24px;
  }

  .close-modal {
    position: absolute;
    top: 0.85em;
    right: 0.85em;
    cursor: pointer;
  }

  .iconOK {
    margin-bottom: 8px;
  }

  .successTitle {
    font-family: "Roboto-Regular";
    font-weight: bold;
    font-size: 19px;
    line-height: 22px;
  }

  .successSubTitle {
    font-weight: bold;
    font-size: 15px;
    line-height: 24px;
  }

  .successDescription {
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 40px;
  }
}
</style>
