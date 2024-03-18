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
    <nav>
      <ol class="breadcrumb mb-1 mt-3">
        <li class="breadcrumb-item"><RouterLink to="/" class="fs-6">首頁</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="" class="text-dark fs-6">店鋪資訊</RouterLink>
        </li>
      </ol>
    </nav>
    <section>
      <div class="row justify-content-center my-4 my-lg-8">
        <div class="col-lg-7" data-aos="fade-down">
          <div class="mb-4 mb-lg-0">
            <!-- 地圖 -->
            <GoogleMap :api-key="mapKey" class="google-map" :center="position" :zoom="15" ref="map">
              <!-- 圖釘 -->
              <CustomMarker :options="{ position: position }" :clickable="true">
                <InfoWindow :opened="true">
                  <div>Vegan Moment<MyComponent /></div>
                </InfoWindow>
              </CustomMarker>
            </GoogleMap>
          </div>
        </div>
        <div class="col-lg-4 ms-lg-4" data-aos="fade-up">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="wrap-info">
              <div class="text-center text-lg-start">
                <h6>地址：</h6>
                <p>台北市信義區信義路五段7號102樓</p>
                <h6>電話：</h6>
                <p>(02)234-5678</p>
                <h6>營業時間：</h6>
                <p>週二～週日 7:00~14:00</p>
                <h6>訂位資訊：</h6>
              </div>
              <div>
                <ol class="text-start">
                  <li>訂位保留10分鐘。</li>
                  <li>可提前1個月訂位，如10/1起可訂10/1~11/30的位子。</li>
                  <li>
                    為寵物友善餐廳，我們歡迎您攜帶寵物一起來用餐，煩請您可在訂位時先行告知會攜帶寵物，我們將可提前為您安排舒適位置
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { GoogleMap, Marker as CustomMarker, InfoWindow } from 'vue3-google-map';

export default {
  components: { GoogleMap, CustomMarker, InfoWindow },
  data() {
    return {
      position: { lat: 25.03422872192988, lng: 121.56441014790107 }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.google-map {
  width: 100%;
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
// .store {
//   background-image: url(@/assets/image/store.png);
//   height: 175px;
//   width: 100%;
//   background-size: cover;
//   background-position: center 0px;
// }
</style>
