<!--  -->
<template>
  <div class="container" id="main">
    <div class="header"></div>
    <swiper ref="eggSwiper" :options="swiperOption" class="eggSwiper">
      <swiper-slide :data-title="swiperData[0].title">
        <div class="imgtype1left">
        
        <div class="h1T1">
          <div class="h1T3"><span class="h1T1T1">HUG</span> <span class="h1T1T2"></span></div>
          <span class="h1T2">一系列包含多种形式及尺寸的高靠背沙发，通过在开放办公区<br>开辟出独立的半私密区域，创造出被安静氛围怀抱的空间。</span>
        </div>
        <img :src="swiperData[0].imgsrc" class="slide_img">
        </div>
      </swiper-slide>
      <swiper-slide :data-title="swiperData[1].title">

        <div class="imgtype1">
          <div class="imgtype1left">
            <div class="h1T1">
              <div class="h1T3"><span class="h1T1T1" style="color:#000">DIVERSE ALTERNATIVE <br>OPTIONS</span> <span class="h1T1T2" style="color:#000">办公桌外的多种选择</span></div>
              <span class="h1T2" style="color:#000">Hug提供了多种尺寸及形式，并可进行灵活组合，搭建起多样化空间。</span>
            </div>
            <img :src="swiperData[1].imgsrc" class="slide_img">
          </div>
          <div class="imgtype1right">
            <span class="imgtype1rightT1">RONGJIE YANG</span>
            <span class="imgtype1rightT2">2018</span>
          </div>
        </div>


      </swiper-slide>
      <swiper-slide :data-title="swiperData[2].title">

        <div class="imgtype1">
          <div class="imgtype2right">
            <img src="@/../static/imgs/product/move/Hug/3.png" alt="">
          </div>
          <div class="imgtype1left">
            <div class="h1T1">
              <div class="h1T3">
                <span class="h1T1T1" style="color:#000">PRIVACY</span>
                <span class="h1T1T2" style="color:#000">办公桌外的恰好私密性</span>
              </div>
              <span class="h1T2" style="color:#000">即使在开放性空间中Hug的高靠背半包围设计也可以在<br>视觉与声学上形成一定分隔，划分出一块临时专属却又<br>不致完全隔绝的半私密空间。</span>
            </div>
            <img :src="swiperData[2].imgsrc" class="slide_img">
          </div>
        </div>
      </swiper-slide>
      
      <swiper-slide :data-title="swiperData[4].title">
       <div class="imgtype1left">
        <div class="h1T1">
          <div class="h1T3"><span class="h1T1T1" style="color:#000">SUPPORTIVE</span> <span class="h1T1T2" style="color:#000">办公桌外的高效支持</span></div>
          <span class="h1T2" style="color:#000">通过将磁吸白班、挂钩、抽屉等多种功能可选配件整合其中，<br>Hug不只是打造出一个空间，更能够在细节处成为高效办公<br>的有力支持。</span>
           <!-- <div class="btmbott">
           <input type="button" value="走进爱茉莉太平洋集团总部" @click="tobrand"> 
      </div> -->
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
            title: "Hug",
            imgsrc: "@/../static/imgs/product/move/Hug/1.jpg"

          },
          {
            id: 2,
            title: "办公桌外的多种选择",
            imgsrc: "@/../static/imgs/product/move/Hug/2.jpg"
          }, {
            id: 3,
            title: "办公桌外的恰好私密性",
            imgsrc: "@/../static/imgs/product/move/Hug/3.jpg"
          }, {
            id: 4,
            title: "",
            imgsrc: ""
          }, {
            id: 5,
            title: "办公桌外的高效支持",
            imgsrc: "@/../static/imgs/product/move/Hug/4.jpg"
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
