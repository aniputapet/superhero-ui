<template>
  <ButtonPlain
    class="outlined-button"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </ButtonPlain>
</template>

<script>
import ButtonPlain from './ButtonPlain.vue';

export default {
  components: { ButtonPlain },
};
</script>

<style lang="scss" scoped>
.outlined-button {
  border: 0.05rem solid $standard_font_color;
  border-radius: 0.25rem;
  color: $standard_font_color;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.6rem;
  min-width: 8rem;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &.unpadded {
    padding: 0.2rem;
    min-width: 3rem;
  }

  &:hover {
    border-color: $custom_links_color;
    color: $custom_links_color;
  }

  &.blue {
    color: $secondary_color;
    border-color: $secondary_color;

    &:hover {
      background-color: $secondary_color;
    }
  }

  &.green {
    color: $custom_links_color;
    border-color: $custom_links_color;

    &:hover {
      background-color: $custom_links_color;
    }
  }

  &.red {
    color: $red_color;
    border-color: $red_color;

    &:hover {
      background-color: $red_color;
    }
  }

  &.blue:hover,
  &.red:hover,
  &.green:hover {
    color: $standard_font_color;
  }

  &.fullwidth {
    width: 100%;
  }

  &:disabled {
    opacity: 0.4;
    color: $tip_note_color;
    border-color: $tip_note_color;

    &:hover {
      background-color: unset;
    }
  }
}
</style>
