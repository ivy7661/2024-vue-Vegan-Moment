<template>
  <div id="articleModal" ref="articleModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="articleModalLabel" class="modal-title">
            <span v-if="isNew">新增文章</span>
            <span v-else>編輯文章</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">圖片</label>
                <input
                  id="imageUrl"
                  v-model="editArticle.image"
                  type="text"
                  class="form-control mb-2"
                  placeholder="請輸入圖片連結"
                />
                <img class="img-fluid" :src="editArticle.image" />
              </div>
            </div>
            <div class="col-sm-8">
              <pre>
                {{ editArticle }}
              </pre>
              <div class="row">
                <div class="col-6 mb-3">
                  <label for="title" class="form-label">文章標題</label>
                  <input
                    id="title"
                    v-model="editArticle.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入文章標題"
                  />
                </div>

                <div class="col-6 mb-3">
                  <label for="content" class="form-label">文章概要</label>
                  <input
                    id="content"
                    value="蔬食"
                    v-model="editArticle.content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入文章概要"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="create_at" class="form-label">建立時間</label>
                  <input id="create_at" v-model="create_at" type="date" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="author" class="form-label">作者</label>
                  <input
                    id="author"
                    v-model="editArticle.author"
                    type="text"
                    class="form-control"
                    placeholder="請輸入作者"
                  />
                </div>
              </div>
              <!-- 標籤 -->
              <h6 class="mb-3">文章標籤</h6>
              <p>標籤：{{ this.editArticle.tag }}</p>

              <div v-if="Array.isArray(editArticle.tag)">
                <div class="mb-1" v-for="(aTag, key) in editArticle.tag" :key="key">
                  <div class="mb-3">
                    <label :for="aTag + key" class="form-label">標籤</label>
                    <input
                      :id="aTag + key"
                      v-model="editArticle.tag[key]"
                      type="text"
                      class="form-control"
                      placeholder="請輸入標籤名稱"
                    />
                  </div>
                </div>

                <div v-if="!editArticle.tag.length || editArticle.tag[editArticle.tag.length - 1]">
                  <button
                    class="btn btn-outline-secondary btn-sm d-block w-50"
                    @click="editArticle.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="editArticle.tag.pop()"
                  >
                    刪除標籤
                  </button>
                </div>
              </div>
              <div v-else>
                <button class="btn btn-outline-secondary btn-sm d-block" @click="createArticles">
                  新增標籤
                </button>
              </div>
              <hr />

              <div class="mb-3 col-md-12">
                <label for="description" class="form-label">文章內容</label>
                <textarea
                  id="description"
                  v-model="editArticle.description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入文章內容"
                  rows="10"
                ></textarea>
              </div>

              <!-- 公開 -->
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="isPublic"
                    v-model="editArticle.isPublic"
                    class="form-check-input"
                    type="checkbox"
                  />
                  <label class="form-check-label" for="isPublic">是否公開</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-secondary" @click="updateArticle">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
// import modalMixin from '../mixins/modalMixin';

export default {
  props: ['tempArticle', 'updateArticle', 'isNew'],
  data() {
    return {
      modalArticle: null,
      editArticle: {},
      create_at: ''
    };
  },
  // mixins: [modalMixin],
  methods: {
    createArticles() {
      this.editArticle.tag = [];
      this.editArticle.tag.push('');
    },
    openModal() {
      this.modalArticle.show();
    },
    closeModal() {
      this.modalArticle.hide();
    }
  },
  mounted() {
    this.modalArticle = new Modal(this.$refs.articleModal);
  },
  watch: {
    tempArticle() {
      this.editArticle = this.tempArticle;
      // 顯示在input：YYYY-MM-DD
      [this.create_at] = new Date(this.editArticle.create_at * 1000).toISOString().split('T');
      console.log(this.create_at);
    },
    create_at() {
      // 轉為10碼
      this.editArticle.create_at = Math.floor(new Date(this.create_at) / 1000);
    }
  }
};
</script>
