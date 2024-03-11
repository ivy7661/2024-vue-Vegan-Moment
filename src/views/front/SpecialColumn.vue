<template>
  <div class="container```jsx``` d-flex justify-content-center bg-white-2 container-post">
    <div>
      <h2 class="text-primary text-center my-5">好文分享</h2>
      <div class="row mb-5">
        <div class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
          <div class="card border-0">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Images%2Fplate_vegetables.jpg?alt=media&token=7d6adcac-d08a-4e3a-afad-7a2e0fe6b77c"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="text-primary">吃素如何營養均衡</h5>
              <p class="text-black-70">健康知識</p>
              <p class="text-black">
                紅酒、白酒都是葡萄做為原料而製成，根據不同葡萄品種、產區、釀造方法等，有極廣泛的風味......
              </p>
              <p class="text-end">
                <a href=""
                  >繼續閱讀
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FArrows%2Fright_arrow_green.png?alt=media&token=ad11f9f6-32e5-4601-bd7d-d64b312ac282"
                    alt="Slider"
                    class="mb-1"
                    width="25"
                    height="25"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePosts',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
p,
a {
  font-size: 14px;
}
.card {
  background-color: transparent;
  max-width: 416px;
}
.card-img-top {
  border-radius: 24px;
}
.container-post {
  position: relative;
}
.deco {
  position: absolute;
  max-width: 728px;
  max-height: 120px;
  top: -40px;
  left: 0;
}
@media (max-width: 375px) {
  .card {
    max-width: 310px;
  }
  .deco {
    max-width: 300px;
  }
}
</style>
