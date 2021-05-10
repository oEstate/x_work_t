<!-- 产品 -->
<template>
  <div class="productmain">
    <div class="proheader" id="proheader">
      <img src="@/../static/imgs/product/SilverAmbience2.jpg" width="100%;height:100%" alt="">
      <div class="proheaderF">
        <div class="T1">SEATING <span>座椅</span></div>
        <span class="T2">面对当下不断变化的办公模式与多样化的工作场景，怎样的座椅才能真正满足你的需求？</span>
        <span class="T3">Dealing with changing work style and diversified scenarios,</span>
        <span class="T3">are you trying to figure out the perfect seating that supports you best today?</span>
        <span class="T4"> 下滑探索更多座椅产品</span>
      </div>
    </div>
    <div class="probody">
      <div class="probodyleft">
        <div id="PBL">
          <span class="probodylefttitle">筛选座椅</span>
          <div class="iteminput">
            <span class="iteminputT1">请选择功能类型</span>
            <span class="iteminputT2" @click="choiceAllSeat">{{CASE}}</span>
          </div>
          <div :class="['itemmenu' , item.id==active?'isactive':'' ]" v-for=" (item,index)  in menusChair" :key="index"
            @click="choiceSeat(item)">
            {{item.type}}
            <span class="itemmenuY">{{item.count}}</span>
          </div>

          <div class="iteminput">
            <span class="iteminputT1">请选择适合空间</span>
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
            <img :src="item.imgSrc" style="width:180px;height:266px;cursor:pointer;" alt="" @click="tosubitem(item.route)">
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
        chairTitle: "所有座椅",
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
            type: "工作座椅",
            count: 6,
            array: [{
                id: 1,
                imgSrc: "@/../static/imgs/product/AC 5.png",
                T1: "AC 5",
                T2: "Antonio Citterio",
                route:"/AC5"
              }, {
                id: 2,
                imgSrc: "@/../static/imgs/product/H Chair.png",
                T1: "H CHAIR",
                T2: "Seven Wu"
              },
              {
                id: 3,
                imgSrc: "@/../static/imgs/product/ID Mesh.png",
                T1: "ID MESH",
                T2: "Antonio Citterio",
                route:"/IdMesh"
              },
              {
                id: 4,
                imgSrc: "@/../static/imgs/product/Pacific Chair.png",
                T1: "Pacific Chair",
                T2: "Edward Barber & Jay Osgerby",
                route:"/PacificChair"
              }, 
              {
                id: 5,
                imgSrc: "@/../static/imgs/product/Arco.png",
                T1: "ARCO",
                T2: "Asis Design"
              }, 
              {
                id: 6,
                imgSrc: "@/../static/imgs/product/PUREis3.png",
                T1: "PURE",
                T2: "b4K"
              }
            ]
          },
          {
            id: 2,
            type: "行政座椅",
            count: 6,
            array: [{
                id: 1,
                imgSrc: "@/../static/imgs/product/Grand Executive.png",
                T1: "GRAND EXECUTIVE",
                T2: "Antonio Citterio",
                route:"/GrandExecutive"
              }, {
                id: 2,
                imgSrc: "@/../static/imgs/product/ID Trim.png",
                T1: "ID TRIM",
                T2: "Antonio Citterio",
                route:"/IdTrim"
              },
              {
                id: 3,
                imgSrc: "@/../static/imgs/product/Match Executive.png",
                T1: "MATCH EXECUTIVE",
                T2: "Asis Design"
              },
              {
                id: 4,
                imgSrc: "@/../static/imgs/product/OXFORD.png",
                T1: "OXFORD",
                T2: "Jaime Hayon"
              }, {
                id: 5,
                imgSrc: "@/../static/imgs/product/Match.png",
                T1: "MATCH",
                T2: "Asis Design"
              }, {
                id: 6,
                imgSrc: "@/../static/imgs/product/VINTAGEis5.png",
                T1: "VINTAGE",
                T2: "Valker Eyesing"
              }
            ]
          },
          {
            id: 3,
            type: "会议座椅",
            count: 6,
            array: [{
                id: 1,
                imgSrc: "@/../static/imgs/product/Axos.png",
                T1: "AXOS",
                T2: "Molldesign"
              }, {
                id: 2,
                imgSrc: "@/../static/imgs/product/Mercury.png",
                T1: "Mercury",
                T2: "Bartoli Studio"
              },
              {
                id: 3,
                imgSrc: "@/../static/imgs/product/Pengus Chair.png",
                T1: "Pengus Chair",
                T2: "Asis Design"
              },
              {
                id: 4,
                imgSrc: "@/../static/imgs/product/Physix.png",
                T1: "Physix",
                T2: "Alberto Meda"
              }, {
                id: 5,
                imgSrc: "@/../static/imgs/product/Pro Chair.png",
                T1: "Pro Chair",
                T2: "Konstantin Grcic"
              }, {
                id: 6,
                imgSrc: "@/../static/imgs/product/Softshell.png",
                T1: "Softshell",
                T2: "Ronan Erwan Bouroullec",
                route:"Softshell"
              }
            ]
          },
          {
            id: 4,
            type: "培训座椅",
            count: 5,
            array: [{
                id: 1,
                imgSrc: "@/../static/imgs/product/Flexa.png",
                T1: "FLEXA CHAIR",
                T2: "Vincenzo Vinci"
              }, {
                id: 2,
                imgSrc: "@/../static/imgs/product/Rookie.png",
                T1: "Rookie",
                T2: "Konstantin Grcic",
                route:"/Rookie"
              },
              {
                id: 3,
                imgSrc: "@/../static/imgs/product/Silver.png",
                T1: "Silver",
                T2: "Hadi Teherani"
              },
              {
                id: 4,
                imgSrc: "@/../static/imgs/product/StoolTool.png",
                T1: "Stool-Tool",
                T2: "Konstantin Grcic",
                route:"/StoolTool"
              }, {
                id: 5,
                imgSrc: "@/../static/imgs/product/Tip Ton.png",
                T1: "Tip Ton",
                T2: "Edward Barber & Jay Osgerby",
                route:"/TipTon"
              }
            ]
          }
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
            type: "高度可调节",
            count: 6,
            array: [{
                id: 1,
                imgSrc: "@/../static/imgs/product/Grand Executive.png",
                T1: "GRAND EXECUTIVE",
                T2: "Antonio Citterio",
                route:"/GrandExecutive"
              }, {
                id: 2,
                imgSrc: "@/../static/imgs/product/ID Trim.png",
                T1: "ID TRIM",
                T2: "Antonio Citterio",
                route:"/IdTrim"
              },
              {
                id: 3,
                imgSrc: "@/../static/imgs/product/Match Executive.png",
                T1: "MATCH EXECUTIVE",
                T2: "Asis Design"
              },
              {
                id: 4,
                imgSrc: "@/../static/imgs/product/OXFORD.png",
                T1: "OXFORD",
                T2: "Jaime Hayon"
              }, {
                id: 5,
                imgSrc: "@/../static/imgs/product/Match.png",
                T1: "MATCH",
                T2: "Asis Design"
              }, {
                id: 6,
                imgSrc: "@/../static/imgs/product/VINTAGEis5.png",
                T1: "VINTAGE",
                T2: "Valker Eyesing"
              }
            ]
          },
          {
            id: 2,
            type: "可堆叠",

          },
          {
            id: 3,
            type: "可移动",

          },
          {
            id: 4,
            type: "椅壳软包",

          },
          {
            id: 5,
            type: "有枕头",

          }
        ],
        allchairs: [{
            id: 1,
            imgSrc: "@/../static/imgs/product/AC 5.png",
            T1: "AC 5",
            T2: "Antonio Citterio",
            route:"/AC5"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Arco.png",
            T1: "ARCO",
            T2: "Asis Design"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Axos.png",
            T1: "AXOS",
            T2: "Molldesign"
          }

          ,
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Flexa.png",
            T1: "FLEXA CHAIR",
            T2: "Vincenzo Vinci"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Grand Executive.png",
            T1: "GRAND EXECUTIVE",
            T2: "Antonio Citterio",
            route:"/GrandExecutive"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/H Chair.png",
            T1: "H CHAIR",
            T2: "Seven Wu"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/ID Mesh.png",
            T1: "ID MESH",
            T2: "Antonio Citterio",
            route:"/IdMesh"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/ID Trim.png",
            T1: "ID TRIM",
            T2: "Antonio Citterio",
            route:"/IdTrim"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Match.png",
            T1: "MATCH",
            T2: "Asis Design"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Match Executive.png",
            T1: "MATCH EXECUTIVE",
            T2: "Asis Design"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Mercury.png",
            T1: "Mercury",
            T2: "Bartoli Studio"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/OXFORD.png",
            T1: "OXFORD",
            T2: "Jaime Hayon"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Pacific Chair.png",
            T1: "Pacific Chair",
            T2: "Edward Barber & Jay Osgerby",
            route:"/PacificChair"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Pengus Chair.png",
            T1: "Pengus Chair",
            T2: "Asis Design"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Physix.png",
            T1: "Physix",
            T2: "Alberto Meda"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Pro Chair.png",
            T1: "Pro Chair",
            T2: "Konstantin Grcic"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/PUREis3.png",
            T1: "PURE",
            T2: "b4K"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Rookie.png",
            T1: "Rookie",
            T2: "Konstantin Grcic",
            route:"/Rookie"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Silver.png",
            T1: "Silver",
            T2: "Hadi Teherani"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Softshell.png",
            T1: "Softshell",
            T2: "Ronan Erwan Bouroullec",
            route:"Softshell"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/StoolTool.png",
            T1: "Stool-Tool",
            T2: "Konstantin Grcic",
            route:"/StoolTool"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/Tip Ton.png",
            T1: "Tip Ton",
            T2: "Edward Barber & Jay Osgerby",
            route:"/TipTon"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/VINTAGEis5.png",
            T1: "VINTAGE",
            T2: "Valker Eyesing"
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
        this.chairTitle = "所有座椅";
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
