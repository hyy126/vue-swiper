
<template>
  <transition-group
    :name="transitionName"
    tag="ul"
    class="swiperAnimate"
  >
    <slot
      :swiperList="swiperList"
      :activeIndex="activeIndex"
    >
      <li
        v-for="(item,index) in swiperList"
        :key="index"
        v-show="activeIndex == index"
        class="swiper"
      >
        <img :src="item.url"></li>
    </slot>
  </transition-group>
</template>

<script>
export default {
  name: "swiperAnimate",
  props: {
    swiperList: Array,
    interval: {
      default: 5000,
      type: Number
    },
    direction: {
      type: String,
      default: "left"
    },
    customTransformName: String
  },
  data() {
    return { activeIndex: 0 };
  },
  computed: {
    transitionName() {
      return this.customTransformName || `${this.direction}-swiper`;
    }
  },
  methods: {
    initAnimate() {
      let len = this.swiperList.length;
      setInterval(() => {
        this.activeIndex++;
        if (this.activeIndex > len - 1) {
          this.activeIndex = 0;
        }
      }, this.interval);
    }
  },
  mounted() {
    this.initAnimate();
  }
};
</script>
<style>
.left-swiper-enter {
  transform: translateX(100%);
}
.left-swiper-leave-to {
  transform: translateX(-100%);
}

.right-swiper-enter {
  transform: translateX(-100%);
}
.right-swiper-leave-to {
  transform: translateX(100%);
}

.top-swiper-enter {
  transform: translateY(100%);
}
.top-swiper-leave-to {
  transform: translateY(-100%);
}

.bottom-swiper-enter {
  transform: translateY(-100%);
}
.bottom-swiper-leave-to {
  transform: translateY(100%);
}

.top-swiper-enter-active {
  transition: all 1s;
}
.top-swiper-leave-active {
  transition: all 1s;
}
.right-swiper-enter-active {
  transition: all 1s;
}
.right-swiper-leave-active {
  transition: all 1s;
}
.bottom-swiper-enter-active {
  transition: all 1s;
}
.bottom-swiper-leave-active {
  transition: all 1s;
}
.left-swiper-enter-active {
  transition: all 1s;
}
.left-swiper-leave-active {
  transition: all 1s;
}
</style>

<style scoped>
.swiper {
  position: absolute;
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.swiperAnimate {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
