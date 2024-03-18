<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre, pointer: pages.has_pre }">
        <a class="page-link" @click="$emit('change-page', pages.current_page - 1)">
          <span>&laquo;</span>
        </a>
      </li>
      <!-- 中間頁碼 -->
      <li
        v-for="page in pages.total_pages"
        :key="page + 123"
        class="page-item"
        :class="{
          active: page === pages.current_page,
          pointer: pages
        }"
      >
        <a class="page-link" @click="$emit('change-page', page)">{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next, pointer: pages.has_next }">
        <a class="page-link" @click="$emit('change-page', pages.current_page + 1)">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages']
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
