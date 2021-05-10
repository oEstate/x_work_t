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
          case "特斯联":
            this.allData = [{
                T1: "Terminus",
                T2: "",
                T3: "特斯联",
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
                    ititle: "2017年",
                    class: "menuT2"
                  }]
                }, {
                  flag: false,
                  title: "室内设计",
                  mbar: [{
                    ititle: "HHD_FUN",
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
                      ititle: "Stone",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/Stone.vue"
                    },{
                      ititle: "Drop",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/Drop.vue"
                    },{
                      ititle: "Space",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/Space.vue"
                    },{
                      ititle: "Silver",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/Silver.vue"
                    },{
                      ititle: "PK22",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/PK22.vue"
                    },{
                      ititle: "Follow",
                      ititleTM: "",
                      class: "menuT4",
                      href: "/Follow.vue"
                    },
                  ]
                }],
                bytitle: "办公空间",
                cby: [{
                    type: 1,
                    imgSrc: "@/../static/imgs/case/tsl/1.jpg",
                    footerflag: ""
                  },
                  {
                    type: 2,
                    imgMap: "@/../static/imgs/case/njdx/1.jpg",
                    MT1: "TAKING OFF TO THE FUTURE",
                    MT2: "通往未来的“太空飞船”",
                    MT3: "作为中国AIoT（智能物联网）领域发展最快的“独角兽”之一，特斯联在利用AIoT提供人工智能城市解决方案的同时，也将自己位于北京的总部办公室打造成为一艘通往未来的“太空飞船”。",
                    imgSrc: "@/../static/imgs/case/tsl/2.jpg",
                    footerflag: "Drop的自然纯净成为前台区域未来感的一部分"
                  },
                  {
                    type: 3,
                    MT1: "“未来风的环境凸显了特斯联的特殊气场。”——A' Design Award",
                    MT2: "特斯联总部办公室在2018年获得了被誉为“欧洲设计界奥斯卡”的A’ Design Award大奖",
                    MT3: ""

                  },
                  {
                    type: 4,
                    array: [{
                        imgSrc: "@/../static/imgs/case/tsl/3.jpg",
                        footerflag: "极简主义的PK22虽是数十年的经典之作，在休闲空间中依然和谐"
                      },
                      {
                        imgSrc: "@/../static/imgs/case/tsl/4.jpg",
                        footerflag: "Silver办公椅与Space休闲椅无疑是最契合未来主题的选择 "
                      }

                    ]
                  },
                  {
                    type: 3,
                    MT1: "纯净之下，层次涌动",
                    MT2: "空间采用了大量弧形与曲面设计，以纯粹、干净的白色为主基调，配合细腻的灰色渐变，加上渐晕玻璃缥缈朦胧的戏剧化效果，使原本扁平的空间变得多层次而有秩序，呈现出未来感与科技感的有机融合。",
                    MT3: ""
                  },
                  {
                    type: 5,
                    array: [{
                        imgSrc: "@/../static/imgs/case/tsl/5.jpg",
                        footerflag: "曲线圆润的Follow椅给员工最舒适健康的办公环境"
                      },
                      {
                        imgSrc: "@/../static/imgs/case/tsl/6.jpg",
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
