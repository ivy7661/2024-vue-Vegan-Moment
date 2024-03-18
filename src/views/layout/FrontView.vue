<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-light-green py-1">
    <div class="container-fluid">
      <RouterLink to="/">
        <img
          src="/images/Logo-Vegan-Moment.png"
          alt="logo"
          class="d-inline-block navbar-logo ms-2"
        />
      </RouterLink>

      <div class="d-flex align-items-center">
        <!-- 手機 cart、member icon-->
        <div class="d-lg-none">
          <!-- <a
            role="button"
            class="navbar-brand position-relative"
            @click.prevent="toggleOffcanvas()"
            aria-controls="offcanvasRight"
          >
            <i class="bi bi-cart3"></i>
            <span
              v-if="cartsTotalNum"
              class="position-absolute start-100 translate-middle badge rounded-pill bg-primary text-white"
              style="top: 6px"
              >{{ cartsTotalNum }}
            </span>
          </a> -->
          <RouterLink to="/adminLogin" class="navbar-brand">
            <i class="bi bi-person-circle fs-1"></i>
          </RouterLink>
        </div>

        <!--漢堡-->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list fs-3" style="font-weight: bold"></i>
        </button>
      </div>
      <!-- navbar 摺疊內容 -->
      <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarText">
        <ul class="navbar-nav mt-2 mt-lg-0">
          <li class="nav-item mb-2 mb-lg-0">
            <RouterLink to="/brandStory" class="nav-link pt-3 mx-2 fs-5 d-inline-block"
              >品牌故事</RouterLink
            >
          </li>
          <li class="nav-item mb-2 mb-lg-0">
            <RouterLink to="/products" class="nav-link d-inline-block fs-5 pt-3 mx-2"
              >線上訂餐</RouterLink
            >
          </li>
          <li class="nav-item mb-2 mb-lg-0">
            <RouterLink to="/specialColumn" class="nav-link fs-5 pt-3 mx-2 d-inline-block"
              >專欄文章</RouterLink
            >
          </li>
          <li class="nav-item mb-2 mb-lg-0">
            <router-link to="/restaurantInfo" class="nav-link fs-5 pt-3 mx-2 d-inline-block"
              >店鋪資訊</router-link
            >
          </li>
        </ul>
      </div>
      <!-- 桌機版 cart、member icon -->
      <div class="d-flex justify-content-lg-end d-none d-lg-block">
        <!-- cart -->
        <div>
          <!-- <a
            role="button"
            class="navbar-brand position-relative"
            @click.prevent="toggleOffcanvas()"
          > -->
          <RouterLink
            class="navbar-brand position-relative"
            to=""
            @click.prevent="toggleOffcanvas()"
          >
            <i class="bi bi-cart3 fs-2 ms-4 me-2"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
            >
              {{ this.carts?.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </RouterLink>
          <!-- <span
              v-if="cartsTotalNum"
              class="position-absolute start-100 translate-middle badge rounded-pill bg-primary text-white"
              style="top: 6px"
              >{{ cartsTotalNum }}
            </span> -->
          <!-- </a> -->
          <RouterLink to="/adminLogin" class="navbar-brand">
            <i class="bi bi-person-circle fs-2"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
  <!-- 購物車內容 -->
  <CartOffcanvas ref="offcanvas"></CartOffcanvas>
  <main class="mainView">
    <RouterView></RouterView>
  </main>
  <Returntop-Btn></Returntop-Btn>
  <section>
    <div class="bg-subscribe">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-4">
            <form
              @submit.prevent="subscribe"
              ref="form"
              class="text-center text-lg-start px-5 px-lg-0"
            >
              <label class="form-label"><h5>訂閱我們的電子報，獲取最新消息！</h5></label>
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="請輸入您的電子信箱"
                  ref="email"
                />
                <button class="btn btn-secondary" type="submit" id="button-addon2">立即訂閱</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-light-green">
    <div class="container">
      <!-- mobile logo -->
      <div class="d-flex justify-content-center d-lg-none">
        <a href="#">
          <img
            src="../../../public/images/Logo-Vegan-Moment.png"
            alt="logo"
            class="mt-3"
            style="width: 120px"
          />
        </a>
      </div>
      <div class="d-lg-flex justify-content-between align-items-center border-bottom">
        <div class="d-flex flex-row mt-0 mt-lg-5">
          <div class="d-none d-lg-block">
            <a href="#">
              <img
                src="/images/Logo-Vegan-Moment.png"
                alt="logo"
                class="mt-3 mt-lg-0 mb-lg-6"
                style="width: 120px"
              />
            </a>
          </div>
          <!-- 選單 -->
          <div
            class="d-flex flex-lg-column justify-content-between align-items-center align-items-lg-start ms-5 mt-2 d-none d-lg-block"
          >
            <ul class="nav">
              <li class="footer-item">
                <a href="#">
                  <RouterLink
                    to="/brandStory"
                    class="footer-link mx-3 fs-6 px-1 mb-3 d-inline-block"
                    >品牌故事</RouterLink
                  >
                </a>
              </li>
            </ul>
            <ul class="nav mb-3">
              <li class="footer-item">
                <a href="#" class="me-4">
                  <RouterLink to="/products" class="footer-link mx-3 fs-6 px-1 d-inline-block"
                    >線上訂餐</RouterLink
                  >
                </a>
              </li>
            </ul>
          </div>
          <!-- 選2 -->
          <div
            class="d-flex flex-lg-column justify-content-between align-items-center align-items-lg-start mt-2 d-none d-lg-block"
          >
            <ul class="nav">
              <li class="footer-item">
                <a href="#">
                  <RouterLink to="/specialColumn" class="footer-link fs-6 px-1 mb-3 d-inline-block"
                    >專欄文章</RouterLink
                  >
                </a>
              </li>
            </ul>
            <ul class="nav mb-3">
              <li class="footer-item">
                <a href="#" class="me-4">
                  <RouterLink to="/restaurantInfo" class="footer-link fs-6 px-1 d-inline-block"
                    >店鋪資訊</RouterLink
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex flex-column">
          <ul class="nav mb-3">
            <li class="nav-item d-none d-lg-block">
              <a href="#" class="me-4">
                <i class="bi bi-instagram fs-4"></i>
              </a>
            </li>
            <li class="nav-item d-none d-lg-block">
              <a href="#" class="me-4">
                <i class="bi bi-facebook fs-4"></i>
              </a>
            </li>
            <li class="nav-item d-none d-lg-block">
              <a href="#">
                <i class="bi bi-youtube fs-4"></i>
              </a>
            </li>
          </ul>
          <ul class="nav flex-column gap-1 gap-lg-2">
            <li class="nav-item">
              <a href="tel:+88662345678">
                <i class="bi bi-telephone fs-6"><span class="px-1"></span>02-1234567</i>
              </a>
            </li>
            <li class="nav-item">
              <a href="mailto:goodvegan@email.com">
                <i class="bi bi-envelope fs-6">
                  <span class="px-1"></span> veganmoment2024@email.com</i
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-lg-flex justify-content-between py-2 py-lg-3 text-gray-600">
        <p class="mb-0 mb-lg-0">Copyright &copy; 2024 Vegan Moment. All Rights Reserved.</p>
        <p class="mb-0">本作品僅為專題使用，非從事商業用途</p>
      </div>
    </div>
  </footer>
</template>

<script>
import CartOffcanvas from '@/components/front/CartOffcanvas.vue';
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cartStore';
import ReturntopBtn from '../../components/front/ReturntopBtn.vue';
import Alert from '@/mixins/swal.js';

export default {
  data() {
    return {};
  },
  components: {
    CartOffcanvas,
    ReturntopBtn
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  mounted() {
    this.getCart();
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    toggleOffcanvas() {
      this.$refs.offcanvas.toggleTheOffcanvas();
    },
    subscribe() {
      Alert.toastTop('訂閱成功!', 'success');
      this.$refs.email.value = '';
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 1021;
}
.mainView {
  min-height: calc(100vh - 311px);
}
i {
  color: #698f39;
}
.navbar-logo {
  width: 110px;
  @include mobile() {
    width: 90px;
  }
}
.nav-item .nav-link {
  font-weight: 400;
  border-bottom: 4px solid transparent;
}
.nav-item .nav-link:focus {
  color: #698f39;
  border-bottom: 4px solid #698f39;
}
.nav-item .router-link-exact-active {
  color: #698f39;
  border-bottom: 4px solid #698f39;
}
.footer-item .footer-link {
  color: #698f39;
  border-left: 4px solid #698f39;
}

.bg-subscribe {
  background-image: url('https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Background%2Frose_wood.jpg?alt=media&token=c37ba829-f5c3-4e96-a6eb-1ce2cc400445');
  background-position: 20% 70%;
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-attachment: fixed;
  // @include mobile() {
  //   background-image: url('@/assets/image/bg-subscribe.jpg');
  //   background-position: center;
  //   background-attachment: fixed;
  // }
}
// .subscribe {
//   height: 150px;
// }
</style>
