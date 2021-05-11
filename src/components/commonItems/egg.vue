<!--  -->
<template>
  <div class="container" id="main">
    <div class="header"></div>
    <swiper ref="eggSwiper" :options="swiperOption" class="eggSwiper">
      <swiper-slide :data-title="swiperData[0].title">
        <div class="imgtype1left">
        <div class="h1T1">
          <div class="h1T3"><span class="h1T1T1">EGG</span> <span class="h1T1T2">TM</span></div>
          <span class="h1T2">稳坐隽永不朽之位的丹麦家具设计样本。</span>
        </div>
        <img :src="swiperData[0].imgsrc" class="slide_img">
        </div>
      </swiper-slide>
      <swiper-slide :data-title="swiperData[1].title">
        <div class="imgtype1">
          <div class="imgtype1left">
            <div class="h1T1">
              <div class="h1T3"><span class="h1T1T1" style="color:#000">LAST FOR GENERATIONS</span> <span class="h1T1T2" style="color:#000">经典渊源</span></div>
              <span class="h1T2" style="color:#000">最初专为哥本哈根SAS皇家酒店的大厅及接待区设计，<br>从1958年诞生至今，更出没于荧幕，是设计师家庭和办公洽谈场景之中的常客。</span>
            </div>
            <img :src="swiperData[1].imgsrc" class="slide_img">
          </div>
          <div class="imgtype1right">
            <span class="imgtype1rightT1">ARNE JACOBSEN</span>
            <span class="imgtype1rightT2">1958</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :data-title="swiperData[2].title">
        <div class="imgtype1">
          <div class="imgtype2right">
            <img src="@/../static/imgs/product/move/Egg/3-1.png" alt="">
          </div>
          <div class="imgtype1left">
            <div class="h1T1">
              <div class="h1T3">
                <span class="h1T1T1" style="color:#000">SENSEOFSECURITY</span>
                <span class="h1T1T2" style="color:#000">被拥裹的安全感</span>
              </div>
              <span class="h1T2" style="color:#000">蛋壳般的造型与高密度海绵填充， 让Egg™可以完整而舒适地拥裹身体，<br>并在公共场所开辟出一个不被打扰的空间。</span>
            </div>
            <img :src="swiperData[2].imgsrc" class="slide_img">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :data-title="swiperData[3].title">
         <div class="imgtype1">
          <div class="imgtype1left">
            <div class="h1T1">
              <div class="h1T3">
                <span class="h1T1T1"  >PERFECTCOMFORT</span>
                <span class="h1T1T2"  >完美舒适度</span>
              </div>
              <span class="h1T2"  >拥有符合人体工学的座椅外形的Egg™同时配有可调节倾斜机构，<br>可根据用户体重进行相应调节。</span>
            </div>
            <img :src="swiperData[3].imgsrc" class="slide_img">
          </div>
            <div class="imgtype2right">
            <img src="@/../static/imgs/product/move/Egg/4-1.png" alt="">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :data-title="swiperData[4].title">
       <div class="imgtype1left">
        <div class="h1T1">
          <div class="h1T3"><span class="h1T1T1">SASROYAL</span> <span class="h1T1T2">SAS皇家酒店</span></div>
          <span class="h1T2">Egg™为SAS皇家酒店而生， 与酒店设计浑然一体</span>
           <div class="btmbott">
        <input type="button" value="走进SAS皇家酒店" @click="tobrand">
      </div>
        </div>
         <img :src="swiperData[4].imgsrc" class="slide_img">
        </div>
      </swiper-slide>


      <!-- <swiper-slide v-for="(item,index) in swiperData" :key="index" :data-title="item.title"  >
        <img :src="item.imgsrc" class="slide_img" >
     
       
          
      </swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
  import Vue from 'vue'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'

  export default {
    data() {
      return {
        swiperData: [{
            id: 1,
            title: "Egg™",
            imgsrc: "@/../static/imgs/product/move/Egg/1.jpg"

          },
          {
            id: 2,
            title: "经典渊源",
            imgsrc: "@/../static/imgs/product/move/Egg/2.jpg"
          }, {
            id: 3,
            title: "被拥裹的安全感",
            imgsrc: "@/../static/imgs/product/move/Egg/3.jpg"
          }, {
            id: 4,
            title: "完美舒适度",
            imgsrc: "@/../static/imgs/product/move/Egg/4.jpg"
          }, {
            id: 5,
            title: "空间案例",
            imgsrc: "@/../static/imgs/product/move/Egg/5.jpg"
          }
        ],
        swiperOption: {
          observer: true,
          observeParents: true,
          direction: 'vertical',
          slidesPerView: 1,
          // spaceBetween: 30,
          mousewheel: true,
          keyboard : true,
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
            el: '.swiper-pagination',
            clickable: true,
            /* 自定义class */
            bulletClass: 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
            /* 自定义样式 */
            renderBullet: function (index, className) {
              return '<div class="' + className + '">  <div class="mpan" id="mybl_active' + index + '" > ' + this
                .slides[index].dataset.title + '</div></div>';

            }
          },


        },


      };
    },

    components: {
      swiper,
      swiperSlide
    },

    computed: {},

    mounted() {
      this.resize();
        
          $("#main").css("height", $(window).height())
      /* 分页器默认第一个title显示 */
      $("#mybl_active0").show();


    },

    methods: {
      resize() {
        window.onload = () => {
          window.onresize()
        }
        window.onresize = () => {
          $("#main").css("height", $(window).height())
        }
      }


    }
  }

</script>
<style lang="scss" scoped>
   @import "@/../static/css/productDetails.scss";  //引入方式
</style>
<style>
  .btmbott {
    margin-top: 40px;
    display: flex;
    flex-direction: row
  }


  .btmbott input[type=button] {
    width: 300px;
    height: 50px;
    background: linear-gradient(to right, #1E1F23, #17181C, #121315);
    border: 1px solid #161418;
    color: #fff;
    cursor: pointer;
    outline: none
  }

.imgtype2right img{
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
}
.imgtype2right{
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
    background: #2F312C
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
    background: #876A64;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  .eggSwiper .swiper-pagination .my-bullet-active {
    display: flex;
    background: #84776C;
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
    color: #84776C
  }

  .slide_img {
    width: 100%;
    height: 100%;
  }



  .header {}

</style>
