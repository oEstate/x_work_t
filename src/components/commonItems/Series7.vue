<!--  -->
<template>
  <div class="container" id="main">
    <div class="header"></div>
    <swiper ref="seriesSwiper" :options="swiperOption" class="seriesSwiper">
      <swiper-slide :data-title="swiperData[0].title">
        <div class="imgtype1left">

          <div class="h1T1">
            <div class="h1T3"><span class="h1T1T1">SERIES7</span> <span class="h1T1T2">TM</span></div>
            <span class="h1T2">迄今为止Fritz Hansen， 甚至家具史上最畅销的座椅系列。</span>
          </div>
          <img :src="swiperData[0].imgsrc" class="slide_img">
        </div>
      </swiper-slide>

      <swiper-slide :data-title="swiperData[1].title">
        <div class="imgtype1">


          <div class="imgtype1left">

            <div class="h1T1">
              <div class="h1T3">
                <span class="h1T1T1">TIMELESS</span>
                <span class="h1T1T2">永恒经典</span>
              </div>
              <span class="h1T1T1">DESIGN</span>
              <span class="h1T2">拥有标志性的自然流畅线条，与前瞻性的层压制作工艺，<br>Series 7™系列座椅自1955年诞生至今， 始终经典迷人。</span>
            </div>

            <img :src="swiperData[1].imgsrc" class="slide_img">
          </div>
          <div class="imgtype2right">
            <div class="imgtype2righttop">
              <span>ARNE JACOBSEN</span>
              <span>1955</span>
            </div>
            <div></div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide :data-title="swiperData[2].title">
        <div class="imgtype1left">
          <div class="h1T1">
            <div class="h1T3"><span class="h1T1T1">PERFECT</span> <span class="h1T1T2">百搭风尚</span></div>
            <span class="h1T1T1">MATCH</span>
            <span class="h1T2">通过不断更新的丰富色彩与材质选择， Series 7™能够轻</span>
            <span class="h1T2">松融入多种空间风格之中。</span>
          </div>

          <div class="thrtop">
            <swiper :options="topswiper" ref="topswiper" class="topswiper">
              <swiper-slide v-for="(item,index) in swiperDataItem" :key="index">
                <img :src="item.imgsrc" class="slide_img">

              </swiper-slide>
            </swiper>
            <div class="topswiper-pagination fyqbottom" slot="pagination"></div>
          </div>

          <div class="thrbottom">
            <div class="btdiv">
              <div v-for="(item,index) in swiperDataItem" :key="index" class="thrbottomDiv">
                <img :id="'ser'+item.id" :data-id="item.id" :src="item.btimg" class="slide_img"
                  @click="chairclick($event.target.dataset.id)">
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide :data-title="swiperData[3].title">
           <div class="thrbot">
        <swiper :options="botswiper" ref="botswiper" class="botswiper">
          <swiper-slide>
            <div class="h1T1">
              <div class="h1T3"><span class="h1T1T1">ST.CATHERINE'S<br>COLLEGE</span> <span class="h1T1T2">牛津大学圣凯瑟琳学院</span></div>
              <span class="h1T2">Series 7™ 的轻巧明快在牛津大学的庄重典雅中，<br>形成奇妙的和谐统一</span>
               <div class="btmbott">
               <input type="button" value="走进牛津大学圣凯瑟琳学院" @click="tobrand">
               </div>
            </div>
            <img src="@/../static/imgs/product/move/Series7/4.jpg" class="slide_img">
          </swiper-slide>
          <swiper-slide>
            <div class="h1T1">
              <div class="h1T3"><span class="h1T1T1">ST.CATHERINE'S<br>COLLEGE</span> <span class="h1T1T2">牛津大学圣凯瑟琳学院</span></div>
              <span class="h1T2">Series 7™ 的轻巧明快在牛津大学的庄重典雅中，<br>形成奇妙的和谐统一</span>
               <div class="btmbott">
               <input type="button" value="走进牛津大学圣凯瑟琳学院" @click="tobrand">
               </div>
            </div>
            <img src="@/../static/imgs/product/move/Series7/5.jpg" class="slide_img">
          </swiper-slide>
        </swiper>

        <div class="botswiper-pagination botbottom" slot="pagination"></div>
  
          </div>
      </swiper-slide>

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


        swiperDataItem: [{
            id: 0,
            imgsrc: "@/../static/imgs/product/move/Series7/3.jpg",
            btimg: "@/../static/imgs/product/bar/d0.png",
            
            // h1T2: "自由的舒适体验",

          },
          {
            id: 1,
            imgsrc: "@/../static/imgs/product/move/Series7/3.jpg",
            btimg: "@/../static/imgs/product/bar/d1.png",

          },
          {
            id: 2,
            imgsrc: "@/../static/imgs/product/move/Series7/3.jpg",
            btimg: "@/../static/imgs/product/bar/d2.png",

          },
          {
            id: 3,
            imgsrc: "@/../static/imgs/product/move/Series7/3.jpg",
            btimg: "@/../static/imgs/product/bar/d3.png",

          },
          {
            id: 4,
            imgsrc: "@/../static/imgs/product/move/Series7/3.jpg",
            btimg: "@/../static/imgs/product/bar/d4.png",

          },
          {
            id: 5,
            imgsrc: "@/../static/imgs/product/move/Series7/3.jpg",
            btimg: "@/../static/imgs/product/bar/d5.png",

          },
          {
            id: 6,
            imgsrc: "@/../static/imgs/product/move/Series7/3.jpg",
            btimg: "@/../static/imgs/product/bar/d6.png",

          },
          {
            id: 7,
            imgsrc: "@/../static/imgs/product/move/Series7/3.jpg",
            btimg: "@/../static/imgs/product/bar/d7.png",

          }

        ],
        swiperData: [{
            id: 1,
            title: "Series 7™",
            imgsrc: "@/../static/imgs/product/move/Series7/1.jpg",

          },
          {
            id: 2,
            title: "永恒经典",
            imgsrc: "@/../static/imgs/product/move/Series7/2.jpg",
          }, {
            id: 3,
            title: "百搭风尚",
            imgsrc: "@/../static/imgs/product/move/Series7/3.jpg",
          }, {
            id: 4,
            title: "空间案例",
            imgsrc: "@/../static/imgs/product/move/Series7/4.jpg",
          },

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
        topswiper: {
          observer: true,
          observeParents: true,
          disableOnInteraction: false,
          notNextTick: true,
          mousewheel: true,
          //循环
          loop: false,
          //设定初始化时slide的索引
          initialSlide: 0,
          //自动播放
          autoplay: false,
          // autoplay: {
          //     delay: 3000,
          //     stopOnLastSlide: false,
          //     disableOnInteraction: true,
          // },
          // 设置轮播
          effect: 'slide',
          //滑动速度
          speed: 800,
          //滑动方向
          direction: 'horizontal',
          //小手掌抓取滑动
          // grabCursor : true,
          //滑动之后回调函数
          on: {
            slideChangeTransitionEnd: function () {
              // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
          },

          pagination: {
            el: '.fyqbottom',
            clickable: true,
            /* 自定义 */
            bulletActiveClass: 'bot-bullet-active',
          }
        },

        botswiper: {
          observer: true,
          observeParents: true,
          disableOnInteraction: false,
          notNextTick: true,
          mousewheel: true,
          //循环
          loop: false,
          //设定初始化时slide的索引
          initialSlide: 0,
          //自动播放
          autoplay: false,
          // autoplay: {
          //     delay: 3000,
          //     stopOnLastSlide: false,
          //     disableOnInteraction: true,
          // },
          // 设置轮播
          effect: 'slide',
          //滑动速度
          speed: 800,
          //滑动方向
          direction: 'horizontal',
          //小手掌抓取滑动
          // grabCursor : true,
          //滑动之后回调函数
          on: {
            slideChangeTransitionEnd: function () {
              // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
          },

          pagination: {
            el: '.botbottom',
            clickable: true,
            /* 自定义 */
            bulletActiveClass: 'bot-bullet-active',
          }
        },
      };
    },
    watch: {


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

      $("#ser0").attr("src", "@/../static/imgs/product/bar/d0_active.png");
      let that = this;
      this.$refs.topswiper.swiper.on('slideChangeTransitionEnd', function () {
        that.chairclick(this.activeIndex);
      });
    },

    methods: {

      resize() {
        window.onload = () => {
          window.onresize()
        }
        window.onresize = () => {
          $("#main").css("height", $(window).height())
        }
      },
      chairclick(index) {
        this.$refs.topswiper.swiper.slideTo(index)
        for (let i = 0; i < this.swiperDataItem.length; i++) {
          $("#ser" + i).attr("src", "@/../static/imgs/product/bar/d" + i + ".png");
        }
        $("#ser" + index).attr("src", "@/../static/imgs/product/bar/d" + index + "_active.png");

      },





    }
  }

</script>
<style lang="scss" scoped>
   @import "@/../static/css/productDetails.scss";  //引入方式
</style>
<style>
  .bot-bullet-active {
    background: #84351B !important;
    opacity: 1 !important;
  }

  .topswiper-pagination ,.botswiper-pagination{
    position: absolute;
    bottom: 30px;
    left: 49%;
    display: flex;
    justify-content: center;
    z-index: 9999;

  }

  .topswiper-pagination span,.botswiper-pagination span{
    margin: 0 5px;
  }

  .topswiper,
  .seriesSwiper,
  .botswiper {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  .thrtop {
    position: relative;
    height: calc(100% - 200px);
    height: -moz-calc(100% - 200px);
    height: -webkit-calc(100% - 200px);
  }
  .thrbot{
       position: relative;
       height: 100%;
  }
  .btdiv {
    height: 150px;
    display: flex;
    align-items: flex-end;
  }

  .thrbottom {
    min-height: 200px;
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .thrbottomDiv {
    width: 70px;
    margin: 5px 30px;
    cursor: pointer;

  }

  .h1T3 {
    color: #000;
    font-size: 12px;
    margin-top: 10px;
    font-weight: bold;
  }

  .imgtype2righttop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin-top: 80px;
    font-size: 14px;
    font-weight: bold;
  }

  .btmbott {
    margin-top: 40px;
    display: flex;
    flex-direction: row
  }


  .btmbott input[type=button] {
    width: 300px;
    height: 50px;
     background: linear-gradient(to right, #1E1F23, #17181C, #121315);
    border: none;
    color: #fff;
    cursor: pointer;
    outline: none
  }

  .imgtype2right img {
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
  }

  .imgtype2right {
    min-width: 300px;
    height: 100%;
    display: flex;

    background: #fff;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
  }

  .imgtype1left {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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



  .seriesSwiper .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .seriesSwiper .swiper-pagination {
    left: 30px;
  }

  .seriesSwiper .swiper-pagination .my-bullet {
    width: 2px;
    height: 34px;
    margin: 10px;
    background: #876A64;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  .seriesSwiper .swiper-pagination .my-bullet-active {
    display: flex;
    background: #84776C;
    width: 4px;

  }

  .seriesSwiper .swiper-pagination .my-bullet-active:nth-child(1),
  .seriesSwiper .swiper-pagination .my-bullet-active:nth-child(3),
  .seriesSwiper .swiper-pagination .my-bullet-active:nth-child(5),
  .seriesSwiper .swiper-pagination .my-bullet-active:nth-child(6) {
    background: #fff !important;
  }

  .seriesSwiper #mybl_active0,
  .seriesSwiper #mybl_active2,
  .seriesSwiper #mybl_active4,
  .seriesSwiper #mybl_active5 {
    color: #fff !important;
  }

  .seriesSwiper .mpan {
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
