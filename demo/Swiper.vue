
<template>
  <section class="demo-wrapper">
    <section class="wheel-wrapper-demo">
      <section class="wheel-wrapper-demo-body">
        <swiperAnimate :swiperList="swiperList">
        </swiperAnimate>
      </section>
    </section>
    <section class="wheel-wrapper-demo">
      <section class="wheel-wrapper-demo-body">
        <swiperAnimate
          :swiperList="swiperList"
          direction='top'
        >
        </swiperAnimate>
      </section>
    </section>
    <section class="wheel-wrapper-demo">
      <section class="wheel-wrapper-demo-body">
        <swiperAnimate
          :swiperList="swiperList"
          customTransformName="custom-swiper"
        >
          <template #default={swiperList,activeIndex}>
            <li
              v-for="(item,index) in swiperList"
              :key="index"
              v-show="activeIndex === index"
              class="z-swiper"
            >
              <span class="swiper-span">img+{{index}}</span>
              <img :src="item.url">
            </li>
          </template>
        </swiperAnimate>
      </section>
    </section>
  </section>

</template>

<script>
import swiperAnimate from "@/animations/swiperAnimate";

export default {
  name: "Swiper",
  components: { swiperAnimate },
  data() {
    return {
      swiperList: [
        {
          url: "https://love-story.oss-cn-shanghai.aliyuncs.com/story25.jpg"
        },
        {
          url: "https://love-story.oss-cn-shanghai.aliyuncs.com/story26.jpg"
        },
        {
          url: "https://love-story.oss-cn-shanghai.aliyuncs.com/story27.jpg"
        },
        {
          url: "https://love-story.oss-cn-shanghai.aliyuncs.com/story28.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
.demo-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.wheel-wrapper-demo {
  margin-bottom: 20px;
  display: flex;
  width: 1284px;
  height: 216px;
  overflow: hidden;
}

.wheel-wrapper-demo-body {
  width: 384px;
  overflow: hidden;
}
.wheel-wrapper-demo-desc {
  margin-left: 100px;
  width: 800px;
  overflow: auto;
}

.z-swiper {
  position: absolute;
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
}
.swiper-span {
  color: #fff;
  position: absolute;
  top: 1rem;
  left: 1rem;
}
.custom-swiper-enter {
  transform: translate(100%, 100%);
}
.custom-swiper-leave-to {
  transform: translate(-100%, -100%);
}

.custom-swiper-enter-active,
.custom-swiper-leave-active {
  transition: all 1s;
}
</style>
