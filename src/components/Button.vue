<template>
  <button
    class="button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: $secondary_color;
  border: none;
  border-radius: 0.25rem;
  color: $standard_font_color;
  font-size: 0.75rem;
  font-weight: 700;
  justify-self: center;
  line-height: 1.125;
  padding: 0.65rem 1.3rem;

  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
