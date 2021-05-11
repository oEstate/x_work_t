<!-- 首页 -->
<template>
  <div class="container" id="main">
    <div class="bodycont" id="bodycont0">
      <div class="Dtilte">办公生态筑造者，激活企业生命力</div>
      <div class="Stilte">带着对世界的敏锐角度，坚信原创设计的力量， 我们在陪伴伟大梦想的实现。</div>
      <div class="btmbott">
        <input type="button" value="探索沃科理念" @click="toabout" />
        <input type="button" value="发现更多精彩" @click="tolx" />
      </div>
    </div>
    <div class="bodycont" id="bodycont1">
      <div class="Dtilte" style="color:#FF6666">加速中国制造向中国设计转变</div>
      <div class="Stilte" style="color:#FF6666">让更多优秀设计来源于中国，赋能于世界。</div>
      <div class="btmbott">
        <input type="button" value="伙伴设计理念" @click="tobrand" />
        <input type="button" value="更多原创设计" @click="tobrand" />
      </div>
    </div>
    <div class="bodycont" id="bodycont2">
      <div class="Dtilte blc">空间策略研究，驱动组织效能</div>
      <div class="Stilte blc">打造全景整合的办公生态体验，</div>
      <div class="Stilte blc">让人们与环境的互动简单自然而随心所欲。</div>
      <div class="btmbott">
        <input type="button" value="空间策略解读" style="margin-left:unset" />
      </div>
    </div>

    <swiper ref="mySwiper" :options="swiperOption" class="mySwiper">
      <swiper-slide v-for="(item,index) in swiperData" :key="index" :data-title="item.title">
        <img v-if="index!=(swiperData.length-1)" :src="item.imgsrc" class="slide_img" />
        <swiper v-if="index==(swiperData.length-1)" :options="bottomswiper" class="botmySwiper">
          <swiper-slide class="btoslide">
            <img src="@/../static/imgs/home/hom4.jpg" class="slide_img" />
            <div class="btofirst" style="z-index:99999">
              <div class="Dtilte mEN">FRITZ HANSEN</div>
              <div class="botbtmbott">
                <input
                  type="button"
                  class="mEN"
                  value="近距离接触 FRITZ HANSEN"
                  data-id="FRITZ HANSEN"
                  style=" cursor: pointer;"
                  @click="toFH($event)"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="btoslide">
            <img src="@/../static/imgs/home/Magis.jpg" class="slide_img" />
            <div class="btofirst" style="z-index:99999">
              <div class="Dtilte mEN">Magis</div>
              <div class="botbtmbott">
                <input
                  type="button"
                  class="mEN"
                  value="近距离接触 Magis"
                  data-id="MAGIS"
                  style=" cursor: pointer;"
                  @click="toMagis($event)"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="btoslide">
            <img src="@/../static/imgs/home/Interstuhl.jpg" class="slide_img" />
            <div class="btofirst" style="z-index:99999">
              <div class="Dtilte mEN">Interstuhl</div>
              <div class="botbtmbott">
                <input
                  type="button"
                  class="mEN"
                  value="近距离接触 Interstuhl"
                  data-id="INTERSTUHL"
                  style=" cursor: pointer;"
                  @click="toInterstuhl($event)"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="btoslide">
            <img src="@/../static/imgs/home/Vitra.jpg" class="slide_img" />
            <div class="btofirst" style="z-index:99999">
              <div class="Dtilte mEN">Vitra</div>
              <div class="botbtmbott">
                <input
                  type="button"
                  class="mEN"
                  value="近距离接触 Vitra"
                  data-id="VITRA"
                  style=" cursor: pointer;"
                  @click="toVitra($event)"
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="btoslide">
            <img src="@/../static/imgs/home/Gandia-blasco.jpg" class="slide_img" />
            <div class="btofirst" style="z-index:99999">
              <div class="Dtilte mEN">Gandia Blasco</div>
              <div class="botbtmbott">
                <input
                  type="button"
                  class="mEN"
                  value="近距离接触 Gandia Blasco"
                  data-id="GANDIA BLASCO"
                  style=" cursor: pointer;"
                  @click="toGan($event)"
                />
              </div>
            </div>
          </swiper-slide>

          <div class="swiper-pagination fyqbottom" slot="pagination"></div>
        </swiper>
      </swiper-slide>
      <div class="swiper-pagination leftbar" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperData: [
        {
          id: 1,
          title: "理念",
          imgsrc: "@/../static/imgs/home/hom1.jpg",
        },
        {
          id: 2,
          title: "原创",
          imgsrc: "@/../static/imgs/home/hom2.jpg",
        },
        {
          id: 3,
          title: "洞察",
          imgsrc: "@/../static/imgs/home/hom3.jpg",
        },
        {
          id: 4,
          title: "视野",
          imgsrc: "@/../static/imgs/home/hom4.jpg",
        },
      ],

      swiperOption: {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: 1,
        // spaceBetween: 30,
        mousewheel: true,
        keyboard : true,
        on: {
          slideChangeTransitionEnd: function () {
            // console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
            /* 隐藏所有 */
            $(".mpan").hide();
            /* 显示滑到的索引 */
            $("#mybl_active" + this.activeIndex).show();

            /* 内容显隐 */
            $(".bodycont").animate(
              {
                left: "-100%",
              },
              100
            );
            $("#bodycont" + this.activeIndex).animate(
              {
                left: "10%",
              },
              500
            );
          },
        },
        pagination: {
          el: ".leftbar",
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
      bottomswiper: {
        observer: true,
        observeParents: true,
        disableOnInteraction: false,
        notNextTick: true,
        mousewheel: true,
        keyboard : true,
        //循环
        loop: true,
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
        effect: "slide",
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        // grabCursor : true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function () {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        },

        pagination: {
          el: ".fyqbottom",
          clickable: true,
          /* 自定义 */
          bulletActiveClass: "bot-bullet-active",
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
    this.$store.state.active = -1;
    this.resize();
    $("#main").css("height", $(window).height());
    /* 分页器默认第一个title显示 */
    $("#mybl_active0").show();
    $("#bodycont0").show();
    $("#bodycont0").animate(
      {
        left: "10%",
      },
      500
    );
  },

  methods: {
    toFH(e) {
      this.$router.push({
        path: "/brandsubitem",
        query: { id: e.target.dataset.id },
      });
      this.$store.state.active = 1;
    },
    toMagis(e) {
      this.$router.push({
        path: "/brandsubitem",
        query: { id: e.target.dataset.id },
      });
      this.$store.state.active = 1;
    },
    toInterstuhl(e) {
      this.$router.push({
        path: "/brandsubitem",
        query: { id: e.target.dataset.id },
      });
      this.$store.state.active = 1;
    },
    toVitra(e) {
      this.$router.push({
        path: "/brandsubitem",
        query: { id: e.target.dataset.id },
      });
      this.$store.state.active = 1;
    },
    toGan(e) {
      this.$router.push({
        path: "/brandsubitem",
        query: { id: e.target.dataset.id },
      });
      this.$store.state.active = 1;
    },
    resize() {
      window.onload = () => {
        window.onresize();
      };
      window.onresize = () => {
        $("#main").css("height", $(window).height());
      };
    },
    toabout() {
      this.$router.push({ path: "/about" });
    },
    tolx() {
      this.$router.push({ path: "/liaison" });
    },
    tobrand() {
      this.$router.push({ path: "/brand" });
    },
  },
};
</script>
<style>
.btoslide {
  position: relative;
}

.btofirst {
  position: absolute;
  z-index: 9;
  top: 20%;
  left: 10%;
}

.blc {
  color: #000 !important;
  font-weight: 550 !important;
}

.btmbott {
  margin-top: 20px;
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

.btmbott :last-child {
  margin-left: 40px;
}

.botbtmbott {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

.botbtmbott input[type="button"] {
  width: 250px;
  height: 40px;
  background: linear-gradient(to right, #d19f98, #cf7263);
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
}

.Dtilte {
  color: #fff;
  font-size: 40px;
  font-weight: 500;
}

.Stilte {
  margin-top: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.bodycont {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 25%;
  left: -100%;
  z-index: 7;
}

.container {
  width: 100%;
  height: 100%;
  background: #2f312c;
}

.mySwiper,
.botmySwiper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.swiper-slide {
  width: 100%;
  height: 100%;
}

.swiper-pagination {
  left: 30px;
}

.mySwiper .swiper-pagination .my-bullet {
  width: 2px;
  height: 34px;
  margin: 10px;
  background: #876a64;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.mySwiper .swiper-pagination .my-bullet-active {
  display: flex;
  background: #ffffff;
  width: 4px;
}

.mpan {
  position: absolute;
  width: 200px;
  left: 20px;
  text-align: left;
  display: none;
  color: #fff;
}

.slide_img {
  width: 100%;
  height: 100%;
}

.bot-bullet-active {
  background: #84351b !important;
  opacity: 1 !important;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 640px) {
  .Dtilte {
    font-size: 22px;
    text-align: center;
  }
  .Stilte {
    font-size: 12px;
    text-align: center;
  }
  .btmbott {
    justify-content: center;
    input {
      width: 100px;
      height: 38px;
      font-size: 12px;
    }
  }
  .bodycont {
    width: 90%;
    top: 20%;
    // width: 100%;
    // transform: translateY(-50%);
    box-sizing: border-box;
    padding-right: 10%;
  }
  .swiper-pagination {
    left: 2px;
  }
}
/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
  .swiper-pagination {
    left: 2px;
  }
}
</style>
