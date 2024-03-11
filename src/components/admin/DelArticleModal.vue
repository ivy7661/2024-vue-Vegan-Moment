<template>
  <div id="delArticleModal" ref="delArticleModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delArticleModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempArticle.title }}</strong>
          文章(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delArticle">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import modalMixin from '../../mixins/modalMixin';
import { Modal } from 'bootstrap';
export default {
  props: ['tempArticle', 'delArticle'],
  data() {
    return {
      delModalArticle: null
    };
  },
  // mixins: [modalMixin],
  methods: {
    openDelModal() {
      this.delModalArticle.show();
    },
    closeDelModal() {
      this.delModalArticle.hide();
    }
  },
  mounted() {
    this.delModalArticle = new Modal(this.$refs.delArticleModal);
  }
};
</script>
