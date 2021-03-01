<template>
  <div
    class="modal-mask"
  >
    <div class="modal-wrapper">
      <div class="success-modal">
        <img :src="FailureIcon" >
        <h1>Report an issue</h1>
        <textarea v-model="report"></textarea>
        <button
          @click="send"
          class="button"
        >
          Send report
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { detect } from 'detect-browser';

import SuccessIcon from '../assets/verifiedUrl.svg';
import FailureIcon from '../assets/iconError.svg';
import { backendFetch } from '../utils/backend';

export default {
  props: {
    failure: { type: Boolean },
    hideIcon: { type: Boolean },
    resolve: { type: Function, required: true },
  },
  data() {
    return {
      SuccessIcon,
      FailureIcon,
      report: '',
    };
  },
  methods: {
    async send() {
      const report = {
        id: 0,
        appVersion: process.env.npm_package_version,
        browser: detect(),
        error: 'string',
        platform: 'web',
        description: this.report,
        time: new Date(),
      };

      await backendFetch('errorreport', {
        method: 'POST',
        body: JSON.stringify(report),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
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

  .success-modal {
    text-align: center;
    width: 25rem;
    margin: 0 auto;
    padding: 2.5rem 2.5rem;
    background-color: $actions_ribbon_background_color;
    border-radius: 0.25rem;
    border: 1px solid $card_border_color;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    word-break: break-word;

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
    }
  }
}
</style>
