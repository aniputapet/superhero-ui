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
      <template v-if="!isSent">
        <FailureIcon />
        <h1>{{ $t('reportBug.Title') }}</h1>
        <h2>{{ $t('reportBug.SubTitle') }}</h2>
        <p class="description">
          {{ $t('reportBug.Description') }}
        </p>
        <ButtonPlain
          class="detailsButton"
          @click="toggleDetails"
        >
          <IconEye />
          {{ $t('reportBug.ViewDetails') }}
        </ButtonPlain>
        <p v-show="details">
          {{ JSON.stringify(error) }}
        </p>
        <h2 class="reportTitle">
          {{ $t('reportBug.DescriptionTitle') }}
        </h2>
        <textarea
          v-model="report"
          class="reportText"
          :placeholder="$t('reportBug.Placeholder')"
        />
        <Button
          class="cancel"
          @click="resolve"
        >
          {{ $t('reportBug.Cancel') }}
        </Button>
        <Button
          @click="send"
        >
          {{ $t('reportBug.Send') }}
        </Button>
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
        <Button
          @click="resolve"
        >
          {{ $t('reportBug.Success.Return') }}
        </Button>
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
import ButtonPlain from './ButtonPlain.vue';
import { issueReport } from '../utils/backend';
import Button from './Button.vue';

export default {
  components: {
    FailureIcon,
    IconClose,
    IconEye,
    IconOK,
    ButtonPlain,
    Button,
  },
  props: {
    resolve: { type: Function, required: true },
    error: { type: [Object, Error], required: true },
  },
  data() {
    return {
      report: '',
      isSent: false,
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

      await issueReport(report);

      this.isSent = true;
    },
    toggleDetails() {
      this.details = !this.details;
    },
  },
};
</script>

<style lang="scss" scoped>
.error-modal {
  padding-top: 5rem;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-body {
    text-align: center;
    margin: 0 auto;
    padding: 2.5rem 1.6em 2.5rem 1.6em;
    background: #131313;
    border-radius: 0.25rem;
    border: 1px solid $card_border_color;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    height: auto;
    max-width: 448px;

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
      color: $tip_note_color;
    }

    .reportTitle {
      font-size: 15px;
      color: $light_font_color;
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
        color: $tip_note_color;
        margin-right: 24px;
      }
    }
  }

  .reportText {
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
      border: 1px solid $secondary_color;
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

  .APIError,
  .iconOK {
    height: 48px;
  }
}
</style>
