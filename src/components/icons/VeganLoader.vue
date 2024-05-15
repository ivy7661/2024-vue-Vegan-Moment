<template>
  <img src="/images/vegan_loading_removebg.png" class="image_rotate" alt="loading" width="200" />
</template>

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
