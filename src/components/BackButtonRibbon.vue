<template>
  <div class="actions-ribbon">
    <ButtonPlain
      class="back-button"
      @click="back"
    >
      <img
        v-if="!hideBack"
        src="../assets/backArrow.svg"
      >
    </ButtonPlain>

    <div class="title">
      <slot name="title" />
    </div>

    <div class="buttons">
      <slot name="buttons" />
    </div>
  </div>
</template>

<script>
import ButtonPlain from './ButtonPlain.vue';

export default {
  components: {
    ButtonPlain,
  },
  props: {
    hideBack: { type: Boolean },
  },
  methods: {
    back() {
      if (!this.$store.state.route.from.name) {
        this.$router.push({ name: 'feed' });
        return;
      }
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.actions-ribbon {
  padding: 0.6rem 1.05rem;
  background-color: $actions_ribbon_background_color;
  position: sticky;
  top: 0;
  line-height: 1.2rem;
  height: 2.8rem;
  z-index: 21;
  display: flex;

  .back-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  img:hover {
    cursor: pointer;
  }

  .title {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }

  .buttons {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

@media (max-width: 991px) {
  .actions-ribbon {
    display: none;
  }
}
</style>
