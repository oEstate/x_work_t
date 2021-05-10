<!--关于-->

<template>
  <div class="abobg">
    <div class="aboheader">
      <img src="@/../static/imgs/about/Count-Up.jpg" style="width:100%;height:100%" alt="">
      <div class="headertitle">
        <span class="headertitleT1">2020.02.18</span>
        <span class="headertitleT2">1635天，始终陪伴企业梦想实现</span>
      </div>

    </div>
    <div class="abomid">
      <div class="abomidD1">
        <div class="abomidD2">
          <span>ABoUT X-WoRK</span>
          <span class="abomidD2T1">关于沃科</span>
        </div>
      </div>
      <!-- <div class="abomidD1">
        <div class="abm1">办公生态筑造者，激活企业生命力</div>
        <div class="abm2">BUIL <span class="tag">FLOURISHING</span> WORKING CONDITIONS</div>
        <span class="abm3">筑造有生命力的办公生态，一通过提供包括空间策略、产品设计、色彩文化、智能物联等在内的可定制化空间生态解决方案，激活企业生命力，助力企业梦想加速实现。</span>
        <br>
        <br>
        <div class="abm2">INTEGRATE <span class="tag">GLOBAL REESOURCES</span> & <span class="tag">INSIGHTS</span></div>
        <span class="abm3">海外多维度精英团队，覆盖研发、设计、制造全程流程、并与包括Fritz
          Hansen、Vitra、Magis、Gandiablasco、Interstuhl等国际品牌达成战略合作。</span>
        <br>
        <br>
        <div class="abm2">BOOST THE <span class="tag">TRASFORMATION</span> </div>
        <div class="abm2">FROM "MADE IN CHINA " TO " DESIGNNED IN CHINA " </div>
        <span class="abm3">通过吸引全球资源，同时支持本土设计，助力中国成为原创设计的沃土，让更多优秀设计来源于中国，赋能于世界。 </span>
      </div> -->

     <div class="abomidD1">
        <div class="abm1"><br></div>
        <div class="abm2"> <span class="tag">筑造有生命力的办公生态<br><br></span> </div>
        <span class="abm3">通过提供包括空间策略、产品设计、色彩文化、智能物联等在内的可定制化空间<br>生态解决方案，激活企业生命力，助力企业梦想加速实现。</span>
        <br>
        <br>
        <div class="abm2"> <span class="tag">整合全球资源与国际化视野<br><br></span>  <span class="tag"></span></div>
        <span class="abm3">海内外多维度精英团队，覆盖研究、设计、制造全流程，并与包括Fritz Hansen、<br>Vitra、Magis、Gandiablasco、interstuhl等国际品牌达成战略合作。</span>
        <br>
        <br>
        <div class="abm2"><span class="tag">加速中国制造向中国设计的转变<br><br></span> </div>
        <span class="abm3">通过吸引全球资源，同时支持本土设计，助力中国成为原创设计的沃土，让更多<br>优秀设计来源于中国，赋能于世界。 </span>
      </div>

      <div class="abomidD1">
        <div class="abm1">办公生态筑造者，激活企业生命力</div>
        <div class="abm2"> <span class="tag">品牌愿景<br><br></span> </div>
        <span class="abm3">与全球企业共建更具生命力的办公环境，助力实现伟大梦想。<br>到2026年，成为中国办公行业的引领者，全球创新的推动者。</span>
        <br>
        <br>
        <div class="abm2"> <span class="tag">品牌使命<br><br></span>  <span class="tag"></span></div>
        <span class="abm3">整合全球资源，驱动中国设计创新</span>
        <br>
        <br>
        <div class="abm2"><span class="tag">品牌价值观<br><br></span> </div>
        <span class="abm3">激情热爱   客户体验驱动 <br>坦诚共建   长远全局思考 <br>奋斗创新   敬原创重设计</span>
      </div>
    </div>
    <div class="abobot">
      <div class="abomidD2" style="margin-bottom:30px;">
        <span>PRoFESSIoNALS</span>
        <span class="abomidD2T1">专业团队</span>
      </div>
      <div>
        <swiper ref="mySwiper" :options="swiperOption">
          <!-- v-for="(item,index) in swiperData" :key="index" -->
          <swiper-slide v-for="(item,index) in swiperData" :key="index">
            <div class="slidecontent">
              <div class="slidecontentrow" v-for="(ite,inde) in item" :key="inde">
                <div class="srItem" v-for="(it,ind) in ite" :key="ind">
                  <div>
                  <img :src="it.imgSrc" style="width:100%;height:100%" alt="">
                  </div>
                  <div class="psname">
                    <a href="">{{it.name}} </a>
                    <img :src="it.imgFlag" class="psnameflag" alt="">
                  </div>
                  <div class="psnameps">{{it.position}}</div>
                </div>

              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination abqbottom" slot="pagination"></div>
        </swiper>

      </div>
      <div class="abfooter">
        <div class="abomidD2" style="margin-bottom:30px;">
          <span>OUR DESIGNERS</span>
          <span class="abomidD2T1">设计师</span>
        </div>
        <div class="slidecontentrow" v-for="(item,index) in Designer1" :key="index">
          <div class="srItem" v-for="(it,ind) in item" :key="ind">
            <div>
            <img :src="it.imgSrc" style="width:100%;height:100%" alt="">
            </div>
            <div class="psname">
              <a href="">{{it.name}} </a>
              <img :src="it.imgFlag" class="psnameflag" alt="">
            </div>
            <div class="psnameps">{{it.position}}</div>
          </div>

        </div>
      </div>
       <div class="abfooter">
        
        <div class="slidecontentrow" v-for="(item,index) in Designer2" :key="index">
          <div class="srItem" v-for="(it,ind) in item" :key="ind">
            <div>
            <img :src="it.imgSrc" style="width:100%;height:100%;min-width:280px;height:280px" alt="">
            </div>
            <div class="psname">
              <a href="">{{it.name}} </a>
              <img :src="it.imgFlag" class="psnameflag" alt="">
            </div>
            <div class="psnameps">{{it.position}}</div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
          Designer2:[
               [{
              imgSrc: "@/../static/imgs/about/hs.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "MIKKO HE",
              position: "合作创新设计师"
            },
            {
             imgSrc: "@/../static/imgs/about/Jaime-Hayon.jpg",
              imgFlag: "@/../static/imgs/home/Spain Flag.png",
              name: "JAIME HAYON",
              position: "西班牙鬼才设计师"
            },
            {
            imgSrc: "@/../static/imgs/about/Konstantin-Grcic.jpg",
              imgFlag: "@/../static/imgs/home/Germany Flag.png",
              name: "KONSTANTIN GRCIC",
              position: "德国工业设计师"
            },
             {
             imgSrc: "@/../static/imgs/about/Edward-Barber-&-Jay-Osgerby.jpg",
              imgFlag: "@/../static/imgs/home/UK Flag.jpg",
              name: "EDWARD BARBER & JAY OSGERBY",
              position: "英国双子星设计师"
            },
             {
              imgSrc: "@/../static/imgs/about/Ronan-&-Erwan-Bouroullec.jpg",
              imgFlag: "@/../static/imgs/home/France Flag.jpg",
              name: "RONAN & ERWAN BOUROULLEC",
              position: "法国兄弟设计二人组"
            },
             {
             imgSrc: "@/../static/imgs/about/Thomas-Heatherwick.jpg",
              imgFlag: "@/../static/imgs/home/UK Flag.jpg",
              name: "THOMAS HEATHERWICK",
              position: "英国当代达·芬奇"
            }
          ],
          ],
        Designer1: [
          [{
              imgSrc: "@/../static/imgs/about/yrj.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "GIOIA YANG",
              position: "创新经理"
            },
            {
              imgSrc: "@/../static/imgs/about/yg.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "GAN YIN",
              position: "创新设计师"
            },
            {
              imgSrc: "@/../static/imgs/about/wf.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "FENG WEI",
              position: "创新设计师"
            },
            {
              imgSrc: "",
              imgFlag: "",
              name: "",
              position: ""
            }
          ],
        ],
        swiperData: [
          [
            [{
                imgSrc: "@/../static/imgs/about/team/gl.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "JAMES GUO",
                // position: "ceo、创始人"
              },
              {
               imgSrc: "@/../static/imgs/about/team/zyp.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "TINA ZHAO",
                // position: "供应链总监"
              },
              {
                 imgSrc: "@/../static/imgs/about/team/wh.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "HUAN WANG",
                // position: "COO"
              },
              {
                imgSrc: "@/../static/imgs/about/ltt.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "NIKKI LI",
                // position: "销售总监"
              }
            ],
            [{
                imgSrc: "@/../static/imgs/about/zy.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "RYAN ZHANG",
                // position: "首席顾问"
              },
              {
                imgSrc: "@/../static/imgs/about/gjw.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "RITA GUO",
                // position: "客户经理"
              },
              {
                imgSrc: "@/../static/imgs/about/kyn.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "AMBER KANG",
                // position: "品牌运营"
              },
              {
                imgSrc: "@/../static/imgs/about/hl.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "LI HAN",
                // position: "品牌设计师" 
              }
            ],
            [{
               imgSrc: "",
               imgFlag: "",
               name: "",
              },
              {
               imgSrc: "",
               imgFlag: "",
               name: "",
              },
              {
              imgSrc: "",
               imgFlag: "",
               name: "",
              },
              {
               imgSrc: "",
               imgFlag: "",
               name: "",
               }],
          ],
          [
            [{
                imgSrc: "@/../static/imgs/about/team/lh.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "HUI LI",
                // position: "总经理助理"
              },
              {
                imgSrc: "@/../static/imgs/about/zqn.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "ARNO ZHANG",
                // position: "客户经理"
              },
              {
                imgSrc: "@/../static/imgs/about/team/hh.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "ANDY HU",
                // position: "项目总监"
              },
              {
                imgSrc: "@/../static/imgs/about/team/lyn.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "(Yinan) LAI",
                // position: "品牌设计师"
              }
            ],
            [{
                imgSrc: "@/../static/imgs/about/team/lcy.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "(Caoyuan) LIU",
                // position: "空间策略咨询师"
              },
              {
                imgSrc: "@/../static/imgs/about/team/lyd.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "DOM LUO",
                // position: "合伙人"
              },
              {
                imgSrc: "@/../static/imgs/about/team/gwh.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "MIA GAO",
                // position: "客户经理"
              },
              {
                imgSrc: "@/../static/imgs/about/team/njx.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "JASON NI",
                // position: "合伙人"
              }
            ],
          ],
          [
            [{
                imgSrc: "@/../static/imgs/about/team/zll.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "LEO ZOU",
                // position: "客户总监"
              },
              {
                imgSrc: "@/../static/imgs/about/team/cy.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "LUCKY CUI",
                // position: "产品经理"
              },
              {
                imgSrc: "@/../static/imgs/about/team/yl.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "LIU YANG",
                // position: "空间设计师"
              },
              {
                imgSrc: "@/../static/imgs/about/team/sml.jpg",
                imgFlag: "@/../static/imgs/home/China-Flag.png",
                name: "(Mingling) SUN",
                // position: "财务总监"
              }
            ],
            // [
            // ],
            // [
            // ],
          ]

        ],
        swiperOption: {
          observer: true,
          observeParents: true,
          direction: 'horizontal',
          slidesPerView: 1,
          // spaceBetween: 30,
          mousewheel: false,

          on: {
            slideChangeTransitionEnd: function () {
              // console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
            },
          },
          pagination: {
            el: '.abqbottom',
            clickable: true,
            /* 自定义 */
            bulletClass: 'ab-bullet',
            bulletActiveClass: 'abot-bullet-active',
          }


        },
      };
    },

    components: {},

    computed: {},

    mounted() {
       this.$store.state.active=5;
    },

    methods: {
    
    }
  }

</script>
<style>
  /* 关于分页器 */
  .ab-bullet {
    width: 9px;
    height: 9px;
    display: inline-block;
    border-radius: 100%;
    background: #777171;
    opacity: 1;
    margin: 5px;
    cursor: pointer;
    outline: none;

  }

  .abot-bullet-active {
    background: #D96F57 !important;
    ;
    opacity: 1;
  }

  .swiper-pagination-bullet {
    margin: 5px;
  }

</style>
<style scoped>
  .abfooter {
    margin-top: 50px;
    display: flex;
    flex-direction: column
  }

  .psnameflag {
    width: 30px;
    height: 20px;
    position: absolute;
    right: 0px;
  }

  .psname {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 8px;

  }

  .psname a {
    color: #fff;
    font-size: 15px
  }

  .psnameps {
    color: #6F6B65;
    font-size: 13px
  }

  .srItem {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .slidecontentrow {
    display: flex;
    flex-direction: row
  }

  .slidecontent {
    display: flex;
    flex-direction: column
  }

  .abobot {
    padding: 30px 30px 200px 30px; 
  }

  .abm3 {
    font-size: 15px;
    font-weight: bold;
  }

  .abm2 {
    letter-spacing: 5px;
    font-weight: bold
  }

  .abm1 {
    font-size: 25px;
    margin: 45px 0;
  }

  .tag {
    color: #DE7E65;
  }

  .abomidD2T1 {
    font-size: 20px;
    letter-spacing: 0px;

  }

  .abomidD2 {
    display: flex;
    color: #fff;
    font-size: 40px;
    letter-spacing: 15px;
    font-weight: bold;
    margin-left: 8px;
  }

  .abomidD1 {
    flex: 1;
    color: #fff;
  }

  .abomid {
    display: flex;
    flex-direction: row;
    padding: 80px 30px;
  }

  .headertitleT1 {
    color: #fff;
    font-size: 100px;
    font-weight: bold
  }

  .headertitleT2 {
    color: #fff;
    font-size: 25px;
    font-weight: bold
  }

  .headertitle {
    position: absolute;
    z-index: 7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }

  .aboheader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .abobg {
    background: #000;
    width: 100%;
  }

</style>
