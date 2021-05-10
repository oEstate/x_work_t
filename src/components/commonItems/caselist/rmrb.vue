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
          case "人民日报“中央厨房”":
            this.allData = [{
                T1: "The Central Kitchen of People's ",
                T2: "Daily",
                T3: "人民日报“中央厨房”",
                menus: [{
                  flag: false,
                  title: "项目地点",
                  mbar: [{
                    ititle: "中国北京市",
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
                    ititle: "Gensler",
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
                      ititle: "Conference System",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/ConferenceSystem.vue"
                    },{
                      ititle: "Monitor System",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/MonitorSystem.vue"
                    },
                  ]
                }],
                bytitle: "办公空间",
                cby: [{
                    type: 1,
                    imgSrc: "@/../static/imgs/case/rmrb/1.jpg",
                    footerflag: ""
                  },
                  {
                    type: 2,
                    imgMap: "@/../static/imgs/case/njdx/1.jpg",
                    MT1: "CUSTOMIZE_FOR PERFECT DETAILS",
                    MT2: "定制多功能“中央厨房”的极致细节",
                    MT3: "进入媒体融合时代，各家媒体纷纷开始建设“中央厨房”，而人民日报于2017年正式运行的“中央厨房”无疑是最亮眼、最符合中央顶层设计的一个，甚至被称为媒体融合的“样板间”。北京市朝阳区金台西路2号。",
                    imgSrc: "@/../static/imgs/case/rmrb/2.jpg",
                    footerflag: "总编调度中心会议桌与天花板上的灯、地面的橙色地毯达到完美呼应"
                  },
                  {
                    type: 3,
                    MT1: "量身打造，匠心细作",
                    MT2: "空间中最为亮眼的是椭圆形的总编调度中心会议桌，通过定制化设计，外圈桌子的形状、尺寸与天花板上的灯、地面的橙色地毯达到了1:1的上下完美呼应。而多个升降显示屏和全部走线也都隐藏于桌板之下，方便使用的同时确保了桌面的整洁大气。",
                    MT3: ""

                  },
                  {
                    type: 4,
                    array: [{
                        imgSrc: "@/../static/imgs/case/rmrb/3.jpg",
                        footerflag: "总编调度中心会议桌外圈桌板可将显示屏隐藏其中"
                      },

                    ]
                  },
                  {
                    type: 3,
                    MT1: "极致细节中助力高效运转",
                    MT2: "高效无疑是这一核心平台办公空间的重要目标，沃科也极尽全力在可想见的细节设置上为高效服务。",
                    MT3: ""
                  },
                  {
                    type: 5,
                    array: [{
                        imgSrc: "@/../static/imgs/case/rmrb/4.jpg",
                        footerflag: "定制工位系统的存储空间足以放置主机、走线及其他配套设备，并能帮助散热"
                      },
                      {
                        imgSrc: "@/../static/imgs/case/rmrb/5.jpg",
                        footerflag: ""
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
