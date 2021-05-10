<!--品牌-->  
<template>
  <div class="brandcontent">
    <div class="brandheader">
      <img src="@/../static/imgs/brand/Nocturnal.jpg" alt class="brandNocturnal" />
      <div class="brandheaderText">
        <span class="mEN">LoCAL</span>
        <span class="mEN">EXPERTISE,</span>
        <span class="mEN">GLoBAL</span>
        <span class="mEN">PPERSPECTIVE</span>
        <span class="mENL">将国际化理念融入本土环境</span>
        <div class="brandheaderBott">
          <div class="brandheaderBottbody">
            <span style="color:#C26452">旗下品牌</span>
            <span data-id="X-WORK Office" class="mEN">X-WORK Office</span>
            <span data-id="X-WORK Education" class="mEN">X-WORK Education</span>
            <span data-id="INGEN" class="mEN">INGEN</span>
            <span data-id="HUB Design" class="mEN">HUB Design</span>
            <span data-id="JS Space" class="mEN">JS Space</span>
          </div>
          <div class="brandheaderBottbody">
            <span style="color:#C26452">战略伙伴</span>
            <!-- <span @click="tosubitem($event)" data-id="FRITZ HANSEN" class="point">Fritz Hansen</span> -->
            <span data-id="FRITZ HANSEN" class="mEN">Fritz Hansen</span>
            <span data-id="VITRA" class="mEN">Vitra</span>
            <span data-id="MAGIS" class="mEN">Magis</span>
            <span data-id="GANDIA BLASCO" class="mEN">Gandia Blasco</span>
            <span data-id="INTERSTUHL" class="mEN">Interstuhl</span>
          </div>
          <div class="brandheaderBottbody">
            <span style="color:#C26452">优选伙伴</span>
            <span data-id="Matzform" class="mEN">Matzform</span>
            <span data-id="Fursys" class="mEN">Fursys</span>
            <span data-id="Woodmark" class="mEN">Woodmark</span>
            <span data-id="TrueDesign" class="mEN">TrueDesign</span>
            <span data-id="Andreu World" class="mEN">Andreu World</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增 -->
    <div class="brandheaderBott1">
      <div class="brandheaderBottbody">
        <span style="color:#C26452">旗下品牌</span>
        <span data-id="X-WORK Office" class="mEN">X-WORK Office</span>
        <span data-id="X-WORK Education" class="mEN">X-WORK Education</span>
        <span data-id="INGEN" class="mEN">INGEN</span>
        <span data-id="HUB Design" class="mEN">HUB Design</span>
        <span data-id="JS Space" class="mEN">JS Space</span>
      </div>
      <div class="brandheaderBottbody">
        <span style="color:#C26452">战略伙伴</span>
        <!-- <span @click="tosubitem($event)" data-id="FRITZ HANSEN" class="point">Fritz Hansen</span> -->
        <span data-id="FRITZ HANSEN" class="mEN">Fritz Hansen</span>
        <span data-id="VITRA" class="mEN">Vitra</span>
        <span data-id="MAGIS" class="mEN">Magis</span>
        <span data-id="GANDIA BLASCO" class="mEN">Gandia Blasco</span>
        <span data-id="INTERSTUHL" class="mEN">Interstuhl</span>
      </div>
      <div class="brandheaderBottbody">
        <span style="color:#C26452">优选伙伴</span>
        <span data-id="Matzform" class="mEN">Matzform</span>
        <span data-id="Fursys" class="mEN">Fursys</span>
        <span data-id="Woodmark" class="mEN">Woodmark</span>
        <span data-id="TrueDesign" class="mEN">TrueDesign</span>
        <span data-id="Andreu World" class="mEN">Andreu World</span>
      </div>
    </div>
    <div class="brandcontentbody">
      <div v-for="(item,index) in dataList" :key="index">
        <div class="brandbytitle">
          <div class="brandbytitleDt">
            <span class="Dt1 mEN">{{item.T1}}</span>
            <span class="Dt2">{{item.T2}}</span>
          </div>
          <div class="brandbytitleSt">{{item.T3}}</div>
        </div>
        <div class="brandbycontent">
          <div class="brandbyrow" v-for="(ite,indo) in item.BY" :key="indo">
            <div class="brandbyrowitem" v-for="(it,ind) in ite" :key="ind">
              <div class="brandbyrowitemcul">
                <img v-if="it.imgSrc" :src="it.imgSrc" style="width:100%;height:100%" alt />
                <div class="fdK">
                  <span class="fdKdt mEN">{{it.B1}}</span>
                  <span class="fdKst" :style="'color:'+it.B2color">{{it.B2}}</span>
                  <input
                    type="button"
                    :value="it.Btnvalue"
                    v-if="it.Btnstyle"
                    :style="'background: linear-gradient(to right,' +it.Btnstyle+')'"
                    :data-id="it.flag"
                    @click="tosubitem($event)"
                  />
                </div>
              </div>
              <div class="brandbyrowitembot">
                <span
                  class="brandbyrowitembot_a"
                  :data-id="it.flag"
                  @click="tosubitem($event)"
                >{{it.BYbot}}</span>
                <img v-if="it.Bbtflag" :src="it.Bbtflag" class="brandbyrowitembot_i" alt />
              </div>
            </div>
          </div>
          <div class="brandbyrow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          T1: "X-WORK DESIGN",
          T2: "沃科旗下品牌",
          T3:
            "以整合性的空间服务无体系，帮助各领域机构打造富有鲜活生命力的高效空间。",
          BY: [
            [
              {
                imgSrc: "@/../static/imgs/brand/BOOM.jpg",
                B1: "INGEN",
                flag: "INFEN",
                B2:
                  "专注于高端行政会议接待空间产品，文化的深入雕琢，致力于底蕴积淀与格调呈现。为时代开创者打造足以匹配其宏伟蓝图的领驭之地。",
                B2color: "#fff",
                Btnvalue: "近距离接触 INGEN",
                Btnstyle: "#D19F98,#CF7263",
                BYbot: "一柘 INGEN",
                Bbtflag: "@/../static/imgs/home/China-Flag.png",
              },
              {
                imgSrc: "@/../static/imgs/brand/HUB.png",
                B1: "HUB DESIGN",
                flag: "HUB DESIGN",
                B2:
                  "专注于家居配饰智能硬件产品设计，将全球好的设计资源带入中国，助力中国成为原创设计的沃土，让更多优秀设计来源于中国，赋能于世界。",
                B2color: "#fff",
                Btnvalue: "近距离接触 HUB DESIGN",
                Btnstyle: "#1E1F23, #17181C, #121315",
                BYbot: "涉及伙伴 HUB DESIGN",
                Bbtflag: "@/../static/imgs/home/China-Flag.png",
              },
            ],
            [
              {
                imgSrc: "@/../static/imgs/brand/Yuncheng.jpg",
                B1: "X-WORK EDUCATION",
                flag: "X-WORK EDUCATION",
                B2:
                  "为学校与教育机构量身打造可赋能其教育价值实现的多元化空,帮助不同教育阶段的人们拥有从容创造更多价值的能力。",
                B2color: "#fff",
                Btnvalue: "近距离接触 X-WORK EDUCATION",
                Btnstyle: "#1E1F23, #17181C, #121315",
                BYbot: "沃科教育 X-WORK EDUCATION",
                Bbtflag: "@/../static/imgs/home/China-Flag.png",
              },
              {
                imgSrc: "@/../static/imgs/brand/Decoration.jpg",
                B1: "JS SPACE",
                flag: "JS SPACE",
                B2:
                  "专注于空间策略及空间文化。通过对企业用户调研，策略咨询，室内灯光，空气，水，健康，声噪，精神等软装设计，让空间传递出独特气质，更有生动灵魂。",
                B2color: "#fff",
                Btnvalue: "近距离接触 JS SPACE",
                Btnstyle: "#1E1F23, #17181C, #121315",
                BYbot: "静思空间 JS SPACE",
                Bbtflag: "@/../static/imgs/home/China-Flag.png",
              },
            ],
          ],
        },
        {
          T1: "PARTNERS",
          T2: "战略合作伙伴",
          T3: "精选国际一线品牌，呈现丰富产品资源。",
          BY: [
            [
              {
                imgSrc: "@/../static/imgs/brand/Fritz.jpg",
                B1: "FRITZ HANSEN",
                flag: "FRITZ HANSEN",
                B2:
                  "源自丹麦的经典家居品牌，携150年的悠久传承、杰出设计和卓越匠艺，不断探索和创造更多的可能性。",
                B2color: "#fff",
                Btnvalue: "近距离接触 Fritz Hansen",
                Btnstyle: "#1E1F23, #17181C, #121315",
                BYbot: "FRITZ HANSEN",
                Bbtflag: "@/../static/imgs/brand/Denmark-Flag.png",
              },
              {
                imgSrc: "@/../static/imgs/brand/vitra.jpg",
                B1: "VITRA",
                flag: "VITRA",
                B2:
                  "源自瑞士的创意家居品牌，汇聚了大批风格迥异却极具创新精神的国际领先设计师，Vitra一直是创新文化、经典的代名词。",
                B2color: "#fff",
                Btnvalue: "近距离接触 VITRA",
                Btnstyle: "#1E1F23, #17181C, #121315",
                BYbot: "VITRA",
                Bbtflag: "@/../static/imgs/brand/Swiss-Flag.png",
              },
            ],
            [
              {
                imgSrc: "@/../static/imgs/brand/Magis.jpg",
                B1: "MAGIS",
                flag: "MAGIS",
                B2:
                  "源自意大利的现代家具品牌，带着对设计文化的挚爱与热情，如今已成为意大利在设计界的翘楚。",
                B2color: "#fff",
                Btnvalue: "近距离接触 MAGIS",
                Btnstyle: "#1E1F23, #17181C, #121315",
                BYbot: "MAGIS",
                Bbtflag: "@/../static/imgs/brand/Italy-Flag.png",
              },
              {
                imgSrc: "@/../static/imgs/brand/Gandia.jpg",
                B1: "GAN",
                flag: "GANDIA BLASCO",
                B2:
                  "源自西班牙的户外家具品牌，秉承了简洁的设计理念及前卫的设计方式，其为许多世界知名酒店提供的户外家居都成为了靓丽的风景。",
                B2color: "#000",
                Btnvalue: "近距离接触 GANDIA BLASCO",
                Btnstyle: "#1E1F23, #17181C, #121315",
                BYbot: "GAN",
                Bbtflag: "@/../static/imgs/brand/Spain-Flag.png",
              },
            ],
            [
              {
                imgSrc: "@/../static/imgs/brand/Interstuhl.jpg",
                B1: "INTERSTUHL",
                flag: "INTERSTUHL",
                B2:
                  "源自德国的办公家具品牌，坚持“享受座椅带来的快乐”这一理念，通过研发带给久坐人士健康与活力的同时，也使之体验到真实的愉悦。",
                B2color: "#000",
                Btnvalue: "近距离接触 INTERSTUHL",
                Btnstyle: "#1E1F23, #17181C, #121315",
                BYbot: "INTERSTUHL",
                Bbtflag: "@/../static/imgs/home/Germany Flag.png",
              },
              {
                imgSrc: "",
                B1: "",
                B2: "",
                Btnvalue: "",
                Btnstyle: "",
                BYbot: "",
                Bbtflag: "",
              },
            ],
          ],
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.$store.state.active = 1;
  },

  methods: {
    tosubitem(e) {
      //  console.log(  e.target.dataset.id);
      this.$router.push({
        path: "/brandsubitem",
        query: { id: e.target.dataset.id },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.point {
  cursor: pointer;
}
.point:hover {
  color: #aa6963;
}
.brandbyrowitembot_i {
  width: 30px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 5px;
}

.brandbyrowitembot_a {
  font-size: 12px;
  color: #000;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 5px;
  cursor: pointer;
  text-decoration: underline;
}

.brandbyrowitembot {
  width: 100%;
  height: 40px;
  position: relative;
  margin: 5px 0;
}

.fdK input[type="button"] {
  width: 250px;
  height: 40px;
  background: linear-gradient(to right, #1e1f23, #17181c, #121315);
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  margin-top: 30px;
}

.fdK {
  position: absolute;
  top: 10%;
  left: 8%;
  display: flex;
  flex-direction: column;
}

.fdKdt {
  font-size: 30px;
  font-weight: bold;
  color: #fff;
}

.fdKst {
  color: #fff;
  width: 480px;
}

.brandbyrowitemcul {
  position: relative;
  margin-top: 20px;
  width: 100%;
  height: 100%;
}

.brandbyrowitem {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 10px;
}

.brandbyrow {
  display: flex;
  flex-direction: row;
}

.brandbycontent {
  display: flex;
  flex-direction: column;
}

.brandbytitle {
  margin-left: 10px;
}

.brandbytitleSt {
  font-size: 13px;
  font-weight: bold;
}

.brandcontentbody {
  padding: 30px;
}

.brandbytitleDt {
  display: flex;
  flex-direction: row;
}

.Dt1 {
  letter-spacing: 10px;
  color: #000;
  font-size: 30px;
  font-weight: bold;
}

.Dt2 {
  font-size: 18px;
  font-weight: bold;
}

.brandheaderBottbody {
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-top: 50px;
}

.brandheaderBottbody span {
  font-size: 15px !important;
  letter-spacing: 0px !important;
  font-weight: unset !important;
  margin-top: 8px;
}

.brandheaderBott {
  display: flex;
  flex-direction: row;
}

.brandcontent {
  width: 100%;
  margin-bottom: 100px;
}

.brandNocturnal {
  width: 100%;
  height: 100%;
  // min-height: 625px;
}

.brandheader {
  position: relative;
}

.brandheaderText {
  position: absolute;
  top: 10%;
  left: 5%;
  display: flex;
  flex-direction: column;
}

.brandheaderText span {
  color: #fff;
  font-size: 40px;
  letter-spacing: 10px;
  font-weight: 600;
}

.brandheaderText .mENL {
  font-size: 20px;
  letter-spacing: 3px;
}
.brandheaderBott1 {
  display: none;
}
/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
  .brandheaderText {
    top: 16%;
    span {
      font-size: 28px;
    }
    .mENL {
      font-size: 16px;
    }
  }
  .brandheaderBottbody {
    margin-top: 30px;
    span {
      font-size: 14px !important;
    }
  }
  .fdKdt {
    font-size: 26px;
  }
  .fdKst {
    width: 280px;
    font-size: 14px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
}

@media screen and (max-width: 640px) {
  .brandheaderBott {
    display: none;
  }
  .brandheaderBott1 {
    display: flex;
    justify-content: space-between;
    padding: 0 26px;
    .brandheaderBottbody {
      margin-top: 4px;
      margin-right: 0;
      span {
        font-size: 12px !important;
      }
    }
  }
  .brandcontentbody {
    padding: 30px 16px;
  }
  .brandheaderText {
    top: 38%;
    span {
      font-size: 20px;
    }
    .mENL {
      font-size: 12px;
    }
  }
  .fdKdt {
    font-size: 20px;
  }
  .fdKst {
    width: 250px;
    font-size: 12px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
  .brandbyrowitemcul .fdK input {
    width: 200px;
    height: 38px;
    font-size: 12px;
  }
  .brandbytitleDt {
    // align-items: center;
    .Dt1 {
      font-size: 21px;
      letter-spacing: 3px;
    }
    .Dt2 {
      font-size: 13px;
    }
  }
  .brandbytitleSt {
    font-size: 12px;
    // display: block;
    // transform: scale(0.8);
  }
  .brandbyrow {
    flex-wrap: wrap;
    .brandbyrowitem {
      flex: initial;
    }
  }
}
</style>
