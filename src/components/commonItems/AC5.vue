<!--  -->
<template>
  <div class="container" id="main">
    <div class="header"></div>
    <swiper ref="eggSwiper" :options="swiperOption" class="eggSwiper">
      <swiper-slide :data-title="swiperData[0].title">
        <div class="imgtype1left">
          <div class="h1T1">
            <div class="h1T3">
              <span class="h1T1T1">AC5MEET</span>
              <span class="h1T1T2"></span>
            </div>
            <span class="h1T2">低调而优雅的外形设计， 和高品质材料的运用， 让AC 5 Meet在传统与现代的会议模式中都游刃有余。</span>
          </div>
          <img :src="swiperData[0].imgsrc" class="slide_img" />
        </div>
      </swiper-slide>

      <swiper-slide :data-title="swiperData[1].title">
        <div class="imgtype1">
          <div class="imgtype1left">
            <div class="h1T1">
              <div class="h1T3" style="color: #000">
                <span class="h1T1T1" style="color: #000">
                  HEALTHYSEATING
                  <br />COMFORT
                </span>
                <span class="h1T1T2" style="color: #000">自由的舒适体验</span>
              </div>
              <span class="h1T2" style="color: #000">
                AC 5 Meet独特的靠背形状， 为使用者提供了高度的活动自由， 同时通过将摇摆机制与减震座椅悬架相结合，
                <br />配合分为三个区域的靠背软垫结构， 让使用者即使久坐依然感受舒适。
              </span>
            </div>
            <img :src="swiperData[1].imgsrc" class="slide_img" />
          </div>
          <div class="imgtype1right">
            <span class="imgtype1rightT1">ANTONIO CITTERIO</span>
            <span class="imgtype1rightT2">2017</span>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide :data-title="swiperData[4].title">
        <div class="imgtype1left">
          <div class="h1T1">
            <div class="h1T3" style="color: #000">
              <span class="h1T1T1" style="color: #000">GRACEFUL</span>
              <span class="h1T1T2" style="color: #000">低调的优雅气质</span>
            </div>
            <span class="h1T2" style="color: #000">
              尽管配备了一系列先进的功能， AC 5 Meet将复杂的机构隐藏于简洁的外表之下，
              <br />以干净的外观线条让空间更显通透精致。
            </span>
            <div class="btmbott">
              <!-- <input type="button" value="走进SAS皇家酒店" @click="tobrand"> -->
            </div>
          </div>
          <img :src="swiperData[4].imgsrc" class="slide_img" />
        </div>
      </swiper-slide>

      <!-- <swiper-slide v-for="(item,index) in swiperData" :key="index" :data-title="item.title"  >
        <img :src="item.imgsrc" class="slide_img" >
     
       
          
      </swiper-slide>-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperData: [
        {
          id: 1,
          title: "AC5",
          imgsrc: "@/../static/imgs/product/chair/Ac5/1.jpg",
        },
        {
          id: 2,
          title: "自由的舒适体验",
          imgsrc: "@/../static/imgs/product/chair/Ac5/2.jpg",
        },
        {
          id: 3,
          title: "",
          imgsrc: "",
        },
        {
          id: 4,
          title: "",
          imgsrc: "",
        },
        {
          id: 5,
          title: "低调的优雅气质",
          imgsrc: "@/../static/imgs/product/chair/Ac5/3.jpg",
        },
      ],
      swiperOption: {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: 1,
        // spaceBetween: 30,
        mousewheel: true,

        on: {
          slideChangeTransitionEnd: function () {
            //    console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            /* 隐藏所有 */
            $(".mpan").hide();
            /* 显示滑到的索引 */
            $("#mybl_active" + this.activeIndex).show();
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          /* 自定义class */
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
          /* 自定义样式 */
          renderBullet: function (index, className) {
            return (
              '<div class="' +
              className +
              '">  <div class="mpan" id="mybl_active' +
              index +
              '" > ' +
              this.slides[index].dataset.title +
              "</div></div>"
            );
          },
        },
      },
    };
  },

  components: {
    swiper,
    swiperSlide,
  },

  computed: {},

  mounted() {
    this.resize();
    $("#main").css("height", $(window).height());
    /* 分页器默认第一个title显示 */
    $("#mybl_active0").show();
  },

  methods: {
    resize() {
      window.onload = () => {
        window.onresize();
      };
      window.onresize = () => {
        $("#main").css("height", $(window).height());
      };
    },
  },
};
</script>
<style lang="scss" scoped>
   @import "@/../static/css/productDetails.scss";  //引入方式
</style>
<style>
.btmbott {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
}

.btmbott input[type="button"] {
  width: 300px;
  height: 50px;
  background: linear-gradient(to right, #1e1f23, #17181c, #121315);
  border: 1px solid #161418;
  color: #fff;
  cursor: pointer;
  outline: none;
}

.imgtype2right img {
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
}
.imgtype2right {
  width: 300px;
  height: 100%;
  display: flex;

  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.imgtype1left {
  position: relative;
  width: 100%;
  height: 100%;
}

.imgtype1rightT1 {
  font-size: 16px;
  color: #000;
  font-weight: bold;
}

.imgtype1rightT2 {
  font-size: 15px;
  color: #000;
  font-weight: bold;
}

.imgtype1right {
  width: 300px;
  height: 100%;
  padding: 80px 10px 10px 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.imgtype1 {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.h1T1 {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 140px;
  left: 180px;
}

.h1T1T1 {
  font-size: 40px;
  color: #fff;
  letter-spacing: 20px;
  font-weight: bold;
}

.h1T3 {
  display: flex;
}

.h1T1T2 {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}

.h1T2 {
  color: #fff;
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
}

.container {
  width: 100%;
  height: 100%;
  background: #2f312c;
}

.eggSwiper {
  width: 100%;
  height: 100%;
}

.eggSwiper .swiper-slide {
  width: 100%;
  height: 100%;
}

.eggSwiper .swiper-pagination {
  left: 30px;
}

.eggSwiper .swiper-pagination .my-bullet {
  width: 2px;
  height: 34px;
  margin: 10px;
  background: #876a64;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.eggSwiper .swiper-pagination .my-bullet-active {
  display: flex;
  background: #84776c;
  width: 4px;
}

.eggSwiper .swiper-pagination .my-bullet-active:nth-child(1) {
  background: #fff !important;
}

.eggSwiper #mybl_active0 {
  color: #fff !important;
}

.eggSwiper .mpan {
  position: absolute;
  width: 200px;
  left: 20px;
  text-align: left;
  display: none;
  color: #84776c;
}

.slide_img {
  width: 100%;
  height: 100%;
}

.header {
}
</style>
