<template>
  <div
    class="search-input"
    :class="{ sided, focused }"
  >
    <input
      :value="value"
      type="text"
      :placeholder="placeholder"
      @focus="focused = true"
      @blur="focused = false"
      @input="search($event.target.value)"
    >
    <ButtonPlain
      v-if="value.length"
      :title="$t('views.TipList.Clear')"
      @click="$emit('input', '')"
    >
      <IconEraser />
    </ButtonPlain>
    <IconSearch v-else-if="sided && !focused" />
    <ButtonPlain
      v-if="!sided"
      :title="$t('views.TipList.CloseSearch')"
      @click="$emit('close')"
    >
      <IconClose />
    </ButtonPlain>
  </div>
</template>

<script>
import { debounce } from 'lodash-es';
import IconSearch from '../../assets/iconSearch.svg?icon-component';
import IconEraser from '../../assets/iconEraser.svg?icon-component';
import IconClose from '../../assets/iconClose.svg?icon-component';
import ButtonPlain from '../ButtonPlain.vue';

export default {
  components: {
    IconSearch,
    IconEraser,
    IconClose,
    ButtonPlain,
  },
  props: {
    sided: { type: Boolean },
    placeholder: { type: String, default: '' },
    value: { type: String, default: '' },
  },
  data() {
    return {
      focused: false,
    };
  },
  methods: {
    search: debounce(function set(value) {
      this.$emit('input', value);
    }, 300),
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  background-color: $buttons_background;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 14px;

  &.focused {
    border-color: $secondary_color;
  }

  input {
    background: none;
    border: none;
    outline: none;
    flex-grow: 1;
    font-size: 14px;
    line-height: 22.65px;
    color: $standard_font_color;
    padding: 8.5px 16px;

    ~ * {
      margin-right: 10px;
    }

    &:focus {
      background-color: $background_color;
    }
  }

  svg {
    height: 20px;
    width: auto;
  }

  &.sided {
    height: 44px;

    input ~ * {
      margin-right: 20px;
    }
  }
}
</style>
