<!-- 产品 -->
<template>
  <div class="productmain">
    <div class="proheader" id="proheader">
      <img src="@/../static/imgs/product/SilverAmbience2.jpg" width="100%;height:100%" alt="">
      <div class="proheaderF">
        <div class="T1 mEN">SEATING <span>座椅</span></div>
        <span class="T2">面对当下不断变化的办公模式与多样化的工作场景，怎样的座椅才能真正满足你的需求？</span>
        <span class="T3">Dealing with changing work style and diversified scenarios,</span>
        <span class="T3">are you trying to figure out the perfect seating that supports you best today?</span>
        <span class="T4"> </span>
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
          <div :class="['itemmenu' , checkSelect(item)?'isactive':'' ]" v-for=" (item,index)  in menusChair"
            :key="index" @click="choiceSeat(item)">
            {{item.type}}
            <span class="itemmenuY">{{item.count}}</span>
          </div>

          <div class="iteminput">
            <span class="iteminputT1">请选择适合空间</span>
            <span class="iteminputT2" @click="choiceAllSpace">{{CASP}}</span>
          </div>
          <div :class="['itemmenu' ,checkSelect(item)?'isactive':'' ]" v-for="  (item,i)  in menusSpace"
            :key="'index'+i" @click="choiceSeat(item)">
            {{item.type}}

          </div>
          <div class="iteminput">
            <span class="iteminputT1">请选择产品特征</span>
            <span class="iteminputT2" @click="choiceAllType">{{CATY}}</span>
          </div>
          <div :class="['itemmenu' ,checkSelect(item)?'isactive':'' ]" v-for="  (item,e) in menusType" :key="'inde'+e"
            @click="choiceSeat(item)">
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
            <img :src="item.imgSrc" style="width:200px;height:200px;cursor:pointer;" alt=""
              @click="tosubitem(item.route)" @mouseenter="mouseenter(item)" @mouseleave="mouseleave(item)">
            <span class="chairitemT1 mEN" @click="tosubitem(item.route)">{{item.T1}}</span>
            <span class="chairitemT2 mEN" @click="tosubitem(item.route)">{{item.T2}}</span>
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
        active: [],

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
            flag: "C1",

          },
          {
            id: 2,
            type: "行政座椅",
            count: 6,
            flag: "C2",

          },
          {
            id: 3,
            type: "会议座椅",
            count: 6,
            flag: "C3",

          },
          {
            id: 4,
            type: "培训座椅",
            count: 5,
            flag: "C4",

          }
        ],
        menusSpace: [{
            id: 1,
            type: "办公空间",
            flag: "S1",
          },
          {
            id: 2,
            type: "教育空间",
            flag: "S2",
          },
          {
            id: 3,
            type: "酒店空间",
            flag: "S3",
          },
          {
            id: 4,
            type: "居家空间",
            flag: "S4",
          },
          {
            id: 5,
            type: "商业空间",
            flag: "S5",
          }
        ],
        menusType: [{
            id: 1,
            type: "高度可调节",
            flag: "T1",
          },
          {
            id: 2,
            type: "可堆叠",
            flag: "T2",
          },
          {
            id: 3,
            type: "可移动",
            flag: "T3",
          },
          {
            id: 4,
            type: "椅壳软包",
            flag: "T4",
          },
          {
            id: 5,
            type: "有枕头",
            flag: "T5",
          }
        ],
        allchairs: [{
            id: 1,
            imgSrc: "@/../static/imgs/product/chair/AC 5.png",
            hoverimg:"@/../static/imgs/product/chair/AC5.jpg",
            T1: "AC 5",
            T2: "Antonio Citterio",
            route: "/AC5",
            flag: ["C1", "S1", "S3", "S4", "T1", "T3", "T4"]
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/chair/Arco.png",
            hoverimg:"@/../static/imgs/product/chair/Arco.jpg",
            T1: "ARCO",
            T2: "Asis Design",
            route: "/Arco",
            flag: ["C1", "S1", "S3", "S4", "T1", "T3", "T4"]
          },
          {
            id: 3,
            imgSrc: "@/../static/imgs/product/chair/Axos.png",
            hoverimg:"@/../static/imgs/product/chair/Axos.jpg",
            T1: "AXOS",
            T2: "Molldesign",
            route: "/Axos",
            flag: ["C3", "S1", "S3", "S4", "T1", "T3", "T4", "T5"]
          }

          ,
          {
            id: 4,
            imgSrc: "@/../static/imgs/product/chair/Flexa.png",
            hoverimg:"@/../static/imgs/product/chair/FLX.jpg",
            T1: "FLX",
            T2: "Vincenzo Vinci",
            route: "/Flx",
            flag: ["C4", "S1", "S2", "S4", "S5", "T2", "T3"]
          },
          {
            id: 5,
            imgSrc: "@/../static/imgs/product/chair/Grand Executive.png",
            hoverimg:"@/../static/imgs/product/chair/Grand Executive.jpg",
            T1: "GRAND EXECUTIVE",
            T2: "Antonio Citterio",
            route: "/GrandExecutive",
            flag: ["C2", "S1", "S3", "S4", "T1", "T3", "T4", "T5"]
          },
          {
            id: 6,
            imgSrc: "@/../static/imgs/product/chair/H Chair.png",
            hoverimg:"@/../static/imgs/product/chair/H-Chair.jpg",
            T1: "H CHAIR",
            T2: "Seven Wu",
            route: "/HChair",
            flag: ["C1", "S1", "S3", "S4", "T1", "T3"]
          },
          {
            id: 7,
            imgSrc: "@/../static/imgs/product/chair/ID Mesh.png",
            hoverimg:"@/../static/imgs/product/chair/ID Mesh.jpg",
            T1: "ID MESH",
            T2: "Antonio Citterio",
            route: "/IdMesh",
            flag: ["C1", "S1", "S3", "S4", "T1", "T3", "T4", "T5"]
          },
          {
            id: 8,
            imgSrc: "@/../static/imgs/product/chair/ID Trim.png",
            hoverimg:"@/../static/imgs/product/chair/ID Trim.jpg",
            T1: "ID TRIM",
            T2: "Antonio Citterio",
            route: "/IdTrim",
            flag: ["C2", "S1", "S3", "S4", "T1", "T3", "T4", "T5"]
          },
          {
            id: 9,
            imgSrc: "@/../static/imgs/product/chair/Match.png",
            hoverimg:"@/../static/imgs/product/chair/Match.jpg",
            T1: "MATCH",
            T2: "Asis Design",
            route: "/Match",
            flag: ["C2", "S1", "S3", "S4", "S5", "T1", "T3", "T5"]
          },
          {
            id: 10,
            imgSrc: "@/../static/imgs/product/chair/Match Executive.png",
            hoverimg:"@/../static/imgs/product/chair/Match-Executive.jpg",
            T1: "MATCH EXECUTIVE",
            T2: "Asis Design",
            route: "/MatchExcutive",
            flag: ["C2", "S1", "S3", "S4", "T1", "T3", "T4", "T5"]
          },
          {
            id: 11,
            imgSrc: "@/../static/imgs/product/chair/Mercury.png",
            hoverimg:"@/../static/imgs/product/chair/Mercury.jpg",
            T1: "Mercury",
            T2: "Bartoli Studio",
            route: "/Mercury",
            flag: ["C3", "S1", "S2", "S3", "S4", "S5", "T1", "T3"]
          },
          {
            id: 12,
            imgSrc: "@/../static/imgs/product/chair/OXFORD.png",
            hoverimg:"@/../static/imgs/product/chair/Oxford.jpg",
            T1: "OXFORD",
            T2: "Jaime Hayon",
            route: "/Oxford",
            flag: ["C2", "S1", "S4", "T1", "T3", "T4"]
          },
          {
            id: 13,
            imgSrc: "@/../static/imgs/product/chair/Pacific Chair.png",
            hoverimg:"@/../static/imgs/product/chair/Pacific Chair.jpg",
            T1: "Pacific Chair",
            T2: "Edward Barber & Jay Osgerby",
            route: "/PacificChair",
            flag: ["C1", "S1", "S4", "T1", "T3", "T4"]
          },
          {
            id: 14,
            imgSrc: "@/../static/imgs/product/chair/Pengus Chair.png",
            hoverimg:"@/../static/imgs/product/chair/Pengus.jpg",
            T1: "Pengus Chair",
            T2: "Asis Design",
            route: "/Pengus",
            flag: ["C3", "S1", "S2", "S3", "S4", "S5", "T2"]
          },
          {
            id: 15,
            imgSrc: "@/../static/imgs/product/chair/Physix.png",
            hoverimg:"@/../static/imgs/product/chair/Physix.jpg",
            T1: "Physix",
            T2: "Alberto Meda",
            route: "/Physix",
            flag: ["C3", "S1", "S2", "S3", "S4", "S5", "T1", "T3"]
          },
          {
            id: 16,
            imgSrc: "@/../static/imgs/product/chair/Pro Chair.png",
            hoverimg:"@/../static/imgs/product/chair/Pro Chair.jpg",
            T1: "Pro Chair",
            T2: "Konstantin Grcic",
            route: "/Pro",
            flag: ["C3", "S1", "S2", "S4", "S5"]
          },
          {
            id: 17,
            imgSrc: "@/../static/imgs/product/chair/PUREis3.png",
            hoverimg:"@/../static/imgs/product/chair/PUREis3.jpg",
            T1: "PUREIS3",
            T2: "b4K",
            route: "/Pure",
            flag: ["C1", "S1", "S4", "T1", "T3"]
          },
          {
            id: 18,
            imgSrc: "@/../static/imgs/product/chair/Rookie.png",
            hoverimg:"@/../static/imgs/product/chair/Rookie.jpg",
            T1: "Rookie",
            T2: "Konstantin Grcic",
            route: "/Rookie",
            flag: ["C4", "S1", "S2", "S4", "S5", "T1", "T3", "T4"]
          },
          {
            id: 19,
            imgSrc: "@/../static/imgs/product/chair/Silver.png",
            hoverimg:"@/../static/imgs/product/chair/Silver.jpg",
            T1: "Silver",
            T2: "Hadi Teherani",
            route: "/Silver",
            flag: ["C4", "S1", "S3", "S4", "T1", "T3", "T4", "T5"]
          },
          {
            id: 20,
            imgSrc: "@/../static/imgs/product/chair/Softshell.png",
            hoverimg:"@/../static/imgs/product/chair/Softshell.jpg",
            T1: "Softshell",
            T2: "Ronan Erwan Bouroullec",
            route: "Softshell",
            flag: ["C3", "S1", "S3", "S4", "S5", "T1", "T3", "T4"]
          },
          {
            id: 21,
            imgSrc: "@/../static/imgs/product/chair/Stool Tool.png",
            hoverimg:"@/../static/imgs/product/chair/Stool-Tool.jpg",
            T1: "Stool-Tool",
            T2: "Konstantin Grcic",
            route: "/StoolTool",
            flag: ["C4", "S1", "S2", "S4", "S5", "T2"]
          },
          {
            id: 22,
            imgSrc: "@/../static/imgs/product/chair/Tip Ton.png",
            hoverimg:"@/../static/imgs/product/chair/Tip-Ton.jpg",
            T1: "Tip Ton",
            T2: "Edward Barber & Jay Osgerby",
            route: "/TipTon",
            flag: ["C4", "S1", "S2", "S4", "S5", "T2"]
          },
          {
            id: 23,
            imgSrc: "@/../static/imgs/product/chair/VINTAGEis5.png",
            hoverimg:"@/../static/imgs/product/chair/VINTAGEis5.jpg",
            T1: "VINTAGEis5",
            T2: "Valker Eyesing",
            route: "/Vintage",
            flag: ["C2", "S1", "S3", "S4", "T1", "T3", "T4"]
          }
        ],
        chairs: []
      };
    },

    components: {},

    computed: {},

    mounted() {
      this.$store.state.active = 2;
      if(this.$route.query.index){
       this.active.push(this.$route.query.index)
         /* 去重 */
        this.active = this.removeDuplicatedItem(this.active);
        this.initdata()
      }else{
       this.chairs = this.allchairs;
       this.chairCount = this.chairs.length;
      }
    
      this.atPosition();
    },

    methods: {
      mouseenter(e){
       let tem=""
       tem=e.imgSrc;
       e.imgSrc=e.hoverimg;
       e.hoverimg=tem;
      },
      mouseleave(e){
       let tem=""
       tem=e.hoverimg;
       e.hoverimg=e.imgSrc;
       e.imgSrc=tem;
      },
      tosubitem(e) {
        this.$router.push({
          path: e
        })
      },
      atPosition() {
        $(window).scroll(function () {
          var scrolH = document.documentElement.scrollTop;
          if (scrolH > $("#proheader").height()) {
            $(".probodyleft").css({
              "position": "fixed",
              "top": "10%"
            })
            $(".probodyright").css({"marginLeft":"33%"});
          } else {
            $(".probodyleft").css({
              "position": "unset"
            })
            $(".probodyright").css({"marginLeft":"3%"});
          }
        })
      },
      checkSelect(e) {
        if (this.isContainStr(this.active, e.flag)) {
          return true;
        } else {
          return false;
        }
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
      
      /* 去重  */
      distinct(obj) {
        var uniques = [];
        var stringify = {};
        for (var i = 0; i < obj.length; i++) {
          var keys = Object.keys(obj[i]);
          keys.sort(function (a, b) {
            return (Number(a) - Number(b));
          });
          var str = '';
          for (var j = 0; j < keys.length; j++) {
            str += JSON.stringify(keys[j]);
            str += JSON.stringify(obj[i][keys[j]]);
          }
          if (!stringify.hasOwnProperty(str)) {
            uniques.push(obj[i]);
            stringify[str] = true;
          }
        }
        uniques = uniques;
        return uniques;
      },
      /* 设置选中与否 */
      setselectorn(e, f) {
        if (this.isContainStr(e, f)) {
          e.splice(e.indexOf(f), 1);
        } else {
          e.push(f);
        }
      },
      initchiars() {
        if (this.active.length > 0) {
          this.chairs = []
          let data = this.allchairs;
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            for (let j = 0; j < element.flag.length; j++) {
              const str = element.flag[j];
              if (this.active.indexOf(str) != -1) {
                this.chairs.push(element)
              }

            }
          }
        } else {
          this.chairs = this.allchairs;
        }
        this.chairs = this.distinct(this.chairs)
      },
      initTitle() {
        if (this.active.length == 0) {
          this.chairTitle = "所有座椅";
          this.chairCount = this.allchairs.length;

        } else {
          this.chairTitle = "所选座椅";
          this.chairCount = this.chairs.length;
        }
      },
      initRrselect() {
        this.CASE = "选择全部"
        this.CASP = "选择全部"
        this.CATY = "选择全部"
        for (let index = 0; index < this.active.length; index++) {
          const element = this.active[index];
          for (let i = 0; i < this.menusChair.length; i++) {
            const ele = this.menusChair[i];
            if (element == ele.flag) {
              this.CASE = "重新选择"
            }
          }
          for (let i = 0; i < this.menusSpace.length; i++) {
            const ele = this.menusSpace[i];
            if (element == ele.flag) {
              this.CASP = "重新选择"
            }
          }
          for (let i = 0; i < this.menusType.length; i++) {
            const ele = this.menusType[i];
            if (element == ele.flag) {
              this.CATY = "重新选择"
            }
          }
        }
      },
      initdata(){
         /* 设置chairs数据 */
        this.initchiars();
        /* 顶部文字设置 */
        this.initTitle();
        /* 排序*/
        this.SortChair(this.pxvalue);
        /*重新选择*/
        this.initRrselect();
      },
      choiceSeat(e) {
        /* 选中与取消 */
        this.setselectorn(this.active, e.flag)
        /* 设置数据 */
        this.initdata()
      },
      removeDuplicatedItem(ar) {
        var ret = [];
        ar.forEach(function (e, i, ar) {
          if (ar.indexOf(e) === i) {
            ret.push(e);
          }
        });

        return ret;
      },
      choiceAllSeat() {
        if (this.CASE == "选择全部") {
          for (let i = 0; i < this.menusChair.length; i++) {
            const ele = this.menusChair[i];
            this.active.push(ele.flag)
          }
       /* 去重 */
          this.active = this.removeDuplicatedItem(this.active)
 
        }else{
           for (let i = 0; i < this.menusChair.length; i++) {
             const element = this.menusChair[i];
               for (let j = 0; j < this.active.length; j++) {
                 const ele  = this.active[j];
                  if(element.flag==ele){
                    this.active.splice(j,1)
                  }
               }
           }
          
        }
         /* 设置数据 */
        this.initdata();
 
      },
      
      choiceAllSpace() {
        if (this.CASP == "选择全部") {
          for (let i = 0; i < this.menusSpace.length; i++) {
            const ele = this.menusSpace[i];
            this.active.push(ele.flag)
          }
       /* 去重 */
          this.active = this.removeDuplicatedItem(this.active)
 
        }else{
           for (let i = 0; i < this.menusSpace.length; i++) {
             const element = this.menusSpace[i];
               for (let j = 0; j < this.active.length; j++) {
                 const ele  = this.active[j];
                  if(element.flag==ele){
                    this.active.splice(j,1)
                  }
               }
           }
          
        }
         /* 设置数据 */
        this.initdata();
 
      },
    
      choiceAllType() {
        if (this.CATY == "选择全部") {
          for (let i = 0; i < this.menusType.length; i++) {
            const ele = this.menusType[i];
            this.active.push(ele.flag)
          }
       /* 去重 */
          this.active = this.removeDuplicatedItem(this.active)
 
        }else{
           for (let i = 0; i < this.menusType.length; i++) {
             const element = this.menusType[i];
               for (let j = 0; j < this.active.length; j++) {
                 const ele  = this.active[j];
                  if(element.flag==ele){
                    this.active.splice(j,1)
                  }
               }
           }
          
        }
         /* 设置数据 */
        this.initdata();
 
      }
    }
  }

</script>
<style lang="sass" scoped>
  @import '@/../static/css/productListCommon.scss';
</style>
