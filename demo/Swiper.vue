
<template>
  <section class="demo-wrapper">
    <section class="wheel-wrapper-demo">
      <section class="wheel-wrapper-demo-body">
        <swiperAnimate :swiperList="swiperList">
        </swiperAnimate>
      </section>
      <section class="wheel-wrapper-demo-desc">
        <pre><code class="language-html">//传入图片数组swiperList: [{url: require(&quot;../assets/story1.png&quot;)}]
&lt;swiperanimate :swiperList=&quot;swiperList&quot;&gt;;</code></pre>
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
      <section class="wheel-wrapper-demo-desc">
        <pre><code class="language-html">//direction: top right bottom left
&lt;swiperanimate :swiperList=&quot;swiperList&quot; direction=&#39;top&#39;&gt;;</code></pre>
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
      <section class="wheel-wrapper-demo-desc">
        <pre><code class="language-html">&lt;!-- 自定义内容展示方式 customTransformName 其中li v-show v-for 必须与demo相同 --&gt;
&lt;!-- 仅支持vue2.6+以上版本  --&gt;
&lt;swiperAnimate :swiperList=&quot;swiperList&quot; customTransformName=&quot;custom-swiper&quot;&gt;
    &lt;template #default={swiperList,activeIndex}&gt;
        &lt;li v-for=&quot;(item,index) in swiperList&quot; :key=&quot;index&quot; 
        v-show=&quot;activeIndex ===index&quot; class=&quot;z-swiper&quot;&gt;
            &lt;span class=&quot;swiper-span&quot;&gt;img+{{index}}&lt;/span&gt;
            &lt;img :src=&quot;item.url&quot;&gt;
        &lt;/li&gt;
    &lt;/template&gt;
&lt;/swiperAnimate&gt;</code></pre>
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
          url: require("@/assets/story1.png")
        },
        {
          url: require("@/assets/story2.png")
        },
        {
          url: require("@/assets/story3.png")
        },
        {
          url: require("@/assets/story4.png")
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
