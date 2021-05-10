<!-- 产品 -->
<template>
  <div class="productmain">
    <div class="proheader" id="proheader">
      <img src="@/../static/imgs/product/move/move.jpg" width="100%;height:100%" alt="">
      <div class="proheaderF">
        <div class="T1">LOOSE FURNITURE <span>活动家具</span></div>
        <span class="T2">多样化的形式， 探索空间的多元可能性。</span>
        <span class="T3">Join us to explore spaces’ possibilities with these diversified loose furniture.</span>
        <span class="T3"></span>
        <span class="T4"></span>
      </div>
    </div>
    <div class="probody">
      <div class="probodyleft">
        <div id="PBL">
          <span class="probodylefttitle">筛选活动家具</span>
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
            <img :src="item.imgSrc" style="width:200px;height:200px;cursor:pointer;" alt="" @click="tosubitem(item.route)">
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
        chairTitle: "所有活动家具",
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
            type: "矮凳",
            count: 2,
            array: [{
                id: 1,
                imgSrc: "@/../static/imgs/product/move/Fungus.png",
                T1: "FUNGUS",
                T2: "Claudio Bellini",
                route:"/Fungus"
              }, {
                id: 2,
                imgSrc: "@/../static/imgs/product/move/UPis1.png",
                T1: "UPis1",
                T2: "Sven von Boetticher",
                route:"/UPis1"
              }
            ]
          },
          {
            id: 2,
            type: "吧椅",
            count: 3,
            array: [{
                id: 1,
                imgSrc: "@/../static/imgs/product/move/KINETICis5.png",
                T1: "KINETICis5",
                T2: "Phoenix Design",
                route:"/KINETICis5"
              }, {
                id: 2,
                imgSrc: "@/../static/imgs/product/move/Sequoia.png",
                T1: "SEQUOIA",
                T2: "Torbjørn Anderssen & Espen Voll",
                route:"/Sequoia"
              },
              {
                id: 3,
                imgSrc: "@/../static/imgs/product/move/Stool-One.png",
                T1: "STOOL_ONE",
                T2: "Konstantin Grcic"
              }
            ]
          },{
            id: 3,
            type: "边桌与茶几",
            count: 5,
            array: [{
                id: 1,
                imgSrc: "@/../static/imgs/product/move/Little-Friend.png",
                T1: "LITTLE FRIEND™",
                T2: "Kasper Salto",
                route:"/LittleFriend"
              }, {
                id: 2,
                imgSrc: "@/../static/imgs/product/move/NesTable.png",
                T1: "NESTABLE",
                T2: "Jasper Morrison",
                route:"/NesTable"
              },
              {
                id: 3,
                imgSrc: "@/../static/imgs/product/move/Varia-Table.png",
                T1: "VARIA TABLE",
                T2: "Jasper Morrison"
              },
              {
                id: 4,
                imgSrc: "@/../static/imgs/product/move/Wooden-Side-Table.png",
                T1: "WOODEN SIDE TABLE",
                T2: "Ronan & Erwan Bouroullec"
              },
              {
                id: 5,
                imgSrc: "@/../static/imgs/product/move/Ruff-Pouf.png",
                T1: "RUFF POUF",
                T2: "Romero & Vallejo"
              }
            ]
          },{
            id: 4,
            type: "墩子",
            count: 2,
            array: [{
                id: 1,
                imgSrc: "@/../static/imgs/product/move/Fungus.png",
                T1: "FUNGUS",
                T2: "Claudio Bellini",
                route:"/Fungus"
              }, {
                id: 2,
                imgSrc: "@/../static/imgs/product/move/Olá-Large.png",
                T1: "OLÁ",
                T2: "Mikko He",
                route:"/Ola"
              }
            ]
          },{
            id: 5,
            type: "沙发",
            count: 9,
            array: [{
                id: 1,
            imgSrc: "@/../static/imgs/product/move/Alcove.png",
            T1: "ALCOVE",
            T2: "Ronan & Erwan Bouroullec",
            route:"/Alcove"
              }, {
                id: 2,
            imgSrc: "@/../static/imgs/product/move/Favn.png",
            T1: "FAVN™",
            T2: "Jaime Hayón"
              }, {
                id: 3,
            imgSrc: "@/../static/imgs/product/move/Hug.png",
            T1: "HUG",
            T2: "Gioia Yang"
              }, {
                id: 4,
            imgSrc: "@/../static/imgs/product/move/Plenum.png",
            T1: "PLENUM™",
            T2: "Jaime Hayón"
              }, {
                id: 5,
            imgSrc: "@/../static/imgs/product/move/Polder.png",
            T1: "POLDER",
            T2: "Hella Jongerius"
              }, {
                id: 6,
            imgSrc: "@/../static/imgs/product/move/Sail-Outdoor-Pouf.png",
            T1: "SAIL OUTDOOR POUF",
            T2: "Héctor Serrano",
            route:"/SailOurdoorPouf"
              }, {
                id: 7,
            imgSrc: "@/../static/imgs/product/move/ship.png",
            T1: "SHIP",
            T2: "James Guo"
              }, {
                id: 8,
            imgSrc: "@/../static/imgs/product/move/Soft-Work.png",
            T1: "SOFT WORK",
            T2: "Edward Barber & Jay Osgerby",
            route:"/SoftWork"
              }, {
                id: 9,
            imgSrc: "@/../static/imgs/product/move/PK80.png",
            T1: "PK80™",
            T2: "Poul Kjærholm"
              }
            ]
          },{
            id: 6,
            type: "沙发椅",
            count: 10,
            array: [{
                id: 1,
            imgSrc: "@/../static/imgs/product/move/Fauteuil-de-Salon.png",
            T1: "FAUTEUIL DE SALON",
            T2: "Jean Prouvé"
              }, {
                id: 2,
            imgSrc: "@/../static/imgs/product/move/Fauteuil-Direction.png",
            T1: "FAUTEUIL DIRECTION",
            T2: "Jean Prouvé"
              }, {
                id: 3,
            imgSrc: "@/../static/imgs/product/move/Pot.png",
            T1: "POT™",
            T2: "Arne Jacobsen"
              }, {
                id: 4,
            imgSrc: "@/../static/imgs/product/move/Mama-Bear.png",
            T1: "MAMA BEAR",
            T2: "Matz Studio"
              }, {
                id: 5,
            imgSrc: "@/../static/imgs/product/move/Alcove.png",
            T1: "ALCOVE",
            T2: "Ronan & Erwan Bouroullec",
            route:"/Alcove"
              }, {
                id: 6,
            imgSrc: "@/../static/imgs/product/move/RO.png",
            T1: "RO™",
            T2: "Jaime Hayón"
              }, {
                id: 7,
            imgSrc: "@/../static/imgs/product/move/Via57.png",
            T1: "VIA57™",
            T2: "Bjarke Ingels & KiBiSi"
              }, {
                id: 8,
            imgSrc: "@/../static/imgs/product/move/Plenum.png",
            T1: "PLENUM™",
            T2: "Jaime Hayón"
              }, {
                id: 9,
            imgSrc: "@/../static/imgs/product/move/Fauteuil-Direction-Pivotant.png",
            T1: "FAUTEUIL DIRECTION PIVOTANT",
            T2: "Jean Prouvé"
              }, {
                id: 10,
            imgSrc: "@/../static/imgs/product/move/PK80.png",
            T1: "PK80™",
            T2: "Poul Kjærholm"
              }
            ]
          },{
            id: 7,
            type: "休闲椅",
            count: 5,
            array: [{
                id: 1,
            imgSrc: "@/../static/imgs/product/move/Ant.png",
            T1: "ANT™",
            T2: "Arne Jacobsen"
              }, {
                id: 2,
            imgSrc: "@/../static/imgs/product/move/Drop.png",
            T1: "DROP™",
            T2: "Arne Jacobsen",
            route:"/Drop"
              }, {
                id: 3,
            imgSrc: "@/../static/imgs/product/move/Egg.png",
            T1: "EGG™",
            T2: "Arne Jacobsen",
            route:"/egg"
              }, {
                id: 4,
            imgSrc: "@/../static/imgs/product/move/Nap.png",
            T1: "NAP™",
            T2: "Kasper Salto"
              }, {
                id: 5,
            imgSrc: "@/../static/imgs/product/move/PK22.png",
            T1: "PK22™",
            T2: "Poul Kjærholm"
              }
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
            type: "活动坐姿",

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
            type: "软包椅壳",

          },
          {
            id: 5,
            type: "私密性",

          }
        ],
        allchairs: [{
            id: 1,
            imgSrc: "@/../static/imgs/product/move/Alcove.png",
            T1: "ALCOVE",
            T2: "Ronan & Erwan Bouroullec",
            route:"/Alcove"
          },
          {
            id: 2,
            imgSrc: "@/../static/imgs/product/move/Ant.png",
            T1: "ANT™",
            T2: "Arne Jacobsen"
          },
          {
            id: 3,
            imgSrc: "@/../static/imgs/product/move/Drop.png",
            T1: "DROP™",
            T2: "Arne Jacobsen",
            route:"/Drop"
          },
          {
            id: 4,
            imgSrc: "@/../static/imgs/product/move/Egg.png",
            T1: "EGG™",
            T2: "Arne Jacobsen",
            route:"/egg"
          },
          {
            id: 5,
            imgSrc: "@/../static/imgs/product/move/Fauteuil-de-Salon.png",
            T1: "FAUTEUIL DE SALON",
            T2: "Jean Prouvé"
          },
          {
            id: 6,
            imgSrc: "@/../static/imgs/product/move/Fauteuil-Direction.png",
            T1: "FAUTEUIL DIRECTION",
            T2: "Jean Prouvé"
          },
          {
            id: 7,
            imgSrc: "@/../static/imgs/product/move/Fauteuil-Direction-Pivotant.png",
            T1: "FAUTEUIL DIRECTION PIVOTANT",
            T2: "Jean Prouvé"
          },
          {
            id: 8,
            imgSrc: "@/../static/imgs/product/move/Favn.png",
            T1: "FAVN™",
            T2: "Jaime Hayón"
          },
          {
            id: 9,
            imgSrc: "@/../static/imgs/product/move/Fungus.png",
            T1: "FUNGUS",
            T2: "Claudio Bellini",
            route:"/Fungus"
          },
          {
            id: 10,
            imgSrc: "@/../static/imgs/product/move/Grand-Repos.png",
            T1: "GRAND REPOS",
            T2: "Antonio Citterio"
          },
          {
            id: 11,
            imgSrc: "@/../static/imgs/product/move/Hug.png",
            T1: "HUG",
            T2: "Gioia Yang"
          },
          {
            id: 12,
            imgSrc: "@/../static/imgs/product/move/KINETICis5.png",
            T1: "KINETICis5",
            T2: "Phoenix Design",
            route:"/KINETICis5"
          },
          {
            id: 13,
            imgSrc: "@/../static/imgs/product/move/Little-Friend.png",
            T1: "LITTLE FRIEND™",
            T2: "Kasper Salto",
            route:"/LittleFriend"
          },
          {
            id: 14,
            imgSrc: "@/../static/imgs/product/move/Mama-Bear.png",
            T1: "MAMA BEAR",
            T2: "Matz Studio"
          },
          {
            id: 15,
            imgSrc: "@/../static/imgs/product/move/Nap.png",
            T1: "NAP™",
            T2: "Kasper Salto"
          },
          {
            id: 16,
            imgSrc: "@/../static/imgs/product/move/NesTable.png",
            T1: "NESTABLE",
            T2: "Jasper Morrison",
            route:"/NesTable"
          },
          {
            id: 17,
            imgSrc: "@/../static/imgs/product/move/Olá-Large.png",
            T1: "OLÁ",
            T2: "Mikko He",
            route:"/Ola"
          },
          {
            id: 18,
            imgSrc: "@/../static/imgs/product/move/Panton.png",
            T1: "PANTON",
            T2: "Verner Panton"
          },
          {
            id: 19,
            imgSrc: "@/../static/imgs/product/move/PK22.png",
            T1: "PK22™",
            T2: "Poul Kjærholm"
          },
          {
            id: 20,
            imgSrc: "@/../static/imgs/product/move/PK80.png",
            T1: "PK80™",
            T2: "Poul Kjærholm"
          },
          {
            id: 21,
            imgSrc: "@/../static/imgs/product/move/Plenum.png",
            T1: "PLENUM™",
            T2: "Jaime Hayón"
          },
          {
            id: 22,
            imgSrc: "@/../static/imgs/product/move/Polder.png",
            T1: "POLDER",
            T2: "Hella Jongerius"
          },
          {
            id: 23,
            imgSrc: "@/../static/imgs/product/move/Pot.png",
            T1: "POT™",
            T2: "Arne Jacobsen"
          },
          {
            id: 24,
            imgSrc: "@/../static/imgs/product/move/RO.png",
            T1: "RO™",
            T2: "Jaime Hayón"
          },
          {
            id: 25,
            imgSrc: "@/../static/imgs/product/move/Ruff-Pouf.png",
            T1: "RUFF POUF",
            T2: "Romero & Vallejo"
          },
          {
            id: 26,
            imgSrc: "@/../static/imgs/product/move/Sail-Outdoor-Pouf.png",
            T1: "SAIL OUTDOOR POUF",
            T2: "Héctor Serrano",
            route:"/SailOurdoorPouf"
          },
          {
            id: 27,
            imgSrc: "@/../static/imgs/product/move/Sequoia.png",
            T1: "SEQUOIA",
            T2: "Torbjørn Anderssen & Espen Voll",
            route:"/Sequoia"
          },
          {
            id: 28,
            imgSrc: "@/../static/imgs/product/move/Series7.png",
            T1: "SERIES 7™",
            T2: "Arne Jacobsen",
            route:"/Series7"
          },
          {
            id: 29,
            imgSrc: "@/../static/imgs/product/move/ship.png",
            T1: "SHIP",
            T2: "James Guo"
          },
          {
            id: 30,
            imgSrc: "@/../static/imgs/product/move/Soft-Work.png",
            T1: "SOFT WORK",
            T2: "Edward Barber & Jay Osgerby",
            route:"/SoftWork"
          },
          {
            id: 31,
            imgSrc: "@/../static/imgs/product/move/Stool-One.png",
            T1: "STOOL_ONE",
            T2: "Konstantin Grcic"
          },
          {
            id: 32,
            imgSrc: "@/../static/imgs/product/move/Swan.png",
            T1: "SWAN™",
            T2: "Arne Jacobsen",
            route:"/Swan"
          },
          {
            id: 33,
            imgSrc: "@/../static/imgs/product/move/UPis1.png",
            T1: "UPis1",
            T2: "Sven von Boetticher",
            route:"/UPis1"
          },
          {
            id: 34,
            imgSrc: "@/../static/imgs/product/move/Varia-Table.png",
            T1: "VARIA TABLE",
            T2: "Jasper Morrison"
          },
          {
            id: 35,
            imgSrc: "@/../static/imgs/product/move/Via57.png",
            T1: "VIA57™",
            T2: "Bjarke Ingels & KiBiSi"
          },
          {
            id: 36,
            imgSrc: "@/../static/imgs/product/move/Wooden-Side-Table.png",
            T1: "WOODEN SIDE TABLE",
            T2: "Ronan & Erwan Bouroullec"
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
