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
                <span>MASTERPIECES</span>
                <span class="abomidD2T1">设计佳作</span>
            </div>
            <span class="abomidD2T2">设计中的 “人类群星闪耀时”。 回头去看这些经典佳作，</span>
            <span class="abomidD2T2">依然令人惊喜不已， 并带来新的感悟。</span>
            <span class="abomidD2T3">The deign version of Decisive Moments in History.</span>
            <span class="abomidD2T3">Whenever we look back to these iconic masterpieces,</span>
            <span class="abomidD2T3">they always surprise us and lift us out of our ordinary way of perceiving the world.</span>
        </div>
        <div class="menuDiv">
            <div class="menubar">
                <a @click="toSubitem($event)">#空间文化SpaceCulture15 &nbsp;/</a>
                <a @click="toSubitem($event)">&nbsp;#智能物联IoT5 &nbsp; /</a>
                <a @click="toSubitem($event)">&nbsp;#色彩趋势ColorTrends5&nbsp;/</a>
                <a @click="toSubitem($event)">&nbsp;#软装趋势InteriorSpaceTrends8</a>
            </div>
            <div class="menubar">
                <a @click="toSubitem($event)" data-id="/Masterpieces" style="color:#000">#设计佳作Masterpieces52 &nbsp;/</a>
                <a @click="toSubitem($event)">&nbsp;#致敬大师DesignGurus12 &nbsp;/</a>
                <a @click="toSubitem($event)">&nbsp;#经典案例 CaseDigest23&nbsp;</a>
            </div>
            <div class="menubar">
                <a @click="toSubitem($event)">&nbsp;#办公环境WorkplaceConcept41 &nbsp;/</a>
                <a @click="toSubitem($event)">&nbsp;#居家环境HomeEnvironment7 &nbsp;/</a>
                <a @click="toSubitem($event)">&nbsp;#教育环境 EducationalSpaces19&nbsp;</a>
            </div>
        </div>
        <div class="spbybotDiv">
            <div class="spbybotDivitem">
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/1.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2020年04月23日</span>
                    </div>
                    <div class="bybtT1">丝网？ 掐丝？ 钻石？ Excusez-moi?!</div>
                    <div class="bybtT2">零距离体验哈利 · 贝托亚的设计哲学</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/5.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2019年07月26日</span>
                    </div>
                    <div class="bybtT1">3:6:8, 1:4:9, 1-2-3-5-8-13-21...</div>
                    <div class="bybtT2">建筑师还是几何学家？ 解密密斯 · 凡 · 德 · 罗的黄金分割</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/9.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2019年01月29日</span>
                    </div>
                    <div class="bybtT1">超越时代的经典， 彰显极致的传奇</div>
                    <div class="bybtT2">保罗 · 克耶霍尔姆做出了怎样的毕业设计？</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/13.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2019年11月06日</span>
                    </div>
                    <div class="bybtT1">一张椅， 一盏茶， 一本书, 一只猫， 一整天~</div>
                    <div class="bybtT2">伊姆斯夫妇在设计史上缔造的划时代里程碑</div>
                </div>
            </div>

            <div class="spbybotDivitem">
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/2.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2020年04月01日</span>
                    </div>
                    <div class="bybtT1">转转转， Fun Fun Fun!</div>
                    <div class="bybtT2">看罗恩 · 阿拉德如何将肌理与曲线碰撞出火花</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/6.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2019年12月27日</span>
                    </div>
                    <div class="bybtT1">$2,100,000.00?!</div>
                    <div class="bybtT1">Are you f**king kidding me?!</div>
                    <div class="bybtT2">马克 · 纽森为何被誉为 “最值钱的设计师”？</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/10.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2019年02月23日</span>
                    </div>
                    <div class="bybtT1">Series 7™——跨越时代的迷人经典</div>
                    <div class="bybtT2">阿纳 · 雅各部分如何缔造家具销售史上的不朽神话</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/14.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2018年12月12日</span>
                    </div>
                    <div class="bybtT1">叮咚！ 您点的 “椰香美味” 已端进家中！</div>
                    <div class="bybtT2">乔治 · 尼尔森在家具设计上的绝妙创意</div>
                </div>
            </div>

            <div class="spbybotDivitem">
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/3.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2020年02月14日</span>
                    </div>
                    <div class="bybtT1">维纳 · 潘顿 “颠倒众生” 的美人椅</div>
                    <div class="bybtT2">维纳 · 潘顿倾力造就世界上第一把一体成型塑料弓形椅</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/7.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2019年09月19日</span>
                    </div>
                    <div class="bybtT1">蝴蝶蹁跹， 轻舞曼妙</div>
                    <div class="bybtT2">探索柳宗理深邃的日式美学</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/11.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2019年03月11日</span>
                    </div>
                    <div class="bybtT1">据说这是一把另所有导演爱不释手的椅子</div>
                    <div class="bybtT2">马歇尔 · 布劳耶用皮革与钢管缔造的不朽神话</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/15.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2019年01月07日</span>
                    </div>
                    <div class="bybtT1">让我们跟随盖里一起摇摆！</div>
                    <div class="bybtT2">看传奇建筑师如何变废为宝， 点 “纸”成金。</div>
                </div>
            </div>

            <div class="spbybotDivitem">
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/4.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2020年01月17日</span>
                    </div>
                    <div class="bybtT1">乘客您好！ 本次旅程的终点站是盖尼米得。</div>
                    <div class="bybtT2">Up 5 & 6究竟因何俘获斯坦利 · 库布里克的芳心</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/8.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2019年11月03日</span>
                    </div>
                    <div class="bybtT1">极致无暇的美学， 优雅纯粹的经典</div>
                    <div class="bybtT2">深度解析保罗 · 凯霍尔姆的传世经典——PK24™躺椅</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/12.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2019年05月23日</span>
                    </div>
                    <div class="bybtT1">OMG!!! 你能接受如此前卫的设计概念吗？</div>
                    <div class="bybtT2">看埃罗 · 萨利宁如何携强劲冲击力挑战传统家具</div>
                </div>
                <div class="spbyrowitem">
                    <div>
                        <img src="@/../static/imgs/space/masterpieces/16.jpg" style="width:100%;height:100%" alt />
                    </div>
                    <div class="spbyrowflag">
                        <span>#设计佳作Masterpieces</span>
                        <span>2018年12月01日</span>
                    </div>
                    <div class="bybtT1">你想体验冰淇淋球的美味还是泡泡的轻盈？</div>
                    <div class="bybtT2">让我们一同走进埃罗 · 阿尼奥的童真王国</div>
                </div>
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
            isAndroid: '',
            loading: false
        };
    },

    components: {},

    computed: {},

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
    destroyed() {
        // alert(111)
        if (this.isAndroid) {
            this.player.destroy();
        }
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
    },
};
</script>

<style lang="scss" scoped>
.liaheader {
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

.switch_btn {
    position: absolute;
    right: 6%;
    bottom: 15%;
    width: 50px;
    height: 50px;
}

.spbyrowitem {
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
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

.spbybotDivitem {
    flex: 1;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
}

.spbybotDiv {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}

.spby {
    background: #f4f4f4;
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
    color: #000;
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
    color: #000;
    margin-left: 10px;
    font-weight: bold;
}

.abomidD2T3 {
    font-size: 12px;
    color: #000;
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
}

.menubar a {
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    color: #c8c4be;
    margin: 2px 0;
}

.menubar a:hover {
    color: #000;
    cursor: pointer;
}

.sptitle {
    display: flex;
    flex-direction: column;
}

.tocolor {
    color: #000 !important;
}

/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
    .liaheader {
        min-height: 34vh;
        background-color: #2f312c;
    }

    .switch_btn {
        right: 4%;
        bottom: 10%;
        width: 35px;
        height: 35px;
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

    .spbybotDiv {
        flex-wrap: wrap;
        justify-content: space-between;

        .spbybotDivitem {
            width: 45%;
            flex: initial;
        }
    }

    .bybtT1 {
        font-size: 16px;
    }

    .bybtT2 {
        font-size: 13px;
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

    .spbybotDiv {
        flex-direction: column;

        .spbyrowitem {
            margin-bottom: 50px;
        }
    }

    .bybtT1 {
        font-size: 14px;
    }

    .bybtT2 {
        font-size: 12px;
    }
}
</style>
