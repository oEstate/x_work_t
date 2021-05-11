<!--关于-->

<template>
  <div class="abobg">
    <div class="aboheader">
      <img src="@/../static/imgs/about/Count-Up.jpg" style="width:100%;height:100%" alt />
      <div class="headertitle">
        <TIME class="headertitleT1"></TIME>
        <span class="headertitleT2">
          <TimeD></TimeD>天，始终陪伴企业梦想实现
        </span>
      </div>
    </div>
    <div class="abomid">
      <div class="abomidD1 lf_abomidD1">
        <div class="abomidD2">
          <span class="mEN">ABOUT X-WORK</span>
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
      </div>-->

      <div class="abomidD1">
        <div class="abm1">
          <br />
        </div>
        <div class="abm2">
          <span class="tag">
            筑造有生命力的办公生态
            <br />
            <br />
          </span>
        </div>
        <span class="abm3">
          通过提供包括空间策略、产品设计、色彩文化、智能物联等在内的可定制化空间
          <br />生态解决方案，激活企业生命力，助力企业梦想加速实现。
        </span>
        <br />
        <br />
        <div class="abm2">
          <span class="tag">
            整合全球资源与国际化视野
            <br />
            <br />
          </span>
          <span class="tag"></span>
        </div>
        <span class="abm3">
          海内外多维度精英团队，覆盖研究、设计、制造全流程，并与包括Fritz
          Hansen、
          <br />Vitra、Magis、Gandiablasco、interstuhl等国际品牌达成战略合作。
        </span>
        <br />
        <br />
        <div class="abm2">
          <span class="tag">
            加速中国制造向中国设计的转变
            <br />
            <br />
          </span>
        </div>
        <span class="abm3">
          通过吸引全球资源，同时支持本土设计，助力中国成为原创设计的沃土，让更多
          <br />优秀设计来源于中国，赋能于世界。
        </span>
      </div>
      <div class="abomidD1">
        <div class="abm1 abm1_1">办公生态筑造者，激活企业生命力</div>
        <div class="abm2">
          <span class="tag">
            品牌愿景
            <br />
            <br />
          </span>
        </div>
        <span class="abm3">
          做中国设计创新品牌的引领者
          <br />
        </span>
        <br />
        <br />
        <div class="abm2">
          <span class="tag">
            品牌使命
            <br />
            <br />
          </span>
          <span class="tag"></span>
        </div>
        <span class="abm3">加速中国制造向中国设计转变</span>
        <br />
        <br />
        <div class="abm2">
          <span class="tag">
            品牌价值观
            <br />
            <br />
          </span>
        </div>
        <span class="abm3">
          为人：诚信正派 创新务实 共赢共建共成就
          <br />处事：尽心尽力 奋斗担当 痴迷于客户价值
          <br />核心：聚焦理想与目标 全利创造价值
        </span>
      </div>
    </div>
    <div class="abobot">
      <div class="abomidD2" style="margin-bottom:30px;">
        <span class="mEN">PROFESSIONALS</span>
        <span class="abomidD2T1">专业团队</span>
      </div>
      <div>
        <swiper ref="mySwiper" :options="swiperOption">
          <!-- v-for="(item,index) in swiperData" :key="index" -->
          <swiper-slide v-for="(item,index) in isCollapse? swiperData1:swiperData" :key="index">
            <div class="slidecontent">
              <div class="slidecontentrow slidecontentrow1" v-for="(ite,inde) in item" :key="inde">
                <div class="srItem" v-for="(it,ind) in ite" :key="ind">
                  <div>
                    <img v-if="it.imgFlag" :src="it.imgSrc" style="width:100%;height:100%;" alt />
                  </div>
                  <div class="psname">
                    <span>{{it.name}}</span>
                    <img v-if="it.imgFlag" :src="it.imgFlag" class="psnameflag" alt />
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
          <span class="mEN">DESIGNERS</span>
          <span class="abomidD2T1">设计师</span>
        </div>
        <div
          class="slidecontentrow slidecontentrow2"
          v-for="(item,index) in Designer1"
          :key="index"
        >
          <div class="srItem" v-for="(it,ind) in item" :key="ind">
            <div>
              <img v-if="it.imgSrc" :src="it.imgSrc" style="width:100%;height:100%;" alt />
            </div>
            <div class="psname">
              <span>{{it.name}}</span>
              <img v-if="it.imgFlag" :src="it.imgFlag" class="psnameflag" alt />
            </div>
            <div class="psnameps">{{it.position}}</div>
          </div>
        </div>
      </div>
      <div class="abfooter">
        <div
          class="slidecontentrow slidecontentrow2 slidecontentrow3"
          v-for="(item,index) in Designer2"
          :key="index"
        >
          <div class="srItem" v-for="(it,ind) in item" :key="ind">
            <div>
              <img imgSrc :src="it.imgSrc" style="width:100%;height:100%;" alt />
            </div>
            <div class="psname">
              <span>{{isCollapse?it.name1:it.name}}</span>
              <img imgFlag :src="it.imgFlag" class="psnameflag" alt />
            </div>
            <div class="psnameps">{{it.position}}</div>
          </div>
        </div>
      </div>

      <div class="abfooter">
        <div class="abomidD2 abomidD2_1" style>
          <span class="mEN">JOIN US ON OUR JOURNEY</span>
        </div>
        <div class="abomidD2 abomidD2_1" style="margin-bottom:10px; ">
          <span class="mEN">TO THE FUTURE</span>
          <span class="abomidD2T1">加入我们， 成就彼此未来</span>
        </div>
        <span class="abomidD2T2">我们惊喜于每个人的独特能量， 更珍惜每一份为梦想而投入的努力。</span>
        <span class="abomidD2T2">如果你也看到一个充满生命力的未来世界， 希望这场通往未来的旅程中， 让我们结伴而行。</span>

        <div class="slidecontentrow job_exp" v-for="(item,index) in Designer3" :key="index">
          <div class="srItem" v-for="(it,ind) in item" :key="ind">
            <div class="Designer3cont">
              <div class="Designer3conttitle">
                <div class="Detle1">
                  <span class="Detle1T1">{{it.nameT1}}</span>
                  <span class="Detle1T2">{{it.nameT2}}</span>
                </div>
                <span class="Detle1T1">{{it.nameT3}}</span>
              </div>
              <img :src="it.imgSrc" style="width:100%;height:100%;" alt />
            </div>

            <div class="psnameps1">{{it.name1}}</div>
            <div class="psnameps1">{{it.name2}}</div>
            <div class="psnameps1">{{it.name3}}</div>
          </div>
        </div>
      </div>
      <div class="footD">
        <span class="footDt1">查看更多职位信息：</span>
        <div class="footDt2">
          <a
            href="https://www.zhipin.com/job_detail/?query=%E5%8C%97%E4%BA%AC%E6%B2%83%E7%A7%91%E7%B3%BB%E7%BB%9F%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&city=101010100&industry=&position="
            class="footDt2a"
            target="_blank"
          >
            <img src="@/../static/imgs/about/1.png" alt style="width:100px;heigjt:50px" />
          </a>
          <a
            href="https://sou.zhaopin.com/?jl=530&kw=%E5%8C%97%E4%BA%AC%E6%B2%83%E7%A7%91%E7%B3%BB%E7%BB%9F%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&kt=3"
            class="footDt2a"
            target="_blank"
          >
            <img src="@/../static/imgs/about/2.png" alt style="width:100px;heigjt:50px" />
          </a>
          <div class="footDt3">
            <span class="footDt3T1">或直接与HR团队联系：</span>
            <span class="footDt3T2">
              <a href="mailto:hr@x-work.com.cn">hr@x-work.com.cn</a> 或 0086 10 8420 0995
            </span>
          </div>
        </div>
        <span class="footDt4">我们期待与每一个闪光的你成为伙伴。</span>
      </div>
    </div>
  </div>
</template>

<script>
import Time from "../tool/Timer";
import TimeD from "../tool/Timediffer";
export default {
  data() {
    return {
      Designer3: [
        [
          {
            imgSrc: "@/../static/imgs/about/a1.jpg",
            nameT1: "INDUSTRIAL",
            nameT2: "工业设计师",
            nameT3: "DESIGNER",
            name1:
              "· 研究生及以上学历， 海外学习背景， 或拥有优秀背景的国内毕业生；",
            name2: "· 家具设计、 工业设计、 产品设计或相关设计专业；",
            name3: "· 热爱设计， 具有创造性思维， 有独到的设计见解与市场思维。",
            position: "合作创新设计师",
          },
          {
            imgSrc: "@/../static/imgs/about/a2.jpg",
            nameT1: "ACCOUNT",
            nameT2: "客户顾问",
            nameT3: "CONSULTANT",
            name1:
              "· 兼具开朗与细致， 拥有良好的表达和沟通能力， 责任心和执行力满分；",
            name2: "· 擅于快速学习， 乐于从客户角度思考， 具有服务意识；",
            name3: "· 渴望成长与成功。",
            position: "合作创新设计师",
          },
          {
            imgSrc: "@/../static/imgs/about/a3.jpg",
            nameT1: "PROJECT",
            nameT2: "项目经理",
            nameT3: "MANAGER",
            name1: "· 三年以上相关工作经验；",
            name2: "· 耐心细致责任心和执行力满分；",
            name3: "· 拥有良好的总结表达和协调沟通能力。",
            position: "合作创新设计师",
          },
        ],
      ],
      Designer2: [
        [
          {
            imgSrc: "@/../static/imgs/about/Jaime-Hayon.jpg",
            imgFlag: "@/../static/imgs/home/Spain Flag.png",
            name: "JAIME HAYON",
            name1: "J. HAYON",
            position: "西班牙鬼才设计师",
          },
          {
            imgSrc: "@/../static/imgs/about/Thomas-Heatherwick.jpg",
            imgFlag: "@/../static/imgs/home/UK Flag.jpg",
            name: "THOMAS HEATHERWICK",
            name1: "T. HEATHERWICK",
            position: "英国当代达·芬奇",
          },
          {
            imgSrc: "@/../static/imgs/brand/FritzHansen/Arne-Jacobsen.jpg",
            imgFlag: "@/../static/imgs/home/Denmark Flag.png",
            name: "ARNE JACOBSEN",
            name1: "A. JACOBSEN",
            position: "丹麦国宝级设计大师",
          },
          {
            imgSrc: "@/../static/imgs/brand/Magis/Eero-Aarnio.jpg",
            imgFlag: "@/../static/imgs/home/a.png",
            name: "EERO AARNIO",
            name1: "E. AARNIO",
            position: "芬兰著名设计师",
          },
          {
            imgSrc: "@/../static/imgs/brand/Gan/Patricia-Urquiola.jpg",
            imgFlag: "@/../static/imgs/home/Spain Flag.png",
            name: "PATRICIA URQUIOLA",
            name1: "P. URQUIOLA",
            position: "西班牙色彩魔术师",
          },
          {
            imgSrc: "@/../static/imgs/brand/Gan/Charlotte-Lancelot.jpg",
            imgFlag: "@/../static/imgs/home/b.png",
            name: "CHARLOTTE LANCELOT",
            name1: "C. LANCELOT",
            position: "比利时年轻设计师",
          },
          // {
          //   imgSrc: "@/../static/imgs/about/Konstantin-Grcic.jpg",
          //   imgFlag: "@/../static/imgs/home/Germany Flag.png",
          //   name: "KONSTANTIN GRCIC",
          //   position: "德国工业设计师"
          // },
          // {
          //   imgSrc: "@/../static/imgs/about/Edward-Barber-&-Jay-Osgerby.jpg",
          //   imgFlag: "@/../static/imgs/home/UK Flag.jpg",
          //   name: "EDWARD BARBER & JAY OSGERBY",
          //   position: "英国双子星设计师"
          // },
          // {
          //   imgSrc: "@/../static/imgs/about/Ronan-&-Erwan-Bouroullec.jpg",
          //   imgFlag: "@/../static/imgs/home/France Flag.jpg",
          //   name: "RONAN & ERWAN BOUROULLEC",
          //   position: "法国兄弟设计二人组"
          // },
          // {
          //   imgSrc: "@/../static/imgs/about/Thomas-Heatherwick.jpg",
          //   imgFlag: "@/../static/imgs/home/UK Flag.jpg",
          //   name: "THOMAS HEATHERWICK",
          //   position: "英国当代达·芬奇"
          // }
        ],
      ],
      Designer1: [
        [
          {
            imgSrc: "@/../static/imgs/about/yrj.jpg",
            imgFlag: "@/../static/imgs/home/China-Flag.png",
            name: "GIOIA YANG",
            position: "创新经理",
          },
          // {
          //   imgSrc: "@/../static/imgs/about/yg.jpg",
          //   imgFlag: "@/../static/imgs/home/China-Flag.png",
          //   name: "GAN YIN",
          //   position: "创新设计师"
          // },
          {
            imgSrc: "@/../static/imgs/about/wf.jpg",
            imgFlag: "@/../static/imgs/home/China-Flag.png",
            name: "FENG WEI",
            position: "创新设计师",
          },
          {
            imgSrc: "@/../static/imgs/about/hs.jpg",
            imgFlag: "@/../static/imgs/home/China-Flag.png",
            name: "MIIKO HE",
            position: "合作创新设计师",
          },
          {
            imgSrc: "",
            imgFlag: "",
            name: "",
            position: "",
          },
        ],
      ],
      swiperData: [
        [
          [
            {
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
            },
          ],
          [
            {
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
              imgSrc: "@/../static/imgs/about/team/lcy.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "(Caoyuan) LIU",
              // position: "空间策略咨询师"
            },
            {
              imgSrc: "@/../static/imgs/about/hl.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "LI HAN",
              // position: "品牌设计师"
            },
          ],
          [
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
            },
            {
              imgSrc: "",
              imgFlag: "",
              name: "",
            },
          ],
        ],
        [
          [
            {
              imgSrc: "@/../static/imgs/about/team/cy.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "LUCKY CUI",
              // position: "产品经理"
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
              imgSrc: "@/../static/imgs/about/team/yl.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "LIU YANG",
              // position: "空间设计师"
            },
          ],
          [
            // {
            //   imgSrc: "@/../static/imgs/about/team/lcy.jpg",
            //   imgFlag: "@/../static/imgs/home/China-Flag.png",
            //   name: "(Caoyuan) LIU",
            //   // position: "空间策略咨询师"
            // },
            {
              imgSrc: "@/../static/imgs/about/team/lyd.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "DOM LUO",
              // imgSrc: "",
              // imgFlag: "@/../static/imgs/home/China-Flag.png",
              // name: "",
              // position: "合伙人"
            },
            // {
            //   imgSrc: "@/../static/imgs/about/team/gwh.jpg",
            //   imgFlag: "@/../static/imgs/home/China-Flag.png",
            //   name: "MIA GAO",
            //   // position: "客户经理"
            // },
            {
              imgSrc: "@/../static/imgs/about/team/njx.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "JASON NI",
              // position: "合伙人"
            },
           {
              imgSrc: "@/../static/imgs/about/team/sml.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "(Mingling) SUN",
              // position: "财务总监"
            },
            {
              imgSrc: "@/../static/imgs/about/team/lyx.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "(Yuexing) LAI",
              // position: ""
            },
          ],
        ],
        //[
          // [
          //   {
          //     imgSrc: "@/../static/imgs/about/team/zll.jpg",
          //     imgFlag: "@/../static/imgs/home/China-Flag.png",
          //     name: "LEO ZOU",
          //     // position: "客户总监"
          //   },
          //   {
          //     imgSrc: "@/../static/imgs/about/team/cy.jpg",
          //     imgFlag: "@/../static/imgs/home/China-Flag.png",
          //     name: "LUCKY CUI",
          //     // position: "产品经理"
          //   },
          //   {
          //     imgSrc: "@/../static/imgs/about/team/yl.jpg",
          //     imgFlag: "@/../static/imgs/home/China-Flag.png",
          //     name: "LIU YANG",
          //     // position: "空间设计师"
          //   },
          //   {
          //     imgSrc: "@/../static/imgs/about/team/sml.jpg",
          //     imgFlag: "@/../static/imgs/home/China-Flag.png",
          //     name: "(Mingling) SUN",
          //     // position: "财务总监"
          //   },
          // ],
          // [
          // ],
          // [
          // ],
        //],
      ],

      swiperData1: [
        [
          [
            {
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
          ],
          [
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
            },
          ],

          [
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
          ],
        ],
        [
          [
            {
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
          ],
          [
            {
              imgSrc: "@/../static/imgs/about/team/lcy.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "(Caoyuan) LIU",
              // position: "空间策略咨询师"
            },
            {
              imgSrc: "@/../static/imgs/about/hl.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "LI HAN",
              // position: "品牌设计师"
            },
          ],
        ],
        [
          [
            {
              imgSrc: "@/../static/imgs/about/team/cy.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "LUCKY CUI",
              // position: "产品经理"
            },
            {
              imgSrc: "@/../static/imgs/about/zqn.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "ARNO ZHANG",
              // position: "客户经理"
            },
          ],
          [
            {
              imgSrc: "@/../static/imgs/about/team/hh.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "ANDY HU",
              // position: "项目总监"
            },
            {
              imgSrc: "@/../static/imgs/about/team/yl.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "LIU YANG",
              // position: "空间设计师"
            },
          ],
        ],
        [
          [
            // {
            //   imgSrc: "@/../static/imgs/about/team/lcy.jpg",
            //   imgFlag: "@/../static/imgs/home/China-Flag.png",
            //   name: "(Caoyuan) LIU",
            //   // position: "空间策略咨询师"
            // },
            {
              imgSrc: "@/../static/imgs/about/team/lyd.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "DOM LUO",
              // position: "合伙人"
            },
            {
              imgSrc: "@/../static/imgs/about/team/njx.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "JASON NI",
              // position: "合伙人"
            },
          ],
         [
            {
              imgSrc: "@/../static/imgs/about/team/sml.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "(Mingling) SUN",
              // position: "财务总监"
            },
            {
              imgSrc: "@/../static/imgs/about/team/lyx.jpg",
              imgFlag: "@/../static/imgs/home/China-Flag.png",
              name: "(Yuexing) LAI",
              // position: ""
            },
          ],
        ],
       // [
          // [
          //   {
          //     imgSrc: "@/../static/imgs/about/team/zll.jpg",
          //     imgFlag: "@/../static/imgs/home/China-Flag.png",
          //     name: "LEO ZOU",
          //     // position: "客户总监"
          //   },
          //   {
          //     imgSrc: "@/../static/imgs/about/team/cy.jpg",
          //     imgFlag: "@/../static/imgs/home/China-Flag.png",
          //     name: "LUCKY CUI",
          //     // position: "产品经理"
          //   },
          // ],
          // [
          //   {
          //     imgSrc: "@/../static/imgs/about/team/yl.jpg",
          //     imgFlag: "@/../static/imgs/home/China-Flag.png",
          //     name: "LIU YANG",
          //     // position: "空间设计师"
          //   },
          //   {
          //     imgSrc: "@/../static/imgs/about/team/sml.jpg",
          //     imgFlag: "@/../static/imgs/home/China-Flag.png",
          //     name: "(Mingling) SUN",
          //     // position: "财务总监"
          //   },
          // ],
        //],
      ],
      swiperOption: {
        observer: true,
        observeParents: true,
        direction: "horizontal",
        slidesPerView: 1,
        // spaceBetween: 30,
        mousewheel: false,
        keyboard : true,
        on: {
          slideChangeTransitionEnd: function () {
            // console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
          },
        },
        pagination: {
          el: ".abqbottom",
          clickable: true,
          /* 自定义 */
          bulletClass: "ab-bullet",
          bulletActiveClass: "abot-bullet-active",
        },
      },
      screenWidth: document.body.clientWidth, // 屏幕宽度
      timer: false,
    };
  },

  components: {
    TIME: Time,
    TimeD,
  },

  computed: {},

  mounted() {
    this.$store.state.active = 5;
    // 监听窗口大小
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        // console.log(isCollapse)
        if (this.screenWidth < 640) {
          this.isCollapse = true;
        }
      })();
    };
  },
  computed: {
    isCollapse: {
      get() {
        return this.screenWidth < 640;
      },
      set() {},
    },
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        if (this.screenWidth < 640) {
          this.isCollapse = true;
        } else {
          this.isCollapse = false;
        }
        this.timer = true;
        let that = this;
        setTimeout(function () {
          that.timer = false;
        }, 400);
      }
    },
  },

  methods: {},
};
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
  background: #d96f57 !important;
  opacity: 1;
}

.swiper-pagination-bullet {
  margin: 5px;
}
</style>
<style lang="scss" scoped>
.footDt4 {
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  margin-top: 50px;
}
.footDt3T1 {
  font-size: 13px;
  color: #fff;
  font-weight: bold;
}
.footDt3T2 {
  font-size: 13px;
  color: #e48364;
  font-weight: bold;
}

.footDt3T2 a {
  font-size: 13px;
  color: #e48364;
  font-weight: bold;
}
.footDt3 {
  display: flex;
  flex-direction: column;
}
.footDt2 {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.footDt2a {
  margin-right: 20px;
}
.footDt1 {
  font-size: 12px;
  color: #fff;
}

.footD {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 10px;
}

.psnameps1 {
  color: #fff;
  font-size: 12px;
  margin-top: 3px;
  font-weight: bold;
}

.Detle1T1 {
  font-size: 26px;
  letter-spacing: 5px;
  font-weight: bold;
}

.Detle1T2 {
  font-size: 18px;
  font-weight: bold;
}

.Detle1 {
  display: flex;
}

.Designer3conttitle {
  display: flex;
  flex-direction: column;
  position: absolute;
  color: #fff;
  top: 30px;
  left: 30px;
}

.Designer3cont {
  position: relative;
}

.abomidD2T2 {
  font-size: 14px;
  color: #fff;
  margin-left: 10px;
}

.abfooter {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
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

.psname span {
  color: #fff;
  font-size: 15px;
}

.psnameps {
  color: #6f6b65;
  font-size: 13px;
}

.srItem {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.slidecontentrow {
  display: flex;
  flex-direction: row;
}

.slidecontent {
  display: flex;
  flex-direction: column;
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
  font-weight: bold;
}

.abm1 {
  font-size: 25px;
  margin: 45px 0;
}

.tag {
  color: #de7e65;
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
  // align-items: center;
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
  font-weight: bold;
}

.headertitleT2 {
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.headertitle {
  position: absolute;
  z-index: 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.lf_abomidD1 {
  position: relative;
  .abomidD2 {
    position: absolute;
    width: 600px;
  }
}
/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
  .headertitle {
    .headertitleT1 {
      font-size: 76px;
    }
    .headertitleT2 {
      font-size: 20px;
    }
  }
  .abomid {
    justify-content: space-around;
    letter-spacing: 5px;
    flex-direction: column;
    padding: 50px 30px;
    .abomidD1 {
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
      .abm1 {
        margin: 30px 0 20px 0;
      }
      .abm1_1 {
        margin: 40px 0 30px 0;
      }
    }
    .lf_abomidD1 {
      // position: relative;
      .abomidD2 {
        // position: absolute;
        width: 400px;
        font-size: 32px;
        letter-spacing: 5px;
        .abomidD2T1 {
          font-size: 16px;
        }
      }
    }
  }
  .abobot {
    .abomidD2 {
      font-size: 32px;
      letter-spacing: 5px;
      .abomidD2T1 {
        font-size: 16px;
      }
    }
  }
  .abfooter {
    .abomidD2 {
      font-size: 32px;
      letter-spacing: 5px;
      .abomidD2T1 {
        font-size: 16px;
      }
    }
  }
  .slidecontentrow {
    // overflow-x: scroll;
    white-space: nowrap;
    flex-wrap: wrap;
  }
  .slidecontentrow3 {
    // white-space: nowrap;
    flex-wrap: wrap;
    justify-content: space-between;
    .srItem {
      width: 30%;
      flex: initial;
      padding: 10px 0;
    }
  }
  .Designer3cont {
    // width: 372px;
    // height: 211px;
  }
  .job_exp {
    overflow-x: initial;
    white-space: initial;
    flex-direction: column;
    .srItem {
      padding: 50px 0;
    }
  }
}

@media screen and (max-width: 640px) {
  .headertitle {
    .headertitleT1 {
      font-size: 56px;
    }
    .headertitleT2 {
      font-size: 16px;
    }
  }
  .abomid {
    padding: 50px 30px;
    letter-spacing: 5px;
    flex-direction: column;
    .abomidD1 {
      &:last-child {
        margin-right: 0;
      }
      .abm1 {
        margin: 0;
      }
      .abm2 {
        font-size: 14px;
      }
      .abm3 {
        font-size: 12px;
      }
      .abm1_1 {
        margin: 30px 0 20px 0;
      }
    }
    .lf_abomidD1 {
      position: relative;
      .abomidD2 {
        position: relative;
        width: auto;
      }
    }
  }
  .abomidD2 {
    margin-left: 0;
    font-size: 22px;
    letter-spacing: 3px;
    .abomidD2T1 {
      font-size: 12px;
    }
  }
  .abomidD2_1 {
    font-size: 18px;
    letter-spacing: 1px;
  }
  .slidecontentrow2 {
    white-space: nowrap;
    flex-wrap: wrap;
    justify-content: space-between;
    .srItem {
      width: 46%;
      flex: initial;
      padding: 10px 0;
    }
  }
  .slidecontentrow1 {
    overflow-x: initial;
    white-space: initial;
    justify-content: space-between;
    .srItem {
      padding: 10px 10px 10px 0;
      &:nth-child(2n) {
        padding-right: 0;
      }
      .psname {
        span {
          font-size: 12px;
          // transform:scale(.5);
        }
      }
    }
  }

  .abomidD2T2 {
    font-size: 12px;
    margin-left: 0;
  }
  .job_exp {
    overflow-x: initial;
    white-space: initial;
    flex-direction: column;
    .srItem {
      padding: 20px 0;
    }
  }
  .footDt2 {
    flex-direction: column;
    a {
      margin-bottom: 10px;
    }
  }
}
</style>
