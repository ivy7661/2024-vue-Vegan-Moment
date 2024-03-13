<template>
  <!-- <VueLoading v-model:active="isLoading" /> -->
  <div class="container mt-20">
    <div class="pt-4 pt-lg-8 pb-10 pb-lg-20">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-5 lh-lg">
          <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
          <li class="breadcrumb-item"><RouterLink to="/specialColumn">專欄文章</RouterLink></li>
          <li v-if="!filterKeywords.length && !filterTags.length" class="breadcrumb-item active">
            {{ article.title }}
          </li>
          <li v-else-if="filterKeywords.length" class="breadcrumb-item active">搜尋結果</li>
          <li
            v-else-if="filterTags.length"
            class="breadcrumb-item active d-flex align-items-center"
          >
            <span class="material-icons fs-5"> local_offer </span>{{ breadcrumbTag }}
          </li>
        </ol>
      </nav>
      <div class="row text-dark gy-8">
        <template v-if="!filterKeywords.length && !filterTags.length">
          <div class="col-lg-8">
            <article>
              <h1 class="h3">{{ article.title }}</h1>
              <ul class="list-inline my-3 d-flex align-items-center flex-wrap lh-lg">
                <li class="list-inline-item">
                  <div class="d-flex align-items-center">
                    <span class="material-icons fs-5"> person </span>{{ article.author }}
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="d-flex align-items-center">
                    <span class="material-icons fs-5"> today </span
                    >{{ $filters.date(article.create_at) }}
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="d-flex align-items-center flex-wrap">
                    <span
                      v-for="tag in article.tag"
                      :key="tag"
                      class="d-flex align-items-center me-2 flex-shrink-0 text-gray-600"
                      ><span class="material-icons fs-6 text-gray-600"> local_offer </span
                      >{{ tag }}</span
                    >
                  </div>
                </li>
              </ul>
              <img :src="article.image" :alt="article.title" class="img-fluid mb-5" />
              <div v-html="article.description"></div>
            </article>
            <hr class="my-3 my-lg-4" />
            <div class="row justify-content-between">
              <div
                class="col-6"
                :class="{
                  'border-end': currentIndex !== 0 && currentIndex !== articles.length - 1
                }"
              >
                <RouterLink
                  :to="`/specialColumn/${articles[currentIndex - 1].id}`"
                  class="d-flex align-items-center"
                  v-if="articles[currentIndex - 1]"
                >
                  <span class="material-icons me-2"> arrow_back_ios_new </span>
                  <div>
                    上一篇：<br />
                    {{ articles[currentIndex - 1].title }}
                  </div>
                </RouterLink>
              </div>
              <div class="col-6" v-if="articles[currentIndex + 1]">
                <RouterLink
                  :to="`/specialColumn/${articles[currentIndex + 1].id}`"
                  class="d-flex align-items-center justify-content-end"
                >
                  <div class="text-end">
                    下一篇：<br />
                    {{ articles[currentIndex + 1].title }}
                  </div>
                  <span class="material-icons ms-2"> arrow_forward_ios </span>
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
        <!-- 關鍵字搜尋結果 -->
        <template v-else-if="filterKeywords.length">
          <div class="col-lg-8">
            <div class="row row-cols-1 row-cols-md-2 gy-8 g-lg-10">
              <div v-for="article in filterKeywords" :key="article.id" class="col">
                <div class="card border-0 bg-white-2">
                  <img :src="article.image" class="card-img-top mw-100" alt="" />
                  <div class="card-body">
                    <h5 class="text-primary mb-2">{{ article.title }}</h5>
                    <div class="d-flex flex-row">
                      <p class="me-2" v-for="aTag in article.tag" :key="aTag">
                        <span class="material-icons fs-6 me-1 text-gray-600"> sell </span>
                        <span class="text-gray-600 fs-6 me-1">
                          {{ aTag }}
                        </span>
                      </p>
                    </div>
                    <p class="text-black shortContent">
                      {{ article.description }}
                    </p>
                    <p class="text-end">
                      <router-link :to="`/specialColumn/${article.id}`"
                        >繼續閱讀
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FArrows%2Fright_arrow_green.png?alt=media&token=ad11f9f6-32e5-4601-bd7d-d64b312ac282"
                          alt="Slider"
                          class="mb-1"
                          width="25"
                          height="25"
                        />
                      </router-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- 以tag搜尋 -->
        <template v-else-if="filterTags.length">
          <div class="col-lg-8">
            <div class="row row-cols-1 row-cols-md-2 gy-8 g-lg-10">
              <div v-for="article in filterTags" :key="article.id" class="col">
                <div class="card border-0 bg-white-2">
                  <img :src="article.image" class="card-img-top mw-100" alt="" />
                  <div class="card-body">
                    <h5 class="text-primary mb-2">{{ article.title }}</h5>
                    <div class="d-flex flex-row">
                      <p class="me-2" v-for="aTag in article.tag" :key="aTag">
                        <span class="material-icons fs-6 me-1 text-gray-600"> sell </span>
                        <span class="text-gray-600 fs-6 me-1">
                          {{ aTag }}
                        </span>
                      </p>
                    </div>
                    <p class="text-black shortContent">
                      {{ article.description }}
                    </p>
                    <p class="text-end">
                      <router-link :to="`/specialColumn/${article.id}`"
                        >繼續閱讀
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FArrows%2Fright_arrow_green.png?alt=media&token=ad11f9f6-32e5-4601-bd7d-d64b312ac282"
                          alt="Slider"
                          class="mb-1"
                          width="25"
                          height="25"
                        />
                      </router-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- search、tag、最新文章 -->
        <div class="col-lg-3 offset-lg-1">
          <!-- search -->
          <v-form
            v-slot="{ errors }"
            @submit="searchKeywords"
            ref="form"
            class="mb-5 mb-lg-10 position-relative"
          >
            <label for="search" class="form-label mb-2"><h5>搜尋</h5></label>
            <div class="input-group mb-3">
              <v-field
                name="關鍵字"
                :class="{ 'is-invalid': errors['關鍵字'] }"
                rules="required"
                id="search"
                type="text"
                class="form-control"
                v-model.trim="searchInput"
                placeholder="請輸入關鍵字"
              ></v-field>
              <button
                type="submit"
                class="btn btn-secondary d-flex align-items-center"
                :disabled="errors['關鍵字']"
              >
                <span class="material-icons"> search </span>
              </button>

              <error-message name="關鍵字" class="invalid-feedback"></error-message>
            </div>
            <p class="text-danger text-center">{{ noResultMessage }}</p>
          </v-form>
          <!-- tag -->
          <h5 class="mb-2 mb-lg-4">Tags</h5>
          <div class="d-flex flex-wrap align-items-center ps-2 ps-lg-0 mb-5 mb-lg-10">
            <template v-for="tag in allTags" :key="tag">
              <a
                href="#"
                @click.prevent="searchTag(tag)"
                class="d-flex align-items-center me-2 mb-2 text-dark tag-hover"
                ><span class="material-icons fs-5"> local_offer </span>{{ tag }}</a
              >
            </template>
          </div>
          <h5 class="mb-2 mb-lg-4">最新文章</h5>
          <template v-for="(article, key) in articles" :key="article.id">
            <template v-if="key < 3">
              <RouterLink :to="`/specialColumn/${article.id}`">
                <p class="mb-2 py-2 border-bottom">{{ article.title }}</p>
              </RouterLink>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import articleStore from '../../stores/articleStore.js';
import { mapState, mapActions } from 'pinia';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      article: '',
      isLoading: false,
      currentIndex: 0,
      searchInput: '',
      filterKeywords: [],
      filterTags: [],
      allTags: ['蔬食主義', '健康知識', '環保議題'],
      breadcrumbTag: '',
      noResultMessage: ''
    };
  },
  mounted() {
    this.getArticles();
    this.getArticle();
  },
  methods: {
    ...mapActions(articleStore, ['getArticles']),
    getArticle() {
      const { id } = this.$route.params;
      // this.isLoading = true;
      axios
        .get(`${VITE_API_URL}/api/${VITE_API_PATH}/article/${id}`)
        .then((res) => {
          console.log(this.article);
          // this.isLoading = false;
          this.article = res.data.article;
          this.findIndex();
          this.filterKeywords = [];
          this.filterTags = [];
          // this.$refs.form.resetForm();
        })
        .catch((err) => {
          alert(err.response.data.message);
          // Toast.fire({
          //   icon: 'error',
          //   title: err.response.data.message,
          //   width: 250
          // });
        });
    },
    findIndex() {
      this.currentIndex = this.articles.findIndex((item) => item.id === this.article.id);
    },
    searchKeywords() {
      // 回傳 article陣列
      this.filterKeywords = this.articles.filter((article) =>
        article.title.match(this.searchInput)
      );
      this.$route.params.id = '';
      this.noResultMessage = '';
      if (!this.filterKeywords.length) {
        this.noResultMessage = '無相關搜尋結果！';
      }
      this.$refs.form.resetForm();
    },
    searchTag(tag) {
      this.filterTags = this.articles.filter((article) => article.tag.includes(tag));
      console.log(this.filterTags);

      this.breadcrumbTag = tag;
      this.$route.params.id = '';
      this.noResultMessage = '';
      // this.$refs.form.resetForm();
    }
  },
  computed: {
    ...mapState(articleStore, ['articles'])
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler() {
        if (this.$route.params.id) {
          this.getArticle();
          this.noResultMessage = '';
        }
      }
    },
    noResultMessage() {
      return this.noResultMessage;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: transparent;
  max-width: 350px;
  height: 500px;
  border-radius: 24px;
}
.card-img-top {
  display: block;
  border-radius: 24px;
  max-height: 240px;
}
.shortContent {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
// .line-clamp {
//   @include line-clamp(2);
// }
.tag-hover:hover {
  color: #4f8147 !important;
}
</style>
