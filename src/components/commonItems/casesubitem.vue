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
          case "牛津大学圣凯瑟琳学院":
            this.allData = [{
                T1: "ST.CATHERINE'S",
                T2: "COLLEGE",
                T3: "牛津大学圣凯瑟琳学院",
                menus: [{
                  flag: false,
                  title: "项目地点",
                  mbar: [{
                    ititle: "英国牛津郡",
                    class: "menuT2"
                  }]
                }, {
                  flag: false,
                  title: "完成时间",
                  mbar: [{
                    ititle: "1962年",
                    class: "menuT2"
                  }]
                }, {
                  flag: false,
                  title: "建筑与设计师",
                  mbar: [{
                    ititle: "Arne Jacobsen",
                    class: "menuT3"
                  }]
                }, {
                  flag: false,
                  title: "项目区域",
                  mbar: [{
                    ititle: "宴会厅、报告厅、教室、图书馆",
                    class: "menuT2"
                  }]
                }, {
                  flag: true,
                  title: "家居产品",
                  mbar: [{
                      ititle: "Series 7",
                      ititleTM: "TM",
                      class: "menuT4",
                      href: "/Series7.vue"
                    },
                    {
                      ititle: "Oxford",
                      ititleTM: "TM",
                      class: "menuT4",
                      href: "#"
                    },
                    {
                      ititle: "Swan",
                      ititleTM: "TM",
                      class: "menuT4",
                      href: "#"
                    },
                    {
                      ititle: "Table Series",
                      ititleTM: "TM",
                      class: "menuT4",
                      href: "#"
                    },
                    {
                      ititle: "Series 3300",
                      ititleTM: "TM",
                      class: "menuT4",
                      href: "#"
                    },
                  ]
                }],
                bytitle: "教育空间",
                cby: [{
                    type: 1,
                    imgSrc: "@/../static/imgs/case/njdx/St.-Cathrines-College.jpg",
                    footerflag: ""
                  },
                  {
                    type: 2,
                    imgMap: "@/../static/imgs/case/njdx/1.jpg",
                    MT1: "UNIFYINGENVIRONMENT",
                    MT2: "浑然天成--完美融合教育空间、经典建筑和自然环境的传奇经典",
                    MT3: "1957年，牛津大学（University of Oxford）最年轻也是最大的学院-圣凯瑟琳学院（St.Catherine's College）决定建造新的学院建筑，为古老的牛津大学和愈发日新月异的外界建立新的标准。",
                    imgSrc: "@/../static/imgs/case/njdx/Architecture.jpg",
                    footerflag: "Arne Jacobsen设计的教学楼建筑群"
                  },
                  {
                    type: 3,
                    MT1: "ARNE JACOBSEN的卓越设计",
                    MT2: "建筑师Arne Jacobsen接受了这一项任务，并成功完成。如今Jacobsen的设计成果已成为建筑史上一个低调的里程碑。这一项目中的宴会厅（Banquet Hall）作为其中的标志性设计，在空间布局形式与比例上延续了牛津大学标志性的礼堂风格，同时采用了轻巧明快的现代化家具，是传统与现代形成了和谐统一。",
                    MT3: ""

                  },
                  {
                    type: 4,
                    array: [{
                        imgSrc: "@/../static/imgs/case/njdx/Hall-1.jpg",
                        footerflag: ""
                      },
                      {
                        imgSrc: "@/../static/imgs/case/njdx/Hall-2.jpg",
                        footerflag: "由Series 7和Oxford打造的宴会厅。"
                      }

                    ]
                  },
                  {
                    type: 3,
                    MT1: "核心理念",
                    MT2: "圣凯瑟琳学院项目设计背后的核心理念正是让创新与传统元素和谐地共存于牛津大学校园之中",
                    MT3: ""
                  },
                  {
                    type: 5,
                    array: [{
                        imgSrc: "@/../static/imgs/case/njdx/Lecture-Theater-1.jpg",
                        footerflag: "在伯纳德·桑利报告厅（Bernard Sunley Lecture Theater）中的Series 7。"
                      },
                      {
                        imgSrc: "@/../static/imgs/case/njdx/Lecture-Theater-2.jpg",
                        footerflag: ""
                      }

                    ]
                  },
                  {
                    type: 4,
                    array: [{
                        imgSrc: "@/../static/imgs/case/njdx/Library.jpg",
                        footerflag: "结合Swan与Table Series所营造的舒适安静的图书馆借阅区。"
                      },
                      {
                        imgSrc: "@/../static/imgs/case/njdx/Hallway.jpg",
                        footerflag: "教学区走廊中由Series 3300和Table Series组成的休息区。"
                      }

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
