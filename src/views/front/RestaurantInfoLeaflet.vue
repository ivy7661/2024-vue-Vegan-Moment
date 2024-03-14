<template>
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
            <div id="map" style="height: 400px"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import L from 'leaflet';

export default {
  components: {},
  data() {
    return {
      openStreetMap: {}
    };
  },
  mounted() {
    this.openStreetMap = L.map('map', {
      center: [25.034228, 121.56441],
      zoom: 18
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 24,
      detectRetina: true
    }).addTo(this.openStreetMap);

    const marker = L.marker([25.034228, 121.56441], {
      draggable: true
    }).addTo(this.openStreetMap);
    marker.bindPopup('<b>Vegan Moment</b><br>蔬食餐廳').addTo(this.openStreetMap).openPopup();
  },
  methods: {}
};
</script>
