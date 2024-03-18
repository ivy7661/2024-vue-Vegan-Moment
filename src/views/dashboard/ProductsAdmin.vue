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
    <Pagination-Component :pages="pages" @change-page="getData"></Pagination-Component>
  </div>

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
import Alert from '@/mixins/swal.js';
import PaginationComponent from '../../components/admin/PaginationComponent.vue';
import ProductModal from '../../components/admin/ProductModal.vue';
import DelModal from '../../components/admin/DelModal.vue';

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
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
          this.pages = res.data.pagination;
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
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
        .then((res) => {
          Alert.toastTop(res.data.message, 'success');
          this.getData();
          // this.modalProduct.hide();
          this.$refs.pModal.closeModal();

          // this.tempProduct = {};
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    },
    openModal(status, item) {
      if (status === 'new') {
        this.tempProduct = {
          imagesUrl: []
        };
        this.isNew = true;
        this.$refs.pModal.openModal();
      } else if (status === 'edit') {
        this.tempProduct = { ...item };
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = [];
        }
        this.isNew = false;
        this.$refs.pModal.openModal();
      } else if (status === 'delete') {
        this.tempProduct = { ...item };
        this.$refs.delModal.openDelModal();
      }
    },

    delProduct() {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/product/${this.tempProduct.id}`;
      axios
        .delete(url)
        .then((res) => {
          Alert.toastTop(res.data.message, 'success');
          this.$refs.delModal.closeDelModal();
          this.getData();
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    }
    // createImages() {
    //   this.tempProduct.imagesUrl = [];
    //   this.tempProduct.imagesUrl.push('');
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
../../components/admin/PaginationComponent.vue
