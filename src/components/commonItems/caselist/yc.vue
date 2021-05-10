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
          case "运城职业技术学院图书馆空间方案":
            this.allData = [{
                T1: "Yuncheng Polytechnic College ",
                T2: "Library",
                T3: "运城职业技术学院图书馆",
                menus: [{
                  flag: false,
                  title: "项目地点",
                  mbar: [{
                    ititle: "中国山西省",
                    class: "menuT2"
                  }]
                }, {
                  flag: false,
                  title: "完成时间",
                  mbar: [{
                    ititle: "2016年",
                    class: "menuT2"
                  }]
                }, {
                  flag: false,
                  title: "室内设计",
                  mbar: [{
                    ititle: "021image",
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
                      ititle: "Pro",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/Pro.vue"
                    },{
                      ititle: "Funktus",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/Funktus.vue"
                    },{
                      ititle: "Bondo STC",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/Bondo.vue"
                    },{
                      ititle: "Rosebud",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/Rosebud.vue"
                    },{
                      ititle: "TiTi",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/TiTi.vue"
                    },
                  ]
                }],
                bytitle: "教育空间",
                cby: [{
                    type: 1,
                    imgSrc: "@/../static/imgs/case/yc/1.jpg",
                    footerflag: ""
                  },
                  {
                    type: 2,
                    imgMap: "@/../static/imgs/case/njdx/1.jpg",
                    MT1: "REDEFIGNE A LIBRARY",
                    MT2: "图书馆的新定位",
                    MT3: "秉承“做学合一，厚实融通”的校训精神，运城职业技术学院将帮助学生更好地掌握应对未来的实践性素养，作为培养人才的一大核心理念。其图书馆共占四层，可以为学生提供充足的图书阅览区、专注学习区、交流协作区、放松休闲区，以及用于集体活动的多个报告厅。经济技术开发区学苑北路2555号。",
                    imgSrc: "@/../static/imgs/case/yc/2.jpg",
                    footerflag: "阳光充沛的天井下，Pro座椅鼓励学生在阅读时保持活跃坐姿"
                  },
                  {
                    type: 3,
                    MT1: "重新定义",
                    MT2: "基于调研结果与国内外教育相关资料，沃科深刻理解到，目前图书馆的角色早已不局限于学习的空间，同时也承担着协作、交流、社交等功能。",
                    MT3: ""

                  },
                  {
                    type: 4,
                    array: [{
                        imgSrc: "@/../static/imgs/case/yc/3.jpg",
                        footerflag: "多样化的沙发与桌椅组合，响应学生不同的协作或学习模式"
                      },
                      {
                        imgSrc: "@/../static/imgs/case/yc/4.jpg",
                        footerflag: "随处可见的多种沙发组合形式，让每个角落都成为可以学习的地方 "
                      }

                    ]
                  },
                  {
                    type: 3,
                    MT1: "灵活响应",
                    MT2: "学习和交流的形式并不是一成不变的，所以沃科为运城职业学院图书馆配备了多样化的沙发、桌椅组合。让空间响应学生不同的协作或学习模式，用灵活响应来激活灵感创意。",
                    MT3: ""
                  },
                  {
                    type: 5,
                    array: [{
                        imgSrc: "@/../static/imgs/case/yc/5.jpg",
                        footerflag: "公共区域中利用沙发背巧妙地圈出一片交流空间"
                      },

                    ]
                  },
                  {
                    type: 3,
                    MT1: "空间利用",
                    MT2: "共计四层的图书馆中，沃科希望能够充分利用好每一块空间，在保证大流量依然顺畅通过的同时，让每一块空间都是学习空间。图书馆内随处可见各种形式的沙发组合，让每个角落都成为可以学习的地方，学生可以在灵感来临的瞬间找到称心的地方进行交流。",
                    MT3: ""
                  },
                  {
                    type: 5,
                    array: [{
                        imgSrc: "@/../static/imgs/case/yc/6.jpg",
                        footerflag: "原木色搭配静谧自然的蓝色，在报告厅与会议空间营造出轻松舒适的氛围"
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
