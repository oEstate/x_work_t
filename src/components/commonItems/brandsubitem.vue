<!--  -->
<template>
<div class="promain">
    <div class="brandheader">
        <img :src="allData.headerimg" style="width:100%;height:100%" alt />
        <div class="branditemTitle">
            <div class="pT1" :style="'color:'+allData.titleColor">{{allData.PT1}}</div>
            <div class="pT2" :style="'color:'+allData.titleColor">
                {{allData.PT2t1}}
                <span :style="'color:'+allData.titleColor">{{allData.PT2t2}}</span>
            </div>
            <div class="pT2" :style="'color:'+allData.titleColor">
                {{allData.PT3t1}}
                <span :style="'color:'+allData.titleColor">{{allData.PT3t2}}</span>
            </div>
            <div class="pT2" :style="'color:'+allData.titleColor">
                {{allData.PT4t1}}
                <span :style="'color:'+allData.titleColor">{{allData.PT4t2}}</span>
            </div>
        </div>
    </div>
    <div class="brandmid">
        <div class="brandmidtop">
            <div class="pmt1">
                <img :src="allData.map" style="width:100%;height:100%" alt />
            </div>
            <div class="pmt2">
                <div class="pmt2T1">
                    {{allData.M1t1}}
                    <span>{{allData.M1t2}}</span>
                </div>
                <div class="pmt2T2">{{allData.M2t1}}</div>
                <div class="pmt2T3">{{allData.M2t2}}</div>
                <div class="pmt2T2">{{allData.M3t1}}</div>
                <div class="pmt2T3">{{allData.M3t2}}</div>
                <div class="pmt2T2">{{allData.M4t1}}</div>
                <div class="pmt2T3">{{allData.M4t2}}</div>
            </div>

            <!-- 统一处理 -->
            <div class="pmt3 pmt3_voide" v-if="flag!='BOOM'">
                <van-loading v-if="loading" class="van_loading" size="24px">加载中...</van-loading>
                <video id="videos" ref="videos" class="videoClass" :src="allData.video1" playsinline webkit-playsinline x5-video-player-type="h5" autoplay="autoplay" loop></video>
                <canvas class="videoClass" ref="canvas"></canvas>
                <img v-if="videoType" class="switch_btn" @click="playPause_Android" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
                <img class="switch_btn" v-if="!videoType" @click="playPause" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
            </div>

            <div class="pmt3" v-if="flag=='BOOM'">
                <img :src="allData.R1img" style="width:100%;height:100%" alt />
                <span class="pmt3btn">{{allData.R1text}}</span>
            </div>

            <!-- 重复注释 -->
            <!-- <div class="pmt3 pmt3_voide" v-if="flag=='FRITZ HANSEN'">
                <van-loading v-if="loading" class="van_loading" size="24px">加载中...</van-loading>
                <video id="videos" ref="videos" class="videoClass" :src="allData.video1" playsinline webkit-playsinline x5-video-player-type="h5" autoplay="autoplay" loop></video>
                <canvas class="videoClass" ref="canvas"></canvas>
                <img v-if="videoType" class="switch_btn" @click="playPause_Android" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
                <img class="switch_btn" v-if="!videoType" @click="playPause" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
            </div>

            <div class="pmt3" v-if="flag=='BOOM'">
                <img :src="allData.R1img" style="width:100%;height:100%" alt />
                <span class="pmt3btn">{{allData.R1text}}</span>
            </div>
            <div class="pmt3 pmt3_voide" v-if="flag=='X-WORK EDUCATION'">
                <van-loading v-if="loading" class="van_loading" size="24px">加载中...</van-loading>
                <video id="videos" ref="videos" class="videoClass" :src="allData.video1" playsinline webkit-playsinline x5-video-player-type="h5" autoplay="autoplay" loop></video>
                <canvas class="videoClass" ref="canvas"></canvas>
                <img v-if="videoType" class="switch_btn" @click="playPause_Android" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
                <img class="switch_btn" v-if="!videoType" @click="playPause" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
            </div> -->

            <!-- <div class="pmt3" v-if="flag=='MAGIS'">
          <img :src="allData.R1img" style="width:100%;height:100%" alt="">
          <span class="pmt3btn">{{allData.R1text}}</span>
        </div>-->
            <!-- <div class="pmt3 pmt3_voide" v-if="flag=='MAGIS'">
                <van-loading v-if="loading" class="van_loading" size="24px">加载中...</van-loading>
                <video id="videos" ref="videos" class="videoClass" :src="allData.video1" playsinline webkit-playsinline x5-video-player-type="h5" autoplay="autoplay" loop></video>
                <canvas class="videoClass" ref="canvas"></canvas>
                <img v-if="videoType" class="switch_btn" @click="playPause_Android" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
                <img class="switch_btn" v-if="!videoType" @click="playPause" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
            </div>
            <div class="pmt3 pmt3_voide" v-if="flag=='GANDIA BLASCO'">
                <van-loading v-if="loading" class="van_loading" size="24px">加载中...</van-loading>
                <video id="videos" ref="videos" class="videoClass" :src="allData.video1" playsinline webkit-playsinline x5-video-player-type="h5" autoplay="autoplay" loop></video>
                <canvas class="videoClass" ref="canvas"></canvas>
                <img v-if="videoType" class="switch_btn" @click="playPause_Android" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
                <img class="switch_btn" v-if="!videoType" @click="playPause" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
            </div>
            <div class="pmt3 pmt3_voide" v-if="flag=='INTERSTUHL'">
                <van-loading v-if="loading" class="van_loading" size="24px">加载中...</van-loading>
                <video id="videos" ref="videos" class="videoClass" :src="allData.video1" playsinline webkit-playsinline x5-video-player-type="h5" autoplay="autoplay" loop></video>
                <canvas class="videoClass" ref="canvas"></canvas>
                <img v-if="videoType" class="switch_btn" @click="playPause_Android" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
                <img class="switch_btn" v-if="!videoType" @click="playPause" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
            </div>
            <div class="pmt3 pmt3_voide" v-if="flag=='VITRA'">
                <van-loading v-if="loading" class="van_loading" size="24px">加载中...</van-loading>
                <video id="videos" ref="videos" class="videoClass" :src="allData.video1" playsinline webkit-playsinline x5-video-player-type="h5" autoplay="autoplay" loop></video>
                <canvas class="videoClass" ref="canvas"></canvas>
                <img v-if="videoType" class="switch_btn" @click="playPause_Android" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
                <img class="switch_btn" v-if="!videoType" @click="playPause" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
            </div> -->
        </div>
        <div class="brandmidm">
            <div class="brandmidmTitle">
                {{allData.Title1T1}}
                <span>{{allData.Title1T2}}</span>
            </div>
            <div class="brandmidmitem brandmidmitem1" v-for="(item,index) in jdsjData" :key="index">
                <div class="bmmitem" v-for="(it,inde) in item" :key="inde">
                    <div>
                        <img :src="it.imgSrc" style="width:100%;height:100%" alt />
                    </div>
                    <div class="bmmT1">
                        <span class="bmmTm1">{{it.T1}}</span>
                        <span class="bmmTm">{{it.TM}}</span>
                    </div>
                    <div class="bmmT2">{{it.T2}}</div>
                    <div class="bmmT3">
                        {{it.T3t1}}
                        <span style="vertical-align:super;font-size:10px">{{it.T3t2}}</span>
                        {{it.T3}}
                    </div>
                </div>
            </div>
        </div>
        <div class="brandmidm brandmidm1" v-if="allData.Title2T1">
            <div class="brajzjy">
                <div style="flex:2">
                    <div class="brandmidmTitle">
                        {{allData.Title2T1}}
                        <span>{{allData.Title2T2}}</span>
                    </div>
                    <div class="jzjy">{{allData.Title3T1}}</div>
                </div>
                <div class="brandmidm1_f" style="flex:1"></div>
                <div class="brandmidm1_l" style="flex:1"></div>
            </div>
            <div class="brajzjy brajzjy1">
                <!-- <div style="flex:2;margin-right:20px ; display: flex; flex-direction: column;">
            <img :src="allData.SJimg1" style="width:100%;height:100%" alt="">
            <span class="jxbot">{{allData.SJimgtext1}}</span>
          </div>
          <div style="flex:1;margin-right:20px ; display: flex;  flex-direction: column;">
            <img :src="allData.SJimg2" style="width:100%;height:100%" alt="">
            <span class="jxbot">{{allData.SJimgtext2}}</span>
          </div>
          <div style="flex:1;display: flex;  flex-direction: column;">
            <img :src="allData.SJimg3" style="width:100%;height:100%" alt="">
            <span class="jxbot">{{allData.SJimgtext3}}</span>
          </div>-->
                <div class="brajzjyitem" v-for="(item,index) in allData.SJ" :key="index" :style="'flex:'+item.flex">
                    <img :src="item.SJimg" style="width:100%" alt />
                    <span class="jxbot">{{item.SJimgtext}}</span>
                </div>
                <div class="brajzjyitem1_f">
                    <div class="brajzjyitem1" v-for="(item,x) in allData.SJ" :key="'1'+x">
                        <img :src="item.SJimg" style="width:100%;" alt />
                        <span class="jxbot">{{item.SJimgtext}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="brandmidm" v-if="allData.Title4T1">
            <div class="brandmidmTitle">
                {{allData.Title4T1}}
                <span>{{allData.Title4T2}}</span>
            </div>
            <div class="brandmidmitem brandmidmitem2" v-for="(item,index) in designers" :key="index">
                <div class="bmmitem" v-for="(it,inde) in item" :key="inde">
                    <div>
                        <img :src="it.imgSrc" style="width:100%;height:100%" alt />
                    </div>
                    <div class="bmmT1">
                        <div>                        <span class="bmmTm1">{{it.T1}}</span>
                        <span class="bmmTm">{{it.TM}}</span></div>

                        <div class="sjsflag">
                            <img :src="it.flag" alt />
                        </div>
                    </div>
                    <div class="bmmT2">{{it.T2}}</div>
                    <div class="bmmT3">{{it.T3}}</div>
                </div>
            </div>
        </div>

        <div class="brandmidm brandmidm_footer">
            <div class="brandmidmTitle">
                {{allData.Title5T1}}
                <span class="btojd">{{allData.Title5T2}}</span>
                <span class="ckantext">{{allData.Title5T3}}</span>
            </div>

            <div class="brandmidmitem">
                <div class="bmmitem" v-for="(it,inde) in projects" :key="inde">
                    <div>
                        <img :src="it.imgSrc" style="width:100%;height:100%" alt />
                    </div>
                    <div class="btojdDiv">
                        <span class="btojdtext">{{it.T1}}</span>
                        <div class="btojdright">
                            <span class="btojdtext">{{it.T2}}</span>
                            <div class="btojdflag">
                                <img :src="it.flag" style="width:30px;height:20px" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fot">
            <div class="fotext">想要了解更多， 请访问{{flag}}官方网站：</div>
            <div v-for="(item,index) in allData.footerurl " :key="index">
                <a :href="item.url" target="_blank">{{item.url}}</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    Loading
} from 'vant'
export default {
    data() {
        return {
            flag: "FRITZ HANSEN",
            adaptiveVideo: "@/../static/video/v1.ts",
            playFlag: false,
            videoType: false,
            loading: false,
            isAndroid: "",
            allData: {
                titleColor: "#000",
                headerimg: "@/../static/imgs/brand/FritzHansen/FritzHansenIntroPic.jpg",
                PT1: "FRITZ HANSEN",
                PT2t1: "ETERNAL",
                PT2t2: "永恒",
                PT3t1: "PURE",
                PT3t2: "纯净",
                PT4t1: "SCULPTURESQUE",
                PT4t2: "雕塑",
                map: "@/../static/imgs/brand/FritzHansen/map.png",
                M1t1: "STORY",
                M1t2: "品牌故事",
                M2t1: "HISTORY",
                M2t2: "源自丹麦的经典家居品牌Fritz Hansen成立于1872年。FritzHansen坚信，家具不仅仅是为了实现功能需求，更是营造空间氛围不可或缺的一部分，可以为人们带来身处其间的愉悦享受。也正是这一点激励着Fritz Hansen携150年的悠久传承、杰出设计和卓越匠艺，不断探索和创造更多的可能性。",
                M3t1: "HERITAGE",
                M3t2: `自1872年创立以来，Fritz Hansen始终致力于把卓越设计带给全球热爱设计的人们，通过伟大的设计，让生活和居住空间变得愈加美好，
            其中有许多经典设计已经过数十年传承，Fritz Hansen将他们无可替代的内核呈现于人们面前，也通过适当的调整让这些产品历久弥新`,
                M4t1: "FUN",
                M4t2: `不论是现代简约，亦或是经典低调，Fritz Hansen始终与空间和身处空间之中的人们息息相关，
            通过始终如一的简洁设计，和响应当下趋势，更加果敢丰富的色彩内容呈现，Fritz Hansen传达出生活方式理念正式让平淡无奇的每一天都焕发非凡意趣。
          `,
                video1: "@/../static/video/v1.mp4",
                R1img: "@/../static/imgs/brand/FritzHansen/FritzHansenOffices.jpg",
                R1text: "位于丹麦阿勒罗德 (AllerØd)的Fritz Hansen总部办公室",
                Title1T1: "ICONIC DESIGN",
                Title1T2: "经典设计",
                Title2T1: "CRAFTSMANSHIP",
                Title2T2: "精湛技艺",
                Title3T1: `Fritz Hansen不仅仅满足于创造历久弥新的传奇设计，同时还致力于呈现无懈可击的产品质量。Fritz Hansen甚至还设定了“Premium Quality”质量标准，
              根据不同的产品需求研发精专机械并定制生产流程， 以达到理想的家具质量。 通过不断提高其产品品质， Fritz Hansen为用户带来了极佳的体验。 这种追求精湛技艺的理念已经深深植入了Fritz
              Hansen的脊髓。`,
                // SJimg1: "@/../static/imgs/brand/FritzHansen/Veneer.jpg",
                // SJimgtext1: "Fritz Hansen精心挑选每一张木皮",

                // SJimg2: "@/../static/imgs/brand/FritzHansen/Quality.jpg",
                // SJimgtext2: "通过定制机械与流程最大化产品质量",
                // SJimg3: "@/../static/imgs/brand/FritzHansen/Manufacturing.jpg",
                // SJimgtext3: "历经反复测试以达到Premium Quality",
                SJ: [{
                        SJimg: "@/../static/imgs/brand/FritzHansen/Veneer.jpg",
                        SJimgtext: "Fritz Hansen精心挑选每一张木皮",
                        flex: 2,
                    },
                    {
                        SJimg: "@/../static/imgs/brand/FritzHansen/Quality.jpg",
                        SJimgtext: "通过定制机械与流程最大化产品质量",
                        flex: 1,
                    },
                    {
                        SJimg: "@/../static/imgs/brand/FritzHansen/Manufacturing.jpg",
                        SJimgtext: "历经反复测试以达到Premium Quality",
                        flex: 1,
                    },
                ],

                Title4T1: "DESIGNERS",
                Title4T2: "设计师",
                Title5T1: "PROJECTS",
                Title5T2: "经典案例",
                Title5T3: "查看全部有关Fritz Hansen案例",
                footerurl: [{
                    url: "https://fritzhansen.com",
                }, ],
            },
            jdsjData: [
                [{
                        imgSrc: "@/../static/imgs/brand/FritzHansen/Egg.jpg",
                        T1: "EGG",
                        TM: "TM",
                        T2: "Arne Jacobsen,1958",
                        T3t1: "",
                        T3t2: "",
                        T3: ` Egg™兼顾了经典美观的外观造型与超凡的舒适度，七蛋壳般的外形设计完美符合人体工学。设计师Arne Jacobsen更开创性的填充入高密度海绵，
                        以增强回弹力，让椅子可以完整而舒适的拥裹身体。椅背也安装有可调节倾斜装置，可根据用户体重调节倾斜角度。`,
                    },
                    {
                        imgSrc: "@/../static/imgs/brand/FritzHansen/Swan.jpg",
                        T1: "SWAN",
                        TM: "TM",
                        T2: "Arne Jacobsen,1958",
                        T3t1: "",
                        T3t2: "",
                        T3: ` 设计师 Arne Jacobsen 擅长将自由流畅的雕刻式塑形， 与北欧现代设计相结合， 使其作品充满灵性且质感非凡。 Swan™的整体设计极富艺术感， 因其外观宛如一只收拢翅膀的优雅天鹅而得名， 代表了一种美丽、 精致的空间表达方式。`,
                    },
                    {
                        imgSrc: "@/../static/imgs/brand/FritzHansen/PK22.jpg",
                        T1: "PK",
                        TM: "22",
                        T2: "Poul Kjærholm, 1956",
                        T3t1: "",
                        T3t2: "",
                        T3: ` PK22™的椅面由两件呈 “X” 交叉的支撑架精确架起， 使椅子脱离大件不锈钢金属的固定结构， 是极简主义风格的完美诠释。 这款座椅充分发挥了钢材的强度， 再加上特别设计的五金配件， 达到了极致的简洁， 并将理性和优雅完美地融合在了一起。`,
                    },
                    {
                        imgSrc: "@/../static/imgs/brand/FritzHansen/RO.jpg",
                        T1: "RO",
                        TM: "TM",
                        T2: "Jaime HayÓn, 2013",
                        T3t1: "",
                        T3t2: "",
                        T3: ` RO™代表了繁忙都市中的片刻平和静谧， 拥有波浪般流畅摩登的主题曲线， 配以冷峻的铝制椅腿， 呈现出现代美感。 弯曲延伸的靠背与扶手连为一体， 可以将使用者包裹其中， 配以软度适中的厚实坐垫与靠垫， 带来些许平和的私密性的同时， 令人倍感舒适放松。`,
                    },
                ],
                [{
                        imgSrc: "@/../static/imgs/brand/FritzHansen/Grand-Prix.jpg",
                        T1: "GRAND PRIX",
                        TM: "TM",
                        T2: "Arne Jacobsen, 1957",
                        T3t1: " ",
                        T3t2: " ",
                        T3: `  `,
                    },
                    {
                        imgSrc: "@/../static/imgs/brand/FritzHansen/Series-7.jpg",
                        T1: "SERIES 7",
                        TM: "TM",
                        T2: "Arne Jacobsen, 1955",
                        T3t1: " ",
                        T3t2: " ",
                        T3: `  `,
                    },
                    {
                        imgSrc: "@/../static/imgs/brand/FritzHansen/Drop.jpg",
                        T1: "DROP",
                        TM: "TM",
                        T2: "Arne Jacobsen, 1958",
                        T3t1: " ",
                        T3t2: " ",
                        T3: `  `,
                    },
                    {
                        imgSrc: "@/../static/imgs/brand/FritzHansen/PK80.jpg",
                        T1: "PK80",
                        TM: "TM",
                        T2: "Poul Kjærholm, 1957",
                        T3t1: " ",
                        T3t2: " ",
                        T3: `  `,
                    },
                    {
                        imgSrc: "@/../static/imgs/brand/FritzHansen/Plenum.jpg",
                        T1: "PLENUM",
                        TM: "TM",
                        T2: "Jaime HayÓn, 2018",
                        T3t1: " ",
                        T3t2: " ",
                        T3: `  `,
                    },
                    {
                        imgSrc: "@/../static/imgs/brand/FritzHansen/Fred.jpg",
                        T1: "FRED",
                        TM: "TM",
                        T2: "Jaime HayÓn, 2019",
                        T3t1: " ",
                        T3t2: " ",
                        T3: `  `,
                    },
                ],
            ],
            designers: [
                [{
                        imgSrc: "@/../static/imgs/brand/FritzHansen/Arne-Jacobsen.jpg",
                        flag: "@/../static/imgs/home/Denmark Flag.png",
                        T1: "ARNE JACOBSEN",
                        TM: "TM",
                        T2: "1902~1971， 丹麦哥本哈根",
                        T3: `20世纪最具影响力的北欧建筑师暨工业设计大师、 丹麦国宝级设计大师， 其设计追求优雅与和谐， 擅长在作品中运用雕塑形态和有机造型语言。 他于20世纪50年代末设计建造的SAS Royal Hotel被称为“ 世界上第一家设计师酒店”，同时还为其设计了Egg™， Swan™和Drop™等经典作品。`,
                    },
                    {
                        imgSrc: "@/../static/imgs/brand/FritzHansen/Poul-Kjærholm.jpg",
                        flag: "@/../static/imgs/home/Denmark Flag.png",
                        T1: "POUL KJÆRHOLM",
                        TM: "TM",
                        T2: "1929~1980， 丹麦奥斯特弗拉",
                        T3: `有“ 丹麦现代主义家具设计先驱”之称，Poul Kjærholm的作品被纽约、伦敦、挪威、瑞典和德国等地的现代艺术博物馆永久收藏。Poul Kjærholm追求低调的优雅，擅长以温和的手段呈现出简洁的线条和精致的设计细节，他的作品也以组合各种材料而闻名于世，包括钢材、皮革、帆布、绳索、藤条等。`,
                    },
                    {
                        imgSrc: "@/../static/imgs/brand/FritzHansen/Jaime-Hayón.jpg",
                        flag: "@/../static/imgs/home/Spain Flag.png",
                        T1: "JAIME HAYÓN",
                        TM: "TM",
                        T2: "b.1974， 西班牙马德里",
                        T3: `近年来新兴设计师中最闪耀的新星之一， 有“鬼才设计师”之称， 甚至被誉为“设计界的达利”。 Jaime HayÓn的设计富有创意且有着强烈的个人风格——创新、 奔放、 有趣， 甚至有些难以预测， 但对设计的把控能力让他的发挥收放自如且恰到好处， 反而能够引发强烈的情感共鸣。`,
                    },
                ],
            ],
            projects: [{
                    imgSrc: "@/../static/imgs/brand/FritzHansen/St.-Cathrines-College.jpg",
                    flag: "@/../static/imgs/home/UK Flag.jpg",
                    T1: "牛津大学圣凯瑟琳学院",
                    T2: "1962",
                },
                {
                    imgSrc: "@/../static/imgs/brand/FritzHansen/Everest.jpg",
                    flag: "@/../static/imgs/home/China-Flag.png",
                    T1: "朗玛峰创投",
                    T2: "2017",
                },
                {
                    imgSrc: "@/../static/imgs/brand/FritzHansen/Lego-House.jpg",
                    flag: "@/../static/imgs/home/Denmark Flag.png",
                    T1: "乐高之家",
                    T2: "2017",
                },
            ],
        };
    },

    components: {},

    computed: {},
    destroyed() {
        // alert(111)
        if (this.isAndroid) {
            this.player.destroy();
        }
    },
    mounted() {
        this.initData();
        this.$nextTick(() => {
            //调整音量为0
            this.$refs.videos.volume = 0;
            this.video = this.$refs.videos;
            this.canvas = this.$refs.canvas;
            this.initVideo();
            // 自动播放
            document.addEventListener("WeixinJSBridgeReady", () => {
                this.player.play();
            });
        });
    },

    methods: {
        initVideo() {
            let isAndroid = window.navigator.userAgent.match(/android/gi);
            this.isAndroid = isAndroid;
            // let ua = window.navigator.userAgent;
            // let ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
            //   isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
            //   isAndroid = ua.match(/(Android)\s+([\d.]+)/),
            //   isMobile = isIphone || isAndroid;

            let _this = this;

            if (isAndroid) {
                // 安卓
                _this.loading = true;
                var src = this.adaptiveVideo;
                this.player = new JSMpeg.Player(src, {
                    canvas: _this.canvas,
                    autoplay: true,
                    progressive: false,
                    loop: true,
                    onVideoDecode: function () {
                        _this.canvas.style.display = "block";
                        _this.videoType = true;
                        _this.loading = false;
                        _this.canvas.style.height =
                            85 / (_this.canvas.width / _this.canvas.height) + "vw";
                    },
                });
                this.player.volume = 0;
            } else {
                // iOS or PC
                this.videoType = false;
                this.player = this.video;
                this.video.style.display = "block";
            }
        },
        playPause() {
            this.playFlag = !this.playFlag;
            if (this.playFlag) {
                this.$refs.videos.volume = 1;
            } else {
                this.$refs.videos.volume = 0;
            }
        },
        playPause_Android() {
            // console.log(this.player.volume);
            this.playFlag = !this.playFlag;
            if (this.playFlag) {
                this.player.volume = 1;
            } else {
                this.player.volume = 0;
            }
        },
        initData() {
            if (this.$route.query.id) {
                console.log(this.$route.query.id);
                switch (this.$route.query.id) {
                    case "BOOM":
                        this.flag = "BOOM";
                        this.adaptiveVideo = "@/../static/video/v1.ts";
                        this.allData = {
                            headerimg: "@/../static/imgs/brand/FritzHansen/FritzHansenIntroPic.jpg",
                            PT1: "FRITZ HANSEN",
                            PT2t1: "ETERNAL",
                            PT2t2: "永恒",
                            PT3t1: "PURE",
                            PT3t2: "纯净",
                            PT4t1: "SCULPTURESQUE",
                            PT4t2: "雕塑",
                            map: "@/../static/imgs/brand/FritzHansen/map.png",
                            M1t1: "STORY",
                            M1t2: "品牌故事",
                            M2t1: "HISTORY",
                            M2t2: "源自丹麦的经典家居品牌Fritz Hansen成立于1872年。FritzHansen坚信，家具不仅仅是为了实现功能需求，更是营造空间氛围不可或缺的一部分，可以为人们带来身处其间的愉悦享受。也正是这一点激励着Fritz Hansen携150年的悠久传承、杰出设计和卓越匠艺，不断探索和创造更多的可能性。",
                            M3t1: "HERITAGE",
                            M3t2: `自1872年创立以来，Fritz Hansen始终致力于把卓越设计带给全球热爱设计的人们，通过伟大的设计，让生活和居住空间变得愈加美好， 其中有许多经典设计已经过数十年传承，Fritz Hansen将他们无可替代的内核呈现于人们面前，也通过适当的调整让这些产品历久弥新`,
                            M4t1: "FUN",
                            M4t2: `不论是现代简约，亦或是经典低调，Fritz Hansen始终与空间和身处空间之中的人们息息相关，  通过始终如一的简洁设计，和响应当下趋势，更加果敢丰富的色彩内容呈现，Fritz Hansen传达出生活方式理念正式让平淡无奇的每一天都焕发非凡意趣。 `,
                            video1: "@/../static/video/v1.mp4",
                            R1img: "@/../static/imgs/brand/FritzHansen/FritzHansenOffices.jpg",
                            R1text: "位于丹麦阿勒罗德 (AllerØd)的Fritz Hansen总部办公室",
                            Title1T1: "ICONIC DESIGN",
                            Title1T2: "经典设计",
                            Title2T1: "CRAFTSMANSHIP",
                            Title2T2: "精湛技艺",
                            Title3T1: `Fritz Hansen不仅仅满足于创造历久弥新的传奇设计，同时还致力于呈现无懈可击的产品质量。Fritz Hansen甚至还设定了“Premium Quality”质量标准，根据不同的产品需求研发精专机械并定制生产流程， 以达到理想的家具质量。 通过不断提高其产品品质， Fritz Hansen为用户带来了极佳的体验。 这种追求精湛技艺的理念已经深深植入了Fritz Hansen的脊髓。`,
                            // SJimg1: "@/../static/imgs/brand/FritzHansen/Veneer.jpg",
                            // SJimgtext1: "Fritz Hansen精心挑选每一张木皮",
                            // SJimg2: "@/../static/imgs/brand/FritzHansen/Quality.jpg",
                            // SJimgtext2: "通过定制机械与流程最大化产品质量",
                            // SJimg3: "@/../static/imgs/brand/FritzHansen/Manufacturing.jpg",
                            // SJimgtext3: "历经反复测试以达到Premium Quality",
                            SJ: [{
                                    SJimg: "@/../static/imgs/brand/FritzHansen/Veneer.jpg",
                                    SJimgtext: "Fritz Hansen精心挑选每一张木皮",
                                    flex: 2,
                                },
                                {
                                    SJimg: "@/../static/imgs/brand/FritzHansen/Quality.jpg",
                                    SJimgtext: "通过定制机械与流程最大化产品质量",
                                    flex: 1,
                                },
                                {
                                    SJimg: "@/../static/imgs/brand/FritzHansen/Manufacturing.jpg",
                                    SJimgtext: "历经反复测试以达到Premium Quality",
                                    flex: 1,
                                },
                            ],

                            Title4T1: "DESIGNERS",
                            Title4T2: "设计师",
                            Title5T1: "PROJECTS",
                            Title5T2: "经典案例",
                            Title5T3: "查看全部有关Fritz Hansen案例",
                        };
                        this.jdsjData = [
                            [{
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/Egg.jpg",
                                    T1: "EGG",
                                    TM: "TM",
                                    T2: "Arne Jacobsen,1958",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` Egg™兼顾了经典美观的外观造型与超凡的舒适度，七蛋壳般的外形设计完美符合人体工学。设计师Arne Jacobsen更开创性的填充入高密度海绵，
                        以增强回弹力，让椅子可以完整而舒适的拥裹身体。椅背也安装有可调节倾斜装置，可根据用户体重调节倾斜角度。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/Swan.jpg",
                                    T1: "SWAN",
                                    TM: "TM",
                                    T2: "Arne Jacobsen,1958",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` 设计师 Arne Jacobsen 擅长将自由流畅的雕刻式塑形， 与北欧现代设计相结合， 使其作品充满灵性且质感非凡。 Swan™的整体设计极富艺术感， 因其外观宛如一只收拢翅膀的优雅天鹅而得名， 代表了一种美丽、 精致的空间表达方式。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/PK22.jpg",
                                    T1: "PK",
                                    TM: "22",
                                    T2: "Poul Kjærholm, 1956",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` PK22™的椅面由两件呈 “X” 交叉的支撑架精确架起， 使椅子脱离大件不锈钢金属的固定结构， 是极简主义风格的完美诠释。 这款座椅充分发挥了钢材的强度， 再加上特别设计的五金配件， 达到了极致的简洁， 并将理性和优雅完美地融合在了一起。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/RO.jpg",
                                    T1: "RO",
                                    TM: "TM",
                                    T2: "Jaime HayÓn, 2013",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` RO™代表了繁忙都市中的片刻平和静谧， 拥有波浪般流畅摩登的主题曲线， 配以冷峻的铝制椅腿， 呈现出现代美感。 弯曲延伸的靠背与扶手连为一体， 可以将使用者包裹其中， 配以软度适中的厚实坐垫与靠垫， 带来些许平和的私密性的同时， 令人倍感舒适放松。`,
                                },
                            ],
                            [{
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/Grand-Prix.jpg",
                                    T1: "GRAND PRIX",
                                    TM: "TM",
                                    T2: "Arne Jacobsen, 1957",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/Series-7.jpg",
                                    T1: "SERIES 7",
                                    TM: "TM",
                                    T2: "Arne Jacobsen, 1955",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/Drop.jpg",
                                    T1: "DROP",
                                    TM: "TM",
                                    T2: "Arne Jacobsen, 1958",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/PK80.jpg",
                                    T1: "PK80",
                                    TM: "TM",
                                    T2: "Poul Kjærholm, 1957",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/Plenum.jpg",
                                    T1: "PLENUM",
                                    TM: "TM",
                                    T2: "Jaime HayÓn, 2018",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/Fred.jpg",
                                    T1: "FRED",
                                    TM: "TM",
                                    T2: "Jaime HayÓn, 2019",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                            ],
                        ];
                        this.designers = [
                            [{
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/Arne-Jacobsen.jpg",
                                    flag: "@/../static/imgs/home/Denmark Flag.png",
                                    T1: "ARNE JACOBSEN",
                                    TM: "TM",
                                    T2: "1902~1971， 丹麦哥本哈根",
                                    T3: `20世纪最具影响力的北欧建筑师暨工业设计大师、 丹麦国宝级设计大师， 其设计追求优雅与和谐， 擅长在作品中运用雕塑形态和有机造型语言。 他于20世纪50年代末设计建造的SAS Royal Hotel被称为“ 世界上第一家设计师酒店”，同时还为其设计了Egg™， Swan™和Drop™等经典作品。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/Poul-Kjærholm.jpg",
                                    flag: "@/../static/imgs/home/Denmark Flag.png",
                                    T1: "POUL KJÆRHOLM",
                                    TM: "TM",
                                    T2: "1929~1980， 丹麦奥斯特弗拉",
                                    T3: `有“ 丹麦现代主义家具设计先驱”之称，Poul Kjærholm的作品被纽约、伦敦、挪威、瑞典和德国等地的现代艺术博物馆永久收藏。Poul Kjærholm追求低调的优雅，擅长以温和的手段呈现出简洁的线条和精致的设计细节，他的作品也以组合各种材料而闻名于世，包括钢材、皮革、帆布、绳索、藤条等。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/FritzHansen/Jaime-Hayón.jpg",
                                    flag: "@/../static/imgs/home/Spain Flag.png",
                                    T1: "JAIME HAYÓN",
                                    TM: "TM",
                                    T2: "b.1974， 西班牙马德里",
                                    T3: `近年来新兴设计师中最闪耀的新星之一， 有“鬼才设计师”之称， 甚至被誉为“设计界的达利”。 Jaime HayÓn的设计富有创意且有着强烈的个人风格——创新、 奔放、 有趣， 甚至有些难以预测， 但对设计的把控能力让他的发挥收放自如且恰到好处， 反而能够引发强烈的情感共鸣。`,
                                },
                            ],
                        ];
                        this.projects = [{
                                imgSrc: "@/../static/imgs/brand/FritzHansen/St.-Cathrines-College.jpg",
                                flag: "@/../static/imgs/home/UK Flag.jpg",
                                T1: "牛津大学圣凯瑟琳学院",
                                T2: "1962",
                            },
                            {
                                imgSrc: "@/../static/imgs/brand/FritzHansen/Everest.jpg",
                                flag: "@/../static/imgs/home/China-Flag.png",
                                T1: "朗玛峰创投",
                                T2: "2017",
                            },
                            {
                                imgSrc: "@/../static/imgs/brand/FritzHansen/Lego-House.jpg",
                                flag: "@/../static/imgs/home/Denmark Flag.png",
                                T1: "乐高之家",
                                T2: "2017",
                            },
                        ];
                        break;
                    case "HUBDESIGN":
                        this.flag = "HUB";
                        this.allData = {};
                        this.jdsjData = [];
                        this.designers = [];
                        this.projects = [];
                        break;
                    case "X-WORK EDUCATION":
                        this.flag = "X-WORK EDUCATION";
                        this.adaptiveVideo = "@/../static/video/education.ts";
                        this.allData = {
                            headerimg: "@/../static/imgs/brand/Education/a1.jpg",
                            PT1: "X-WORK EDUCATION",
                            PT2t1: "UNCONSTRAINED",
                            PT2t2: "自由",
                            PT3t1: "DIVERSIFIED",
                            PT3t2: "多样化",
                            PT4t1: "INITIATIVE",
                            PT4t2: "主动",
                            map: "@/../static/imgs/brand/Education/map.jpg",
                            M1t1: "CONCEPT",
                            M1t2: "教育理念",
                            M2t1: "加速未来人才培养",
                            M2t2: "空间不只是场所， 教育空间更不仅限于教室中的桌椅。 沃科教育认为教育空间是帮助教育理念实现的重要方式， 承载了知识与素质的传递， 所以从功能、 文化、 情感等方面， 整合多维度空间要素， 帮助这一过程更加顺畅、 高效地进行， 加速未来人才培养。",
                            M3t1: "赋能教育价值实现",
                            M3t2: `深刻理解时代变化在不断影响着未来人才必须具备的素质， 也改变着当下的人才培养理念， 沃科教育深入挖掘各具不同针对性的学校与教育机构需求， 通过提供包括空间策略、 产品设计、 色彩文化、智能物联等在内的可定制化教育空间解决方案，为其量身打造可赋能其教育价值实现的多元化空间。`,
                            M4t1: "整合全球资源与国际化视野",
                            M4t2: `沃科教育已聚集起海内外多维度精英团队， 覆盖趋势研究、 空间策略、 产品研发等全流程， 推出了一系列原创产品与解决方案， 并与包括Fritz Hansen, Vitra, Magis, Gandia-blasco, Fursys等国际品牌达成紧密合作。`,
                            video1: "@/../static/video/education.mp4",
                            R1img: "@/../static/imgs/brand/Education/b1.jpg",
                            R1text: "",
                            Title1T1: "FEATURED PRODUCT",
                            Title1T2: "精选产品",
                            Title2T1: "LEARNING SPACE",
                            Title2T2: "学习空间",
                            Title3T1: ``,
                            // SJimg1: "@/../static/imgs/brand/FritzHansen/Veneer.jpg",
                            // SJimgtext1: "Fritz Hansen精心挑选每一张木皮",
                            // SJimg2: "@/../static/imgs/brand/FritzHansen/Quality.jpg",
                            // SJimgtext2: "通过定制机械与流程最大化产品质量",
                            // SJimg3: "@/../static/imgs/brand/FritzHansen/Manufacturing.jpg",
                            // SJimgtext3: "历经反复测试以达到Premium Quality",
                            SJ: [{
                                    SJimg: "@/../static/imgs/brand/Education/c1.jpg",
                                    T1: "引导式学习空间",
                                    SJimgtext: "通过打造互动、 平等的空间， 让学习者在空间中拥有更多主动权， 从而在感到安全自在的状态中， 积极关注并参与到学习的过程之中。 在扮演引导者角色的教育者的帮助下， 空间可以成为沉浸式体验的承载容器， 让学习者自由感受、 主动思考， 在其中收获知识与能力。",
                                    flex: 1,
                                },
                                {
                                    SJimg: "@/../static/imgs/brand/Education/c2.jpg",
                                    T1: "社交式学习空间",
                                    SJimgtext: "提供一个可以专注沉浸其中的空间， 暂时隔绝开外界噪声， 让人们将注意力收回到自己身上。 这个空间中没有别人的声音， 只有自己的想法。 在与自己的对话中， 将在外界的所见所闻所感吸收内化， 在深度思考中， 搭建起能为自己提供最大支持力的能力与思维体系。",
                                    flex: 1,
                                },
                                {
                                    SJimg: "@/../static/imgs/brand/Education/c3.jpg",
                                    T1: "浸入式学习空间",
                                    SJimgtext: "提供一个可以专注沉浸其中的空间， 暂时隔绝开外界噪声， 让人们将注意力收回到自己身上。 这个空间中没有别人的声音， 只有自己的想法。 在与自己的对话中， 将在外界的所见所闻所感吸收内化， 在深度思考中， 搭建起能为自己提供最大支持力的能力与思维体系。",
                                    flex: 1,
                                },
                            ],

                            Title4T1: "",
                            Title4T2: "",
                            Title5T1: "PROJECTS",
                            Title5T2: "经典案例",
                            Title5T3: "",
                            footerurl: [{
                                url: "https://x-work.com.cn/#/brandsubitem?id=X-WORK%20EDUCATION",
                            }, ],
                        };
                        this.jdsjData = [
                            [{
                                    imgSrc: "@/../static/imgs/brand/Education/d1.jpg",
                                    T1: "STOOL-TOOL",
                                    TM: "",
                                    T2: "Konstantin Grcic, 2016",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` 一款 “一目了然” 的座椅， 造型简单直白， 但用起来格外顺手。 设计灵感来自于设计师 Konstantin Grcic对硅谷企业的一次 拜访参观， Stool-Tool通过提供 “一百种” 坐姿， 以及可轻松搬动堆叠的设计， 让头脑风暴或培训讨论更加灵活高效 。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Education/d2.jpg",
                                    T1: "TIP TON",
                                    TM: "",
                                    T2: "Edward Barber & Jay Osgerby, 2011",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` 一款设计巧妙、 充满趣味性的座椅。 Tip Ton独特的 “可翘椅子” 的底部设计对背部肌肉有很好的锻炼作用——从正常坐姿转换到前倾坐姿时会伸直舒展骨盆和脊柱，从而带动核心区和背脊肌肉活动， 促进全身血液流通。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Education/d3.jpg",
                                    T1: "OLÁ",
                                    TM: "",
                                    T2: "Miiko He, 2018",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` 拥有轻巧圆润外形的Olá是一个坐墩系列。 提供大小两种尺寸规格， 上下两部分更有丰富的色彩搭配选择， 适用于不同风格的企业空间休闲区、 协作区、 头脑风暴区等， 也很适合在教育空间、 商业空间等多种场景中使用， 在完美融入空间的同时更能点亮空间氛围。 Olá内部采用一 体成型棉填充， 提供富有弹性的舒适坐感， 同时也十分轻巧而便于移动， 搭配侧面的皮质拉手， 使用者可轻松根据需求调整空间布局， 让空间变得更加灵动。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Education/d4.jpg",
                                    T1: "TITI",
                                    TM: "",
                                    T2: "Jaime HayÓn, 2007",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` 专为教育设计的一系列学生桌椅， 呵护儿童与青少年身心健康。 独有三段高度调节功能， TiTi适合不同发育期的儿童与青少年舒适使用。 同时桌面前倾功能等细节设计让TiTi的使用更加自由， 促进孩子的创造力发挥。`,
                                },
                            ],
                            [{
                                    imgSrc: "@/../static/imgs/brand/Education/d5.jpg",
                                    T1: "PRO CHAIR",
                                    TM: "",
                                    T2: "Konstantin Grcic, 2012",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Education/d6.jpg",
                                    T1: "MODERNO",
                                    TM: "",
                                    T2: "Yrjö Kukkapuro, 1958",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Education/d7.jpg",
                                    T1: "FUNKTUS",
                                    TM: "",
                                    T2: "Yrjö Kukkapuro, 1992",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Education/d8.jpg",
                                    T1: "PUPPY",
                                    TM: "",
                                    T2: "Eero Aarnio, 2005",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Education/d9.jpg",
                                    T1: "ALIGN",
                                    TM: "",
                                    T2: "ITO Design, 2015",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Education/d10.jpg",
                                    T1: "HUG",
                                    TM: "",
                                    T2: "Rongjie Yang, 2018",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                            ],
                        ];
                        this.designers = [
                            []
                        ];
                        this.projects = [{
                                imgSrc: "@/../static/imgs/brand/Education/e1.jpg",
                                flag: "@/../static/imgs/home/Germany Flag.png",
                                T1: "康斯坦茨大学图书馆",
                                T2: "2018",
                            },
                            {
                                imgSrc: "@/../static/imgs/brand/Education/e2.jpg",
                                flag: "@/../static/imgs/home/China-Flag.png",
                                T1: "牛津大学圣凯瑟琳学院",
                                T2: "2018",
                            },
                            {
                                imgSrc: "@/../static/imgs/brand/Education/e3.jpg",
                                flag: "@/../static/imgs/home/China-Flag.png",
                                T1: "运城职业学院",
                                T2: "2018",
                            },
                        ];
                        break;
                    case "JS SPACE":
                        this.flag = "Decoration";
                        break;

                    case "VITRA":
                        this.flag = "VITRA";
                        this.adaptiveVideo = "@/../static/video/vitra.ts";
                        this.allData = {
                            titleColor: "#fff",
                            headerimg: "@/../static/imgs/brand/Vitra/Vitra.jpg",
                            PT1: "VITRA",
                            PT2t1: "CLASSCAL",
                            PT2t2: "经典",
                            PT3t1: "INNVOATIVE",
                            PT3t2: "创新",
                            PT4t1: "CULCURAL",
                            PT4t2: "文化",
                            map: "@/../static/imgs/brand/Vitra/map.jpg",
                            M1t1: "STORY",
                            M1t2: "品牌故事",
                            M2t1: "HISTORY",
                            M2t2: "源自瑞士的创意家居品牌Vitra成立于1950年， 其产品及概念均在瑞士形成。 而同时， Vitra在相隔不远的德国境内小镇Weil am Rhein拥有一个著名园区——Vitra Campus。通过精密的工业生产能力、 不断研发精进的新材质与工艺， 并汇聚了大批风格迥异却极具创新精神的国际领先设计师， Vitra一直是创新、 文化、 经典的代名词。",
                            M3t1: "CREATIVENESS",
                            M3t2: `一直以来， Vitra与全球最优秀的建筑师、 设计师保持密切合作， 将其在全球具有前瞻性的创造能力与Vitra在技术和理念等方面的专业能力相结合，共同创造出最富有创意的产品和理念，其中包括Verner Panton的Panton Chair， Eames夫妇的Organic Chair， Edward Barber & Jay Osgerby的TipTon等。`,
                            M4t1: "VISION",
                            M4t2: `尽管拥有逾60年历史， Vitra所呈现的产品与理念从未过时， 而是始终站在趋势前沿， 响应当下所需，推动未来发展。 其中原因在于， Vitra没有将视野局限于产品本身， 而是保持着对宏观环境变化中办公环境相应的发展趋势进行深入思考， 通过在更大的格局中探究未来工作环境的变化趋势， 激发人们对当下与未来的重新审视与思考。`,
                            video1: "@/../static/video/vitra.mp4",
                            R1img: "@/../static/imgs/brand/Vitra/company.jpg",
                            R1text: "位于瑞士比尔斯费尔登 (Birsfälde) 的Vitra总部办公室",
                            Title1T1: "ICONIC DESIGN",
                            Title1T2: "经典设计",
                            Title2T1: "VITRACAMPUS",
                            Title2T2: "",
                            Title3T1: `Vitra在设计界举足轻重的影响力不只体现在产品制造上， 同时还凝聚在因Vitra而生的大师建筑和别致空间里。 位于德国南部小镇Weil am Rhein的VitraCampus内， 大部分建筑物出自国际建筑大师之手， 其中包括6位普利兹克奖得主——Frank O. Gehry、 Álvaro Siza、 Zaha Hadid、 Tadao Ando、 SANAA，以及瑞士建筑师双人组Herzog & de Meuron， 堪称是建筑界近30年来的奇闻。`,
                            // SJimg1: "@/../static/imgs/brand/FritzHansen/Veneer.jpg",
                            // SJimgtext1: "Fritz Hansen精心挑选每一张木皮",
                            // SJimg2: "@/../static/imgs/brand/FritzHansen/Quality.jpg",
                            // SJimgtext2: "通过定制机械与流程最大化产品质量",
                            // SJimg3: "@/../static/imgs/brand/FritzHansen/Manufacturing.jpg",
                            // SJimgtext3: "历经反复测试以达到Premium Quality",
                            SJ: [{
                                    SJimg: "@/../static/imgs/brand/Vitra/a1.jpg",
                                    SJimgtext: "Vitra Campus鸟瞰全景",
                                    flex: 2,
                                },
                                {
                                    SJimg: "@/../static/imgs/brand/Vitra/a2.jpg",
                                    SJimgtext: "由赫尔佐格与德梅隆 (Herzog & de Melon) 设计的展览厂区 (Schaudepot)",
                                    flex: 1,
                                },
                                {
                                    SJimg: "@/../static/imgs/brand/Vitra/a3.jpg",
                                    SJimgtext: "由扎哈 · 哈迪德 (Zaha Hadid) 设计的消防站 (Fire Station)",
                                    flex: 1,
                                },
                            ],

                            // Title4T1: "DESIGNERS",
                            // Title4T2: "设计师",
                            Title5T1: "PROJECTS",
                            Title5T2: "经典案例",
                            Title5T3: "查看全部有关Vitra案例",
                            footerurl: [{
                                url: "https://vitra.com",
                            }, ],
                        };
                        this.jdsjData = [
                            [{
                                    imgSrc: "@/../static/imgs/brand/Vitra/PANTON-CHAIR.jpg",
                                    T1: "PANTON CHAIR",
                                    TM: "",
                                    T2: "Verner Panton, 1967",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `拥有前卫时尚的外观设计， Panton Chair实际上已有多年历史，它是全世界第一张一体成型的塑胶椅， 也是全球首件采用塑料一次模压成型的S形单体弓形椅， 被视为二十世纪设计作品的中的经典代表。 极富想象力的曲线， 与鲜艳饱满的色彩选择， 让PantonChair在任何时间、 任何空间都是一件吸睛的家具设计。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Vitra/STOOL-TOOL.jpg",
                                    T1: "STOOL-TOOL",
                                    TM: "",
                                    T2: "Konstantin Grcic, 2016",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `一款造型简单直白， 用起来却格外顺手的座椅， 设计灵感来自于硅谷企业的 “快速响应” 文化， 支持无数种活跃坐姿， 让灵感激发与实现的过程不受拘束。 椅身上带有把手设计并且可堆叠， 让轻巧的Stool-Tool可以随空间需求被灵活摆放， 随时响应多变的办公模式。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Vitra/TIP-TON.jpg",
                                    T1: "TIP TON",
                                    TM: "",
                                    T2: "Edward Barber & Jay Osgerby, 2011",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `一款设计巧妙、 充满趣味性的座椅。 Tip Ton独特的底部设计对背部肌肉有很好的锻炼作用——当使用者从正常坐姿转换到前倾坐姿时， 会伸直舒展骨盆和脊柱， 从而带动核心区和背脊肌肉活动， 促进全身血液流通。 同时， 作为以单体压模工艺制程的全塑料座椅， Tip Ton也更加持久耐用， 且100%可回收利用， 环境友好。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Vitra/WORKBAYS.jpg",
                                    T1: "WORKBAYS",
                                    TM: "",
                                    T2: "Ronan & Erwan Bouroullec, 2013",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `Workbays是一系列灵活性极高、 具有隔音功能的空间分隔系统， 包含供单人专注办公的Workbays Focus，让双人对坐而谈的Workbays Meet，以及可容纳多人协助的WorkbaysSpace。 Workbays系列灵活的微型建筑结构通过打破传统办公空间布局， 重新定义了工作环境。`,
                                },
                            ],
                            [{
                                    imgSrc: "@/../static/imgs/brand/Vitra/b1.jpg",
                                    T1: "ID MESH",
                                    TM: "",
                                    T2: "Antonio Citterio, 2010/2016",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Vitra/b2.jpg",
                                    T1: "GRAND REPOS",
                                    TM: "",
                                    T2: "Antonio Citterio, 2011",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Vitra/b3.jpg",
                                    T1: "JOYN",
                                    TM: "",
                                    T2: "Ronan & Erwan Bouroullec, 2002",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Vitra/b4.jpg",
                                    T1: "ALCOVE",
                                    TM: "",
                                    T2: "Ronan & Erwan Bouroullec, 2006/2008",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Vitra/b5.jpg",
                                    T1: "SOFT WORK",
                                    TM: "",
                                    T2: "Edward Barber & Jay Osgerby, 2018",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Vitra/b6.jpg",
                                    T1: "POLDER SOFA",
                                    TM: "",
                                    T2: "Hella Jongerius, 2015",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                            ],
                        ];
                        this.designers = [
                            // [{
                            //     imgSrc: "@/../static/imgs/brand/Vitra/c1.jpg",
                            //     flag: "@/../static/imgs/home/Denmark Flag.png",
                            //     T1: "VERNER PANTON",
                            //     TM: "",
                            //     T2: "1926~1971， 丹麦甘托福特",
                            //     T3: `最具影响力的设计师之一， 也被誉为是20世纪最具想象力的设计大师。 Verner Panton的设计以大胆的色彩、 新型的材料和极具现代感的几何造型闻名， 从同时代“ 简洁素净” 的北欧设计中脱颖而出， 同时又延续了北欧设计的功能主义。`
                            //   },
                            //   {
                            //     imgSrc: "@/../static/imgs/brand/Vitra/c2.jpg",
                            //     flag: "@/../static/imgs/home/Italy Flag.png",
                            //     T1: "ANTONIO CITTERIO",
                            //     TM: "",
                            //     T2: "b.1960， 意大利梅达",
                            //     T3: `建筑师、 家具设计师和工业设计师， 被誉为“意大利国宝设计师”、“绅士设计师”。 他的设计不刻意挑战大胆创新的前卫风格， 更不随时代的流行趋势而起伏摆动。 他善于把控传统工艺与现代审美的平衡， 并十分关注使用者真正感受到的情感面与需求面体验。`
                            //   },
                            //   {
                            //     imgSrc: "@/../static/imgs/brand/Vitra/c3.jpg",
                            //     flag: "@/../static/imgs/home/France Flag.jpg",
                            //     T1: "RONAN & ERWAN BOUROULLEC",
                            //     TM: "",
                            //     T2: "b.1971， 法国坎布尔； b.1976， 法国坎布尔",
                            //     T3: `被誉为欧洲设计界的两颗新星以及最具潜力的工业设计师。Bouroullec兄弟的设计理念在于，希望所设计出的物品能给使用者带来更多的自由度，所以他们的作品没有特定的风格取向，强调作品不过于喧哗，但又能够在某种意义上充分诠释出工业设计的初衷。`
                            //   },
                            // ],
                            // [{
                            //     imgSrc: "@/../static/imgs/brand/Vitra/c4.jpg",
                            //     flag: "@/../static/imgs/home/UK Flag.jpg",
                            //     T1: "EDWARD BARBER & JAY OSGERBY",
                            //     TM: "",
                            //     T2: "b.1969， 什鲁斯伯里； B.1969， 牛津",
                            //     T3: `近年来崛起的设计新星双人组，他们均曾被授予皇家工业设计师称号。Edward Barber与Jay Osgerby推崇互动设计的理念，关注用户与产品间的互动，在设计中充分考虑到用户所看、所听、所需。 他们经常巧妙地互相激发出有趣的点子，并将其应用于家具设计，看似奇特却不违和，令人感觉值得玩味。`
                            //   },
                            //   {
                            //     imgSrc: "@/../static/imgs/brand/Vitra/c5.jpg",
                            //     flag: "@/../static/imgs/home/Germany Flag.png",
                            //     T1: "KONSTANTIN GRCIC",
                            //     TM: "",
                            //     T2: "b.1965， 德国慕尼黑",
                            //     T3: `当下最具影响力的工业设计师之一， 也被公认为是当今设计界最能体现 “极简主义” 理念的设计师之一。KonstantinGrcic的作品以极简、单纯、严谨著称，透过他的设计，人们不仅可以领略到其对设计、建筑等诸多领域的广泛研究，更能感受到他对工艺和材质的执着追求。`
                            //   },
                            //   {
                            //     imgSrc: "",
                            //     flag: "",
                            //     T1: "",
                            //     TM: "",
                            //     T2: "",
                            //     T3: ``
                            //   },
                            // ]
                        ];
                        this.projects = [{
                                imgSrc: "@/../static/imgs/brand/Vitra/d1.jpg",
                                flag: "@/../static/imgs/home/KoreaFlag.jpg",
                                T1: "爱茉莉太平洋集团总部",
                                T2: "2018",
                            },
                            {
                                imgSrc: "@/../static/imgs/brand/Vitra/d2.jpg",
                                flag: "@/../static/imgs/home/Germany Flag.png",
                                T1: "康斯坦茨大学图书馆",
                                T2: "2018",
                            },
                            {
                                imgSrc: "@/../static/imgs/brand/Vitra/d3.jpg",
                                flag: "@/../static/imgs/home/Swiss-Flag.png",
                                T1: "On总部",
                                T2: "2018",
                            },
                        ];
                        break;
                    case "MAGIS":
                        this.flag = "MAGIS";
                        this.adaptiveVideo = "@/../static/video/magis.ts";
                        this.allData = {
                            titleColor: "#fff",
                            headerimg: "@/../static/imgs/brand/Magis/Magis-Intro-Pic.jpg",
                            PT1: "MAGIS",
                            PT2t1: "DIVERSE",
                            PT2t2: "多元",
                            PT3t1: "PLAYFUUL",
                            PT3t2: "趣味",
                            PT4t1: "MINIMALIST",
                            PT4t2: "简约",
                            map: "@/../static/imgs/brand/FritzHansen/map.png",
                            M1t1: "STORY",
                            M1t2: "品牌故事",
                            M2t1: "HISTORY",
                            M2t2: "源自意大利的现代家具品牌Magis成立于1976年， 秉承着对设计文化的挚爱与热情，“白手起家” 的企业家Eugenio Perazza成功将设计与商业完美融合。 通过创新设计与新技术材料的使用， Magis如今已成为意大利在设计界的翘楚， 为设计界开辟出新天地， 也为日常用品带来了全新诠释。",
                            M3t1: "SPIRIT",
                            M3t2: `秉承着对设计的热爱与初心， Magis用富有创造力又兼具实用性的设计， 让人们每天生活的世界越来越精彩而迷人。 虽然Magis的产品内容广泛， 形式多样， 不断发展， 每一款产品也在讲述不同的故事， 但Magis采用了能够被普遍接受的形式语言， 为产品注入了设计灵魂。`,
                            M4t1: "FUN",
                            M4t2: `发展初期， Magis积极尝试新的技术与材料， 重新诠释了许多日常家居物件， 让人们看到， 原来手边的方寸空间还可以这样。 多年以后的今天， Magis已成为意大利在设计界的一个重要标志， 不断推动着设计的边界， 为设计界开辟了一个又一个新天地。`,
                            video1: "@/../static/video/magis.mp4",
                            R1img: "@/../static/imgs/brand/Magis/Magis-Headquarters.jpg",
                            R1text: "位于意大利拖雷 · 迪莫斯托 (Torre di Mosto) 的Magis总部办公室",
                            Title1T1: "ICONIC DESIGN",
                            Title1T2: "经典设计",

                            Title2T1: "",
                            Title2T2: "",
                            Title3T1: ``,
                            SJ: [],

                            Title4T1: "DESIGNERS",
                            Title4T2: "设计师",
                            Title5T1: "PROJECTS",
                            Title5T2: "经典案例",
                            Title5T3: "查看全部有关Magis案例",
                            footerurl: [{
                                url: "https://www.magisdesign.com",
                            }, ],
                        };
                        this.jdsjData = [
                            [{
                                    imgSrc: "@/../static/imgs/brand/Magis/Puppy.jpg",
                                    T1: "PUPPY",
                                    TM: "",
                                    T2: "Eero Aarnio, 2005",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` Magis充满童趣的Me Too系列儿童家具中的Puppy， 是一系列拥有鲜明色彩， 造型圆润可爱的小狗造型儿童椅。 Puppy既可以是座椅， 也可以是玩偶， 以不设限的造型和多变的色彩激发出天马行空的创意与想象力， 陪伴孩子们快乐成长。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Magis/360.jpg",
                                    T1: "360°",
                                    TM: "",
                                    T2: "Konstantin Grcic, 2010",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `360°是一款高度灵活的存储解决方案， 它不仅脚轮可以顺滑移动， 每一个抽屉单元也都可以独立360°旋转。 这款储物柜让抽屉内所有物品都触手可及， 轻松跟上当代工作的快节奏步伐。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Magis/Stool_One.jpg",
                                    T1: "STOOL_ONE",
                                    TM: "",
                                    T2: "Konstantin Grcic, 2006",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `Stool_One拥有标志性的立体镂空座椅设计， 钻石般的棱角带来的独特的视觉冲击，时尚大气。 这把高脚吧椅也是艺术性与实用性相结合的经典之作， 坐感舒适， 工艺考究，超现代风格也让其融入各种空间的同时， 依然保有适当的个性光芒。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Magis/Sequoia.jpg",
                                    T1: "SEQUOIA",
                                    TM: "",
                                    T2: "Torbjørn Anderson & Espen Voll, 2017",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `Sequoia由造型一致的座椅和脚踏板组成， 仿佛同一根树干上伸展出的两根坚实枝条，巧妙而带有来自大自然的灵气。 虽然由钢材制成， 符合人体工学的设计让这款高脚凳依然保有高度的舒适性。`,
                                },
                            ],
                            [{
                                    imgSrc: "@/../static/imgs/brand/Magis/Spun.jpg",
                                    T1: "SPUN",
                                    TM: "",
                                    T2: "Thomas Heatherwick, 2010",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Magis/Officina.jpg",
                                    T1: "OFFICINA",
                                    TM: "",
                                    T2: "Ronan & Erwan Bouroullec, 2017",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Magis/Big-Will.jpg",
                                    T1: "BIG WILL",
                                    TM: "",
                                    T2: "Philippe Starck, 2015",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Magis/Chair_One.jpg",
                                    T1: "CHAIR_ONE",
                                    TM: "",
                                    T2: "Konstantin Grcic, 2003",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Magis/Bureaurama.jpg",
                                    T1: "BUREAURAMA",
                                    TM: "",
                                    T2: "Jerszy Seymour, 2019",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Magis/Folly.jpg",
                                    T1: "FOLLY",
                                    TM: "",
                                    T2: "Ron Arad, 2013",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                            ],
                        ];
                        this.designers = [
                            [{
                                    imgSrc: "@/../static/imgs/brand/Magis/Eero-Aarnio.jpg",
                                    flag: "@/../static/imgs/home/a.png",
                                    T1: "EERO AARNIO",
                                    TM: "",
                                    T2: "b.1932， 芬兰赫尔辛基",
                                    T3: `当代最著名的设计师之一。因创造了许多享誉世界的作品成为自20世纪60年代以来奠定芬兰在国际设计领域领导地位的重要设计家之一。Eero Aarnio的设计具有浓厚的浪漫主义色彩和强烈的个人风格，宛如来自梦幻的童话世界。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Magis/Konstantin-Grcic.jpg",
                                    flag: "@/../static/imgs/home/Germany Flag.png",
                                    T1: "KONSTANTIN GRCIC",
                                    TM: "",
                                    T2: "b.1965， 德国慕尼黑",
                                    T3: `当下最具影响力的工业设计师之一， 也被公认为是当今设计界最能体现 “极简主义” 理念的设计师之一。KonstantinGrcic的作品以极简、单纯、严谨著称，透过他的设计，人们不仅可以领略到其对设计、建筑等诸多领域的广泛研究，更能感受到他对工艺和材质的执着追求。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Magis/Thomas-Heatherwick.jpg",
                                    flag: "@/../static/imgs/home/UK Flag.jpg",
                                    T1: "THOMAS HEATHERWICK",
                                    TM: "",
                                    T2: "b.1970， 英国伦敦",
                                    T3: `Thomas Heatherwick是英国当今设计界的中流砥柱， 他在建筑、 家具、 工业、 雕塑、 装置以及时尚等领域均有建树，被称为“ 英国当代最具创意奇才”、“建筑界的达芬奇”。 Thomas Heatherwick经常用不同于大众的方式来思考， 否定常规则是他的灵感源泉， 他的作品也总是不断挑战人们的想象力。`,
                                },
                            ],
                        ];
                        this.projects = [{
                                imgSrc: "@/../static/imgs/brand/Magis/Poly-Future-Metroppolitan.jpg",
                                flag: "@/../static/imgs/home/China-Flag.png",
                                T1: "保利 · 未来大都汇",
                                T2: "2018",
                            },
                            {
                                imgSrc: "@/../static/imgs/brand/Magis/CRC-Innovation-Lab.jpg",
                                flag: "@/../static/imgs/home/China-Flag.png",
                                T1: "华润大学创新实验室",
                                T2: "2018",
                            },
                            {
                                imgSrc: "@/../static/imgs/brand/Magis/First-Leap.jpg",
                                flag: "@/../static/imgs/home/China-Flag.png",
                                T1: "励步英语",
                                T2: "2018",
                            },
                        ];
                        break;
                    case "GANDIA BLASCO":
                        this.flag = "GANDIA BLASCO";
                        this.adaptiveVideo = "@/../static/video/gan.ts";
                        this.allData = {
                            titleColor: "#fff",
                            headerimg: "@/../static/imgs/brand/Gan/Gandia-Blasco-Intro-Pic.jpg",
                            PT1: "GANDIA–BLASCO",
                            PT2t1: "CHROMATIC",
                            PT2t2: "多彩",
                            PT3t1: "MODULAR",
                            PT3t2: "模块",
                            PT4t1: "STYLISH",
                            PT4t2: "时尚",
                            map: "@/../static/imgs/brand/Gan/map.jpg",
                            M1t1: "STORY",
                            M1t2: "品牌故事",
                            M2t1: "HISTORY",
                            M2t2: "源自西班牙的户外家具品牌Gandia-blasco成立于1941年，其为许多世界知名酒店提供的户外家具都成为了靓丽的风景。Gandia-blasco秉承了简洁的设计理念及前卫的设计方式，同时，其旗下纺织设计品牌GAN代表了手工艺和设计。他们相信手工产品是最大的奢侈品，而对于设计师而言，表达创造力最好的方式就是通过专业匠人的技艺生产出独一无二的产品。",
                            M3t1: "CONCEPT",
                            M3t2: `Gandia-blasco创始之初， 创始人José A. Gandía-Blasco Canales发现难以在市场上找到适合自己在Ibiza岛上的别墅的户外家具，于是开始与设计师合作进行户外家具设计。带着对生活的热爱，Gandia-blasco希望将户外生活打造得宛如一场轻松有趣的时尚派对，也将西班牙人的激情与生活理念传达给全世界的人们。`,
                            M4t1: "CRAFTSMANSHIP",
                            M4t2: `Gandia-blasco旗下品牌GAN是一个牢固扎根于设计和基于手工制品的概念。在GAN，地毯不仅仅是装饰物体。 而是可以重新定义可居住性概念的形状和体积的体系。 GAN的所有产品都是由经验丰富的工匠在印度制造的， 而使用原料也都是天然纤维： 棉、 亚麻、 黄麻、 丝绸和羊毛。`,
                            video1: "@/../static/video/gan.mp4",
                            R1img: "@/../static/imgs/brand/Gan/La-Casa-Gandia-Blasco.jpg",
                            R1text: "位于西班牙瓦伦西亚 (Valenci) 的Gandia Blasco旗舰店La Casa Gandia-Blasco",
                            Title1T1: "ICONIC DESIGN",
                            Title1T2: "经典设计",
                            Title2T1: "CULTURE CONNECTION",
                            Title2T2: "文化连接",
                            Title3T1: `Gandia-blasco旗下手工地毯品牌GAN不断从世界各地文化中汲取设计灵感， 为各式古老技法带来现代化全新诠释。 除了手工编织、 手工打结、 手工织机和手工簇绒等常见地毯工艺之外， 在GAN的产品中也可以看到源自土耳其的基里姆和针毡、 源自摩洛哥的格劳伊以及源自中国的刺绣等传统工艺。 在促进古老文化与技艺的传承与创新的同时， GAN在印度积极参与儿童保护计划， 并在农村设立起妇女发展项目， 助推当地经济发展与社会进步， 这也让其产品有了温暖的人文内核。`,
                            // SJimg1: "@/../static/imgs/brand/Gan/Kilim.jpg",
                            // SJimgtext1: "由基里姆工艺制作完成的手工地毯Parquet",
                            // SJimg2: "@/../static/imgs/brand/Gan/Embroidery.jpg",
                            // SJimgtext2: "应用刺绣工艺的Silaï系列",
                            // SJimg3: "@/../static/imgs/brand/Gan/Craftsmanship.jpg",
                            // SJimgtext3: "经验丰富的印度针毡工艺工匠",
                            SJ: [{
                                    SJimg: "@/../static/imgs/brand/Gan/Kilim.jpg",
                                    SJimgtext: "由基里姆工艺制作完成的手工地毯Parquet",
                                    flex: 2,
                                },
                                {
                                    SJimg: "@/../static/imgs/brand/Gan/Embroidery.jpg",
                                    SJimgtext: "应用刺绣工艺的Silaï系列",
                                    flex: 1,
                                },
                                {
                                    SJimg: "@/../static/imgs/brand/Gan/Craftsmanship.jpg",
                                    SJimgtext: "经验丰富的印度针毡工艺工匠",
                                    flex: 1,
                                },
                            ],

                            Title4T1: "DESIGNERS",
                            Title4T2: "设计师",
                            Title5T1: "PROJECTS",
                            Title5T2: "经典案例",
                            Title5T3: "查看全部有关Gandia Blasco案例",
                            footerurl: [{
                                    url: "https://www.gandiablasco.com",
                                },
                                {
                                    url: "https://www.gan-rugs.com",
                                },
                                {
                                    url: "https://www.diablaoutdoor.com",
                                },
                            ],
                        };
                        this.jdsjData = [
                            [{
                                    imgSrc: "@/../static/imgs/brand/Gan/Nao-Nao.jpg",
                                    T1: "NAO-NAO",
                                    TM: "",
                                    T2: "Yolanda Herraiz, 2009",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `Nao-Nao是对传统花园秋千的现代演绎， 拥有干净简洁的线条， 它会是露台或花园等户外空间的自然延展， 带来更多趣意享受。 Nao-Nao提供多种色彩及材质的坐垫软包防水布料选择， 从最简单纯朴到最生动鲜活， 定制你的专属户外风尚。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Gan/Sail-Outdoor-Pouf.jpg",
                                    T1: "SAIL OUTDOOR POUF",
                                    TM: "",
                                    T2: "Héctor Serrano, 2016",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `Sail Outdoor Pouf是一款散发着放松舒适气息的户外沙发袋。 采用印度手纺纱棉毯技艺， 所有Sail Outdoor Pouf均通过在手织机上用漂亮纯正的新羊毛， 制作出让人感到梦幻、 放松的图案。 而海帆状的有机造型配以随性舒适的色彩与质感， 它的自然气息可以完美融入多种风格的户外空间。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Gan/Mangas-Original.jpg",
                                    T1: "MANGAS ORIGINAL",
                                    TM: "",
                                    T2: "Patricia Urquiola, 2009",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `设计灵感来自于手工编织的羊毛衫， 这一系列地毯包含了丰富的纹理形式， 让你的地板呈现出意想不到的图案与色彩。 采用印度手纺纱棉毯技艺， Mangas Original的每一块地毯都是独一无二的匠心诚品。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Gan/Solanas.jpg",
                                    T1: "SOLANAS",
                                    TM: "",
                                    T2: "Daniel Germani, 2018",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: `采用曲线和圆角结构， Solanas系列展示出一种优美的流动感， 并在整体上形成一种和谐美。 蕴含了设计师对海边夏日时光的美好回忆， Solanas通过创造出一个个亲密空间，希望可以带给你更多无忧欢聚时光。`,
                                },
                            ],
                            [{
                                    imgSrc: "@/../static/imgs/brand/Gan/Flat.jpg",
                                    T1: "FLAT",
                                    TM: "",
                                    T2: "Arne Jacobsen, 1957",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Gan/Mangas-Space.jpg",
                                    T1: "MANGAS SPACE",
                                    TM: "",
                                    T2: "Patricia Urquiola, 2013",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Gan/Stack.jpg",
                                    T1: "STACK",
                                    TM: "",
                                    T2: "Borja García, 2014",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Gan/Canevas-Geo.jpg",
                                    T1: "CANEVAS GEO",
                                    TM: "",
                                    T2: "Charlotte Lancelot, 2018",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Gan/Ruff-Pouf.jpg",
                                    T1: "RUFF POUF",
                                    TM: "",
                                    T2: "Romero Vallejo, 2015",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Gan/Buit.jpg",
                                    T1: "BUIT",
                                    TM: "",
                                    T2: "Mayice Studio, 2019",
                                    T3t1: " ",
                                    T3t2: " ",
                                    T3: `  `,
                                },
                            ],
                        ];
                        this.designers = [
                            [{
                                    imgSrc: "@/../static/imgs/brand/Gan/Jose-A.-Gandia-Blasco-Canales.jpg",
                                    flag: "@/../static/imgs/home/Spain Flag.png",
                                    T1: "JOSÉ ANTONIO GANDÍA-BLASCO CANALES",
                                    TM: "",
                                    T2: "b.1956， 西班牙瓦伦西亚",
                                    T3: `Gandia-blasco公司总裁兼艺术总监， 设计推出了大量具有品牌代表性的家具及材质产品系列。 通过不断在材质等方面进行创新实验， José A.将对地中海文化的热爱融入了Gandia-blasco的品牌形象及其所代表的生活方式之中。 自从1996年重塑公司品牌以来， José A.一直在设计理念中保持着全新的意象——“地中海现代风格”。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Gan/Patricia-Urquiola.jpg",
                                    flag: "@/../static/imgs/home/Spain Flag.png",
                                    T1: "PATRICIA URQUIOLA",
                                    TM: "",
                                    T2: "b.1961， 西班牙奥维耶多",
                                    T3: `定居在米兰的西班牙建筑师、 设计师， 曾获西班牙文化界最高奖项之一 “艺术界金牌勋章”， 以及由西班牙国王卡洛斯一世颁发的天主教伊莎贝拉骑士团勋章。 Patricia Urquiola的设计作品创新又不流于世俗， 将人文主义情感和专业技术进行了完美结合。 色彩是Patricia Urquiola的一个重要标签， 她十分擅于运用明丽、 柔和的色彩， 为人们带来感官上的愉悦与丰富乐观的色彩体验。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Gan/Charlotte-Lancelot.jpg",
                                    flag: "@/../static/imgs/home/b.png",
                                    T1: "CHARLOTTE LANCELOT",
                                    TM: "",
                                    T2: "b.1980， 比利时布鲁塞尔",
                                    T3: `比利时年轻设计师， Charlotte Lancelot擅长通过设计为身边的物品赋予情感， 她关注生态、 美学、 古老技法的现代化应用， 以及为生活环境带来美好改变。 Charlotte深信小的设计也能够改变世界， 在尊重产品的质量与功能的前提下， 她将注意力集中于用设计带给人们幸福感与生活的新思考。 Charlotte所设计的产品集精巧和优雅于一身， 显示出她对于生活的独特解读。`,
                                },
                            ],
                        ];
                        this.projects = [{
                                imgSrc: "@/../static/imgs/brand/Gan/Eden-Locke-Edinburgh.jpg",
                                flag: "@/../static/imgs/home/UK Flag.jpg",
                                T1: "爱丁堡伊顿洛克酒店",
                                T2: "2017",
                            },
                            {
                                imgSrc: "@/../static/imgs/brand/Gan/D-Hotel-Maris-Bay.jpg",
                                flag: "@/../static/imgs/home/c.png",
                                T1: "D玛丽斯湾度假屋",
                                T2: "1993",
                            },
                            {
                                imgSrc: "@/../static/imgs/brand/Gan/HPA-Lake-Luxury-Life.jpg",
                                flag: "@/../static/imgs/home/Italy Flag.png",
                                T1: "HPA湖畔度假中心",
                                T2: "2017",
                            },
                        ];
                        break;
                    case "INTERSTUHL":
                        this.flag = "INTERSTUHL";
                        this.adaptiveVideo = "@/../static/video/interstuhl.ts";
                        this.allData = {
                            headerimg: "@/../static/imgs/brand/Interstuhl/Interstuhl-Intro-Pic.jpg",
                            PT1: "INTERSTUHL",
                            PT2t1: "QUALITY",
                            PT2t2: "品质",
                            PT3t1: "PERFORMING",
                            PT3t2: "性能",
                            PT4t1: "EFFICIENT",
                            PT4t2: "高效",
                            map: "@/../static/imgs/brand/Interstuhl/map.jpg",
                            M1t1: "STORY",
                            M1t2: "品牌故事",
                            M2t1: "HISTORY",
                            M2t2: "源自德国的办公家具品牌Interstuhl成立于1967年， 从一个铁匠铺起家， 如今已发展成致力于为职场研发和制造高品质座椅的国际品牌，“德国制造的Interstuhl座椅” 使用者如今已遍布世界各地。 秉承 “享受座椅带来的快乐” 这一理念， Interstuhl通过研发带给久坐人士健康与活力的同时， 也使之体验到真实的愉悦。",
                            M3t1: "QUALITY",
                            M3t2: `Interstuhl秉持着来自德国严谨的制造哲学， 致力于将人体工学、 功能性、 舒适性与美学设计完美结合， 实现感官的极致享受， 同时通过实现高效率、 高性价比及人体工学设计的最大化， 为客户提供最佳舒适度的座椅体验。 Interstuhl所提供的不仅是一张座椅， 也是最优越的座椅服务。`,
                            M4t1: "EFFICIENCY",
                            M4t2: `Interstuhl座椅为更加高效的办公环境而生。 无论是办公区、 交流区， 还是接待区， Interstuhl座椅都在以灵活、 简便、 健康的使用方式及体验， 为使用者提供令其随心所欲的办公支持， 为同事之间的良好沟通打造优质环境。 针对不同区域与不同办公模式， Interstuhl也提供不同的座椅解决方案来满足需求。`,
                            video1: "@/../static/video/interstuhl.mp4",
                            R1img: "@/../static/imgs/brand/Interstuhl/Interstuhl-Headquarters.jpg",
                            R1text: "位于德国梅斯施泰滕 (Meßstetten) 的Interstuhl总部办公室",
                            Title1T1: "ICONIC DESIGN",
                            Title1T2: "经典设计",
                            Title2T1: "",
                            Title2T2: "",
                            Title3T1: ``,

                            SJ: [],

                            Title4T1: "",
                            Title4T2: "",
                            Title5T1: "PROJECTS",
                            Title5T2: "经典案例",
                            Title5T3: "",
                            footerurl: [{
                                url: "https://www.interstuhl.com",
                            }, ],
                        };
                        this.jdsjData = [
                            [{
                                    imgSrc: "@/../static/imgs/brand/Interstuhl/Silver.jpg",
                                    T1: "EGG",
                                    TM: "TM",
                                    T2: "Arne Jacobsen,1958",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` Egg™兼顾了经典美观的外观造型与超凡的舒适度，七蛋壳般的外形设计完美符合人体工学。设计师Arne Jacobsen更开创性的填充入高密度海绵，
                        以增强回弹力，让椅子可以完整而舒适的拥裹身体。椅背也安装有可调节倾斜装置，可根据用户体重调节倾斜角度。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Interstuhl/VINTAGEis5.jpg",
                                    T1: "SWAN",
                                    TM: "TM",
                                    T2: "Arne Jacobsen,1958",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` 设计师 Arne Jacobsen 擅长将自由流畅的雕刻式塑形， 与北欧现代设计相结合， 使其作品充满灵性且质感非凡。 Swan™的整体设计极富艺术感， 因其外观宛如一只收拢翅膀的优雅天鹅而得名， 代表了一种美丽、 精致的空间表达方式。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Interstuhl/PUREis3.jpg",
                                    T1: "PK",
                                    TM: "22",
                                    T2: "Poul Kjærholm, 1956",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` PK22™的椅面由两件呈 “X” 交叉的支撑架精确架起， 使椅子脱离大件不锈钢金属的固定结构， 是极简主义风格的完美诠释。 这款座椅充分发挥了钢材的强度， 再加上特别设计的五金配件， 达到了极致的简洁， 并将理性和优雅完美地融合在了一起。`,
                                },
                                {
                                    imgSrc: "@/../static/imgs/brand/Interstuhl/UPis1.jpg",
                                    T1: "RO",
                                    TM: "TM",
                                    T2: "Jaime HayÓn, 2013",
                                    T3t1: "",
                                    T3t2: "",
                                    T3: ` RO™代表了繁忙都市中的片刻平和静谧， 拥有波浪般流畅摩登的主题曲线， 配以冷峻的铝制椅腿， 呈现出现代美感。 弯曲延伸的靠背与扶手连为一体， 可以将使用者包裹其中， 配以软度适中的厚实坐垫与靠垫， 带来些许平和的私密性的同时， 令人倍感舒适放松。`,
                                },
                            ],
                        ];
                        this.designers = [];
                        this.projects = [{
                                imgSrc: "@/../static/imgs/brand/Interstuhl/Terminus.jpg",
                                flag: "@/../static/imgs/home/China-Flag.png",
                                T1: "特斯联",
                                T2: "2018",
                            },
                            {
                                imgSrc: "",
                                flag: "",
                                T1: "",
                                T2: "",
                            },
                            {
                                imgSrc: "",
                                flag: "",
                                T1: "",
                                T2: "",
                            },
                        ];
                        break;
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.pmt3_voide {
    position: relative;
}

.van_loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.videoClass {
    display: none;
    width: 100%;
    height: 100%;
}

.brajzjyitem {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
}

.brajzjyitem:last-child {
    margin-right: 0px;
}

.fot {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}

.fot a {
    color: #dc7a64;
    font-size: 14px;
}

.fotext {
    color: #867b72;
    font-size: 14px;
}

.btojdflag {}

.btojdright {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0;
}

.btojdDiv {
    display: flex;
    position: relative;
}

.btojdtext {
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
}

.ckantext {
    color: #d2715b;
    font-size: 14px !important;
    margin-bottom: 5px;
    letter-spacing: 0px !important;
    position: absolute;
    text-decoration: underline;
    cursor: pointer;
    right: 0;
    top: 30px;
}

.ckan {
    display: flex;
    justify-content: flex-end;
}

.sjsflag {
    // position: absolute;
    // right: 0;
    margin-left:auto
}

.sjsflag img {
    width: 40px;
    height: 25px;
}

.jxbot {
    font-size: 13px;
    color: #948983;
    margin-top:10px;
}

.brajzjy {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

.jzjy {
    color: #000;
    font-weight: bold;
    font-size: 15px;
}

.bmmT3 {
    font-size: 13px;
    font-weight: bold;
}

.bmmT2 {
    color: #877a71;
    font-size: 13px;
    font-weight: bold;
    margin: 5px 0 10px 0;
}

.bmmTm1 {
    text-decoration: underline;
}

.bmmTm {
    font-size: 12px;
}

.bmmT1 {
    font-size: 20px;
    display: flex;
    position: relative;
    margin-top: 10px;
}

.bmmitem {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 20px;
}

.bmmitem:last-child {
    margin-right: 0;
}

.brandmidmitem {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.btojd {
    font-size: 18px;
    letter-spacing: 0px;
}

.brandmidmTitle {
    font-size: 30px;
    font-weight: bold;
    color: #000;
    letter-spacing: 10px;
    display: flex;
    margin-bottom: 30px;
    position: relative;
}

.brandmidmTitle span {
    letter-spacing: 0px;
    font-size: 22px;
}

.brandmidm {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
}

.pmt3btn {
    color: #999089;
    font-size: 12px;
}

.pmt3 {
    display: flex;
    flex-direction: column;
    position: relative;
}

.switch_btn {
    position: absolute;
    right: 6%;
    bottom: 20%;
    width: 40px;
    height: 40px;
}

.pmt2T3 {
    font-size: 13px;
    font-weight: bold;
}

.pmt2T2 {
    font-size: 15px;
    color: #de826d;
    margin-top: 30px;
    letter-spacing: 5px;
    font-weight: bold;
}

.pmt2T1 span {
    font-size: 18px;
    letter-spacing: 0px;
    font-weight: bold;
}

.pmt2T1 {
    font-size: 30px;
    letter-spacing: 15px;
    font-weight: bold;
    display: flex;
}

.pmt3 {
    flex: 1;
}

.pmt2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
}

.pmt1 {
    width: 300px;
    height: 100%;
}

.promain {
    background: #fafafa;
    padding-bottom: 100px;
}

.brandmidtop {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
}

.brandmid {
    padding: 30px;
}

.pT1 {
    font-size: 40px;
    color: #000;
    letter-spacing: 10px;
    font-weight: bold;
    margin-bottom: 30px;
}

.pT2 {
    font-size: 25px;
    color: #000;
    letter-spacing: 10px;
    font-weight: bold;
    display: flex;
}

.pT2 span {
    font-size: 18px;
    color: #000;
    letter-spacing: 0px;
    font-weight: bold;
}

.branditemTitle {
    position: absolute;
    top: 120px;
    left: 150px;
}

.brandheader {
    position: relative;
}

.brajzjyitem1_f {
    display: none;
}

/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
    .pmt3_voide {
        min-height: 34vh;
        background-color: #2f312c;
    }

    .switch_btn {
        right: 4%;
        bottom: 10%;
        width: 35px;
        height: 35px;
    }

    .branditemTitle {
        top: 90px;
        left: 66px;

        .pT1 {
            font-size: 36px;
        }

        .pT2 {
            font-size: 20px;
        }
    }

    .brandmidtop {
        flex-wrap: wrap;

        .pmt2 {
            padding-right: 0;
        }

        .pmt3 {
            flex: initial;
            width: 100%;
        }
    }

    .brandmidmitem1 {
        flex-wrap: wrap;
        justify-content: space-between;

        .bmmitem {
            margin-right: 0;
            width: 47%;
            flex: initial;
            margin-bottom: 20px;
        }
    }

    .brandmidm1 {
        margin-top: 0px;

        .brandmidm1_f {
            display: none;
        }
    }

    .brajzjy1 {
        .brajzjyitem {
            display: none;
        }

        .brajzjyitem1_f {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .brajzjyitem1 {
                margin-bottom: 16px;
                display: flex;
                flex-direction: column;
                &:first-child {
                    width: 100%;
                }

                &:not(:first-child) {
                    width: 47%;
                }
            }
        }
    }

    .brandmidm {
        .brandmidmTitle {
            font-size: 24px;
            letter-spacing: 6px;

            span {
                font-size: 16px;
            }
        }

        .jzjy {
            font-size: 13px;
        }

        .jxbot {
            font-size: 12px;
        }
    }

    .brandmidmitem2 {
        .bmmT1 {
            font-size: 18px;
        }

        .bmmT2 {
            font-size: 12px;
        }

        .bmmT3 {
            font-size: 12px;
        }
    }
}

@media screen and (max-width: 640px) {
    .pmt2T3,.bmmT3{
        font-size:12px;
    }
    .pmt3_voide {
        min-height: 26vh;
        background-color: #2f312c;
    }

    .switch_btn {
        right: 4%;
        bottom: 10%;
        width: 25px;
        height: 25px;
    }

    .branditemTitle {
        top: 54px;
        left: 36px;

        .pT1 {
            font-size: 23px;
            letter-spacing: 3px;
            margin-bottom: 15px;
        }

        .pT2 {
            font-size: 14px;
            letter-spacing: 3px;

            span {
                font-size: 12px;
            }
        }
    }

    .brandmidtop {
        flex-wrap: wrap;
        margin-top: 0;

        .pmt1 {
            width: 100%;
        }

        .pmt2 {
            padding-right: 0;
        }

        .pmt3 {
            flex: initial;
            width: 100%;
            margin-top: 30px;
        }
    }

    .brandmidm {
        .brandmidmitem1:first-child {
            flex-wrap: wrap;

            // justify-content: space-between;
            .bmmitem {
                margin-right: 0;
                // width: 47%;
                flex: initial;
                margin-bottom: 20px;
            }
        }

        .brandmidmitem1:last-child {
            flex-wrap: wrap;
            justify-content: space-between;

            .bmmitem {
                margin-right: 0;
                width: 47%;
                flex: initial;
                margin-bottom: 20px;
            }
        }
    }

    .brandmidmitem1 {
        flex-wrap: wrap;

        // justify-content: space-between;
        .bmmitem {
            margin-right: 0;
            // width: 47%;
            flex: initial;
            margin-bottom: 20px;
        }
    }

    .brandmidm1 {
        margin-top: 0px;

        .brandmidm1_f,
        .brandmidm1_l {
            display: none;
        }

        .brajzjy {
            margin-top: 0;
        }

        .brajzjy1 {
            .brajzjyitem {
                display: none;
            }

            .brajzjyitem1_f {
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-between;

                .brajzjyitem1 {
                    // margin-bottom: 36px;
                margin-bottom: 16px;
                display: flex;
                flex-direction: column;
                    // &:first-child {
                    //     width: 100%;
                    // }

                    // &:not(:first-child) {
                    //     width: 46%;
                    // }
                }
            }
        }
    }

    .brandmidm {
        .brandmidmTitle {
            font-size: 20px;
            letter-spacing: 3px;
            margin-bottom: 15px;

            span {
                font-size: 14px;
            }
        }

        .jzjy {
            font-size: 12px;
            margin-bottom: 10px;
        }

        .jxbot {
            font-size: 12px;
        }
    }

    .brandmidmitem2 {
        flex-wrap: wrap;

        // justify-content: space-between;
        .bmmitem {
            flex: initial;
            margin-right: 0;
            margin-bottom: 15px;
            // &:not(:first-child) {
            //   width: 46%;
            //   .bmmT1 {
            //     font-size: 13px;
            //   }
            //   .sjsflag {
            //     img {
            //       width: 30px;
            //       height: 18px;
            //     }
            //   }
            // }
        }

        .bmmT1 {
            font-size: 18px;
        }

        .bmmT2 {
            font-size: 12px;
        }

        .bmmT3 {
            font-size: 12px;
        }
    }

    .brandmidm_footer {
        margin-top: 20px;

        .brandmidmTitle {
            position: relative;
            height: 50px;
        }

        .ckantext {
            position: absolute;
            right: 0;
            bottom: 0;
        }

        .brandmidmitem {
            flex-wrap: wrap;
            justify-content: space-between;

            .bmmitem {
                flex: initial;
                margin-right: 0;
                margin-bottom: 15px;

                .btojdDiv {
                    margin-top: 10px;
                }

                // &:not(:first-child) {
                //   width: 46%;
                //   .bmmT1 {
                //     font-size: 13px;
                //   }
                //   .sjsflag {
                //     img {
                //       width: 30px;
                //       height: 18px;
                //     }
                //   }
                // }
            }
        }
    }
}
</style>
