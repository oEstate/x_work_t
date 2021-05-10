<!--  -->
<template>
  <div class="conte">
    <!-- pc、pad公用导航 -->
    <div class="header" id="HDR">
      <div class="headerMenu">
        <div
          class="mainMenu"
          :style="'color:'+(item.id== $store.state.active?logobg:'')"
          @click="chenge(item)"
          v-for="item in menus"
          :key="item.id"
        >{{item.label}}</div>
      </div>
      <img :src="logoimg" class="header_img" @click="tohome" />
      <div class="search">
        <img src="@/../static/imgs/home/China-Flag.png" class="Chinaflag" />
        <img
          src="@/../static/imgs/home/search.png"
          class="searchIcon"
          @click="searchIcon"
          v-show="isSearch"
        />
        <div class="close" @click="close" v-show="isClose"></div>
      </div>
    </div>
    <!-- 手机导航 -->
    <div class="phone_header header" id="HDR1">
      <img @click="openNav" class="nav_icon" src="@/../static/imgs/home/actionBar.png" alt="">
      <img :src="logoimg" class="header_img" @click="tohome" />
      <div class="search">
        <img src="@/../static/imgs/home/China-Flag.png" class="Chinaflag" />
        <img
          src="@/../static/imgs/home/search.png"
          class="searchIcon"
          @click="searchIcon"
          v-show="isSearch"
        />
        <div class="close" @click="close" v-show="isClose"></div>
      </div>
    </div>
    <div class="searchbody" ref="floatview">
      <div class="seeacont" v-if="isSeeacont">
        <div style=" display: flex; flex-direction: column;margin-top:60px">
          <div class="search_box">
            <input type="text" v-model="seavalue" class="seeacont_input" placeholder="请输入关键词" />
            <span class="ms" @click="search">搜索</span>
          </div>
          <div class="search_key_box" style=" display: flex; flex-direction: column;">
            <span class="hfl">您可能感兴趣的内容:</span>
            <span class="hfb">原创设计力量</span>
            <span class="hfb">空间策略研究</span>
            <span class="hfb">本木研几 BOOM</span>
          </div>
        </div>
      </div>
      <div class="seeacont" v-if="isProduct">
        <div class="subproduct">
          <div class="subproductitem">
            <div class="Divtitle">
              <span class="Divtitlea mEN" data-id="product" @click="topro($event)">座椅 SEATING</span>
              <span class="Divtitleflag">&nbsp; 27</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="product"
                data-index="C1"
                @click="topro($event)"
              >工作座椅 TASK CHAIR</span>
              <span class="Divtitleflag">
                &nbsp;
                10
              </span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="product"
                data-index="C2"
                @click="topro($event)"
              >行政座椅 EXECUTIVE CHAIR</span>
              <span class="Divtitleflag">&nbsp; 6</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="product"
                data-index="C3"
                @click="topro($event)"
              >会议座椅 CONFEERENCE CHAIR</span>
              <span class="Divtitleflag">&nbsp; 6</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="product"
                data-index="C4"
                @click="topro($event)"
              >培训座椅 TRAINING CHAIR</span>
              <span class="Divtitleflag">
                &nbsp;
                5
              </span>
            </div>
          </div>

          <div class="subproductitem">
            <div class="Divtitle">
              <span
                class="Divtitlea mEN"
                data-id="pmove"
                @click="topro($event)"
              >活动家具 LOOSE FURNITURE</span>
              <span class="Divtitleflag">&nbsp; 41</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="pmove"
                data-index="A7"
                @click="topro($event)"
              >休闲椅 CHAIR</span>
              <span class="Divtitleflag">&nbsp; 8</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="pmove"
                data-index="A6"
                @click="topro($event)"
              >沙发椅 LOUNGE</span>
              <span class="Divtitleflag">
                &nbsp;
                10
              </span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="pmove"
                data-index="A4"
                @click="topro($event)"
              >墩子 POUF</span>
              <span class="Divtitleflag">&nbsp; 2</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="pmove"
                data-index="A5"
                @click="topro($event)"
              >沙发 SOFA</span>
              <span class="Divtitleflag">&nbsp; 10</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="pmove"
                data-index="A1"
                @click="topro($event)"
              >矮凳 STOOL</span>
              <span class="Divtitleflag">&nbsp; 2</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="pmove"
                data-index="A2"
                @click="topro($event)"
              >吧椅 BARSTOOL</span>
              <span class="Divtitleflag">
                &nbsp;
                4
              </span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="pmove"
                data-index="A3"
                @click="topro($event)"
              >边桌与茶几 SIDE & OCCASIONAL</span>
              <span class="Divtitleflag">&nbsp; 5</span>
            </div>
          </div>

          <div class="subproductitem">
            <div class="Divtitle">
              <span class="Divtitlea mEN" data-id="pdesk" @click="topro($event)">桌 DESK</span>
              <span class="Divtitleflag">&nbsp; 11</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="pdesk"
                data-index="C1"
                @click="topro($event)"
              >会议桌 CONFERENCE DESK</span>
              <span class="Divtitleflag">
                &nbsp;
                8
              </span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="pdesk"
                data-index="C2"
                @click="topro($event)"
              >行政桌 EXECUTIVEE DESK</span>
              <span class="Divtitleflag">
                &nbsp;
                3
              </span>
            </div>
            <br />
            <div class="Divtitle">
              <span class="Divtitlea mEN" data-id="pos" @click="topro($event)">办公系统 OFFICE SYSTEM</span>
              <span class="Divtitleflag">&nbsp; 5</span>
            </div>
            <div class="mDivtitle">
              <span class="Divtitleb mEN" data-id="pos" @click="topro($event)">办公系统 OFFICE SYSTEM</span>
              <span class="Divtitleflag">
                &nbsp;
                5
              </span>
            </div>
          </div>

          <div class="subproductitem sub_item">
            <!-- <div class="Divtitle"><span class="Divtitlea" data-id="pos" @click="topro($event)">办公系统 OFFICE SYSTEM </span>
              <span class="Divtitleflag">&nbsp; 5</span> </div>
            <div class="mDivtitle"><span class="Divtitleb">办公系统 OFFICE SYSTEM </span> <span class="Divtitleflag">&nbsp;
                5</span> </div> 
            <br>-->
            <div class="Divtitle">
              <span class="Divtitlea mEN" data-id="pstore" @click="topro($event)">存储 STORAGE</span>
              <span class="Divtitleflag">&nbsp; 4</span>
            </div>
            <div class="mDivtitle">
              <span class="Divtitleb mEN" data-id="pstore" @click="topro($event)">存储 STORAGE</span>
              <span class="Divtitleflag">&nbsp; 4</span>
            </div>
            <br />
            <div class="Divtitle">
              <span
                class="Divtitlea mEN"
                data-id="pspace"
                @click="topro($event)"
              >空间分隔家具 SPACE DIVISION</span>
              <span class="Divtitleflag">&nbsp; 4</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="pspace"
                @click="topro($event)"
              >空间分隔 SPACE DIVISION</span>
              <span class="Divtitleflag">
                &nbsp;
                4
              </span>
            </div>
          </div>
          <div class="subproductitem sub_item">
            <div class="Divtitle">
              <span class="Divtitlea mEN" data-id="poutdoor" @click="topro($event)">户外 OUTDOOR</span>
              <span class="Divtitleflag">&nbsp; 6</span>
            </div>
            <div class="mDivtitle">
              <span class="Divtitleb mEN" data-id="poutdoor" @click="topro($event)">户外 OUTDOOR</span>
              <span class="Divtitleflag">&nbsp; 6</span>
            </div>
            <br />
            <div class="Divtitle">
              <span class="Divtitlea mEN" data-id="psoft" @click="topro($event)">软装配饰 DECORATION</span>
              <span class="Divtitleflag">&nbsp; 4</span>
            </div>
            <div class="mDivtitle">
              <span class="Divtitleb mEN" data-id="psoft" @click="topro($event)">地毯配饰 RUG</span>
              <span class="Divtitleflag">&nbsp; 4</span>
            </div>
          </div>
          <div class="subproductitem sub_item">
            <div class="Divtitle">
              <span class="Divtitlea mEN" data-id="ss" @click="topro($event)">科技 TECHNOLOGY</span>
              <span class="Divtitleflag">&nbsp; 0</span>
            </div>
            <br />
            <div class="Divtitle">
              <span class="Divtitlea mEN" data-id="peducation" @click="topro($event)">教育 EDUCATION</span>
              <span class="Divtitleflag">&nbsp; 17</span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitleb mEN"
                data-id="peducation"
                data-index="C1"
                @click="topro($event)"
              >课桌椅 CLASSROOM</span>
              <span class="Divtitleflag">
                &nbsp;
                4
              </span>
            </div>
            <div class="mDivtitle">
              <span
                class="Divtitlea mEN"
                data-id="peducation"
                data-index="C2"
                @click="topro($event)"
              >休闲 LOUNGE</span>
              <span class="Divtitleflag">&nbsp; 13</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 一级导航弹出窗 -->
    <van-popup id="pop1" v-model="show" closeable position="top" >
      <div class="headerMenu">
        <div
          class="mainMenu"
          :style="'color:'+(item.id== $store.state.active? '#ccc':'')"
          @click="phoneChenge(item)"
          v-for="item in menus"
          :key="item.id"
        >{{item.label}}</div>
      </div>
    </van-popup>
    <!-- 二级导航弹窗 -->
    <twoLevNav v-show="showTwo" v-on:receiveClose="receiveClose"></twoLevNav>
  </div>
</template>

<script>
import twoLevNav from '@/components/common/twoLevNav'
export default {
  data() {
    return {
      logoimg: "@/../static/imgs/home/logo1.png",
      logobg: "#fff",
      isProduct: false,
      isSearch: true,
      isClose: false,
      isSeeacont: false,
      seavalue: "",
      menus: [
        {
          id: 1,
          label: "品牌",
        },
        {
          id: 2,
          label: "产品",
        },
        {
          id: 3,
          label: "案例",
        },
        {
          id: 4,
          label: "洞察",
        },
        {
          id: 5,
          label: "关于",
        },
        {
          id: 6,
          label: "联系",
        },
      ],
      show:false,
      showTwo:false,
      lastactive: -1,
    };
  },
  watch: {
    logobg(newVal) {
      if (newVal == "#000") {
        this.logoimg = "@/../static/imgs/home/logo2.png";
      } else {
        this.logoimg = "@/../static/imgs/home/logo1.png";
      }
    },
  },

  components: {
    twoLevNav
  },

  computed: {},

  mounted() {
    this.fzbg();
    this.initPath(this.$route.name);
  },

  methods: {
    openNav(){
      this.show = true;
      this.close();
    },
    changeHeaderbg() {
      this.logobg = "#fff";
    },
    fzbg() {
      if (
        this.$store.state.active == 3 ||
        this.$store.state.active == 5 ||
        this.$store.state.active == 4 ||
        this.$store.state.active == 6
      ) {
        this.logobg = "#000";
      } else {
        this.logobg = "#fff";
      }
    },
    topro(e) {
      this.$router.push({
        path: "/" + e.target.dataset.id,
        query: {
          index: e.target.dataset.index,
        },
      });

      this.close();
      this.$store.state.active = 2;
    },
    initPath(e) {
      switch (e.id) {
        case 1:
          this.$router.push({
            name: "brand",
          });
          break;
        case 2:
          let that = this;
          that.isSearch = false;
          that.isClose = ture;
          // 弹出
          that.setfloatview(450);
          setTimeout(function () {
            that.isProduct = true;
          }, 200);
          break;
        case 3:
          this.$router.push({
            name: "case",
          });
          break;
        case 4:
          this.$router.push({
            name: "space",
          });
          break;
        case 5:
          this.$router.push({
            name: "about",
          });
          break;
        case 6:
          this.$router.push({
            name: "liaison",
          });
          break;
        // case "liaison":
        //   this.$store.state.active = 6;
        //    this.logobg="#fff"
        //   break;

        default:
          break;
      }
    },
    phoneChenge(e) {
      this.show = false;
      if (e.id != 2) {
        this.close();
      }
      this.lastactive = this.$store.state.active;
      this.$store.state.active = e.id;
      if (!this.isProduct) {
        this.llcolor(this.$store.state.active);
      }

      switch (e.id) {
        case 1:
          this.$router.push({
            name: "brand",
          });

          break;
        case 2:
          let that = this;
          that.isSearch = false;
          that.isClose = true;
          /*弹出*/
          this.showTwo = true;
          break;
        case 3:
          this.$router.push({
            name: "case",
          });
          break;
        case 4:
          this.$router.push({
            name: "space",
          });
          break;
        case 5:
          this.$router.push({
            name: "about",
          });
          break;
        case 6:
          this.$router.push({
            name: "liaison",
          });
          break;
        default:
          break;
      }
    },
    tohome() {
      this.$store.state.active = -1;
      this.logobg = "#fff";
      this.$router.push({
        name: "home",
      });
    },
    chenge(e) {
      if (e.id != 2) {
        this.close();
      }
      this.lastactive = this.$store.state.active;
      this.$store.state.active = e.id;
      if (!this.isProduct) {
        this.llcolor(this.$store.state.active);
      }

      switch (e.id) {
        case 1:
          this.$router.push({
            name: "brand",
          });

          break;
        case 2:
          let that = this;
          that.isSearch = false;
          that.isClose = true;
          /*弹出*/
          that.setfloatview(450);
          setTimeout(function () {
            that.isProduct = true;
          }, 200);
          break;
        case 3:
          this.$router.push({
            name: "case",
          });
          break;
        case 4:
          this.$router.push({
            name: "space",
          });
          break;
        case 5:
          this.$router.push({
            name: "about",
          });
          break;
        case 6:
          this.$router.push({
            name: "liaison",
          });
          break;
        default:
          break;
      }
    },
    llcolor(index) {
      switch (index) {
        case 3:
        case 5:
        case 4:
        case 6:
          this.logobg = "#000";
          break;
        default:
          this.logobg = "#fff";
          break;
      }
    },
    searchIcon() {
      let that = this;
      that.isSearch = false;
      that.isClose = true;
      /*弹出*/
      that.setfloatview(450);
      setTimeout(function () {
        that.isSeeacont = true;
      }, 200);
    },
    search() {
      console.log(this.seavalue);
    },
    /*关闭*/
    close() {
      this.llcolor(this.$store.state.active);
      this.setfloatview(0);
      this.isSearch = true;
      this.isClose = false;
      this.isSeeacont = false;
      this.showTwo = false;
      this.seavalue = "";
      if (this.$store.state.active == 2) {
        this.$store.state.active = -1;
      }
      this.isProduct = false;
    },
    setfloatview(e) {
      this.$refs.floatview.style.height = e + "px";
      this.$refs.floatview.style.transitionProperty = "height";
      this.$refs.floatview.style.transitionDuration = ".3s";
    },
    showPopup() {
      this.show = true;
    },
    receiveClose(e) {
      console.log(e);
      this.showTwo = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
  .conte {
    display: flex;
    flex-direction: column;
    .header {
      position: fixed;
      width: 100%;
      height: 70px;
      z-index: 9;
      display: flex;
      align-items: center;
      .headerMenu {
        display: flex;
        align-items: center;
        position: absolute;
        left: 1%;
        .mainMenu {
          text-decoration: none;
          margin-left: 30px;
          color: #b3aeaa;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .header_img {
        margin: 0 auto;
        width: 170px;
        height: 20px;
        cursor: pointer;
      }
      .search {
        position: absolute;
        right: 3%;
        display: flex;
        align-items: center;
        .Chinaflag {
          width: 30px;
          height: 20px;
          margin-right: 15px;
        }
        .searchIcon {
          width: 20px;
          height: 20px;
          cursor: pointer;
          margin-left: 10px;
        }
        .close {
          width: 30px;
          height: 30px;
          overflow: hidden;
          cursor: pointer;
          transform: rotate(-90deg);
          transition: transform 0.3s linear;
          /* 关闭按钮  */
          &::before {
            content: "";
            position: absolute;
            height: 3px;
            width: 30px;
            top: 45%;
            border-radius: 5px;
            margin-top: -1px;
            background: #070605;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          &::after {
            content: "";
            position: absolute;
            height: 3px;
            width: 30px;
            top: 45%;
            border-radius: 5px;
            margin-top: -1px;
            background: #070605;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }
          &:hover {
            transform: rotate(90deg);
            transition: transform 0.3s linear;
          }
        }
      }
    }
    .phone_header{
      display: none;
    }
    .searchbody {
      width: 100%;
      height: 0px;
      background: #db6f55;
      position: fixed;
      z-index: 8;
      .seeacont {
        margin-top: 70px;
        width: 100%;
        height: calc(100%-70px);
        display: flex;
        justify-content: center;
        align-items: center;
        // 导航下搜索弹窗
        .seeacont_input {
          width: 1000px;
          height: 80px;
          font-size: 55px;
          font-weight: 520;
          background: transparent;
          border: none;
          outline: none;
        }
        .ms {
          color: #fff;
          font-size: 30px;
          margin-left: 20px;
          cursor: pointer;
        }
        .hfl {
          margin-top: 15px;
          color: #887979;
          font-size: 14px;
        }
        .hfb {
          margin-top: 5px;
          color: #dca499;
          font-size: 16px;
          font-weight: bold;
        }
        // 导航下产品弹窗
        .subproduct {
          width: 100%;
          display: flex;
          flex-direction: row;
          padding: 40px;
          .subproductitem {
            display: flex;
            flex-direction: column;
            flex: 1;
            .Divtitle {
              display: flex;
              color: #fbf3f0;
              font-size: 16px;
              margin: 10px 0;
              display: flex;
              flex-direction: row;
              .Divtitleflag {
                font-size: 10px;
              }
            }
            .mDivtitle {
              font-size: 15px;
              color: #e2c9bd;
              margin: 2px 0;
              display: flex;
              flex-direction: row;
            }
            .Divtitlea:hover,
            .Divtitleb:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
  .conte {
    display: flex;
    flex-direction: column;
    .header {
      position: fixed;
      width: 100%;
      height: 70px;
      z-index: 9;
      display: flex;
      align-items: center;
      .headerMenu {
        display: flex;
        align-items: center;
        position: absolute;
        left: 1%;
        .mainMenu {
          text-decoration: none;
          margin-left: 15px;
          color: #b3aeaa;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .header_img {
        margin: 0 auto;
        width: 140px;
        height: 15px;
        cursor: pointer;
      }
      .search {
        position: absolute;
        right: 3%;
        display: flex;
        align-items: center;
        .Chinaflag {
          width: 25px;
          height: 15px;
          margin-right: 15px;
        }
        .searchIcon {
          width: 18px;
          height: 18px;
          cursor: pointer;
          margin-left: 5px;
        }
        .close {
          width: 20px;
          height: 20px;
          overflow: hidden;
          cursor: pointer;
          transform: rotate(-90deg);
          transition: transform 0.3s linear;
          /* 关闭按钮  */
          &::before {
            content: "";
            position: absolute;
            height: 3px;
            width: 20px;
            top: 40%;
            border-radius: 5px;
            margin-top: -1px;
            background: #070605;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          &::after {
            content: "";
            position: absolute;
            height: 3px;
            width: 20px;
            top: 40%;
            border-radius: 5px;
            margin-top: -1px;
            background: #070605;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }
          &:hover {
            transform: rotate(90deg);
            transition: transform 0.3s linear;
          }
        }
      }
    }
    .phone_header{
      display: none;
    }
    .searchbody {
      width: 100%;
      background: #db6f55;
      position: fixed;
      z-index: 8;
      .seeacont {
        margin-top: 70px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // 导航下搜索弹窗
        .search_box{
          width: 90%;
          display: flex;
          justify-content: center;
          align-items: baseline;
          .seeacont_input {
            width: 70%;
            height: 80px;
            font-size: 48px;
            font-weight: 520;
            background: transparent;
            border: none;
            outline: none;
          }
          .ms {
            color: #fff;
            font-size: 26px;
            margin-left: 20px;
            cursor: pointer;
          }
        }
        .search_key_box{
          padding-left: 9%;
          box-sizing: border-box;
          .hfl {
            margin-top: 15px;
            color: #887979;
            font-size: 14px;
          }
          .hfb {
            margin-top: 5px;
            color: #dca499;
            font-size: 16px;
            font-weight: bold;
          }
        }
        // 导航下产品弹窗
        .subproduct {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          padding: 20px;
          box-sizing: border-box;
          .subproductitem {
            display: flex;
            flex-direction: column;
            width: 33.3%;
            &:nth-of-type(n).sub_item{
              margin-top: 20px;
            }
            .Divtitle {
              display: flex;
              color: #fbf3f0;
              font-size: 14px;
              margin: 10px 0;
              display: flex;
              flex-direction: row;
              .Divtitleflag {
                font-size: 10px;
              }
            }
            .mDivtitle {
              font-size: 12px;
              color: #e2c9bd;
              margin: 2px 0;
              display: flex;
              flex-direction: row;
            }
            .Divtitlea:hover,
            .Divtitleb:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .conte {
    display: flex;
    flex-direction: column;
    .header{
      display: none;
    }
    .phone_header {
      position: fixed;
      width: 100%;
      height: 60px;
      z-index: 9;
      display: flex;
      align-items: center;
      .nav_icon{
        width: 16px;
        height: 16px;
        position: absolute;
        left: 5%;
      }
      .header_img {
        margin: 0 auto;
        width: 100px;
        height: 12px;
        cursor: pointer;
      }
      .search {
        position: absolute;
        right: 5%;
        display: flex;
        align-items: center;
        .Chinaflag {
          width: 25px;
          height: 15px;
          margin-right: 10px;
        }
        .searchIcon {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
        .close {
          width: 20px;
          height: 20px;
          overflow: hidden;
          cursor: pointer;
          transform: rotate(-90deg);
          transition: transform 0.3s linear;
          /* 关闭按钮  */
          &::before {
            content: "";
            position: absolute;
            height: 3px;
            width: 20px;
            top: 40%;
            border-radius: 5px;
            margin-top: -1px;
            background: #070605;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          &::after {
            content: "";
            position: absolute;
            height: 3px;
            width: 20px;
            top: 40%;
            border-radius: 5px;
            margin-top: -1px;
            background: #070605;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }
          &:hover {
            transform: rotate(90deg);
            transition: transform 0.3s linear;
          }
        }
      }
    }
    .van-popup{
      .headerMenu {
        width: 100%;
        display: flex;
        align-items: center;
        flex-flow: column;
        padding-top: 20px;
        box-sizing: border-box;
        .mainMenu {
          width: 90%;
          height: 40px;
          line-height: 40px;
          border-top: 1px solid #eae8e4;
          color: #19110b;
          font-size: 14px;
          cursor: pointer;
          position: relative;
          &:nth-of-type(1){
            border:0 none;
          }
          &:nth-of-type(2):after{
            content: "❯";
            display: block;
            position: absolute;
            font-size: 14px;
            color: #eae8e4;
            top: 2px;
            right: 10px;
          }
        }
      }
    }
    .searchbody {
      width: 100%;
      background: #db6f55;
      position: fixed;
      z-index: 8;
      .seeacont {
        margin-top: 70px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // 导航下搜索弹窗
        .search_box{
          width: 90%;
          display: flex;
          justify-content: center;
          align-items: baseline;
          margin: 0 auto;
          .seeacont_input {
            width: 70%;
            height: 60px;
            font-size: 32px;
            font-weight: 520;
            background: transparent;
            border: none;
            outline: none;
          }
          .ms {
            color: #fff;
            font-size: 24px;
            margin-left: 30px;
            cursor: pointer;
          }
        }
        .search_key_box{
          padding-left: 9%;
          box-sizing: border-box;
          .hfl {
            margin-top: 15px;
            color: #887979;
            font-size: 14px;
          }
          .hfb {
            margin-top: 5px;
            color: #dca499;
            font-size: 14px;
            font-weight: bold;
          }
        }
        // 导航下产品弹窗
        .subproduct {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          padding: 20px;
          box-sizing: border-box;
          .subproductitem {
            display: flex;
            flex-direction: column;
            width: 33.3%;
            &:nth-of-type(n).sub_item{
              margin-top: 20px;
            }
            .Divtitle {
              display: flex;
              color: #fbf3f0;
              font-size: 14px;
              margin: 10px 0;
              display: flex;
              flex-direction: row;
              .Divtitleflag {
                font-size: 10px;
              }
            }
            .mDivtitle {
              font-size: 12px;
              color: #e2c9bd;
              margin: 2px 0;
              display: flex;
              flex-direction: row;
            }
            .Divtitlea:hover,
            .Divtitleb:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

</style>
