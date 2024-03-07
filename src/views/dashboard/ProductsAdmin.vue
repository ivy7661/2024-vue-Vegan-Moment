<template>
  <h2 class="mt-2">產品管理</h2>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-secondary" @click="openModal('new')">建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="90">分類</th>
          <th width="120">產品名稱</th>
          <th width="120" class="text-end">原價</th>
          <th width="120" class="text-end">售價</th>
          <th width="120" class="text-center">是否啟用</th>
          <th width="120" class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">{{ item.origin_price }}</td>
          <td class="text-end">{{ item.price }}</td>
          <td class="text-center">
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td class="text-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <Pagination-Component :pages="pages" :get-data="getData"></Pagination-Component>
  </div>
  <section class="mt-5">
    <h3>產品圖片上傳</h3>
    <!-- <form
      action="/api/thisismycourse2/admin/upload"
      enctype="multipart/form-data"
      method="post"
      @submit="uploadImg(index, $event)"
    > -->
    <input type="file" name="file-to-upload" @change="uploadImg(index, $event)" />
    <input type="submit" value="Upload" />
    <!-- </form> -->
  </section>

  <!-- Modal -->
  <Product-Modal
    :temp-product="tempProduct"
    :update-product="updateProduct"
    :is-New="isNew"
    ref="pModal"
  ></Product-Modal>
  <!-- 刪除 -->
  <Del-Modal :temp-product="tempProduct" :del-product="delProduct" ref="delModal"></Del-Modal>
</template>

<script>
import axios from 'axios';
import PaginationComponent from '../../components/PaginationComponent.vue';
import ProductModal from '../../components/ProductModal.vue';
import DelModal from '../../components/DelModal.vue';

const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      pages: {},
      modalProduct: null,
      delModalProduct: null,
      isNew: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 參數預設值：沒帶入參數時，預設值是1
    getData(page = 1) {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/products?page=${page}`;
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          this.products = response.data.products;
          this.pages = response.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    updateProduct() {
      let url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/product`;
      let http = 'post';

      if (!this.isNew) {
        url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/product/${this.tempProduct.id}`;
        http = 'put';
      }

      axios[http](url, { data: this.tempProduct })
        .then((response) => {
          alert(response.data.message);
          this.getData();
          // this.modalProduct.hide();
          this.$refs.pModal.closeModal();

          // this.tempProduct = {};
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    // 從這個方法，跳到 ref="pModal"，再去呼叫子元件的openModal()
    openModal(status, item) {
      if (status === 'new') {
        this.tempProduct = {
          imagesUrl: []
        };
        this.isNew = true;
        // this.modalProduct.show();
        this.$refs.pModal.openModal();
      } else if (status === 'edit') {
        this.tempProduct = { ...item };
        this.tempProduct.imagesUrl = [];
        this.isNew = false;
        // this.modalProduct.show();
        this.$refs.pModal.openModal();
      } else if (status === 'delete') {
        this.tempProduct = { ...item };
        // this.delModalProduct.show();
        this.$refs.delModal.openDelModal();
      }
    },

    delProduct() {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/product/${this.tempProduct.id}`;

      axios
        .delete(url)
        .then((response) => {
          alert(response.data.message);
          // this.delModalProduct.hide();
          this.$refs.delModal.closeDelModal();
          this.getData();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    },
    uploadImg(index, event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      axios
        .post(`${VITE_API_URL}/api/${VITE_API_PATH}/admin/upload`, formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert(err);
        });
    }

    // uploadImage(index, event) {
    //   const file = event.target.files[0];
    //   const formData = new FormData();
    //   formData.append('file-to-upload', file);
    //   axios
    //     .post(`${VITE_API_URL}/api/${VITE_API_PATH}/admin/upload`, formData)
    //     .then((res) => {
    //       index !== null
    //         ? (this.temp.imagesUrl[index] = res.data.imageUrl)
    //         : (this.temp.imageUrl = res.data.imageUrl);
    //     })
    //     .catch((err) => {
    //       alert(err.response.data.message);
    //     });
    // }
  },
  // 區域註冊
  components: {
    PaginationComponent,
    ProductModal,
    DelModal
  }
};
</script>
