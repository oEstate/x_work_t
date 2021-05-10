<!--  -->
<template>
  <div class="casecontainer">
    <div class="casehaby" v-for="(item,index) in allData" :key="index">
      <div class="ciheader">
        <div class="ciheaderleft">
          <span class="CL1">{{item.T1}}</span>
          <div class="CL1">{{item.T2}} <span>{{item.T3}}</span> </div>
        </div>
        <div class="ciheaderright">
          <div class="ciheaderrightitem" v-for="(ite,inde) in item.menus" :key="inde">
            <span class="menuT1">{{ite.title}}</span>
            <div v-if="!ite.flag">
              <div :class="it.class" v-for="(it,ind) in ite.mbar" :key="ind"> {{it.ititle}} </div>
            </div>
            <div v-else>
              <div :class="it.class" v-for="(it,ind) in ite.mbar" :key="ind">
                <span class="crrtitem"><a :href="it.href">{{it.ititle}}</a> </span>
                <div class="TM TM1">{{it.ititleTM}}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="cibody">
        <div class="cibodytitle">{{item.bytitle}}</div>
        <div v-for="(cibodyitem,cibodyindex) in item.cby" :key="cibodyindex">

          <div class="type1" v-if="cibodyitem.type==1">
            <div class="cbyitemmain">
              <div class="cbyitemimg">
                <img :src="cibodyitem.imgSrc" style="width:100%;height:100%" alt="">
              </div>
              <div class="footer">{{cibodyitem.footerflag}}</div>
            </div>
          </div>
          <div class="type2" v-else-if="cibodyitem.type==2">
            <div class="cbymap">
              <img :src="cibodyitem.imgMap" style="width:100%;height:100%" alt="">
            </div>
            <div class="cbymid">
              <div class="T2M1">{{cibodyitem.MT1}}</div>
              <div class="T2M2">{{cibodyitem.MT2}}</div>
              <div class="T2M3">{{cibodyitem.MT3}}</div>
            </div>
            <div class="cbymid">
              <div class="cbyitemmain">
                <div class="cbyitemimg">
                  <img :src="cibodyitem.imgSrc" style="width:100%;height:100%" alt="">
                </div>
                <div class="footer">{{cibodyitem.footerflag}}</div>
              </div>
            </div>
          </div>
          <div class="type3" v-else-if="cibodyitem.type==3">
            <div class="cbymap"> </div>
            <div class="cbymid"> </div>
            <div class="cbymid">
              <div class="T2M1">{{cibodyitem.MT1}}</div>
              <div class="T2M2">{{cibodyitem.MT2}}</div>
              <div class="T2M3">{{cibodyitem.MT3}}</div>
            </div>
          </div>
          <div class="type4" v-else-if="cibodyitem.type==4">
            <div class="cbymap"> </div>
            <div class="cbymid">
              <div class="cbyitemmain" v-for="(ciitem,ciindex) in cibodyitem.array" :key="ciindex">
                <div class="cbyitemimg">
                  <img :src="ciitem.imgSrc" style="width:100%;height:100%" alt="">
                </div>
                <div class="footer">{{ciitem.footerflag}}</div>
              </div>

            </div>
          </div>
          <div class="type5" v-else-if="cibodyitem.type==5">
            <div class="cbymap"> </div>
            <div class="cbymid" v-for="(ciitem,ciindex) in cibodyitem.array" :key="ciindex">
              <div class="cbyitemmain">
                <div class="cbyitemimg">
                  <img :src="ciitem.imgSrc" style="width:100%;height:100%" alt="">
                </div>
                <div class="footer">{{ciitem.footerflag}}</div>
              </div>
            </div>

          </div>

        </div>
        <div class="casebyfooter" v-if="index!=allData.length-1">
          <div class="footerx"></div>
          <span class="xygal">下一个案例</span>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
import '@/../static/css/caseCommon.css';
  export default {
    data() {
      return {
        allData: []
      };
    },

    components: {},

    computed: {},

    mounted() {
      this.init()

    },

    methods: {
      init() {
        switch (this.$route.query.title) {
          case "乐高之家":
            this.allData = [{
                T1: "Lego House",
                T2: "",
                T3: "乐高之家",
                menus: [{
                  flag: false,
                  title: "项目地点",
                  mbar: [{
                    ititle: "丹麦比隆",
                    class: "menuT2"
                  }]
                }, {
                  flag: false,
                  title: "完成时间",
                  mbar: [{
                    ititle: "2017年",
                    class: "menuT2"
                  }]
                }, {
                  flag: false,
                  title: "室内设计",
                  mbar: [{
                    ititle: "Bjarke Ingels Group",
                    class: "menuT3"
                  }]
                }, 
                {
                  flag: false,
                  title: "项目区域",
                  mbar: [{
                    ititle: "大厅",
                    class: "menuT2"
                  }]
                }, 
                {
                  flag: true,
                  title: "主要产品",
                  mbar: [{
                      ititle: "Grand Prix",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/GrandPrix.vue"
                    },{
                      ititle: "Circular",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/Circular.vue"
                    },
                  ]
                }],
                bytitle: "商业空间",
                cby: [{
                    type: 1,
                    imgSrc: "@/../static/imgs/case/lgzj/1.jpg",
                    footerflag: ""
                  },
                  {
                    type: 2,
                    imgMap: "@/../static/imgs/case/njdx/1.jpg",
                    MT1: "HOME OF THE BRICK",
                    MT2: "积木搭建起的梦想之屋",
                    MT3: "位于乐高的故乡——丹麦比隆的乐高之家是世界上最大的玩具屋，占地12000m2，拥有多达2500万块乐高积木，还有用乐高及模具搭成的喷泉和巨型动植物模型。",
                    imgSrc: "@/../static/imgs/case/lgzj/2.jpg",
                    footerflag: "保利•未来大都汇位于北京昌平未来科学城，其样板层的设计承载了新一代总部办公、联合办公、创意办公聚集地的未来概念。以造城理念打造新一代天空商务空间，保利•未来大都汇所营造的“天空之城”在100米高空之上，以建筑赋予工作与生活更多可能。"
                  },
                  {
                    type: 3,
                    MT1: "梦想之屋",
                    MT2: "这是一个满足所有年龄段的孩子们的梦想之屋，让孩子们可以在其中通过乐高积木，充分发挥创造力，探索世界的无限可能。",
                    MT3: ""

                  },
                  {
                    type: 4,
                    array: [{
                        imgSrc: "@/../static/imgs/case/lgzj/3.jpg",
                        footerflag: ""
                      }
                      ,
                      {
                        imgSrc: "@/../static/imgs/case/lgzj/4.jpg",
                        footerflag: "Grand Prix的灵巧中又带有一丝童趣，完美融入这个大人小孩共同的梦想乐园"
                      }
                      ,
                    ]
                  },
                  {
                    type: 3,
                    MT1: "多彩意趣",
                    MT2: "Fritz Hansen的简介而富有生动意趣的家具设计帮助比隆乐高之家完成了这一充满玩乐趣味的多彩空间。",
                    MT3: ""
                  },
                  {
                    type: 5,
                    array: [{
                        imgSrc: "@/../static/imgs/case/lgzj/5.jpg",
                        footerflag: ""
                      },

                    ]
                  },
                  
                ]

              },
              // {
              //   T1: "ST.CATHERINE'S",
              //   T2: "COLLEGE",
              //   T3: "牛津大学圣凯瑟琳学院",
              //   menus: [{
              //     flag: false,
              //     title: "项目地点",
              //     mbar: [{
              //       ititle: "英国牛津郡",
              //       class: "menuT2"
              //     }]
              //   }, {
              //     flag: false,
              //     title: "完成时间",
              //     mbar: [{
              //       ititle: "1962年",
              //       class: "menuT2"
              //     }]
              //   }, {
              //     flag: false,
              //     title: "建筑与设计师",
              //     mbar: [{
              //       ititle: "Arne Jacobsen",
              //       class: "menuT3"
              //     }]
              //   }, {
              //     flag: false,
              //     title: "项目区域",
              //     mbar: [{
              //       ititle: "宴会厅、报告厅、教室、图书馆",
              //       class: "menuT2"
              //     }]
              //   }, {
              //     flag: true,
              //     title: "家居产品",
              //     mbar: [{
              //         ititle: "Series 7",
              //         ititleTM: "TM",
              //         class: "menuT4",
              //         href: "https://www.baidu.com/"
              //       },
              //       {
              //         ititle: "Oxford",
              //         ititleTM: "TM",
              //         class: "menuT4",
              //         href: "https://www.hao123.com/"
              //       },
              //       {
              //         ititle: "Swan",
              //         ititleTM: "TM",
              //         class: "menuT4",
              //         href: "https://www.hao123.com/"
              //       },
              //       {
              //         ititle: "Table Series",
              //         ititleTM: "TM",
              //         class: "menuT4",
              //         href: "https://www.hao123.com/"
              //       },
              //       {
              //         ititle: "Series 3300",
              //         ititleTM: "TM",
              //         class: "menuT4",
              //         href: "https://www.hao123.com/"
              //       },
              //     ]
              //   }],
              //   bytitle: "办公空间",
              //   cby: [{
              //       type: 1,
              //       imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
              //       footerflag: "由x-work提供"
              //     },
              //     {
              //       type: 2,
              //       imgMap: "@/../static/imgs/case/Amorepacific.jpg",
              //       MT1: "UNIFYINGENVIRONMENT",
              //       MT2: "浑然天成--完美融合教育空间、经典建筑和自然环境的传奇经典",
              //       MT3: "由x-work提供",
              //       imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
              //       footerflag: "由x-work提供"
              //     },
              //     {
              //       type: 3,
              //       MT1: "ARNE JACOBSEN的卓越设计",
              //       MT2: "建筑师................",
              //       MT3: ""
              //     },
              //     {
              //       type: 4,
              //       array: [{
              //           imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
              //           footerflag: ""
              //         },
              //         {
              //           imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
              //           footerflag: "由x-work提供"
              //         }

              //       ]
              //     },
              //     {
              //       type: 3,
              //       MT1: "核心理念",
              //       MT2: "建筑师................",
              //       MT3: ""
              //     },
              //     {
              //       type: 5,
              //       array: [{
              //           imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
              //           footerflag: "由x-work提供"
              //         },
              //         {
              //           imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
              //           footerflag: ""
              //         }

              //       ]
              //     },
              //     {
              //       type: 4,
              //       array: [{
              //           imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
              //           footerflag: "由x-work提供"
              //         },
              //         {
              //           imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
              //           footerflag: "由x-work提供"
              //         }

              //       ]
              //     },
              //   ]

              // },
            ]


            break;

          default:
            break;
        }


      }
    }
  }

</script>
<style scoped>
 

</style>
