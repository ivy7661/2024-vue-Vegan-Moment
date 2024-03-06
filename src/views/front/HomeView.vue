<template>
  <section>
    <div
      class="home-banner d-flex flex-column justify-content-center align-items-center px-6 px-lg-0"
    >
      <div
        class="d-flex flex-column justify-content-center align-items-center mt-8"
        data-aos="fade-up"
      >
        <h1 class="fs-3 fs-lg-1 fw-lg-bold text-center mb-4">創新料理，源自對美味的堅持</h1>
        <h3 class="fs-5 fs-lg-3 text-center text-gray-600 mb-3 mb-lg-8">
          享受餐桌上的美好時光，就在Vegan Moment
        </h3>
        <router-link to="/products" class="btn btn-secondary fs-5 px-5 py-3 px-lg-6"
          >立即訂餐</router-link
        >
      </div>
    </div>
  </section>
  <!-- 關於我們 -->
  <section class="py-6">
    <div class="container">
      <div class="d-flex flex-column justify-content-center text-center">
        <div data-aos="fade-up">
          <h2>新鮮、創意、專業</h2>
          <h5 class="text-primary mb-5">ABOUT VEGAN MOMENT</h5>
        </div>
        <div data-aos="fade-up">
          <h5 class="mb-4">堅持品質、用心烹飪的歐式蔬食早午餐</h5>
          <p class="mx-auto">
            2023年創立的Vegan Moment，以新鮮、當季的食材為基礎，確保每一道菜餚都充滿豐富的風味和營養
          </p>
          <p class="mx-auto">每天的清晨與午間時刻，為重視用餐品質的顧客，提供美味、健康的餐點</p>
        </div>
      </div>
    </div>
  </section>
  <!-- 熱門餐點 -->
  <section class="py-8">
    <div class="text-center">
      <h2 class="fs-3 fs-lg-2 fw-lg-bold mb-5">
        <i class="bi bi-feather text-primary"></i>
        熱門餐點
      </h2>
    </div>
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-sm-10">
          <Swiper-Meal></Swiper-Meal>
        </div>
      </div>
    </div>
    <div class="text-center">
      <a href="#/products" class="btn btn-secondary fs-lg-5 px-5 py-3 px-lg-6">更多餐點</a>
    </div>
  </section>
</template>

<script>
import SwiperMeal from '../../components/front/SwiperMeal.vue';

export default {
  components: {
    SwiperMeal
  }
};
</script>

<style scoped>
.home-banner {
  height: 480px;
  background-image: url(../../../public/images/bg-banner.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
