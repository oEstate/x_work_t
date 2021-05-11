<!-- 产品 -->
<template>
  <div class="productmain">
    <div class="proheader" id="proheader" ref="proheader">
      <img src="@/../static/imgs/product/move/move.jpg" width="100%;height:100%" alt="">
      <div class="proheaderF">
        <div class="T1 mEN">LOOSE FURNITURE <span>活动家具</span></div>
        <span class="T2">多样化的形式， 探索空间的多元可能性。</span>
        <span class="T3">Join us to explore spaces’ possibilities with these diversified loose
          furniture.</span>
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
          <div :class="['itemmenu' , checkSelect(item)?'isactive':'' ]"
            v-for=" (item,index)  in menusChair" :key="index" @click="choiceSeat(item)">
            {{item.type}}
            <span class="itemmenuY">{{item.count}}</span>
          </div>

          <div class="iteminput">
            <span class="iteminputT1">请选择适用空间</span>
            <span class="iteminputT2" @click="choiceAllSpace">{{CASP}}</span>
          </div>
          <div :class="['itemmenu' ,checkSelect(item)?'isactive':'' ]"
            v-for="  (item,i)  in menusSpace" :key="'index'+i" @click="choiceSeat(item)">
            {{item.type}}

          </div>
          <div class="iteminput">
            <span class="iteminputT1">请选择产品特征</span>
            <span class="iteminputT2" @click="choiceAllType">{{CATY}}</span>
          </div>
          <div :class="['itemmenu' ,checkSelect(item)?'isactive':'' ]"
            v-for="  (item,e) in menusType" :key="'inde'+e" @click="choiceSeat(item)">
            {{item.type}}

          </div>
        </div>
      </div>
      <div class="probodyright">
        <div class="rightselectDiv">
          <el-select v-model="pxvalue" placeholder="请选择" class="rightselect" :clearable="true"
            @change="SortChair">
            <el-option v-for="item in options" :key="item.value" :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="probodyrighttitle">
          {{chairTitle}}
          <span>{{chairCount}}</span>
        </div>
        <div class="chairs">
          <div class="chairitem" v-for=" (item,index)  in chairs" :key="index">
            <img :src="item.imgSrc" style="width:185px;height:185px;cursor:pointer;" alt=""
              @click="tosubitem(item.route)" @mouseenter="mouseenter(item)"
              @mouseleave="mouseleave(item)">
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
      chairTitle: "所有活动家具",
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
        type: "矮凳",
        count: 2,
        flag: "A1",

      },
      {
        id: 2,
        type: "吧椅",
        count: 3,
        flag: "A2",

      },
      {
        id: 3,
        type: "边桌与茶几",
        count: 5,
        flag: "A3",

      },
      {
        id: 4,
        type: "墩子",
        count: 2,
        flag: "A4",

      },
      {
        id: 5,
        type: "沙发",
        count: 9,
        flag: "A5",

      },
      {
        id: 6,
        type: "沙发椅",
        count: 10,
        flag: "A6",

      },
      {
        id: 7,
        type: "休闲椅",
        count: 5,
        flag: "A7",

      }
      ],
      menusSpace: [{
        id: 1,
        type: "办公空间",
        flag: "B1",
      },
      {
        id: 2,
        type: "教育空间",
        flag: "B2",
      },
      {
        id: 3,
        type: "酒店空间",
        flag: "B3",
      },
      {
        id: 4,
        type: "居家空间",
        flag: "B4",
      },
      {
        id: 5,
        type: "商业空间",
        flag: "B5",
      }
      ],
      menusType: [{
        id: 1,
        type: "活动坐姿",
        flag: "C1",
      },
      {
        id: 2,
        type: "可堆叠",
        flag: "C2",
      },
      {
        id: 3,
        type: "可移动",
        flag: "C3",
      },
      {
        id: 4,
        type: "软包椅壳",
        flag: "C4",
      },
      {
        id: 5,
        type: "私密性",
        flag: "C5",
      }
      ],
      allchairs: [{
        id: 1,
        imgSrc: "@/../static/imgs/product/move/Alcove.png",
        hoverimg: "@/../static/imgs/product/move/Alcove.jpg",
        T1: "ALCOVE",
        T2: "Ronan & Erwan Bouroullec",
        route: "/Alcove",
        flag: ["A5", "A6"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/move/Ant.png",
        hoverimg: "@/../static/imgs/product/move/Ant.jpg",
        T1: "ANT™",
        T2: "Arne Jacobsen",
        route: "/Ant",
        flag: ["A7"]
      },
      {
        id: 3,
        imgSrc: "@/../static/imgs/product/move/Drop.png",
        hoverimg: "@/../static/imgs/product/move/Drop.jpg",
        T1: "DROP™",
        T2: "Arne Jacobsen",
        route: "/Drop",
        flag: ["A7"]
      },
      {
        id: 4,
        imgSrc: "@/../static/imgs/product/move/Egg.png",
        hoverimg: "@/../static/imgs/product/move/Egg.jpg",
        T1: "EGG™",
        T2: "Arne Jacobsen",
        route: "/egg",
        flag: ["A7"]
      },
      {
        id: 5,
        imgSrc: "@/../static/imgs/product/move/Fauteuil-de-Salon.png",
        hoverimg: "@/../static/imgs/product/move/Fauteuil de Salon.jpg",
        T1: "FAUTEUIL DE SALON",
        T2: "Jean Prouvé",
        route: "/FauteuilDeSalon",
        flag: ["A6"]
      },
      {
        id: 6,
        imgSrc: "@/../static/imgs/product/move/Fauteuil-Direction.png",
        hoverimg: "@/../static/imgs/product/move/Fauteuil Direction.jpg",
        T1: "FAUTEUIL DIRECTION",
        T2: "Jean Prouvé",
        route: "/FauteuilDirection",
        flag: ["A6"]
      },
      {
        id: 7,
        imgSrc: "@/../static/imgs/product/move/Fauteuil-Direction-Pivotant.png",
        hoverimg: "@/../static/imgs/product/move/Fauteuil Direction Pivotant.jpg",
        T1: "FAUTEUIL DIRECTION PIVOTANT",
        T2: "Jean Prouvé",
        route: "/FauteuilDirectionPivotant",
        flag: ["A6"]
      },
      {
        id: 8,
        imgSrc: "@/../static/imgs/product/move/Favn.png",
        hoverimg: "@/../static/imgs/product/move/Favn.jpg",
        T1: "FAVN™",
        T2: "Jaime Hayón",
        route: "/Favn",
        flag: ["A5"]
      },
      {
        id: 9,
        imgSrc: "@/../static/imgs/product/move/Fungus.png",
        hoverimg: "@/../static/imgs/product/move/Fungus.jpg",
        T1: "FUNGUS",
        T2: "Claudio Bellini",
        route: "/Fungus",
        flag: ["A1", "A4"]
      },
      {
        id: 10,
        imgSrc: "@/../static/imgs/product/move/Grand-Repos.png",
        hoverimg: "@/../static/imgs/product/move/Grand Repos.jpg",
        T1: "GRAND REPOS",
        T2: "Antonio Citterio",
        route: "/Grand",
        flag: []
      },
      {
        id: 11,
        imgSrc: "@/../static/imgs/product/move/Hug.png",
        hoverimg: "@/../static/imgs/product/move/Hug.jpg",
        T1: "HUG",
        T2: "Gioia Yang",
        route: "/Hug",
        flag: ["A5"]
      },
      {
        id: 12,
        imgSrc: "@/../static/imgs/product/move/KINETICis5.png",
        hoverimg: "@/../static/imgs/product/move/KINETICis5.jpg",
        T1: "KINETICis5",
        T2: "Phoenix Design",
        route: "/KINETICis5",
        flag: ["A2"]
      },
      {
        id: 13,
        imgSrc: "@/../static/imgs/product/move/Little-Friend.png",
        hoverimg: "@/../static/imgs/product/move/Little Friend.jpg",
        T1: "LITTLE FRIEND™",
        T2: "Kasper Salto",
        route: "/LittleFriend",
        flag: ["A3"]
      },
      {
        id: 14,
        imgSrc: "@/../static/imgs/product/move/Mama-Bear.png",
        hoverimg: "@/../static/imgs/product/move/Mama Bear.jpg",
        T1: "MAMA BEAR",
        T2: "Matz Studio",
        route: "/MamaBear",
        flag: ["A6"]
      },
      {
        id: 15,
        imgSrc: "@/../static/imgs/product/move/Nap.png",
        hoverimg: "@/../static/imgs/product/move/Nap.jpg",
        T1: "NAP™",
        T2: "Kasper Salto",
        route: "/Nap",
        flag: ["A7"]
      },
      {
        id: 16,
        imgSrc: "@/../static/imgs/product/move/NesTable.png",
        hoverimg: "@/../static/imgs/product/move/NesTable.jpg",
        T1: "NESTABLE",
        T2: "Jasper Morrison",
        route: "/NesTable",
        flag: ["A3"]
      },
      {
        id: 17,
        imgSrc: "@/../static/imgs/product/move/Olá-Large.png",
        hoverimg: "@/../static/imgs/product/move/Olá.jpg",
        T1: "OLÁ",
        T2: "Mikko He",
        route: "/Ola",
        flag: ["A4"]
      },
      {
        id: 18,
        imgSrc: "@/../static/imgs/product/move/Panton.png",
        hoverimg: "@/../static/imgs/product/move/Panton Chair.jpg",
        T1: "PANTON",
        T2: "Verner Panton",
        route: "/Panton",
        flag: []
      },
      {
        id: 19,
        imgSrc: "@/../static/imgs/product/move/PK22.png",
        hoverimg: "@/../static/imgs/product/move/PK22.jpg",
        T1: "PK22™",
        T2: "Poul Kjærholm",
        route: "/PK22",
        flag: ["A7"]
      },
      {
        id: 20,
        imgSrc: "@/../static/imgs/product/move/PK80.png",
        hoverimg: "@/../static/imgs/product/move/PK80.jpg",
        T1: "PK80™",
        T2: "Poul Kjærholm",
        route: "/PK80",
        flag: ["A5", "A6"]
      },
      {
        id: 21,
        imgSrc: "@/../static/imgs/product/move/Plenum.png",
        hoverimg: "@/../static/imgs/product/move/Plenum.jpg",
        T1: "PLENUM™",
        T2: "Jaime Hayón",
        route: "/Plenum",
        flag: ["A5", "A6"]
      },
      {
        id: 22,
        imgSrc: "@/../static/imgs/product/move/Polder.png",
        hoverimg: "@/../static/imgs/product/move/Polder.jpg",
        T1: "POLDER",
        T2: "Hella Jongerius",
        route: "/Polder",
        flag: ["A5"]
      },
      {
        id: 23,
        imgSrc: "@/../static/imgs/product/move/Pot.png",
        hoverimg: "@/../static/imgs/product/move/Pot.jpg",
        T1: "POT™",
        T2: "Arne Jacobsen",
        route: "/Pot",
        flag: ["A6"]
      },
      {
        id: 24,
        imgSrc: "@/../static/imgs/product/move/RO.png",
        hoverimg: "@/../static/imgs/product/move/RO.jpg",
        T1: "RO™",
        T2: "Jaime Hayón",
        route: "/RO",
        flag: ["A6"]
      },
      {
        id: 25,
        imgSrc: "@/../static/imgs/product/move/Ruff-Pouf.png",
        hoverimg: "@/../static/imgs/product/move/Ruff Pouf.jpg",
        T1: "RUFF POUF",
        T2: "Romero & Vallejo",
        route: "/RuffPouf",
        flag: ["A3"]
      },
      {
        id: 26,
        imgSrc: "@/../static/imgs/product/move/Sail-Outdoor-Pouf.png",
        hoverimg: "@/../static/imgs/product/move/Sail Outdoor Pouf.jpg",
        T1: "SAIL OUTDOOR POUF",
        T2: "Héctor Serrano",
        route: "/SailOurdoorPouf",
        flag: ["A5"]
      },
      {
        id: 27,
        imgSrc: "@/../static/imgs/product/move/Sequoia.png",
        hoverimg: "@/../static/imgs/product/move/Sequoia.jpg",
        T1: "SEQUOIA",
        T2: "Torbjørn Anderssen & Espen Voll",
        route: "/Sequoia",
        flag: ["A2"]
      },
      {
        id: 28,
        imgSrc: "@/../static/imgs/product/move/Series7.png",
        hoverimg: "@/../static/imgs/product/move/Series 7.jpg",
        T1: "SERIES 7™",
        T2: "Arne Jacobsen",
        route: "/Series7",
        flag: []
      },
      {
        id: 29,
        imgSrc: "@/../static/imgs/product/move/ship.png",
        hoverimg: "@/../static/imgs/product/move/Ship.jpg",
        T1: "SHIP",
        T2: "James Guo",
        route: "/Ship",
        flag: ["A5"]
      },
      {
        id: 30,
        imgSrc: "@/../static/imgs/product/move/Soft-Work.png",
        hoverimg: "@/../static/imgs/product/move/Soft Work.jpg",
        T1: "SOFT WORK",
        T2: "Edward Barber & Jay Osgerby",
        route: "/SoftWork",
        flag: ["A5"]
      },
      {
        id: 31,
        imgSrc: "@/../static/imgs/product/move/Stool-One.png",
        hoverimg: "@/../static/imgs/product/move/Stool_One.jpg",
        T1: "STOOL_ONE",
        T2: "Konstantin Grcic",
        route: "/StoolOne",
        flag: ["A2"]
      },
      {
        id: 32,
        imgSrc: "@/../static/imgs/product/move/Swan.png",
        hoverimg: "@/../static/imgs/product/move/Swan.jpg",
        T1: "SWAN™",
        T2: "Arne Jacobsen",
        route: "/Swan",
        flag: []
      },
      {
        id: 33,
        imgSrc: "@/../static/imgs/product/move/UPis1.png",
        hoverimg: "@/../static/imgs/product/move/UPis1.jpg",
        T1: "UPis1",
        T2: "Sven von Boetticher",
        route: "/UPis1",
        flag: ["A1"]
      },
      {
        id: 34,
        imgSrc: "@/../static/imgs/product/move/Varia-Table.png",
        hoverimg: "@/../static/imgs/product/move/Varia Table.jpg",
        T1: "VARIA TABLE",
        T2: "Jasper Morrison",
        flag: ["A3"]
      },
      {
        id: 35,
        imgSrc: "@/../static/imgs/product/move/Via57.png",
        hoverimg: "@/../static/imgs/product/move/Via57.jpg",
        T1: "VIA57™",
        T2: "Bjarke Ingels & KiBiSi",
        route: "/Via57",
        flag: ["A6"]
      },
      {
        id: 36,
        imgSrc: "@/../static/imgs/product/move/Wooden-Side-Table.png",
        hoverimg: "@/../static/imgs/product/move/Wooden Side Table.jpg",
        T1: "WOODEN SIDE TABLE",
        T2: "Ronan & Erwan Bouroullec",
        route: "/Wooden",
        flag: ["A3"]
      }
      ],
      chairs: []
    };
  },

  components: {},

  computed: {},
  watch: {
    $route() {
      this.$store.state.active = 2;
      if (this.$route.query.index) {
        this.rolling()
        this.active = [this.$route.query.index]
        /* 去重 */
        this.active = this.removeDuplicatedItem(this.active);
        this.initdata()
      } else {
        this.chairs = this.allchairs;
        this.chairCount = this.chairs.length;
      }
    },
  },
  mounted() {
    this.$store.state.active = 2;
    if (this.$route.query.index) {
      this.rolling()
      this.active.push(this.$route.query.index)
      /* 去重 */
      this.active = this.removeDuplicatedItem(this.active);
      this.initdata()
    } else {
      this.chairs = this.allchairs;
      this.chairCount = this.chairs.length;
    }

    this.atPosition();
  },

  methods: {
    mouseenter(e) {
      let tem = ""
      tem = e.imgSrc;
      e.imgSrc = e.hoverimg;
      e.hoverimg = tem;
    },
    mouseleave(e) {
      let tem = ""
      tem = e.hoverimg;
      e.hoverimg = e.imgSrc;
      e.imgSrc = tem;
    },
    tosubitem(e) {
      this.$router.push({
        path: e
      })
    },
    rolling() {
      this.$nextTick(() => {
        let height = this.$refs.proheader.offsetHeight - 70;
        window.scrollTo(0, height)//第二个0表示滚动距离
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
          $(".probodyright").css({ "marginLeft": "33%" });
        } else {
          $(".probodyleft").css({
            "position": "unset"
          })
          $(".probodyright").css({ "marginLeft": "3%" });
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
        this.chairTitle = "所有活动家具";
        this.chairCount = this.allchairs.length;

      } else {
        this.chairTitle = "所选活动家具";
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
    initdata() {
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

      } else {
        for (let i = 0; i < this.menusChair.length; i++) {
          const element = this.menusChair[i];
          for (let j = 0; j < this.active.length; j++) {
            const ele = this.active[j];
            if (element.flag == ele) {
              this.active.splice(j, 1)
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

      } else {
        for (let i = 0; i < this.menusSpace.length; i++) {
          const element = this.menusSpace[i];
          for (let j = 0; j < this.active.length; j++) {
            const ele = this.active[j];
            if (element.flag == ele) {
              this.active.splice(j, 1)
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

      } else {
        for (let i = 0; i < this.menusType.length; i++) {
          const element = this.menusType[i];
          for (let j = 0; j < this.active.length; j++) {
            const ele = this.active[j];
            if (element.flag == ele) {
              this.active.splice(j, 1)
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
@import '@/../static/css/productListCommon.scss'
</style>