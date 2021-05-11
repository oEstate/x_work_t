<!--  -->
<template>
  <div class="container" id="main">
    <div class="header"></div>
    <swiper ref="eggSwiper" :options="swiperOption" class="eggSwiper">
      <swiper-slide :data-title="swiperData[0].title">
        <div class="imgtype1left">
        
        <div class="h1T1">
          <div class="h1T3"><span class="h1T1T1" style="color:#000">FUNGUS</span> <span class="h1T1T2"></span></div>
          <span class="h1T2" style="color:#000">外形圆润可爱， Fungus为动态灵活的办公方式提供支持。</span>
        </div>
        <img :src="swiperData[0].imgsrc" class="slide_img">
        </div>
      </swiper-slide>
      <swiper-slide :data-title="swiperData[1].title">

        <div class="imgtype1">
          <div class="imgtype1left">
            <div class="h1T1">
              <div class="h1T3"><span class="h1T1T1">ROCKINGBASE</span> <span class="h1T1T2">摇摆更舒适</span></div>
              <span class="h1T2">椅座部分轻巧有趣的结构让使用者如同坐在一个球上，<br>尽情摇摆， 保持身体活跃， 同时会在就座时吸收震荡， 带来舒适的就坐体验。</span>
            </div>
            <img :src="swiperData[1].imgsrc" class="slide_img">
          </div>
          <div class="imgtype1right">
            <span class="imgtype1rightT1">CLAUDIO BELLINI</span>
            <span class="imgtype1rightT2">2017</span>
          </div>
        </div>


      </swiper-slide>
      <swiper-slide :data-title="swiperData[2].title">

        <div class="imgtype1">
          <div class="imgtype2right">
            <img src="@/../static/imgs/product/move/Fungus/3-1.png" alt="">
          </div>
          <div class="imgtype1left">
            <div class="h1T1">
              <div class="h1T3">
                <span class="h1T1T1" style="color:#000">MOBILITY</span>
                <span class="h1T1T2" style="color:#000">移动设计 尽享灵动</span>
              </div>
              <span class="h1T2" style="color:#000">可360°旋转的椅座部分搭配脚轮底座， 协作中可随心转换方向与位置。<br>配以易握的移动手柄， 更能轻松移动Fungus， 满足空间需求。</span>
            </div>
            <img :src="swiperData[2].imgsrc" class="slide_img">
          </div>
        </div>
      </swiper-slide>
      
      <swiper-slide :data-title="swiperData[4].title">
       <div class="imgtype1left">
        <div class="h1T1">
          <div class="h1T3"><span class="h1T1T1" style="color:#000">COLOFUL</span> <span class="h1T1T2" style="color:#000">点睛色彩</span></div>
          <span class="h1T2" style="color:#000">明快的坐垫色彩选择让空间亮起来。</span>
           <div class="btmbott">
           <!-- <input type="button" value="走进爱茉莉太平洋集团总部" @click="tobrand">  -->
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
            title: "Fungus",
            imgsrc: "@/../static/imgs/product/move/Fungus/1.jpg"

          },
          {
            id: 2,
            title: "摇摆更舒适",
            imgsrc: "@/../static/imgs/product/move/Fungus/2.jpg"
          }, {
            id: 3,
            title: "百搭风尚",
            imgsrc: "@/../static/imgs/product/move/Fungus/3.jpg"
          }, {
            id: 4,
            title: "",
            imgsrc: ""
          }, {
            id: 5,
            title: "点睛色彩",
            imgsrc: "@/../static/imgs/product/move/Fungus/4.jpg"
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
