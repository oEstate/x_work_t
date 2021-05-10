<!--案例-->
<template>
  <div class="caseContainer">
    <div class="caseHeader">
      <div class="headDiv headDivtitle">
        <div class="CT1">
          <span class="CTT1 mEN">PORTFOLIO</span>
          <span class="CTT2">项目案例</span>
        </div>
        <span class="CTT3">每个空间都是一个容器，我们挑选合适的催化剂，让奇妙的反应在这里发生。</span>
        <span class="CTT4">We've met many spaces.We took them as containers,</span>
        <span class="CTT4">in which we put proper catalysts,and saw marvelous things happening.</span>
      </div>
      <div class="headDiv caseHeaderMid">
        <el-tabs v-model="activeName" @tab-click="syshandleClick">
          <el-tab-pane label="精选案例" name="first"></el-tab-pane>
          <el-tab-pane label="所有项目" name="second"></el-tab-pane>
          <el-tab-pane label="项目类型" name="third"></el-tab-pane>
          <el-tab-pane label="客户类型" name="fourth"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="headDiv caseHeaderLast"></div>
    </div>
    <div class="caseby">
      <el-tabs v-model="activeType">
        <el-tab-pane label name="T1">
          <div class="byrow" v-for="(item,index) in jxanData" :key="index">
            <div class="byrowTitle">
              <div class="byrowTitleL">
                <span class="byrowTitleLT1">{{item.title}}</span>
                <span class="byrowTitleLT2">{{item.count}}</span>
              </div>
              <div
                class="byrowTitleR"
                @click="item.isShow=!item.isShow"
              >{{item.isShow?item.hidenText:item.linkText}}</div>
            </div>
            <div class="verticalDiv">
              <div v-for="(ite,inde) in item.content" :key="inde">
                <div v-if="item.isShow" class="byrowby">
                  <div class="byrowbyItem" v-for="(it,ind) in ite" :key="ind">
                    <div
                      class="byrowbyItemImg"
                      @click=" $router.push({path:it.route, query: { title: it.name}}) "
                    >
                      <img :src="it.imgSrc" style="width:100%;height:100%;cursor: pointer;" alt />
                    </div>
                    <div class="byrowbyItemBot">
                      <span
                        class="byrowbyItemBotName"
                        style="cursor: pointer;"
                        @click=" $router.push({path:it.route, query: { title: it.name}}) "
                      >{{it.name}}</span>
                      <div class="byrowbyItemBotFlag">
                        <span>{{it.flagtext}}</span>
                        <img :src="it.flagimg" alt />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="byrowby" v-show="inde==0">
                  <div class="byrowbyItem" v-for="(it,ind) in ite" :key="ind">
                    <div
                      class="byrowbyItemImg"
                      @click=" $router.push({path:it.route, query: { title: it.name}}) "
                    >
                      <img :src="it.imgSrc" style="width:100%;height:100%;cursor: pointer;" alt />
                    </div>
                    <div class="byrowbyItemBot">
                      <span
                        class="byrowbyItemBotName"
                        style="cursor: pointer;"
                        @click=" $router.push({path:it.route, query: { title: it.name}}) "
                      >{{it.name}}</span>
                      <div class="byrowbyItemBotFlag">
                        <span>{{it.flagtext}}</span>
                        <img :src="it.flagimg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label name="T2">
          <div class="byrow" v-for="(item,index) in syxmData" :key="index">
            <div class="byrowTitle">
              <div class="byrowTitleL">
                <span class="byrowTitleLT1">{{item.title}}</span>
                <span class="byrowTitleLT2">{{item.count}}</span>
              </div>
              <div
                class="byrowTitleR"
                @click="item.isShow=!item.isShow"
              >{{item.isShow?item.hidenText:item.linkText}}</div>
            </div>
            <div class="verticalDiv">
              <div v-for="(ite,inde) in item.content" :key="inde">
                <div v-if="item.isShow" class="byrowby">
                  <div class="byrowbyItem" v-for="(it,ind) in ite" :key="ind">
                    <div
                      class="byrowbyItemImg"
                      @click=" $router.push({path:it.route, query: { title: it.name}}) "
                    >
                      <img :src="it.imgSrc" style="width:100%;height:100%;cursor: pointer;" alt />
                    </div>
                    <div class="byrowbyItemBot">
                      <span
                        class="byrowbyItemBotName"
                        style="cursor: pointer;"
                        @click=" $router.push({path:it.route, query: { title: it.name}}) "
                      >{{it.name}}</span>
                      <div class="byrowbyItemBotFlag">
                        <span>{{it.flagtext}}</span>
                        <img :src="it.flagimg" alt />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="byrowby" v-show="inde==0">
                  <div class="byrowbyItem" v-for="(it,ind) in ite" :key="ind">
                    <div
                      class="byrowbyItemImg"
                      @click=" $router.push({path:it.route, query: { title: it.name}}) "
                    >
                      <img :src="it.imgSrc" style="width:100%;height:100%;cursor: pointer;" alt />
                    </div>
                    <div class="byrowbyItemBot">
                      <span
                        class="byrowbyItemBotName"
                        style="cursor: pointer;"
                        @click=" $router.push({path:it.route, query: { title: it.name}}) "
                      >{{it.name}}</span>
                      <div class="byrowbyItemBotFlag">
                        <span>{{it.flagtext}}</span>
                        <img :src="it.flagimg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label name="T3">
          <div class="byrow" v-for="(item,index) in khlxData" :key="index">
            <div class="byrowTitle">
              <div class="byrowTitleL">
                <span class="byrowTitleLT1">{{item.title}}</span>
                <span class="byrowTitleLT2">{{item.count}}</span>
              </div>
              <div
                class="byrowTitleR"
                @click="item.isShow=!item.isShow"
              >{{item.isShow?item.hidenText:item.linkText}}</div>
            </div>
            <div class="verticalDiv">
              <div v-for="(ite,inde) in item.content" :key="inde">
                <div v-if="item.isShow" class="byrowby">
                  <div class="byrowbyItem" v-for="(it,ind) in ite" :key="ind">
                    <div
                      class="byrowbyItemImg"
                      @click=" $router.push({path:it.route, query: { title: it.name}}) "
                    >
                      <img :src="it.imgSrc" style="width:100%;height:100%;cursor: pointer;" alt />
                    </div>
                    <div class="byrowbyItemBot">
                      <span
                        class="byrowbyItemBotName"
                        style="cursor: pointer;"
                        @click=" $router.push({path:it.route, query: { title: it.name}}) "
                      >{{it.name}}</span>
                      <div class="byrowbyItemBotFlag">
                        <span>{{it.flagtext}}</span>
                        <img :src="it.flagimg" alt />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="byrowby" v-show="inde==0">
                  <div class="byrowbyItem" v-for="(it,ind) in ite" :key="ind">
                    <div
                      class="byrowbyItemImg"
                      @click=" $router.push({path:it.route, query: { title: it.name}}) "
                    >
                      <img :src="it.imgSrc" style="width:100%;height:100%;cursor: pointer;" alt />
                    </div>
                    <div class="byrowbyItemBot">
                      <span
                        class="byrowbyItemBotName"
                        style="cursor: pointer;"
                        @click=" $router.push({path:it.route, query: { title: it.name}}) "
                      >{{it.name}}</span>
                      <div class="byrowbyItemBotFlag">
                        <span>{{it.flagtext}}</span>
                        <img :src="it.flagimg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label name="T4">
          <div class="byrow" v-for="(item,index) in xmlxData" :key="index">
            <div class="byrowTitle">
              <div class="byrowTitleL">
                <span class="byrowTitleLT1">{{item.title}}</span>
                <span class="byrowTitleLT2">{{item.count}}</span>
              </div>
              <div
                class="byrowTitleR"
                @click="item.isShow=!item.isShow"
              >{{item.isShow?item.hidenText:item.linkText}}</div>
            </div>
            <div class="verticalDiv">
              <div v-for="(ite,inde) in item.content" :key="inde">
                <div v-if="item.isShow" class="byrowby">
                  <div class="byrowbyItem" v-for="(it,ind) in ite" :key="ind">
                    <div
                      class="byrowbyItemImg"
                      @click=" $router.push({path:it.route, query: { title:it.name}}) "
                    >
                      <img :src="it.imgSrc" style="width:100%;height:100%;cursor: pointer;" alt />
                    </div>
                    <div class="byrowbyItemBot">
                      <span
                        class="byrowbyItemBotName"
                        style="cursor: pointer;"
                        @click=" $router.push({path:it.route, query: { title:it.name}}) "
                      >{{it.name}}</span>
                      <div class="byrowbyItemBotFlag">
                        <span>{{it.flagtext}}</span>
                        <img :src="it.flagimg" alt />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="byrowby" v-show="inde==0">
                  <div class="byrowbyItem" v-for="(it,ind) in ite" :key="ind">
                    <div
                      class="byrowbyItemImg"
                      @click=" $router.push({path:it.route, query: { title:it.name}}) "
                    >
                      <img :src="it.imgSrc" style="width:100%;height:100%;cursor: pointer;" alt />
                    </div>
                    <div class="byrowbyItemBot">
                      <span
                        class="byrowbyItemBotName"
                        style="cursor: pointer;"
                        @click=" $router.push({path:it.route, query: { title:it.name}}) "
                      >{{it.name}}</span>
                      <div class="byrowbyItemBotFlag">
                        <span>{{it.flagtext}}</span>
                        <img :src="it.flagimg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 底部 -->
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      activeType: "T1",
      /* 精选案例 */
      jxanData: [
        /* 办公空间 */
        {
          title: "办公空间",
          count: "12",
          linkText: "查看全部办公空间案例",
          hidenText: "收起空间案例",
          isShow: false,
          content: [
            /* 1 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
            /* 2 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
            /* 3 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
            /* 4 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
          ],
        },
        /* 教育空间 */
        {
          title: "教育空间",
          count: "4",
          linkText: "查看全部教育空间案例",
          hidenText: "收起教育空间案例",
          isShow: false,
          content: [
            [
              {
                imgSrc:
                  "@/../static/imgs/case/University-of-Konstanz-Library.jpg",
                name: "康斯坦兹大学图书馆",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/Germany Flag.png",
                route: "/konstanz",
              },
              {
                imgSrc: "@/../static/imgs/case/First-Leap.jpg",
                name: "励步英语",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lbyy",
              },
              {
                imgSrc: "@/../static/imgs/case/St.-Cathrines-College.jpg",
                name: "牛津大学圣凯瑟琳学院",
                flagtext: "1962",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/casesubitem",
              },
            ],
            [
              {
                imgSrc:
                  "@/../static/imgs/case/University-of-Konstanz-Library.jpg",
                name: "运城职业技术学院图书馆空间方案",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/yc",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
            ],
          ],
        },
        /* 酒店空间 */
        {
          title: "酒店空间",
          count: "5",
          linkText: "查看全部酒店空间案例",
          hidenText: "收起酒店空间案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Eden-Locke-Edinburgh.jpg",
                name: "爱丁堡伊顿洛克酒店",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/adb",
              },
              {
                imgSrc: "@/../static/imgs/case/D-Hotel-Maris-Bay.jpg",
                name: "D玛丽斯湾度假屋",
                flagtext: "1993",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/d",
              },
              {
                imgSrc: "@/../static/imgs/case/CitizenM-NYC.jpg",
                name: "士迪辰酒店",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/USA Flag.png",
                route: "/sdc",
              },
            ],
            [
              {
                imgSrc: "@/../static/imgs/case/Eden-Locke-Edinburgh.jpg",
                name: "爱丁堡伊顿洛克酒店",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/adb",
              },
              {
                imgSrc: "@/../static/imgs/case/D-Hotel-Maris-Bay.jpg",
                name: "D玛丽斯湾度假屋",
                flagtext: "1993",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/d",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
            ],
          ],
        },
        /* 商业空间 */
        {
          title: "商业空间",
          count: "3",
          linkText: "查看全部商业空间案例",
          hidenText: "收起商业空间案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Poly-Future-Metroppolitan.jpg",
                name: "保利·未来大都汇",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/blwl",
              },
              {
                imgSrc: "@/../static/imgs/case/CRC-Innovation-Lab.jpg",
                name: "华润大学创新实验室",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/hrdx",
              },
              {
                imgSrc: "@/../static/imgs/case/Lego-House.jpg",
                name: "乐高之家",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/Denmark Flag.png",
                route: "/lgzj",
              },
            ],
          ],
        },
      ],
      /* 所有项目 */

      syxmData: [
        /* 办公空间 */
        {
          title: "办公空间",
          count: "12",
          linkText: "查看全部办公空间案例",
          hidenText: "收起空间案例",
          isShow: false,
          content: [
            /* 1 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
            /* 2 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
            /* 3 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
            /* 4 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
          ],
        },
        /* 教育空间 */
        {
          title: "教育空间",
          count: "4",
          linkText: "查看全部教育空间案例",
          hidenText: "收起教育空间案例",
          isShow: false,
          content: [
            [
              {
                imgSrc:
                  "@/../static/imgs/case/University-of-Konstanz-Library.jpg",
                name: "康斯坦兹大学图书馆",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/Germany Flag.png",
                route: "/konstanz",
              },
              {
                imgSrc: "@/../static/imgs/case/First-Leap.jpg",
                name: "励步英语",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lbyy",
              },
              {
                imgSrc: "@/../static/imgs/case/St.-Cathrines-College.jpg",
                name: "牛津大学圣凯瑟琳学院",
                flagtext: "1962",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/casesubitem",
              },
            ],
            [
              {
                imgSrc:
                  "@/../static/imgs/case/University-of-Konstanz-Library.jpg",
                name: "康斯坦兹大学图书馆",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/Germany Flag.png",
                route: "/konstanz",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
            ],
          ],
        },
        /* 酒店空间 */
        {
          title: "酒店空间",
          count: "5",
          linkText: "查看全部酒店空间案例",
          hidenText: "收起酒店空间案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Eden-Locke-Edinburgh.jpg",
                name: "爱丁堡伊顿洛克酒店",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/adb",
              },
              {
                imgSrc: "@/../static/imgs/case/D-Hotel-Maris-Bay.jpg",
                name: "D玛丽斯湾度假屋",
                flagtext: "1993",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/d",
              },
              {
                imgSrc: "@/../static/imgs/case/CitizenM-NYC.jpg",
                name: "士迪辰酒店",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/USA Flag.png",
                route: "/sdc",
              },
            ],
            [
              {
                imgSrc: "@/../static/imgs/case/Eden-Locke-Edinburgh.jpg",
                name: "爱丁堡伊顿洛克酒店",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/adb",
              },
              {
                imgSrc: "@/../static/imgs/case/D-Hotel-Maris-Bay.jpg",
                name: "D玛丽斯湾度假屋",
                flagtext: "1993",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/d",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
            ],
          ],
        },
        /* 商业空间 */
        {
          title: "商业空间",
          count: "3",
          linkText: "查看全部商业空间案例",
          hidenText: "收起商业空间案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Poly-Future-Metroppolitan.jpg",
                name: "保利·未来大都汇",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/blwl",
              },
              {
                imgSrc: "@/../static/imgs/case/CRC-Innovation-Lab.jpg",
                name: "华润大学创新实验室",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/hrdx",
              },
              {
                imgSrc: "@/../static/imgs/case/Lego-House.jpg",
                name: "乐高之家",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/Denmark Flag.png",
                route: "/lgzj",
              },
            ],
          ],
        },
      ],
      /* 客户类型 */

      xmlxData: [
        /* 房地产 */
        {
          title: "房地产",
          count: "1",
          linkText: "查看全部办公空间案例",
          hidenText: "收起空间案例",
          isShow: false,
          content: [
            /* 1 */
            [
              {
                imgSrc: "@/../static/imgs/case/Poly-Future-Metroppolitan.jpg",
                name: "保利·未来大都汇",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/blwl",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
            ],
            /* 2 */
            // [{
            //     imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
            //     name: "爱茉莉太平洋集团总部",
            //     flagtext: "2018",
            //     flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
            //     route: "/casesubitem"
            //   },
            //   {
            //     imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
            //     name: "谷歌科技展厅",
            //     flagtext: "2019",
            //     flagimg: "@/../static/imgs/home/China-Flag.png",
            //     route: "/casesubitem1"
            //   }, {
            //     imgSrc: "@/../static/imgs/case/Everest.jpg",
            //     name: "朗玛峰创投",
            //     flagtext: "2017",
            //     flagimg: "@/../static/imgs/home/China-Flag.png",
            //     route: "/casesubitem2"
            //   }
            // ],
          ],
        },
        /* 互联网 */
        {
          title: "互联网",
          count: "3",
          linkText: "查看全部互联网案例",
          hidenText: "收起互联网案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/ly.jpg",
                name: "领英空间",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/linkedin",
              },
              {
                imgSrc: "@/../static/imgs/case/yh.jpg",
                name: "雅虎日本实验性办公空间",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/rb.jpg",
                route: "/yahoo",
              },
            ],
          ],
        },
        /* 酒店与休闲 */
        {
          title: "酒店与休闲",
          count: "5",
          linkText: "查看全部酒店与休闲案例",
          hidenText: "收起酒店与休闲案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Eden-Locke-Edinburgh.jpg",
                name: "爱丁堡伊顿洛克酒店",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/adb",
              },
              {
                imgSrc: "@/../static/imgs/case/D-Hotel-Maris-Bay.jpg",
                name: "D玛丽斯湾度假屋",
                flagtext: "1993",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/d",
              },
              {
                imgSrc: "@/../static/imgs/case/CitizenM-NYC.jpg",
                name: "士迪辰酒店",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/USA Flag.png",
                route: "/sdc",
              },
            ],
            [
              {
                imgSrc: "@/../static/imgs/case/hpa.jpg",
                name: "HPA湖畔度假中心",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/Italy Flag.png",
                route: "/hpa",
              },
              {
                imgSrc: "@/../static/imgs/case/sas.jpg",
                name: "SAS皇家酒店",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/Denmark Flag.png",
                route: "/sas",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
            ],
          ],
        },
        /* 教育 */
        {
          title: "教育",
          count: "4",
          linkText: "查看全部教育案例",
          hidenText: "收起教育案例",
          isShow: false,
          content: [
            [
              {
                imgSrc:
                  "@/../static/imgs/case/University-of-Konstanz-Library.jpg",
                name: "康斯坦兹大学图书馆",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/Germany Flag.png",
                route: "/konstanz",
              },
              {
                imgSrc: "@/../static/imgs/case/First-Leap.jpg",
                name: "励步英语",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lbyy",
              },
              {
                imgSrc: "@/../static/imgs/case/St.-Cathrines-College.jpg",
                name: "牛津大学圣凯瑟琳学院",
                flagtext: "1962",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/casesubitem",
              },
            ],
            [
              {
                imgSrc: "@/../static/imgs/case/yc.jpg",
                name: "运城职业技术学院图书馆空间方案",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/yc",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
            ],
          ],
        },
        /* 科技 */
        {
          title: "科技",
          count: "4",
          linkText: "查看全部科技案例",
          hidenText: "收起科技案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/tsl.jpg",
                name: "特斯联",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/tsl",
              },
              {
                imgSrc: "@/../static/imgs/case/wr.jpg",
                name: "微软亚太研发集团总部",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/Microsoft",
              },
            ],
            [
              {
                imgSrc: "@/../static/imgs/case/cmr.jpg",
                name: "希美安外科器械",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/cmr",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
            ],
          ],
        },
        /* 零售 */
        {
          title: "零售",
          count: "1",
          linkText: "查看全部零售案例",
          hidenText: "收起零售案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Lego-House.jpg",
                name: "乐高之家",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/Denmark Flag.png",
                route: "/lgzj",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
            ],
          ],
        },
        /* 媒体 */
        {
          title: "媒体",
          count: "1",
          linkText: "查看全部媒体案例",
          hidenText: "收起媒体案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/rmrb.jpg",
                name: "人民日报“中央厨房”",
                flagtext: "2016",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/rmrb",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
            ],
          ],
        },
        /* 民生与基建 */
        {
          title: "民生与基建",
          count: "1",
          linkText: "查看全部民生与基建案例",
          hidenText: "收起民生与基建案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/CRC-Innovation-Lab.jpg",
                name: "华润大学创新实验室",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/hrdx",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
            ],
          ],
        },
        /* 时尚与美容 */
        {
          title: "时尚与美容",
          count: "1",
          linkText: "查看全部时尚与美容案例",
          hidenText: "收起时尚与美容案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
            ],
          ],
        },
        /* 体育 */
        {
          title: "体育",
          count: "1",
          linkText: "查看全部体育案例",
          hidenText: "收起体育案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/on.jpg",
                name: "On总部",
                flagtext: "2017",
                flagimg: "@/../static/imgs/caseSwiss-Flag.png",
                route: "/on",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
            ],
          ],
        },
        /* 艺术与文化 */
        {
          title: "艺术与文化",
          count: "1",
          linkText: "查看全部艺术与文化案例",
          hidenText: "收起艺术与文化案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Lego-House.jpg",
                name: "乐高之家",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/Denmark Flag.png",
                route: "/lgzj",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
            ],
          ],
        },
        /* 银行与金融 */
        {
          title: "银行与金融",
          count: "1",
          linkText: "查看全部银行与金融案例",
          hidenText: "收起银行与金融案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
            ],
          ],
        },
        /* 制造与工业 */
        {
          title: "制造与工业",
          count: "1",
          linkText: "查看全部制造与工业案例",
          hidenText: "收起制造与工业案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/zw.jpg",
                name: "忠旺集团总部",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/zw",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
            ],
          ],
        },
        /* 咨询 */
        {
          title: "咨询",
          count: "2",
          linkText: "查看全部咨询案例",
          hidenText: "收起咨询案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/pwc.jpg",
                name: "普华永道体验中心",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/Swiss-Flag.png",
                route: "/pwc",
              },
              {
                imgSrc: "@/../static/imgs/case/wk.jpg",
                name: "沃科北京体验中心",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/xwork",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
              },
            ],
          ],
        },
      ],
      /* 项目类型 */

      khlxData: [
        /* 办公空间 */
        {
          title: "办公空间",
          count: "12",
          linkText: "查看全部办公空间案例",
          hidenText: "收起空间案例",
          isShow: false,
          content: [
            /* 1 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
            /* 2 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
            /* 3 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
            /* 4 */
            [
              {
                imgSrc: "@/../static/imgs/case/Amorepacific.jpg",
                name: "爱茉莉太平洋集团总部",
                flagtext: "2018",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/amorepacific",
              },
              {
                imgSrc: "@/../static/imgs/case/Google-L8-CEC.jpg",
                name: "谷歌科技展厅",
                flagtext: "2019",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/google",
              },
              {
                imgSrc: "@/../static/imgs/case/Everest.jpg",
                name: "朗玛峰创投",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lmf",
              },
            ],
          ],
        },
        /* 教育空间 */
        {
          title: "教育空间",
          count: "4",
          linkText: "查看全部教育空间案例",
          hidenText: "收起教育空间案例",
          isShow: false,
          content: [
            [
              {
                imgSrc:
                  "@/../static/imgs/case/University-of-Konstanz-Library.jpg",
                name: "康斯坦兹大学图书馆",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/Germany Flag.png",
                route: "/konstanz",
              },
              {
                imgSrc: "@/../static/imgs/case/First-Leap.jpg",
                name: "励步英语",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/lbyy",
              },
              {
                imgSrc: "@/../static/imgs/case/St.-Cathrines-College.jpg",
                name: "牛津大学圣凯瑟琳学院",
                flagtext: "1962",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/casesubitem",
              },
            ],
            [
              {
                imgSrc:
                  "@/../static/imgs/case/University-of-Konstanz-Library.jpg",
                name: "康斯坦兹大学图书馆",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/Germany Flag.png",
                route: "/konstanz",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
            ],
          ],
        },
        /* 酒店空间 */
        {
          title: "酒店空间",
          count: "5",
          linkText: "查看全部酒店空间案例",
          hidenText: "收起酒店空间案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Eden-Locke-Edinburgh.jpg",
                name: "爱丁堡伊顿洛克酒店",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/adb",
              },
              {
                imgSrc: "@/../static/imgs/case/D-Hotel-Maris-Bay.jpg",
                name: "D玛丽斯湾度假屋",
                flagtext: "1993",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/d",
              },
              {
                imgSrc: "@/../static/imgs/case/CitizenM-NYC.jpg",
                name: "士迪辰酒店",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/USA Flag.png",
                route: "/sdc",
              },
            ],
            [
              {
                imgSrc: "@/../static/imgs/case/Eden-Locke-Edinburgh.jpg",
                name: "爱丁堡伊顿洛克酒店",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/UK Flag.jpg",
                route: "/adb",
              },
              {
                imgSrc: "@/../static/imgs/case/D-Hotel-Maris-Bay.jpg",
                name: "D玛丽斯湾度假屋",
                flagtext: "1993",
                flagimg: "@/../static/imgs/case/KoreaFlag.jpg",
                route: "/d",
              },
              {
                imgSrc: "",
                name: "",
                flagtext: "",
                flagimg: "",
                route: "",
              },
            ],
          ],
        },
        /* 商业空间 */
        {
          title: "商业空间",
          count: "3",
          linkText: "查看全部商业空间案例",
          hidenText: "收起商业空间案例",
          isShow: false,
          content: [
            [
              {
                imgSrc: "@/../static/imgs/case/Poly-Future-Metroppolitan.jpg",
                name: "保利·未来大都汇",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/blwl",
              },
              {
                imgSrc: "@/../static/imgs/case/CRC-Innovation-Lab.jpg",
                name: "华润大学创新实验室",
                flagtext: "2018",
                flagimg: "@/../static/imgs/home/China-Flag.png",
                route: "/hrdx",
              },
              {
                imgSrc: "@/../static/imgs/case/Lego-House.jpg",
                name: "乐高之家",
                flagtext: "2017",
                flagimg: "@/../static/imgs/home/Denmark Flag.png",
                route: "/lgzj",
              },
            ],
          ],
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.$store.state.active = 3;
  },

  methods: {
    syshandleClick(tab, event) {
      switch (tab.name) {
        case "first":
          this.activeType = "T1";
          break;
        case "second":
          this.activeType = "T2";
          break;
        case "third":
          this.activeType = "T3";
          break;
        case "fourth":
          this.activeType = "T4";
          break;

        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.verticalDiv {
  display: flex;
  flex-direction: column;
}

.footer {
  width: 100%;
  height: 200px;
}

.byrowbyItemBotFlag {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 0;
}

.byrowbyItemBotFlag span {
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
}

.byrowbyItemBotName {
  font-size: 16px;
  font-weight: bold;
  cursor: pointer !important;
}

.byrowbyItemImg {
  margin: 20px 0 10px 0;
  cursor: pointer;
}

.byrowbyItemImg img {
  cursor: pointer;
}

.byrowbyItemBot {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

.byrowbyItem {
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: pointer;
}

.byrowby {
  display: flex;
  flex-direction: row;
}

.byrowbyItem:nth-child(2) {
  margin: 0 20px;
}

.byrow {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.CT1 {
  display: flex;
  flex-direction: row;
  font-weight: bold;
  margin-top: -30px;
}

.CTT1 {
  font-size: 40px;
  color: #000;
  letter-spacing: 10px;
}

.CTT2 {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  // margin-top: 5px;
}

.CTT3 {
  font-size: 17px;
  margin-top: 10px;
}

.CTT4 {
  font-size: 15px;
}

.headDivtitle {
  display: flex;
  flex-direction: column;
  font-weight: bold;
}

.caseContainer {
  padding: 30px;
}

.caseby {
  width: 100%;
}

.caseHeader {
  display: flex;
  flex-direction: row;
}

.headDiv {
  margin-top: 120px;
  height: 100px;
  flex: 1;
}

.caseHeaderMid {
  display: flex;
  justify-content: center;
}

.byrowTitle {
  /* width: 100%;
  height: 100%; */
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 70px;
}

.byrowTitleL {
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: #000;
}

.byrowTitleR {
  position: absolute;
  right: 0;
  font-size: 14px;
  color: #d47a66;
  cursor: pointer;
  text-decoration: underline;
}

.byrowTitleLT1 {
  font-size: 20px;
}

.byrowTitleLT2 {
  font-size: 12px;
}
.byrowbyItemBotFlag img {
  width: 37px;
  height: 23px;
}
/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
  .caseHeader {
    flex-direction: column;
    margin-top: 120px;
    .headDiv {
      margin-top: 0;
      .CT1 {
        .CTT1 {
          font-size: 36px;
          letter-spacing: 6px;
        }
        .CTT2 {
          font-size: 16px;
        }
      }
      .CTT3 {
        font-size: 16px;
      }
      .CTT4 {
        font-size: 14px;
      }
    }
    .caseHeaderLast {
      display: none;
    }
    .caseHeaderMid {
      height: auto;
      margin-bottom: -60px;
    }
  }
  .caseby {
    .el-tabs__header {
      display: none;
    }
  }
  .byrowbyItemBotName,
  .byrowbyItemBotFlag {
    font-size: 14px;
    span {
      font-size: 15px;
      margin-right: 6px;
    }
  }
  .byrowbyItemBotName {
    width: 1460px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

@media screen and (max-width: 640px) {
  .caseHeader {
    flex-direction: column;
    margin-top: 90px;
    .headDiv {
      margin-top: 0;
      .CT1 {
        .CTT1 {
          font-size: 30px;
          letter-spacing: 3px;
        }
        .CTT2 {
          font-size: 14px;
        }
      }
      .CTT3 {
        font-size: 14px;
      }
      .CTT4 {
        font-size: 12px;
        margin-top: 2px;
      }
    }
    .caseHeaderMid {
      margin-top: 10px;
    }
    .caseHeaderLast {
      display: none;
    }
    .caseHeaderMid {
      height: auto;
      margin-bottom: -60px;
    }
  }
  .byrowTitle {
    margin-top: 60px;
    align-items: center;
  }
  .caseby {
    .el-tabs__header {
      display: none;
    }
  }
  .byrowbyItemBotName,
  .byrowbyItemBotFlag {
    font-size: 12px;
    span {
      font-size: 12px;
      margin-right: 4px;
    }
    img {
      width: 24px;
      height: 16px;
    }
  }

  .verticalDiv {
    .byrowby:first-child {
      flex-wrap: wrap;
      .byrowbyItem {
        flex: initial;
        margin: 0;
      }
      //       .byrowbyItem:first-child {
      //   flex: initial;
      // }
      // .byrowbyItem:nth-child(2) {
      //   margin-left: 0;
      // }
      // .byrowbyItem:not(:first-child) {
      //   .byrowbyItemBotName {
      //     width: 100px;
      //     overflow: hidden;
      //     white-space: nowrap;
      //     text-overflow: ellipsis;
      //   }
      // }
    }
  }
}
</style>
