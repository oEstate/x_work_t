<!--  -->
<template>
<div class="container">
    <div class="liaheader">
        <!-- For iOS or PC-->
        <van-loading v-if="loading" class="van_loading" size="24px">加载中...</van-loading>
        <video class="videoClass" src="@/../static/video/space.mp4" ref="videos" playsinline webkit-playsinline x5-video-player-type="h5" autoplay="autoplay" loop></video>
        <!-- For Android -->
        <canvas class="videoClass" ref="canvas"></canvas>
        <img v-if="videoType" class="switch_btn" @click="playPause_Android" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
        <img v-if="!videoType" class="switch_btn" @click="playPause" :src="!playFlag ? '@/../static/imgs/liaison/close_sound.png' : '@/../static/imgs/liaison/open_sound.png'" alt />
    </div>
    <!-- <img src="@/../static/imgs/product/outdoor/outdoor.jpg" width="100%;height:100%" alt=""> -->
    <div class="spby">
        <div class="sptitle">
            <div class="abomidD2" style="margin-bottom:10px; ">
                <span class="mEN">RESOURCES</span>
                <span class="abomidD2T1">空间策略研究</span>
            </div>
            <span class="abomidD2T2">搭建理想空间体验的起点与支点， 满足人们的各种感官与心理需求，</span>
            <span class="abomidD2T2">与环境互动， 与自己对话。</span>
            <span class="abomidD2T2_1">搭建理想空间体验的起点与支点， 满足人们的各种感官与心理需求，与环境互动， 与自己对话。</span>
            <span class="abomidD2T3">
                How we think about an ideal space experience and make it meet people’s physical and
                emotional needs,
            </span>
            <span class="abomidD2T3">
                allowing people to freely interact with the space and meanwhile explore their inner
                world.
            </span>
            <span class="abomidD2T3_1">
                How we think about an ideal space experience and make it meet people’s physical and
                emotional needs,allowing people to freely interact with the space and meanwhile explore their inner
                world.
            </span>
        </div>
        <div class="menuDiv">
            <div class="menubar">
                <a @click="toSubitem($event)" class="mEN">#空间文化SpaceCulture15 &nbsp;/</a>
                <a @click="toSubitem($event)" class="mEN">&nbsp;#智能物联IoT5 &nbsp; /</a>
                <a @click="toSubitem($event)" class="mEN">&nbsp;#色彩趋势ColorTrends5&nbsp;/</a>
                <a @click="toSubitem($event)" class="mEN">&nbsp;#软装趋势InteriorSpaceTrends8</a>
            </div>
            <div class="menubar">
                <a @click="toSubitem($event)" data-id="/Masterpieces" class="mEN">#设计佳作Masterpieces52 &nbsp;/</a>
                <a @click="toSubitem($event)" class="mEN">&nbsp;#致敬大师DesignGurus12 &nbsp;/</a>
                <a @click="toSubitem($event)" class="mEN">&nbsp;#经典案例 CaseDigest23&nbsp;</a>
            </div>
            <div class="menubar">
                <a @click="toSubitem($event)" class="mEN">&nbsp;#办公环境WorkplaceConcept41 &nbsp;/</a>
                <a @click="toSubitem($event)" class="mEN">&nbsp;#居家环境HomeEnvironment7 &nbsp;/</a>
                <a @click="toSubitem($event)" class="mEN">&nbsp;#教育环境 EducationalSpaces19&nbsp;</a>
            </div>
        </div>
        <div class="spbyrow spbyrow1">
            <div class="spbyrowitem matop">
                <div>
                    <img src="@/../static/imgs/space/insight/7.jpg" style="width:100%;height:100%;max-width:415px;max-height:230px" alt />
                </div>
                <div class="spbyrowflag">
                    <span>#色彩趋势ColorTrends</span>
                    <span>2019年12月12日</span>
                </div>
                <div class="bybtT1">让2020的 “经典蓝” 解决2019的 “我太蓝”</div>
                <div class="bybtT2">2020年度潘通色可以为办公空间带来什么？</div>
            </div>
            <div class="spbyrowitem secddiv">
                <div>
                    <img src="@/../static/imgs/space/insight/6.jpg" style="width:100%;height:100%;max-width:1020px;max-height:600px" alt />
                </div>
                <div class="spbyrowflag">
                    <span>#空间文化SpaceCulture #办公环境WorkplaceConcept #经典案例CaseDigest</span>
                    <span>2019年10月18日</span>
                </div>
                <div class="bybtT1">vitra.的 “设计基地”： 站在大格局上看办公这件事</div>
                <div class="bybtT2">vitra.“2019工作全景会议”</div>
                <div class="bybtT3">
                    提及欧洲家具设计界的代表品牌,vitra.是不容忽视的一个名字,与之相关联的是众多顶尖设计师和
                    经典佳作。 尽管拥有逾60年历史, vitra.所呈现的产品与理念从未过时,而是始终站在趋势前沿,相
                    应当下所需,推动未来发展。其中原因大概如vitra.全球办公趋势调研团队副总裁Raphael Gielgen所说:“虽然我们的最终呈现实体是家具,但其实你看到的桌子或椅子代表的不...
                </div>

                <div class="see">
                    <a href class="ydgd">阅读更多</a>
                </div>
                <div class="bybtT3" style="margin-top:30px">#办公空间</div>
                <div class="liamidtext3">
                    <a href="@/../static/imgs/home/xwork.gif" target="_blank">
                        <img class="liamidimg" src="@/../static/imgs/footer/WeChatO.png" id="I1" @mouseenter="changeImg1($event)" @mouseleave="changeImg1($event)" alt />
                    </a>
                    <a href="https://weibo.com/p/1006067386802651/home?from=page_100606&mod=TAB" target="_blank">
                        <img class="liamidimg" src="@/../static/imgs/footer/WeiboO.png" id="I2" @mouseenter="changeImg1($event)" @mouseleave="changeImg1($event)" alt />
                    </a>
                    <a href="https://www.linkedin.com/company/%E5%8C%97%E4%BA%AC%E6%B2%83%E7%A7%91%E4%BC%98%E5%93%81%E5%AE%B6%E5%85%B7%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/?viewAsMember=true" target="_blank">
                        <img class="liamidimg" src="@/../static/imgs/footer/LinkedInO.png" id="I3" @mouseenter="changeImg1($event)" @mouseleave="changeImg1($event)" alt />
                    </a>
                </div>
            </div>
        </div>
        <div class="spbyrow mabot">
            <div class="spbyrowitem maright">
                <div>
                    <img src="@/../static/imgs/space/insight/4.jpg" style="width:100%;height:100%;max-width:415px;max-height:510px" alt />
                </div>
                <div class="spbyrowflag">
                    <span>#致敬大师DesignGurus</span>
                    <span>2019年05月28日</span>
                </div>
                <div class="bybtT1">Miestakes? Mies takes!</div>
                <div class="bybtT2">密斯 · 凡 · 德 · 罗解码——“精细/惊喜”</div>
            </div>
            <div class="spbyrowitem matop">
                <div>
                    <img src="/../static/imgs/space/insight/5.jpg" style="width:100%;height:100%;max-width:760px;max-height:430px" alt />
                </div>
                <div class="spbyrowflag">
                    <span>#设计佳作Masterpieces</span>
                    <span>2019年07月19日</span>
                </div>
                <div class="bybtT1">极致无暇的美学， 优雅纯粹的经典</div>
                <div class="bybtT2">深度解析保罗 · 凯霍尔姆的传世经典——PK24™躺椅</div>
            </div>
        </div>
        <div class="spbymidrow spbymidrow3">
            <div class="spbyrowitem matop matop_22">
                <div>
                    <img src="@/../static/imgs/space/insight/3.jpg" style="width:100%;height:100%;max-width:640px;max-height:550px" alt />
                </div>
                <div class="spbyrowflag">
                    <span>#居家环境HomeEnvironment</span>
                    <span style="margin-right: 30px">2019年03月14日</span>
                </div>
                <div class="bybtT1">保持健康的六个维度——居家办公的装备清单</div>
                <div class="bybtT2">如何打造健康、 高效且富有参与度的居家办公环境</div>
            </div>
        </div>
        <div class="spbyrow" style=" justify-content: flex-start;">
            <div class="spbyrowitem maright">
                <div style="margin-top:-150px">
                    <img src="/../static/imgs/space/insight/2.jpg" style="width:100%;height:100%;max-width:600px;max-height:340px" alt />
                </div>
                <div class="spbyrowflag">
                    <span>#教育空间EducationalSpace</span>
                    <span>2019年02月23日</span>
                </div>
                <div class="bybtT1">空间能否在深度思考中搭建最大支持力与思维体系</div>
                <div class="bybtT2">论社交型学习空间的必备要素</div>
            </div>
            <div class="spbyrowitem" style="margin-top:100px">
                <div>
                    <img src="/../static/imgs/space/insight/1.jpg" style="width:100%;height:100%;max-width:915px;max-height:610px" alt />
                </div>
                <div class="spbyrowflag">
                    <span>#经典案例CaseDigest</span>
                    <span>2019年01月05日</span>
                </div>
                <div class="bybtT1">灵活型物理空间设计能支持甚至激发员工的创造力？</div>
                <div class="bybtT2">为实验创新及激发办公所打造的领英设计实验室 (LinkedIn dLab)</div>
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
            playFlag: false,
            videoType: false,
            isAndroid: "",
            loading: false
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
                _this.loading = true;
                // 安卓
                var src = "../../static/video/space.ts";

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
                            100 / (_this.canvas.width / _this.canvas.height) + "vw";
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
        toSubitem(e) {
            this.$router.push({
                path: e.target.dataset.id
            });
        },
        changeImg1(e) {
            switch (e.target.id) {
                case "I1":
                    e.target.src = "@/../static/imgs/footer/WeChatO.png";
                    break;
                case "I2":
                    e.target.src = "@/../static/imgs/footer/WeiboO.png";
                    break;
                case "I3":
                    e.target.src = "@/../static/imgs/footer/LinkedInO.png";
                    break;
                case "I4":
                    e.target.src = "@/../static/imgs/footer/TikTokO.png";
                    break;
                case "I5":
                    e.target.src = "@/../static/imgs/footer/TouTiaoO.png";
                    break;

                default:
                    break;
            }
        },
        changeImg2(e) {
            switch (e.target.id) {
                case "I1":
                    e.target.src = "@/../static/imgs/footer/WeChat.png";
                    break;
                case "I2":
                    e.target.src = "@/../static/imgs/footer/Weibo.png";
                    break;
                case "I3":
                    e.target.src = "@/../static/imgs/footer/LinkedIn.png";
                    break;
                case "I4":
                    e.target.src = "@/../static/imgs/footer/TikTok.png";
                    break;
                case "I5":
                    e.target.src = "@/../static/imgs/footer/TouTiao.png";
                    break;

                default:
                    break;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.videoClass {
    display: none;
    width: 100%;
    height: 100%;
}

.liaheader {
    position: relative;
}

.van_loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.switch_btn {
    position: absolute;
    right: 6%;
    bottom: 15%;
    width: 50px;
    height: 50px;
}

.liamidtext3 {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
}

.liamidtext3 a {
    margin: 0 5px;
}

.see {
    margin-top: -18px;
}

.ydgd {
    color: #cd715a;
    font-size: 14px;
    font-weight: bold;
    margin-left: 490px;
}

.bybtT3 {
    color: #666565;
    font-size: 13px;
    margin-top: 30px;
    width: 552px;
}

.secddiv {
    padding: 15px !important;
    background: #fff !important;
    margin-left: 10px;
}

.spbymidrow {
    display: flex;
    justify-content: flex-end;
}

.mabot {
    margin-top: 100px;
}

.maright {
    margin-right: 30px;
}

.matop {
    margin-top: 30px !important;
}

.bybtT1 {
    font-size: 20px;
    font-weight: bold;
    color: #000;
}

.bybtT2 {
    font-size: 15px;
    color: #000;
    font-weight: bold;
    letter-spacing: 1px;
}

.spbyrowflag span {
    font-size: 12px;
    color: #c8c4be;
}

.spbyrowflag {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
}

.spbyrowitem {
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    padding: 0 3px;
}

.spbyrow {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.spby {
    background: url("../../../static/imgs/space/insight/spbg.jpg");
    background-size: 100% 100%;
    padding: 30px;
    padding-bottom: 200px;
}

.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.abomidD2 {
    display: flex;
    color: #fff;
    font-size: 40px;
    letter-spacing: 15px;
    font-weight: bold;
    margin-left: 8px;
}

.abomidD2T1 {
    font-size: 20px;
    letter-spacing: 0px;
}

.abomidD2T2 {
    font-size: 17px;
    color: #fff;
    margin-left: 10px;
    font-weight: bold;
}

.abomidD2T3 {
    font-size: 12px;
    color: #fff;
    margin-left: 10px;
    font-weight: bold;
}

.menuDiv {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin-top: 50px;
}

.menubar {
    display: flex;
    justify-content: center;
    flex-direction: row;
    letter-spacing: 1px;
}

.menubar a {
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    color: #c8c4be;
    margin: 2px 0;
}

.menubar a:hover {
    color: #fff;
    cursor: pointer;
}

.sptitle {
    display: flex;
    flex-direction: column;
}

.tocolor {
    color: #fff !important;
}

.abomidD2T2_1,
.abomidD2T3_1 {
    display: none;
}

.matop_22 {
    margin-right: -30px;
}

/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
    .liaheader {
        min-height: 34vh;
        background-color: #2f312c;
    }

    .spby {
        .sptitle {
            .abomidD2 {
                font-size: 38px;
                align-items: center;

                .abomidD2T1 {
                    font-size: 18px;
                }
            }
        }

        .menuDiv {
            .menubar {
                a {
                    font-size: 13px;
                }
            }
        }
    }

    .spbyrow1 {
        .secddiv {
            zoom: 0.8;
        }

        .matop {
            .spbyrowflag {
                zoom: 0.8;
            }
        }
    }

    .bybtT1 {
        font-size: 16px;
    }

    .bybtT2 {
        font-size: 13px;
    }

    .spbymidrow3 {
        img {
            zoom: 0.6;
        }
    }

    .switch_btn {
        right: 4%;
        bottom: 10%;
        width: 35px;
        height: 35px;
    }
}

@media screen and (max-width: 640px) {
    .liaheader {
        min-height: 30vh;
        background-color: #2f312c;
    }

    .switch_btn {
        right: 4%;
        bottom: 10%;
        width: 25px;
        height: 25px;
    }

    .sptitle {
        .abomidD2 {
            font-size: 20px;
            align-items: center;
            letter-spacing: 3px;

            .abomidD2T1 {
                font-size: 12px;
            }
        }

        .abomidD2T2,
        .abomidD2T3 {
            display: none;
        }

        .abomidD2T2_1 {
            display: block;
            font-size: 15px;
            color: #fff;
            margin-left: 10px;
            font-weight: bold;
        }

        .abomidD2T3_1 {
            display: block;
            font-size: 12px;
            color: #fff;
            margin-left: 10px;
            font-weight: bold;
        }
    }

    .menuDiv {
        margin-top: 10px;

        .menubar {
            flex-wrap: wrap;

            a {
                font-size: 13px;
            }
        }
    }

    .spbyrow1 {
        flex-direction: column;

        .bybtT3 {
            width: 100%;
        }

        .spbyrowitem {
            margin-top: 40px !important;
            margin-left: 0;
            margin-right: 0;
        }

        .secddiv {
            span:first-child {
                flex: 3;
            }

            span:last-child {
                flex: 2;
                text-align: right;
            }
        }
    }

    .spbyrow {
        flex-direction: column;

        .see {
            text-align: right;
            margin-top: 0;

            .ydgd {
                margin-left: 0;
                font-size: 13px;
            }
        }

        .bybtT3 {
            width: 100%;
        }

        .spbyrowitem {
            margin-top: 40px !important;
            margin-left: 0;
            margin-right: 0;
        }
    }

    .bybtT1 {
        font-size: 14px;
    }

    .bybtT2 {
        font-size: 12px;
    }

    .matop_22 {
        margin-right: 0;
    }
}
</style>
