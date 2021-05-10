<!-- 产品 -->
<template>
  <div class="productmain">
    <div class="proheader" id="proheader">
      <img src="@/../static/imgs/product/space/space.jpg" width="100%;height:100%" alt="">
      <div class="proheaderF">
        <div class="T1">SPACE DIVISION <span>空间分隔</span></div>
        <span class="T2">整片的开放空间中， 给你创造独立小空间的自由。</span>
        <span class="T3">Now you are free to create independent small spaces in an open office.</span>
        <span class="T3"></span>
        <span class="T4"></span>
      </div>
    </div>
    <div class="probody">
      <div class="probodyleft">
        <div id="PBL">
          <span class="probodylefttitle">筛选空间分隔</span>
          <!-- <div class="iteminput">
            <span class="iteminputT1">请选择功能类型</span>
            <span class="iteminputT2" @click="choiceAllSeat">{{CASE}}</span>
          </div>
          <div :class="['itemmenu' , item.id==active?'isactive':'' ]" v-for=" (item,index)  in menusChair" :key="index"
            @click="choiceSeat(item)">
            {{item.type}}
            <span class="itemmenuY">{{item.count}}</span>
          </div> -->

          <div class="iteminput">
            <span class="iteminputT1">请选择适用空间</span>
            <span class="iteminputT2" @click="choiceAllSpace">{{CASP}}</span>
          </div>
          <div :class="['itemmenu' ,item.id==active1?'isactive':'' ]" v-for="  (item,i)  in menusSpace" :key="'index'+i"
            @click="choiceSpace(item)">
            {{item.type}}

          </div>
          <div class="iteminput">
            <span class="iteminputT1">请选择产品特征</span>
            <span class="iteminputT2" @click="choiceAllType">{{CATY}}</span>
          </div>
          <div :class="['itemmenu' ,item.id==active2?'isactive':'' ]" v-for="  (item,e) in menusType" :key="'inde'+e"
            @click="choiceType(item)">
            {{item.type}}

          </div>
        </div>
      </div>
      <div class="probodyright">
        <div class="rightselectDiv">
          <el-select v-model="pxvalue" placeholder="请选择" class="rightselect" :clearable="true" @change="SortChair">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="probodyrighttitle">
          {{chairTitle}}
          <span>{{chairCount}}</span>
        </div>
        <div class="chairs">
          <div class="chairitem" v-for=" (item,index)  in chairs" :key="index">
            <img :src="item.imgSrc" style="width:160px;height:240px;cursor:pointer;" alt="" @click="tosubitem(item.route)">
            <span class="chairitemT1" @click="tosubitem(item.route)">{{item.T1}}</span>
            <span class="chairitemT2" @click="tosubitem(item.route)">{{item.T2}}</span>
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
        CASE: "选择全部",
        CASP: "选择全部",
        CATY: "选择全部",
        chairTitle: "所有空间分隔家具",
        chairCount: "",
        active: -1,
        active1: -1,
        active2: -1,
        options: [{
          value: '1',
          label: '按首字母A~Z顺序排序'
        }, {
          value: '2',
          label: '按首字母Z~A顺序排序'
        }],
        pxvalue: '',

        menusChair: [{
            id: 1,
            type: "空间分隔家具",
            count: 4,
            array: [{
                id: 1,
                imgSrc: "@/../static/imgs/product/AC 5.png",
                T1: "ALGUE",
                T2: "Ronan & Erwan Bouroullec"
              }, {
                id: 2,
                imgSrc: "@/../static/imgs/product/AC 5.png",
                T1: "CLOUDS",
                T2: "Ronan & Erwan Bouroullec"
              },
              {
                id: 3,
                imgSrc: "@/../static/imgs/product/AC 5.png",
                T1: "POP",
                T2: "Gioia Yang"
              },
              {
                id: 4,
                imgSrc: "@/../static/imgs/product/AC 5.png",
                T1: "UNI",
                T2: "Mikko He"
              },
            ]
          },
        ],
        menusSpace: [{
            id: 1,
            type: "办公空间",

          },
          {
            id: 2,
            type: "教育空间",

          },
          {
            id: 3,
            type: "酒店空间",

          },
          {
            id: 4,
            type: "居家空间",

          },
          {
            id: 5,
            type: "商业空间",

          }
        ],
        menusType: [{
            id: 1,
            type: "多场合组合",

          },
          {
            id: 2,
            type: "含电源",

          },
          {
            id: 3,
            type: "可堆叠",

          },
          {
            id: 4,
            type: "可移动",

          }
        ],
        allchairs: [{
            id: 1,
            imgSrc: "@/../static/imgs/product/space/Algue1.png",
            T1: "ALGUE",
            T2: "Ronan & Erwan Bouroullec",
            route:"/Algue"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/space/Clouds.png",
            T1: "CLOUDS",
            T2: "Ronan & Erwan Bouroullec",
            route:"Clouds"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/space/Pop.png",
            T1: "POP",
            T2: "Gioia Yang"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/space/Uni.png",
            T1: "UNI",
            T2: "Mikko He"
          }
        ],
        chairs: []
      };
    },

    components: {},

    computed: {},

    mounted() {
      this.$store.state.active=2;
      this.chairCount = this.getChairCount();
      this.chairs = this.allchairs;
      this.atPosition();
    },

    methods: {
      tosubitem(e){
        this.$router.push({path:e})
      },
      atPosition(){
        $(window).scroll(function () {
               var scrolH = document.documentElement.scrollTop;
              if (scrolH > $("#proheader").height()) {
                $("#PBL").css({  "position": "fixed", "top": "10%" })
              } else {
                $("#PBL").css({ "position": "unset"  })
              }
            })
      },
      
      isContainStr(str, val) {
        if (str.indexOf(val) != -1) {
          return true
        } else {
          return false
        }
      },
      SortChair(e) {
        if (e == '') {
          if (this.active != -1) {
            this.chairs = this.menusChair[this.active - 1].array;
          } else {
            this.chairs = this.allchairs
          }
        } else {

          let str = []
          for (let index = 0; index < this.chairs.length; index++) {
            const element = this.chairs[index];
            str.push(element.T1)
          }
          if (e == 1) {
            str = str.sort(function (s, t) {
              let a = s.toLowerCase();
              let b = t.toLowerCase();
              if (a < b) return -1;
              if (a > b) return 1;
              return 0;
            });

          } else {
            str = str.sort(function (s, t) {
              let a = s.toLowerCase();
              let b = t.toLowerCase();
              if (a < b) return 1;
              if (a > b) return -1;
              return 0;
            });
          }
          let over = []
          for (let index = 0; index < str.length; index++) {
            const element = str[index];
            for (let index = 0; index < this.chairs.length; index++) {
              const ele = this.chairs[index];
              if (ele.T1 == element) {
                over.push(ele)
              }
            }
          }
          this.chairs = over;
        }

      },
      getChairCount() {
        let count = 0;
        for (let index = 0; index < this.menusChair.length; index++) {
          const element = this.menusChair[index];
          count += element.count;
        }
        return count;
      },
      choiceSeat(e) {
        this.active = e.id;
        this.chairTitle = e.type;
        this.chairCount = e.count;
        this.chairs = e.array;
        this.SortChair(this.pxvalue);
        this.CASE = "重新选择"
        // this.active=[1,2,3,4]

      },
      choiceAllSeat() {
        this.active = -1;
        this.chairTitle = "所有空间分隔家具";
        this.chairCount = this.getChairCount();
        this.chairs = this.allchairs;
        this.SortChair(this.pxvalue);
        this.CASE = "选择全部"
      },
      choiceSpace(e) {
        this.active1 = e.id;
        this.CASP = "重新选择"
      },
      choiceAllSpace() {
        this.active1 = -1;
        this.CASP = "选择全部"
      },
      choiceType(e) {
        this.active2 = e.id;
        this.CATY = "重新选择"
      },
      choiceAllType() {
        this.active2 = -1;
        this.CATY = "选择全部"
      }
    }
  }

</script>
<style scoped>
  .isactive {
    background: linear-gradient(to right, #D7A79D, #D0705A) !important;
    color: #fff !important;
  }

  .rightselectDiv {
    position: absolute;
    right: 0;

  }

  .rightselect {
    width: 210px;
  }

  .chairitemT1 {
    font-size: 20px;
    color: #000;
    display: flex;
    font-weight: bold;
    margin: 5px;
    cursor: pointer;
  }

  .chairitemT1:hover{
    color: #AA6963;
  }

  .chairitemT2 {
    font-size: 15px;
    color: #000;
    display: flex;
    font-weight: bold;

  }

  .chairitem {

    display: flex;
    flex-direction: column;
    margin: 50px 50px;
    justify-content: center;
    align-items: center;

  }

  .chairs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: center; */
  }

  .probodyrighttitle {
    font-size: 25px;
    color: #000;
    display: flex;
    font-weight: bold;
  }

  .probodyrighttitle span {
    font-size: 14px;
    color: #000;

  }

  .probodyright {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
  }

  .itemmenuY {
    font-size: 12px;
    margin-top: -5px;
  }

  .itemmenu {
    height: 33px;
    background: #fff;
    display: flex;
    font-size: 16px;
    color: #000;
    cursor: pointer;
    align-items: center;
    padding-left: 20px;
    font-weight: bold;
    margin-bottom: 2px;

  }

  .iteminputT2 {
    position: absolute;
    right: 0;
    font-size: 12px;
    color: #968A84;
    cursor: pointer;
  }

  .iteminputT1 {
    font-size: 12px;
    color: #DCA69A;

  }

  .iteminput {
    border-bottom: 1px solid #DCA69A;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 5px 0;
    position: relative;
    display: flex;
    align-items: center;

  }

  .probodylefttitle {
    font-size: 16px;
    color: #968A84;
  }

  .probodyleft {
    width: 270px;
    height: 100%;

  }

  #PBL {
    width: 270px;
    display: flex;
    flex-direction: column;

  }

  .probody {
    display: flex;
    flex-direction: row;
    padding: 50px 40px;
    background: #F9F9F9;
    padding-bottom: 150px;
  }

  .T4 {
    color: coral;
    font-size: 15px;
    margin-top: 40px;
  }

  .T3 {
    font-size: 12px;
    color: #fff;


  }

  .T2 {
    font-size: 18px;
    color: #fff;
    font-weight: 550;
    width: 420px;
  }

  .T1 {
    font-size: 45px;
    letter-spacing: 15px;
    color: #fff;
    font-weight: bold;
    display: flex;
  }

  .T1 span {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0px;
  }

  .proheader {
    position: relative;
  }

  .proheaderF {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 140px;
    left: 140px;
  }

  .productmain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;


  }

</style>
