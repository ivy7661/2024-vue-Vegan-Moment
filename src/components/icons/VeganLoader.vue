<template>
  <img src="/images/vegan_loading_removebg.png" class="image_rotate" alt="cocktail" width="200" />
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default: 24
    }
  }
};
</script>
<style lang="scss" scoped>
.image_rotate {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotateY(0);
  }

  to {
    transform: rotateY(360deg);
  }
}
</style>
