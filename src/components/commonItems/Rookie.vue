<!--  -->
<template>
  <div class="container" id="main">
    <div class="header"></div>
    <swiper ref="eggSwiper" :options="swiperOption" class="eggSwiper">
      <swiper-slide :data-title="swiperData[0].title">
        <div class="imgtype1left">
        <div class="h1T1">
          <div class="h1T3"><span class="h1T1T1">ROOKIE</span> <span class="h1T1T2"></span></div>
          <span class="h1T2">一款小巧灵活的座椅， 提供高水平的即时舒适性和最少的调整次数。</span>
        </div>
        <img :src="swiperData[0].imgsrc" class="slide_img">
        </div>
      </swiper-slide>
      
      <swiper-slide :data-title="swiperData[1].title">
        <div class="imgtype1">
          <div class="imgtype1left">
            <div class="h1T1">
              <div class="h1T3"><span class="h1T1T1">IMMEDIATE COMFORT</span> <span class="h1T1T2">坐下， 开始工作！</span></div>
              <span class="h1T2">在要求快速响应的工作环境中， 你所需要的是不用复杂调节就可舒适使用的座椅。</span>
            </div>
            <img :src="swiperData[1].imgsrc" class="slide_img">
          </div>
          <div class="imgtype1right">
            <span class="imgtype1rightT1">KONSTANTIN GRCIC</span>
            <span class="imgtype1rightT2">2018</span>
          </div>
        </div>
      </swiper-slide>
     
      <swiper-slide :data-title="swiperData[4].title">
       <div class="imgtype1left">
        
        <div class="h1T1">
          <div class="h1T3" style="color: #000"><span class="h1T1T1" style="color: #000">TREND–RESPONDING</span> <span class="h1T1T2" style="color: #000">响应趋势的空间应用</span></div>
          <span class="h1T2" style="color: #000">得益于轻巧的尺寸和极简的功能， Rookie十分适用于项目制工作空间、<br>移动办公空间、 工作室、 图书馆等灵活环境。</span>
           <div class="btmbott">
        <!-- <input type="button" value="走进SAS皇家酒店" @click="tobrand"> -->
        
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
            title: "Rookie",
            imgsrc: "@/../static/imgs/product/chair/Rookie/1.jpg"

          },
          {
            id: 2,
            title: "坐下， 开始工作！",
            imgsrc: "@/../static/imgs/product/chair/Rookie/2.jpg"
          }, {
            id: 3,
            title: "",
            imgsrc: ""
          }, {
            id: 4,
            title: "",
            imgsrc: ""
          }, {
            id: 5,
            title: "响应趋势的空间应用",
            imgsrc: "@/../static/imgs/product/chair/Rookie/3.jpg"
          }
        ],
        swiperOption: {
          observer: true,
          observeParents: true,
          direction: 'vertical',
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
