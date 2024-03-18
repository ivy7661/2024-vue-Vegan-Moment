<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage <= 1 }">
        <a class="page-link" href="#" @click.prevent="getProducts(currentPage - 1)">
          <span>&laquo;</span>
        </a>
      </li>
      <li v-for="page in totalPages" :key="page + 'page'" class="page-item">
        <a
          class="page-link"
          href="#"
          @click.prevent="getProducts(page)"
          :class="{ active: currentPage === page }"
          >{{ page }}</a
        >
      </li>
      <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
        <a class="page-link" href="#" @click.prevent="getProducts(currentPage + 1)">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productStore from '@/stores/productStore.js';
export default {
  methods: {
    ...mapActions(productStore, ['getProducts'])
  },
  computed: {
    ...mapState(productStore, ['totalPages', 'currentPage'])
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style lang="scss" scoped>
a.active {
  pointer-events: none;
}
</style>
