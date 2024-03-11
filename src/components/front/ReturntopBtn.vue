<template>
  <div class="back-top hide" title="回頂部"></div>
</template>

<script>
import $ from 'jquery';

export default {
  mounted() {
    this.returnTop();
  },
  methods: {
    returnTop() {
      $(document).ready(() => {
        // 捲軸偵測距離頂部超過 50 才顯示按鈕
        $(window).scroll(() => {
          if ($(window).scrollTop() > 50) {
            if ($('.back-top').hasClass('hide')) {
              $('.back-top').toggleClass('hide');
            }
          } else {
            $('.back-top').addClass('hide');
          }
        });

        // 點擊按鈕回頂部
        $('.back-top').on('click', (event) => {
          $('html, body').animate(
            {
              scrollTop: 0
            },
            300 // 回頂部時間為 300 毫秒
          );
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.back-top {
  z-index: 100;
  position: fixed;
  bottom: 30px;
  right: 10px;
  cursor: pointer;
  opacity: 0.5;
  width: 56px;
  height: 56px;
  background: center no-repeat
    url(https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FArrows%2Farrow_returntop.png?alt=media&token=df7e3219-de37-47a2-8e2b-b0817f3d58a9);
  background-size: 56px 56px;
  border-radius: 12px;
  border: 0;
  box-shadow: 0px 0px 2px;
  transition: all 0.2s linear;
}

.back-top:hover {
  opacity: 0.8;
  box-shadow: 0px 0px 3px;
}

.back-top.hide {
  opacity: 0;
  transform: translateY(150%);
}
</style>
