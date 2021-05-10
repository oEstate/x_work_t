<!-- 底部 -->
<template>
  <div class="warp">
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
      <div class="subproductitem sub_item">
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
      <div class="subproductitem sub_item">
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
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
  },

  methods: {
    topro(e) {
      this.$router.push({
        path: "/" + e.target.dataset.id,
        query: {
          index: e.target.dataset.index,
        },
      });

      this.closePop();
      this.$store.state.active = 2;
    },
    // 关闭弹窗
    closePop(){
      this.$emit('receiveClose','close');
    }
  },
};
</script>
<style lang="scss" scoped>
@keyframes payPopup {
  from {
    width: 5%;
    right: -2000px;
  }
  to {
    width: 100%;
    right: 0px;
  }
}
.warp{
  position: fixed;
  top:0;
  z-index: 8;
  background-color: #db6f55;
  animation: payPopup 0.5s;
  .subproduct {
    width: 100%;
    height: 85vh;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    padding: 60px 20px;
    box-sizing: border-box;
    .subproductitem {
      display: flex;
      flex-direction: column;
      width: 100%;
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
        font-size: 11px;
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
</style>