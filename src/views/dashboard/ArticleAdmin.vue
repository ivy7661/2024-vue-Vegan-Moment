<template>
  <h2 class="mt-2">文章管理</h2>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-secondary" @click="openModal('new')">建立新文章</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="90">作者</th>
          <th width="120">文章標題</th>
          <th width="120" class="text-end">建立時間</th>
          <th width="120" class="text-center">是否公開</th>
          <th width="120" class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.author }}</td>
          <td>{{ article.title }}</td>
          <td class="text-end">
            {{ new Date(article.create_at * 1000).toLocaleDateString() }}
          </td>
          <td class="text-center">
            <span v-if="article.isPublic" class="text-success">公開</span>
            <span v-else>未公開</span>
          </td>
          <td class="text-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="openModal('edit', article)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', article)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <!-- <Pagination-Component :pages="pages" :get-data="getData"></Pagination-Component> -->
  </div>

  <!-- Modal -->
  <Article-Modal
    :temp-article="tempArticle"
    :update-article="updateArticle"
    :is-new="isNew"
    ref="articleModal"
  ></Article-Modal>
  <!-- 刪除 -->
  <!-- <Del-Article-Modal
    :temp-article="tempArticle"
    :del-article="delArticle"
    ref="delModal"
  ></Del-Article-Modal> -->
</template>

<script>
import axios from 'axios';
// import PaginationComponent from '../../components/PaginationComponent.vue';
import ArticleModal from '../../components/ArticleModal.vue';
// import DelArticleModal from '../../components/admin/DelArticleModal.vue';

const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      tempArticle: {
        tag: []
      },
      pages: {},
      modalProduct: null,
      delModalProduct: null,
      isNew: false
    };
  },
  mounted() {
    this.getData();
    // console.log(Math.floor(new Date('2022-03-15') / 1000));
    // console.log(new Date(1647302400 * 1000).toISOString().split('T')[0]);
  },
  methods: {
    // 參數預設值：沒帶入參數時，預設值是1
    getData(page = 1) {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/articles?page=${page}`;
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.articles = res.data.articles;
          // this.pages = res.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    updateArticle() {
      let url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/article`;
      let http = 'post';

      if (!this.isNew) {
        url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/article/${this.tempArticle.id}`;
        http = 'put';
      }

      axios[http](url, { data: this.tempArticle })
        .then((res) => {
          alert(res.data.message);
          this.getData();
          this.$refs.articleModal.hideModal();
          // this.tempArticle = {};
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    openModal(status, article) {
      if (status === 'new') {
        this.tempArticle = {};
        this.isNew = true;
        this.$refs.articleModal.openModal();
        console.log('open');
      } else if (status === 'edit') {
        this.tempArticle = { ...article };
        if (!this.tempArticle.image) {
          this.tempArticle.image = [];
        }
        this.isNew = false;
        this.$refs.articleModal.openModal();
      } else if (status === 'delete') {
        this.tempArticle = { ...article };
        this.$refs.delModal.openDelModal();
      }
    },

    delArticle() {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/product/${this.tempArticle.id}`;

      axios
        .delete(url)
        .then((res) => {
          alert(res.data.message);
          this.$refs.delModal.closeDelModal();
          this.getData();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    createImages() {
      this.tempArticle.imagesUrl = [];
      this.tempArticle.imagesUrl.push('');
    }
  },
  // 區域註冊
  components: {
    // PaginationComponent,
    ArticleModal
    // DelArticleModal
  }
};
</script>