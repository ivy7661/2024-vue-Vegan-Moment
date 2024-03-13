<template>
  <!-- <section class="mb-5 banner" style="height: 380px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-plan fs-3 fs-lg-2">門市資訊</h1>
        </div>
      </div>
    </div>
  </section> -->
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-5">
        <li class="breadcrumb-item"><RouterLink to="/" class="green">首頁</RouterLink></li>
        <li class="breadcrumb-item active">門市資訊</li>
      </ol>
    </nav>
    <section>
      <div class="row justify-content-center my-4 my-lg-17">
        <div class="col-lg-6" data-aos="fade-down">
          <div class="mb-4 mb-lg-0">
            <!-- 地圖 -->
            <GoogleMap
              api-key="AIzaSyBLmNf-TuB_bpae0roR3SSEJy40ssJR5eI"
              style="width: 100%; height: 500px"
              :center="center"
              :zoom="15"
              ref="map"
            >
              <!-- 圖釘 -->
              <!-- <Marker :options="markerOptions"></Marker> -->
            </GoogleMap>
          </div>
        </div>
        <div class="col-lg-4" data-aos="fade-down">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-center text-lg-start">
              <p>台南市東區樂活路 59 號</p>
              <p>訂位 / 06-2345678</p>
              <p>週二 - 週日 / 10:30 am - 20:30 pm</p>
              <p>餐點供應至 20:00 pm</p>
              <p>週一公休</p>
              <p>店內禁帶外食，感謝配合</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// 將Google Map 與 圖釘引入
import { GoogleMap } from 'vue3-google-map';

export default {
  components: { GoogleMap },
  data() {
    return {
      center: {
        // lat:緯度, lng:經度
        lat: 25.12662,
        lng: 121.45747
      },
      markerOptions: {
        position: { lat: 25.12662, lng: 121.45747 }
      }
    };
  },
  mounted() {
    this.addMark();
  },
  methods: {
    addMark() {
      // 在 mounted 鉤子中獲取地圖實例
      // const map = this.$refs.map.$mapObject;
      // 添加標記
      // const marker = new window.google.maps.Marker({
      //   position: { lat: 37.7749, lng: -122.4194 },
      //   map,
      //   title: 'Your Marker Title'
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.google-map {
  width: 600px;
  height: 400px;
}
// .banner {
//   @include banner(
//     'https://storage.googleapis.com/vue-course-api.appspot.com/gracewang/1679671003712.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Nv0XuazW5tpB67B0i%2FVRAowXBN8Oq3XR3StIyAGUzvq6sS0dbxoIjyGbiiZGuYi%2BrANxnXTgtnAEaqnvd4Fqz2Dux4QbV1alaipNs7BFHXit%2BeSeku4uWIpWAVoo8%2BK3o68Tjvdd2W8LPSUDj2HuL%2B5VbG7JY8Q%2B6DM8K5wgciTIHAKOPsOR8nyCvb%2BiCNzz5znKmg%2BLk3d3OStcQ90nV0GRYjY5D2xSggGLQCiFWfM2XAdakdE6T7eKKClozUimLpmeRvQ5S31uX1XwtVzmrXNC2zBNXI7yNN%2Fy%2BBrg6%2BCUhUZaWfyE7Dhyf3ArepX%2F0S8FZPE%2FL142VH6uMruRCg%3D%3D',
//     center,
//     cover
//   );
// }
// .banner-plan {
//   @include banner-plan();
// }
.store {
  background-image: url(@/assets/image/store.png);
  height: 175px;
  width: 100%;
  background-size: cover;
  background-position: center 0px;
}
</style>
