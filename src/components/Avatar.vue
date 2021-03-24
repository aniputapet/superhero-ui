<template>
  <img
    class="avatar"
    :src="showIdenticonOnly || error ? profileIdenticonUrl : profileImageUrl"
    loading="lazy"
    @error="error = true"
  >
</template>

<script>
import jdenticon from 'jdenticon/standalone';
import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-avataaars-sprites';
import Backend from '../utils/backend';
import { IDENTICON_CONFIG, AVATAR_CONFIG } from '../utils';

jdenticon.config = IDENTICON_CONFIG;

export default {
  props: {
    address: { type: String, default: '' },
    chainName: { type: String, required: false, default: null },
    showIdenticonOnly: { type: Boolean },
  },
  data: () => ({
    error: false,
  }),
  computed: {
    profileIdenticonUrl() {
      return this.chainName
        ? new Avatars(sprites, AVATAR_CONFIG).create(this.chainName)
        : `data:image/svg+xml;base64,${btoa(jdenticon.toSvg(this.address, 32))}`;
    },
    profileImageUrl({ address, profile }) {
      const key = address === this.address && profile?.signature?.slice(0, 5);
      return `${Backend.getProfileImageUrl(this.address)}${key ? `?cacheBust=${key}` : ''}`;
    },
  },
  watch: {
    profileImageUrl() {
      this.error = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  object-fit: cover;
}
</style>
