<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增餐點</span>
            <span v-else>編輯餐點</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">主要圖片</label>
                <input
                  id="imageUrl"
                  v-model="editProduct.imageUrl"
                  type="text"
                  class="form-control mb-2"
                  placeholder="請輸入圖片連結"
                />
                <img class="img-fluid" :src="editProduct.imageUrl" />
              </div>
              <h3 class="mb-3">多圖新增</h3>
              <div v-if="Array.isArray(editProduct.imagesUrl)">
                <div class="mb-1" v-for="(image, key) in editProduct.imagesUrl" :key="key">
                  <div class="mb-3">
                    <label :for="image + key" class="form-label">圖片網址</label>
                    <input
                      :id="image + key"
                      v-model="editProduct.imagesUrl[key]"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                    />
                  </div>
                  <img class="img-fluid" :src="image" />
                </div>

                <div
                  v-if="
                    !editProduct.imagesUrl.length ||
                    editProduct.imagesUrl[editProduct.imagesUrl.length - 1]
                  "
                >
                  <button
                    class="btn btn-outline-secondary btn-sm d-block w-100"
                    @click="editProduct.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="editProduct.imagesUrl.pop()"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <button
                  class="btn btn-outline-secondary btn-sm d-block w-100"
                  @click="createImages"
                >
                  新增圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <pre>
                {{ editProduct }}
              </pre>
              <div class="mb-3">
                <label for="title" class="form-label">餐點名稱</label>
                <input
                  id="title"
                  v-model="editProduct.title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入餐點名稱"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    v-model="editProduct.category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                  />
                </div>

                <div class="mb-3 col-md-6">
                  <label for="num" class="form-label">數量</label>
                  <input
                    id="num"
                    v-model.number="editProduct.num"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入數量"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    v-model.number="editProduct.origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    v-model.number="editProduct.price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-2">
                  <label for="unit" class="form-label">單位</label>
                  <input id="unit" v-model="editProduct.unit" type="text" class="form-control" />
                </div>

                <div class="mb-3 col-2">
                  <label for="content" class="form-label">內容</label>
                  <input
                    id="content"
                    v-model="editProduct.content"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="info" class="form-label">特色</label>
                <input
                  id="info"
                  v-model="editProduct.info"
                  type="text"
                  class="form-control"
                  placeholder="請輸入特色"
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">餐點描述</label>
                <textarea
                  id="description"
                  v-model="editProduct.description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入餐點描述"
                >
                </textarea>
              </div>

              <div class="mb-3">
                <label for="allergy" class="form-label">過敏資訊</label>
                <input
                  id="allergy"
                  v-model="editProduct.allergy"
                  type="text"
                  class="form-control"
                  placeholder="請輸入過敏資訊"
                />
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    v-model="editProduct.is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
              <!-- 熱銷 -->
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    v-model="editProduct.is_hot"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled">是否熱銷</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-secondary" @click="updateProduct">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
export default {
  props: ['tempProduct', 'updateProduct', 'isNew'],
  data() {
    return {
      modalProduct: null,
      editProduct: {}
    };
  },
  methods: {
    openModal() {
      this.modalProduct.show();
    },
    closeModal() {
      this.modalProduct.hide();
    }
  },

  mounted() {
    this.modalProduct = new Modal(this.$refs.productModal);
  },
  watch: {
    tempProduct() {
      this.editProduct = this.tempProduct;
    }
  }
};
</script>
