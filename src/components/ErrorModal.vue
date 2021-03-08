<template>
  <div
    class="error-modal"
    @click="resolve"
  >
    <div class="modal-wrapper" @click.stop>
      <div class="error-modal">
        <h1>{{ error }}</h1>
        <p>{{ $t('reportBug.Title') }}</p>
        <p>{{ $t('reportBug.SubTitle') }}</p>
        <p>{{ $t('reportBug.Description') }}</p>
        <button>{{ $t('reportBug.ViewDetails') }}</button>
        <h3>{{ $t('reportBug.DescriptionTitle') }}</h3>
        <textarea
          v-model="report"
          class="report-text"
        />
        <button
          class="button"
          @click="send"
        >
          {{ $t('reportBug.Send') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { detect } from 'detect-browser';

import FailureIcon from '../assets/iconError.svg';
import { backendFetch } from '../utils/backend';

export default {
  props: {
    hideIcon: { type: Boolean },
    resolve: { type: Function, required: true },
    error: { type: String, required: true },
  },
  data() {
    return {
      FailureIcon,
      report: '',
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
        time: new Date().toISOString(),
      };

      await backendFetch('errorreport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report),
      });
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
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);

  .error-modal {
    text-align: center;
    width: 25rem;
    margin: 0 auto;
    padding: 2.5rem 2.5rem 3.5rem 2.5rem;
    background-color: $actions_ribbon_background_color;
    border-radius: 0.25rem;
    border: 1px solid $card_border_color;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);

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

    .button {
      background-color: $secondary_color;
      border: none;
      border-radius: 0.25rem;
      color: $standard_font_color;
      font-size: 0.75rem;
      font-weight: 700;
      justify-self: center;
      line-height: 1.125;
      padding: 0.65rem 1rem;
      float: right;
    }
  }

  .report-text {
    width: 100%;
    background: #171717;
    border-radius: 6px;
    border: 1px solid #000;
    resize: vertical;
    height: 150px;
    margin-bottom: 15px;
    padding: 5px;
    color: #fff;

    &:focus {
      background: #000;
      border: 1px solid #1161fe;
      outline: none;
    }
  }
}
</style>
