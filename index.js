let VueSwiper = require("./src/swiperAnimate.vue");

VueSwiper = VueSwiper.default || VueSwiper;

const swiper = {
  swiper: VueSwiper,
  install: Vue => {
    Vue.component(VueSwiper.name, VueSwiper);
  }
};

module.exports = swiper;
