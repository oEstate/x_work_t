<!-- 产品 -->
<template>
  <div class="productmain">
    <div class="proheader" id="proheader" ref="proheader">
      <img src="@/../static/imgs/product/desk/Map-Table-Ambience.jpg" width="100%;height:100%"
        alt="">
      <div class="proheaderF">
        <div class="T1 mEN">DESK <span>桌</span></div>
        <span class="T2">不只是一个平面， 更是你尽情涂抹的画布。</span>
        <span class="T3">A desk is not just a surface. It is actually a canvas for your passionate
          painting.</span>
        <span class="T3"></span>
        <span class="T4"></span>
      </div>
    </div>
    <div class="probody">
      <div class="probodyleft">
        <div id="PBL">
          <span class="probodylefttitle">筛选桌</span>
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
            <img :src="item.imgSrc" style="width:260px;height:260px;cursor:pointer;" alt=""
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
      chairTitle: "所有桌",
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
        type: "会议桌",
        count: 8,
        flag: "C1",

      },
      {
        id: 2,
        type: "行政桌",
        count: 3,
        flag: "C2",

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
        type: "多场合组合",
        flag: "T1",
      },
      {
        id: 2,
        type: "含电源",
        flag: "T2",
      },
      {
        id: 3,
        type: "可堆叠",
        flag: "T3",
      },
      {
        id: 4,
        type: "可移动",
        flag: "T4",
      }
      ],
      allchairs: [{
        id: 1,
        imgSrc: "@/../static/imgs/product/desk/BeConn.png",
        hoverimg: "@/../static/imgs/product/desk/BeConn.jpg",
        T1: "BECONN",
        T2: "James Guo",
        route: "/BeConn",
        flag: ["C1", "S1", "S5", "T2"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/desk/Fly.png",
        hoverimg: "@/../static/imgs/product/desk/Fly.jpg",
        T1: "FLY",
        T2: "Asis Design",
        flag: ["C2", "S1", "T2"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/desk/Glide.png",
        hoverimg: "@/../static/imgs/product/desk/Glide.jpg",
        T1: "GLIDE",
        T2: "Gioia Yang",
        route: "/Glide",
        flag: ["C1", "S1", "S2", "S4", "S5", "T2"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/desk/Hacon-Desk.png",
        hoverimg: "@/../static/imgs/product/desk/Hacon.jpg",
        T1: "HACON",
        T2: "James Guo",
        flag: ["C1", "S1", "S3", "S5"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/desk/Halcyon-Desk.png",
        hoverimg: "@/../static/imgs/product/desk/Halcyon.jpg",
        T1: "HALCYON",
        T2: "James Guo",
        flag: ["C1", "S1", "S3", "S5", "T2"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/desk/Luster-Desk.png",
        hoverimg: "@/../static/imgs/product/desk/Luster Desk.jpg",
        T1: "LUSTER DESK",
        T2: "James Guo",
        flag: ["C1", "S1", "S5", "T2"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/desk/Map-Table.png",
        hoverimg: "@/../static/imgs/product/desk/Map Table.jpg",
        T1: "MAP TABLE",
        T2: "Edward Barber & Jay Osgerby",
        route: "/MapTable",
        flag: ["C1", "S1", "S2", "S4", "S5", "T1", "T3", "T4"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/desk/MedaMorph.png",
        hoverimg: "@/../static/imgs/product/desk/MedaMorph.jpg",
        T1: "MEDAMORPH",
        T2: "Alberto Meda",
        route: "/medamorph",
        flag: ["C1", "S1", "S5", "T2"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/desk/Reach.png",
        hoverimg: "@/../static/imgs/product/desk/Reach.jpg",
        T1: "REACH",
        T2: "James Guo",
        flag: ["C2", "S1", "T2"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/desk/SalamiDesk.png",
        hoverimg: "@/../static/imgs/product/desk/Salami Desk.jpg",
        T1: "SALAMI DESK",
        T2: "James Guo",
        flag: ["C1", "S1", "S5", "T2"]
      },
      {
        id: 2,
        imgSrc: "@/../static/imgs/product/desk/Shine.png",
        hoverimg: "@/../static/imgs/product/desk/Shine.jpg",
        T1: "SHINE",
        T2: "James Guo",
        route: "/Shine",
        flag: ["C2", "S1", "T2"]
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
        this.chairTitle = "所有桌";
        this.chairCount = this.allchairs.length;

      } else {
        this.chairTitle = "所选桌";
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