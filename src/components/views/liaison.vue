<!--联系-->

<template>
<div class="liacontent">
    <div class="liaheader">
        <van-loading v-if="loading" class="van_loading" size="24px">加载中...</van-loading>
        <video class="videoClass" ref="video" id="videos" style="width:100%;height:100%" src="@/../static/video/lx.mp4" playsinline webkit-playsinline autoplay loop></video>
        <canvas class="videoClass" ref="can"></canvas>
        <!-- <img src="@/../static/imgs/liaison/Showroom-1.jpg" alt=""> -->
        <div class="liatitle">
            <div class="DAD"><span class="D1 mEN">KEEP IN TOUCH</span> <span class="D2">保持联系</span></div>
            <span class="D3">身为您的忠实伙伴，我们一直在这里为您提供支持。</span>
            <span class="D4">We are proud of being your whole-hearted partner, And we are already right here for you.</span>
        </div>
        <img class="switch_btn" @click="playPause" :src="playFlag ? '@/../static/imgs/liaison/open_sound.png' : '@/../static/imgs/liaison/close_sound.png'" alt="">
    </div>
    <div class="liaby">
        <div class="liamid">
            <div class="liamidtext1">
                <span class="M1 mEN">X·WORK OFFICE&</span>
                <span class="M2">沃科办公与沃科教育</span>
            </div>
            <div class="liamidtext1 mt10">
                <span class="M1 mEN">X·WORK EDUCATION</span>
            </div>
            <div class="liamidtext2">
                <span class="M3">沃科北京总部与全国各地团队期待为您服务。</span>
                <span class="M3">您也可以在以下平台关注我们。</span>
            </div>
            <div class="liamidtext3">
                <!-- <a href="@/../static/imgs/home/xwork.gif" target="_blank"><img class="liamidimg" src="@/../static/imgs/footer/WeChat.png" id="I1" @mouseenter="changeImg1($event)"
            @mouseleave="changeImg2($event)" @click="tourl($event)" alt=""></a> -->
                <a href="@/../static/imgs/home/xwork.gif" target="_blank"><img class="liamidimg" src="@/../static/imgs/footer/WeChat.png" id="I1" @mouseenter="changeImg1($event)" @mouseleave="changeImg2($event)" alt=""></a>
                <a href="https://weibo.com/p/1006067386802651/home?from=page_100606&mod=TAB" target="_blank"><img class="liamidimg" src="@/../static/imgs/footer/Weibo.png" id="I2" @mouseenter="changeImg1($event)" @mouseleave="changeImg2($event)" alt=""></a>
                <a href="https://www.linkedin.com/company/%E5%8C%97%E4%BA%AC%E6%B2%83%E7%A7%91%E4%BC%98%E5%93%81%E5%AE%B6%E5%85%B7%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/?viewAsMember=true" target="_blank"><img class="liamidimg" src="@/../static/imgs/footer/LinkedIn.png" id="I3" @mouseenter="changeImg1($event)" @mouseleave="changeImg2($event)" alt=""></a>
                <a href="https://v.douyin.com/vNCv62/" target="_blank"><img class="liamidimg" src="@/../static/imgs/footer/TikTok.png" id="I4" @mouseenter="changeImg1($event)" @mouseleave="changeImg2($event)" alt=""></a>
                <a href="https://www.toutiao.com/c/user/1173883637217428/#mid=1640563681520644" target="_blank"><img class="liamidimg" src="@/../static/imgs/footer/TouTiao.png" id="I5" @mouseenter="changeImg1($event)" @mouseleave="changeImg2($event)" alt=""></a>
            </div>
        </div>
        <div class="liaismidDiv">
            <div class="liaismidDivitem">
                <div> <img src="@/../static/imgs/liaison/lx/a1.jpg" alt="" style="width:100%;height:100%"> </div>
                <div class="liaismidDitemfo">
                    <div class="lmidDitemfo">
                        <span class="lmidDitemfoT1">沃科北京总部</span>
                        <span class="lmidDitemfoT2">addr. 北京市朝阳区亮马桥路5号， 100028</span>
                        <a href="https://map.baidu.com/search/%E5%8C%97%E4%BA%AC%E6%B2%83%E7%A7%91%E7%B3%BB%E7%BB%9F%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@12967511.125,4833288,19z?querytype=inf&uid=b413be62e38a4536e0110317&wd=%E5%8C%97%E4%BA%AC%E6%B2%83%E7%A7%91%E7%B3%BB%E7%BB%9F%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&all=1&c=131&provider=pc-aladin&da_src=shareurl" target="_blank"><span class="lmidDitemfoT2 fs">在地图中显示</span></a>
                        <span class="lmidDitemfoT2">tel. 0086 10 8420 0995</span>
                        <span class="lmidDitemfoT2">eml. x-work@x-work.com.cn</span>

                    </div>
                    <div style="width:20px"></div>
                    <div class="lmidDitemfo">
                        <div class="lmidDitemfo">
                            <span class="lmidDitemfoT1">&nbsp;</span>
                            <span class="lmidDitemfoT2 DB">办公时间</span>
                            <span class="lmidDitemfoT2 ">星期一至星期五8：30~18:00</span>
                            <span class="lmidDitemfoT2  ">星期六：9:30~17:00</span>
                            <span class="lmidDitemfoT2"> 星期日：休息</span>

                        </div>

                    </div>
                </div>
            </div>
            <div class="liaismidDivitem">
                <div> <img src="@/../static/imgs/liaison/lx/a2.jpg" alt="" style="width:100%;height:100%"> </div>
                <div class="liaismidDitemfo">
                    <div class="lmidDitemfo">
                        <span class="lmidDitemfoT1">沃科上海办公室</span>
                        <span class="lmidDitemfoT2">addr. 上海市闵行区紫秀路100号楼1楼A幢， 201100</span>
                        <a href="" target="_blank"><span class="lmidDitemfoT2 fs">在地图中显示</span></a>
                        <span class="lmidDitemfoT2">tel. +86 1381 654 2006</span>
                        <span class="lmidDitemfoT2">eml. x-work_shanghai@x-work.com.cn</span>

                    </div>
                    <div style="width:20px"></div>
                    <div class="lmidDitemfo">
                        <div class="lmidDitemfo">
                            <span class="lmidDitemfoT1">&nbsp;</span>
                            <span class="lmidDitemfoT2 DB">办公时间</span>
                            <span class="lmidDitemfoT2 ">星期一至星期五8：30~18:00</span>
                            <span class="lmidDitemfoT2  ">星期六：9:30~17:00</span>
                            <span class="lmidDitemfoT2"> 星期日：休息</span>

                        </div>

                    </div>
                </div>
            </div>
            <div class="liaismidDivitem">
                <div> <img src="@/../static/imgs/liaison/lx/a3.jpg" alt="" style="width:100%;height:100%"> </div>
                <div class="liaismidDitemfo">
                    <div class="lmidDitemfo">
                        <span class="lmidDitemfoT1">沃科深圳办公室</span>
                        <span class="lmidDitemfoT2">addr. 深圳市宝安区新安道宝安31区东12号， 518101</span>
                        <a href="" target="_blank"><span class="lmidDitemfoT2 fs">在地图中显示</span></a>
                        <span class="lmidDitemfoT2">tel. +86 1582 720 0006</span>
                        <span class="lmidDitemfoT2">eml. x-work_shenzhen@x-work.com.cn</span>

                    </div>
                    <div style="width:20px"></div>
                    <div class="lmidDitemfo">
                        <div class="lmidDitemfo">
                            <span class="lmidDitemfoT1">&nbsp;</span>
                            <span class="lmidDitemfoT2 DB">办公时间</span>
                            <span class="lmidDitemfoT2 ">星期一至星期五8：30~18:00</span>
                            <span class="lmidDitemfoT2  ">星期六：9:30~17:00</span>
                            <span class="lmidDitemfoT2"> 星期日：休息</span>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="liamidtext22">
            <span class="M3">大中华经销商</span>
        </div>
        <div class="liaismidDiv jxs_box">
            <div class="liaismidDivitem item" v-for="(item,index) in citys" :key="index">
                <div> <img :src="item.img" alt="" style="width:100%;height:100%"> </div>
                <div class="liaismidDitemfo">
                    <div class="lmidDitemfo">
                        <span class="lmidDitemfoT1">{{item.title}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="liamid  totop mg">

            <div class="liamidtext1">
                <span class="M1 mEN">ATYOURSERVICES</span>
                <span class="M2">为您服务</span>
            </div>
            <div class="M4Div">
                <span class="M4">您体验到的，才是我们真正提供的。</span>
                <span class="M4">我们会一直在这里为您提供支持，成为帮助并陪伴您实现梦想与愿景的忠实伙伴。</span>
            </div>
            <div class="services_box">
                <div class="minimg">
                    <div class="minimgitem">
                        <img src="@/../static/imgs/liaison/lx/b1.jpg" alt="" class="minclass">
                    </div>
                    <div class="minimgitem">
                        <img src="@/../static/imgs/liaison/lx/b2.jpg" alt="" class="minclass">
                    </div>
                    <div class="minimgitem">
                        <img src="@/../static/imgs/liaison/lx/b3.jpg" alt="" class="minclass">
                    </div>
                    <div class="minimgitem">
                        <img src="@/../static/imgs/liaison/lx/b4.jpg" alt="" class="minclass">
                    </div>
                </div>
                <div class="minimg top">
                    <div class="minimgitem">
                        <span class="minimgitemT1">清洁服务与石材养护</span>
                        <span class="minimgitemT2">我们为您提供地毯、 座椅和布艺沙发等清洁服务， 以及石材翻新和洁净养护等保养服务， 充分满足您的各类需求。 </span>
                    </div>
                    <div class="minimgitem">
                        <span class="minimgitemT1">家具拆组</span>
                        <span class="minimgitemT2">针对客户在办公空间局部改造过程中遇到的困扰提供优质解决方案， 实现办公家具充分再利用， 合理化空间需求。 </span>
                    </div>
                    <div class="minimgitem">
                        <span class="minimgitemT1">皮革精护</span>
                        <span class="minimgitemT2">为皮质沙发、 座椅及其它皮具进行翻新养护， 使其重新焕发生命力。 </span>
                    </div>
                    <div class="minimgitem">
                        <span class="minimgitemT1">搬家仓储</span>
                        <span class="minimgitemT2">当客户乔迁至新的办公地点， 我们竭诚为您提供一站式资产打包、 运输及摆放服务。 倘若您有临时资产无处安置， 我们亦可为客户提供仓储服务。 </span>
                    </div>

                </div>
                <div class="minimg">
                    <div class="minimgitem">
                        <img src="@/../static/imgs/liaison/lx/b5.jpg" alt="" class="minclass">
                    </div>
                    <div class="minimgitem">
                        <img src="@/../static/imgs/liaison/lx/b6.jpg" alt="" class="minclass">
                    </div>
                    <div class="minimgitem">
                        <img src="@/../static/imgs/liaison/lx/b7.jpg" alt="" class="minclass">
                    </div>
                    <div class="minimgitem">
                        <img src="@/../static/imgs/liaison/lx/b8.jpg" alt="" class="minclass">
                    </div>
                </div>
                <div class="minimg top">
                    <div class="minimgitem">
                        <span class="minimgitemT1">贴膜服务</span>
                        <span class="minimgitemT2">我们依客户所需定制专属方案， 为您的家具提供贴膜保护或石材结晶处理等一系列无微不至的呵护。 </span>
                    </div>
                    <div class="minimgitem">
                        <span class="minimgitemT1">油漆修护</span>
                        <span class="minimgitemT2">若您的木质班台、 油漆班台及会议桌等产品发生意外破损或开裂， 我们会提供专业的油漆修复服务， 令其赋活新生。 </span>
                    </div>
                    <div class="minimgitem">
                        <span class="minimgitemT1">空气治理</span>
                        <span class="minimgitemT2">当家具安装完毕后， 我们会对环境进行空气质量检测并分析检测结果。 参照数据量身定做治理方案， 为员工工作环境的空气质量提供必要的保护。 </span>
                    </div>
                    <div class="minimgitem">
                        <span class="minimgitemT1">绿植服务</span>
                        <span class="minimgitemT2">为客户定制契合办公空间的绿植方案, 我们不仅提供优质绿植及摆放养护， 还能进行定期更换维护。 </span>
                    </div>

                </div>
            </div>
            <!-- 手机端展示 -->
            <div class="phone_services_box">
                <div class="services_item">
                    <img src="@/../static/imgs/liaison/lx/b1.jpg" alt="" class="minclass">
                    <div class="text_box">
                        <span class="minimgitemT1">清洁服务与石材养护</span>
                        <span class="minimgitemT2">我们为您提供地毯、 座椅和布艺沙发等清洁服务， 以及石材翻新和洁净养护等保养服务， 充分满足您的各类需求。 </span>
                    </div>
                </div>
                <div class="services_item">
                    <img src="@/../static/imgs/liaison/lx/b2.jpg" alt="" class="minclass">
                    <div class="text_box">
                        <span class="minimgitemT1">家具拆组</span>
                        <span class="minimgitemT2">针对客户在办公空间局部改造过程中遇到的困扰提供优质解决方案， 实现办公家具充分再利用， 合理化空间需求。 </span>
                    </div>
                </div>
                <div class="services_item">
                    <img src="@/../static/imgs/liaison/lx/b3.jpg" alt="" class="minclass">
                    <div class="text_box">
                        <span class="minimgitemT1">皮革精护</span>
                        <span class="minimgitemT2">为皮质沙发、 座椅及其它皮具进行翻新养护， 使其重新焕发生命力。 </span>
                    </div>
                </div>
                <div class="services_item">
                    <img src="@/../static/imgs/liaison/lx/b4.jpg" alt="" class="minclass">
                    <div class="text_box">
                        <span class="minimgitemT1">搬家仓储</span>
                        <span class="minimgitemT2">当客户乔迁至新的办公地点， 我们竭诚为您提供一站式资产打包、 运输及摆放服务。 倘若您有临时资产无处安置， 我们亦可为客户提供仓储服务。 </span>
                    </div>
                </div>
                <div class="services_item">
                    <img src="@/../static/imgs/liaison/lx/b5.jpg" alt="" class="minclass">
                    <div class="text_box">
                        <span class="minimgitemT1">贴膜服务</span>
                        <span class="minimgitemT2">我们依客户所需定制专属方案， 为您的家具提供贴膜保护或石材结晶处理等一系列无微不至的呵护。 </span>
                    </div>
                </div>
                <div class="services_item">
                    <img src="@/../static/imgs/liaison/lx/b6.jpg" alt="" class="minclass">
                    <div class="text_box">
                        <span class="minimgitemT1">油漆修护</span>
                        <span class="minimgitemT2">若您的木质班台、 油漆班台及会议桌等产品发生意外破损或开裂， 我们会提供专业的油漆修复服务， 令其赋活新生。 </span>
                    </div>
                </div>
                <div class="services_item">
                    <img src="@/../static/imgs/liaison/lx/b7.jpg" alt="" class="minclass">
                    <div class="text_box">
                        <span class="minimgitemT1">空气治理</span>
                        <span class="minimgitemT2">当家具安装完毕后， 我们会对环境进行空气质量检测并分析检测结果。 参照数据量身定做治理方案， 为员工工作环境的空气质量提供必要的保护。 </span>
                    </div>
                </div>
                <div class="services_item">
                    <img src="@/../static/imgs/liaison/lx/b8.jpg" alt="" class="minclass">
                    <div class="text_box">
                        <span class="minimgitemT1">绿植服务</span>
                        <span class="minimgitemT2">为客户定制契合办公空间的绿植方案, 我们不仅提供优质绿植及摆放养护， 还能进行定期更换维护。 </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="minimg top">
            <div class="kfdhu">
                <span class="kf1">客户服务电话</span>
                <span class="Mk1">+86 1851 818 7997</span>
            </div>

        </div>
        <div class="minimg top">
            <div style="margin-top:100px" class="mt10">
                <div class="liamidtext1">
                    <span class="M1 mEN">SPACE CONSULTING</span>
                    <span class="M2">空间策略咨询</span>
                </div>
                <div class="M4Div">
                    <span class="M4">我们协诚为您提供策略咨询、 智能集成以及软装设计等相关解决方案。</span>
                    <span class="M4">不仅仅满足您的各类空间需求， 更是为您空间锦上添花。</span>
                </div>

            </div>
        </div>
        <div class="space_box">
            <div class="minimg">
                <div class="minimgitem">
                    <img src="@/../static/imgs/liaison/lx/c1.jpg" alt="" class="minclass">
                </div>
                <div class="minimgitem">
                    <img src="@/../static/imgs/liaison/lx/c2.jpg" alt="" class="minclass">
                </div>
                <div class="minimgitem">
                    <img src="@/../static/imgs/liaison/lx/c3.jpg" alt="" class="minclass">
                </div>

            </div>
            <div class="minimg top">
                <div class="minimgitem">
                    <span class="minimgitemT1">策略咨询</span>
                    <span class="minimgitemT2">通过对企业文化、 运营模式等方面进行深入了解， 专业顾问团队将为您提供具有针对性的空间策略解决方案。 </span>
                </div>
                <div class="minimgitem">
                    <span class="minimgitemT1">智能集成</span>
                    <span class="minimgitemT2">将智能设备集成入办公家具与空间之中， 打造更具有整体性的， 能够为您提供更高效支持的办公空间。 </span>
                </div>
                <div class="minimgitem">
                    <span class="minimgitemT1">软装设计</span>
                    <span class="minimgitemT2">从灯光、 绿植、 艺术品等方面， 配合整体空间与家具方案， 打造与企业风格文化具有更高契合度的软装设计方案。 </span>
                </div>

            </div>
            <div class="minimg top">
                <div class="kfdhu">
                    <span class="kf1">资讯电话</span>
                    <span class="Mk1">+86 1347 276 7070</span>
                </div>

            </div>
            <div class="minimg top">
                <div style="margin-top:100px" class="mg">

                    <div class="liamidtext1">
                        <span class="M1 mEN">SPACE CONSULTING</span>
                        <span class="M2">家具资产重置与租赁</span>
                    </div>

                </div>
            </div>
            <div class="minimg">
                <div class="minimgitem">
                    <img src="@/../static/imgs/liaison/lx/d1.jpg" alt="" class="minclass">
                </div>
                <div class="minimgitem">
                    <img src="@/../static/imgs/liaison/lx/d2.jpg" alt="" class="minclass">
                </div>
                <div class="minimgitem">

                </div>

            </div>
            <div class="minimg top">
                <div class="minimgitem">
                    <span class="minimgitemT1">家具租赁</span>
                </div>
                <div class="minimgitem">
                    <span class="minimgitemT1">融资租赁</span>
                </div>
                <div class="minimgitem">
                    <span class="minimgitemT1"> </span>
                    <span class="minimgitemT2"> </span>
                </div>

            </div>
            <div class="minimg top">
                <div class="kfdhu">
                    <span class="kf1">资讯电话</span>
                    <span class="Mk1">+86 1561 191 0759</span>
                </div>

            </div>
        </div>
        <!-- 手机端空间 -->
        <div class="phone_space_box">
            <div class="space_item">
                <img src="@/../static/imgs/liaison/lx/c1.jpg" alt="" class="minclass">
                <div class="text_box">
                    <span class="minimgitemT1">策略咨询</span>
                    <span class="minimgitemT2">通过对企业文化、 运营模式等方面进行深入了解， 专业顾问团队将为您提供具有针对性的空间策略解决方案。 </span>
                </div>
            </div>
            <div class="space_item">
                <img src="@/../static/imgs/liaison/lx/c2.jpg" alt="" class="minclass">
                <div class="text_box">
                    <span class="minimgitemT1">智能集成</span>
                    <span class="minimgitemT2">将智能设备集成入办公家具与空间之中， 打造更具有整体性的， 能够为您提供更高效支持的办公空间。 </span>
                </div>
            </div>
            <div class="space_item">
                <img src="@/../static/imgs/liaison/lx/c3.jpg" alt="" class="minclass">
                <div class="text_box">
                    <span class="minimgitemT1">软装设计</span>
                    <span class="minimgitemT2">从灯光、 绿植、 艺术品等方面， 配合整体空间与家具方案， 打造与企业风格文化具有更高契合度的软装设计方案。 </span>
                </div>
            </div>
            <div class="title">
                <span class="kf1">资讯电话</span>
                <span class="Mk1">+86 1347 276 7070</span>
            </div>
            <div class="minimg top">
                <div style="margin-top:100px" class="mt10">
                    <div class="liamidtext1">
                        <span class="M1 mEN">SPACE CONSULTING</span>
                        <span class="M2">家具资产重置与租赁</span>
                    </div>
                </div>
            </div>
            <div class="zl_box">
                <div class="zl_item">
                    <img src="@/../static/imgs/liaison/lx/d1.jpg" alt="" class="minclass">
                    <span class="minimgitemT1">家具租赁</span>
                </div>
                <div class="zl_item">
                    <img src="@/../static/imgs/liaison/lx/d2.jpg" alt="" class="minclass">
                    <span class="minimgitemT1">融资租赁</span>
                </div>
            </div>
            <div class="title">
                <span class="kf1">资讯电话</span>
                <span class="Mk1">+86 1561 191 0759</span>
            </div>
        </div>
    </div>
    <div class="liabotby">
        <div class="liabot">
            <div class="liabotC1">
                <div class="liabotC1D1"></div>
                <div class="liabotC1D2">
                    <div class="BG2">
                        <div class="liabotbytitle phone_title mt10">
                            <span class="lbt1 mEN">LEAVEAMESSAGE</span>
                            <span class="lbt2">留言给我们</span>
                        </div>
                        <div class="BG3 mt10">
                            <span class="lbt3">48小时之内会有专人与您取得联系，</span>
                            <span class="lbt3">我们期待为您服务。</span>
                        </div>
                    </div>
                    <div class="formtitle">
                        <span class="formtitleT1">您的称谓与姓名</span>
                        <span style="color:#D96F55">*</span>
                    </div>
                    <div class="yname">
                        <div class="cw">
                            <el-select @change="choseCw" v-model="cwData" placeholder="-您的称谓-" class="cwsy">
                                <el-option v-for="item in cwoptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="yxm">
                            <div class="yx">
                                <span>姓</span>
                                <input type="text" class="yxmipt">
                            </div>
                            <div class="ym">
                                <span>名</span>
                                <input type="text" class="yxmipt">
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="formtitle mt10">
                        <span class="formtitleT1">您的联系偏好</span>
                        <span style="color:#D96F55">*</span>
                    </div>
                    <div class="yname">
                        <div class="cw">
                            <el-select @change="chosePh" v-model="phvalue" placeholder="-偏好选择-" class="cwsy">
                                <el-option v-for="item in phoptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="ph">
                            <div v-show="phvalue == 1 || phvalue == 3" class="ym" style="border:2px solid #D9A394">
                                <span>联系电话</span>
                                <input type="text" class="yxmipt">
                            </div>
                            <div v-show="phvalue == 2 || phvalue == 3" class="ym" style="border:2px solid #D9A394;background:#E6BCB1">
                                <span>电子邮箱</span>
                                <input type="text" class="yxmipt" style="background:#E6BCB1 ;">
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="formtitle">
                        <span class="formtitleT1">您的联系地址</span>
                    </div>
                    <div class="ssq">
                        <div class="ssqitem">
                            <el-select v-model="pname" @change="choseProvince" placeholder="-国家国家/地区-" class="cwsy">
                                <el-option v-for="(item,$index) in province" :key="$index" :label="item.value" :value="item.id">
                                </el-option>
                            </el-select>
                            <el-select v-model="cname" @change="choseCity" placeholder="所在城市" class="cwsy" style="margin:0 10px">
                                <el-option v-for="(item,$index) in city" :key="$index" :label="item.value" :value="item.id">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="szd" style="max-width:300px">
                            <el-select v-model="bname" @change="choseBlock" placeholder="所在地区" class="cwsy" style="width:300px">
                                <el-option v-for="(item,$index) in block" :key="$index" :label="item.value" :value="item.id">
                                </el-option>
                            </el-select>
                        </div>

                    </div>
                    <div class="formtitle xxdz">
                        <div class="ym" style="margin-left:0px">
                            <span style=" width:110px">详细地址</span>
                            <input type="text" class="yxmipt">
                        </div>

                        <div class="ym" style="max-width:300px;">
                            <span>邮编</span>
                            <input type="text" class="yxmipt">
                        </div>
                    </div>

                </div>
            </div>
            <div class="liabotC2">
                <div class="BG2">
                    <div class="liabotbytitle">
                        <span class="lbt1">&nbsp;</span>
                        <span class="lbt2">&nbsp;</span>

                    </div>
                    <div class="BG3">
                        <span class="lbt3">&nbsp;</span>
                        <span class="lbt3">&nbsp;</span>

                    </div>
                </div>
                <div class="formtitle">

                    <span class="formtitleT1">您的咨询主题</span>
                    <span style="color:#D96F55">*</span>
                </div>
                <div style="width:100%">
                    <div class="ly">
                        <div class="cw">
                            <el-select v-model="ztData" placeholder="-产品信息与销售-" class="cp" style=" width:100%;  ">
                                <el-option v-for="item in cwoptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="formtitle">
                            <span class="formtitleT1">您的留言</span>
                            <span style="color:#D96F55">*</span>

                        </div>
                        <el-input type="textarea" class="lysy" :autosize="{ minRows: 7, maxRows: 7}" placeholder=" " v-model="cgzx">
                        </el-input>
                    </div>
                    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="常规咨询" name="first">
                <div class="ly">
                  <div class="formtitle">
                    <span class="formtitleT1">您的留言</span>
                    <span style="color:#D96F55">*</span>

                  </div>
                  <el-input type="textarea" class="lysy" :autosize="{ minRows: 7, maxRows: 7}" placeholder=" "
                    v-model="cgzx">
                  </el-input>
                </div>
              </el-tab-pane>
              <el-tab-pane label="预约参观" name="second">
                <div class="ly">
                  <div class="formtitle">
                    <span class="formtitleT1">您的留言</span>
                    <span style="color:#D96F55">*</span>

                  </div>
                  <el-input type="textarea" placeholder=" " :autosize="{ minRows: 7, maxRows: 7}" v-model="yycg">
                  </el-input>
                </div>
              </el-tab-pane>
              <el-tab-pane label="产品信息与销售" name="third">
                <div class="ly">
                  <div class="formtitle">
                    <span class="formtitleT1">您的留言</span>
                    <span style="color:#D96F55">*</span>
                  </div>
                  <el-input type="textarea" placeholder=" " :autosize="{ minRows: 7, maxRows: 7}" v-model="cpxxyxs">
                  </el-input>
                </div>
              </el-tab-pane>
              <el-tab-pane label="项目咨询" name="fourth">
                <div class="ly">
                  <div class="formtitle">
                    <span class="formtitleT1">您的留言</span>
                    <span style="color:#D96F55">*</span>
                  </div>
                  <el-input type="textarea" placeholder=" " :autosize="{ minRows: 7, maxRows: 7}" v-model="xmzx">
                  </el-input>
                </div>
              </el-tab-pane>
              <el-tab-pane label="售后服务" name="five">
                <div class="ly">
                  <div class="formtitle">
                    <span class="formtitleT1">您的留言</span>
                    <span style="color:#D96F55">*</span>
                  </div>
                  <el-input type="textarea" placeholder=" " :autosize="{ minRows: 7, maxRows: 7}" v-model="shfw">
                  </el-input>
                </div>
              </el-tab-pane>
            </el-tabs> -->
                    <div class="btzc">
                        <div class="btzcD1">
                            <el-checkbox v-model="yszc">我同意<a href="" class="yszc">隐私政策条款</a></el-checkbox>
                            <span>点击“提交”,即表示您同意我们以您所填写的联系方式为您提供更多X-WORK的相关信息。</span>
                            <span>且您对可能会使用到的计算机辅助拨号及预先录制的电话或信息表示理解。</span>
                        </div>
                        <div class="submit">
                            <input type="button" value="提交">
                        </div>

                    </div>

                </div>

            </div>
            <div class="liabotC1D1"></div>
        </div>
    </div>
</div>
</template>

<script>
// 引入外部js文件
import adressData from '@/../static/js/adressData.js';
import {
    Loading
} from 'vant'
export default {
    data() {
        return {
            playFlag: false,
            cgzx: "",
            yycg: "",
            cpxxyxs: "",
            xmzx: "",
            shfw: "",
            yszc: false,
            textarea: "",
            activeName: 'first',
            phvalue: "",
            phoptions: [{
                value: '1',
                label: '电话'
            }, {
                value: '2',
                label: '邮箱'
            }, {
                value: '3',
                label: '电话和邮箱'
            }],
            cwoptions: [{
                value: '1',
                label: '先生'
            }, {
                value: '2',
                label: '女士'
            }],
            citys: [{
                    img: "@/../static/imgs/liaison/lx/a4.jpg",
                    title: "济南"
                },
                {
                    img: "@/../static/imgs/liaison/lx/a5.jpg",
                    title: "郑州"
                }, {
                    img: "@/../static/imgs/liaison/lx/a6.jpg",
                    title: "广州"
                }, {
                    img: "@/../static/imgs/liaison/lx/a7.jpg",
                    title: "重庆"
                },
                {
                    img: "@/../static/imgs/liaison/lx/a8.jpg",
                    title: "杭州"
                }, {
                    img: "@/../static/imgs/liaison/lx/a9.jpg",
                    title: "西安"
                }
            ],
            cwData: '',
            ztData: '',
            cgzx: '',
            ChineseDistricts: [],
            province: [],
            shi1: [],
            qu1: [],
            city: [],
            block: [],
            pname: '', //省的名字
            cname: '', //市的名字
            bname: '', //区的名字
            player: '',
            video: '',
            canvas: '',
            isAndroid: "",
            loading: false
        }
    },

    components: {},

    computed: {},

    mounted() {
        this.$nextTick(() => {
            //调整音量为0
            this.$refs.video.volume = 0;
            this.$store.state.active = 6;
            this.ChineseDistricts = adressData;
            this.getCityData();
            this.canvas = this.$refs.can;
            this.video = this.$refs.video;
            this.initVideo();
            // 自动播放
            document.addEventListener('WeixinJSBridgeReady', () => {
                this.player.play()
            })
        });

    },
    destroyed() {
        if (this.isAndroid) {
            this.player.destroy();
        }
    },
    methods: {
        initVideo() {
            let isAndroid = window.navigator.userAgent.match(/android/gi);
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
            this.playFlag = !this.playFlag
            if (this.playFlag) {
                this.$refs.video.volume = 1;
                this.player.volume = 1;
            } else {
                this.$refs.video.volume = 0;
                this.player.volume = 0;
            }
        },
        changeImg1(e) {
            switch (e.target.id) {
                case "I1":
                    e.target.src = "@/../static/imgs/footer/WeChatO.png"
                    break;
                case "I2":
                    e.target.src = "@/../static/imgs/footer/WeiboO.png"
                    break;
                case "I3":
                    e.target.src = "@/../static/imgs/footer/LinkedInO.png"
                    break;
                case "I4":
                    e.target.src = "@/../static/imgs/footer/TikTokO.png"
                    break;
                case "I5":
                    e.target.src = "@/../static/imgs/footer/TouTiaoO.png"
                    break;

                default:
                    break;
            }
        },
        changeImg2(e) {
            switch (e.target.id) {
                case "I1":
                    e.target.src = "@/../static/imgs/footer/WeChat.png"
                    break;
                case "I2":
                    e.target.src = "@/../static/imgs/footer/Weibo.png"
                    break;
                case "I3":
                    e.target.src = "@/../static/imgs/footer/LinkedIn.png"
                    break;
                case "I4":
                    e.target.src = "@/../static/imgs/footer/TikTok.png"
                    break;
                case "I5":
                    e.target.src = "@/../static/imgs/footer/TouTiao.png"
                    break;

                default:
                    break;
            }

        },
        tourl(e) {
            switch (e.target.id) {
                case "I1":
                    this.$router.push({
                        path: "/"
                    })
                    break;
                case "I2":
                    this.$router.push({
                        path: "/"
                    })
                    break;
                case "I3":
                    this.$router.push({
                        path: "/"
                    })
                    break;
                case "I4":
                    this.$router.push({
                        path: "/"
                    })
                    break;
                case "I5":
                    this.$router.push({
                        path: "/"
                    })
                    break;

                default:
                    break;
            }
        },
        // 选择称谓
        choseCw(e) {
            console.log(e);
            this.cwData = e;
        },
        // 选择偏好
        chosePh(e) {
            console.log(e);
            this.phvalue = e;
        },
        // 加载china地点数据，三级
        getCityData() {
            let that = this;
            that.ChineseDistricts.forEach(function (item, index) {
                //省级数据
                that.province.push({
                    id: item.code,
                    value: item.name,
                    children: item.cityList
                })
            })
        },
        // 选省
        choseProvince(e) {
            let that = this;
            that.city = [];
            that.block = [];
            that.cname = '';
            that.bname = '';
            for (var index2 in that.province) {
                if (e === that.province[index2].id) {
                    that.shi1 = that.province[index2].children
                    that.pname = that.province[index2].value
                    that.shi1.forEach(function (citem, cindex) {
                        that.city.push({
                            id: citem.code,
                            value: citem.name,
                            children: citem.areaList
                        })
                    })
                }
            }
            console.log(that.pname)
        },
        // 选市
        choseCity(e) {
            let that = this;
            that.block = [];
            that.cname = '';
            that.bname = '';
            for (var index3 in that.city) {
                if (e === that.city[index3].id) {
                    that.qu1 = that.city[index3].children
                    that.cname = that.city[index3].value
                    that.E = that.qu1[0].id
                    that.qu1.forEach(function (bitem, bindex) {
                        that.block.push({
                            id: bitem.code,
                            value: bitem.name,
                            children: []
                        })
                    })
                }
            }
            console.log(that.cname)
        },
        // 选区
        choseBlock(e) {
            this.bname = e;
            console.log(this.bname)
        },

    }
}
</script>

<style lang="scss" scoped>
.videoClass {
    display: none;
    width: 100%;
    height: 100%;
}

.van_loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

@media screen and (min-width: 1200px) {
    .liacontent {
        background: #FAFAFA;
        padding-bottom: 100px;
        width: 100%;

        .liaheader {
            position: relative;

            .liatitle {
                position: absolute;
                left: 8%;
                top: 15%;
                display: flex;
                flex-direction: column;

                .DAD {
                    display: flex;
                    flex-direction: row;

                    .D1 {
                        font-size: 35px;
                        color: #fff;
                        letter-spacing: 15px;
                        font-weight: bold;
                    }

                    .D2 {
                        color: #fff;
                        font-weight: bold;
                        font-size: 21px;
                    }
                }

                .D3 {
                    color: #fff;
                    font-size: 18px;
                    margin-top: 20px
                }

                .D4 {
                    width: 340px;
                    color: #fff;
                    font-size: 13px;
                }
            }

            .switch_btn {
                position: absolute;
                right: 6%;
                bottom: 15%;
                width: 50px;
                height: 50px;
            }
        }

        .liaby {
            padding: 30px;

            .liamid {
                width: 100%;
                display: flex;
                flex-direction: column;

                .liamidtext1 {
                    display: flex;
                    flex-direction: row;
                }

                .liamidtext2 {
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;
                }

                .liamidtext3 {
                    display: flex;
                    flex-direction: row;
                    margin-top: 10px;
                }
            }

            .liaismidDiv {
                display: flex;
                flex-direction: row;
                margin-top: 30px;

                .liaismidDivitem {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    margin-right: 20px;
                    margin-top: 10px;

                    &:last-child {
                        margin-right: 0;
                    }

                    .liaismidDitemfo {
                        display: flex;
                        flex-direction: row;

                        .lmidDitemfoT1 {
                            font-size: 18px;
                            font-weight: bold;
                            margin: 10px 0;
                        }

                        .lmidDitemfoT2 {
                            font-size: 12px;
                            font-weight: bold;
                        }

                        .lmidDitemfo {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                        }
                    }
                }
            }

            .liamidtext22 {
                display: flex;
                flex-direction: column;
                margin-top: 30px;
                margin-bottom: -25px;
            }

            .M1 {
                color: #000;
                font-size: 40px;
                font-weight: bold;
                letter-spacing: 10px;
            }

            .M2 {
                font-size: 22px;
                font-weight: bold;
            }

            .M3 {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }

    .kf1 {
        font-size: 20px;
        font-weight: bold;
        color: #DE7E65;
        margin: 50px 0 10px 0;
    }

    .kfdhu {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 50px;
    }

    .top {
        margin-top: 10px !important
    }

    .minimgitemT1 {
        font-size: 18px;
        font-weight: bold;
    }

    .minimgitemT2 {
        font-size: 12px;
        font-weight: bold;
    }

    .minclass {
        width: 100%;
        height: 100%;
    }

    .minimgitem {
        flex: 1;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
    }

    .minimgitem:last-child {
        margin-right: 0;
    }

    .minimg {
        display: flex;
        flex-direction: row;
        margin-top: 50px;

    }

    .M4Div {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    .M4 {
        font-size: 18px;
        font-weight: bold;
    }

    .totop {
        margin-top: 100px
    }

    .DB {
        font-size: 15px !important;
    }

    .fs {
        color: #DE7E65;
        margin-left: 40px;
    }

    .cwsy {
        flex: 1;

    }

    .submit input[type=button] {
        width: 230px;
        height: 40px;
        background: linear-gradient(to right, #1E1F23, #17181C, #121315);
        color: #fff;
        cursor: pointer;
        border: none;
        outline: none
    }

    .submit {
        flex: 1
    }

    .btzcD1 {
        display: flex;
        flex-direction: column;
        flex: 2.1
    }

    .btzcD1 span {
        width: 100%;
        ;
        font-size: 10px;
        -webkit-transform-origin-x: 0;
        -webkit-transform: scale(0.80);
        color: #A39894;
    }

    .btzc {
        display: flex;
        flex-direction: row;
        margin-top: 20px
    }

    .yszc {
        color: #DE7E65;
    }

    .lysy {
        width: 100%;

    }

    .ly {
        display: flex;
        flex-direction: column
    }

    .ssqitem {
        flex: 1;
        display: flex;
        flex-direction: row;

    }

    .ssq {
        display: flex;
        flex-direction: row
    }

    .ym span,
    .yx span {
        width: 100px;
        color: #000;
        padding-left: 20px;
    }

    .ph {
        display: flex;
        flex-direction: column;
        flex: 1;

    }

    .yxmipt {
        font-size: 15px;
        color: #000;
        padding-left: 5px;
        border: none;
        outline: none;
        background-color: #E9E3DB;
        width: 100%;
        border-radius: 20px;
        height: 30px;
    }

    .yxm {
        display: flex;
        flex-direction: row;
        font-size: 16px;
        color: #000;
    }

    .ym {
        background: #E9E3DB;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
        flex: 1;
        border-radius: 20px;
        height: 30px;
        margin-bottom: 10px;
    }

    .yx {
        height: 30px;
        background: #E9E3DB;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
        flex: 1;
        border-radius: 20px;
    }

    .yname {
        display: flex;
        flex-direction: row
    }

    .formtitleT1 {
        font-size: 14px;
        font-weight: bold;
    }

    .formtitle {
        display: flex;
        margin-top: 20px
    }

    .lbt3 {
        color: #000;
        font-size: 15px;
        font-weight: bold
    }

    .BG1 {
        flex: 1
    }

    .BG2 {
        flex: 1
    }

    .BG3 {
        display: flex;
        flex-direction: column
    }

    .BG {
        display: flex;
        flex-direction: row;

    }

    .lbt1 {
        color: #000;
        font-size: 37px;
        letter-spacing: 16px;
        font-weight: bold
    }

    .lbt2 {
        color: #000;
        font-size: 19px;
        font-weight: bold
    }

    .liabotbytitle {
        display: flex;
        flex-direction: row;

    }

    .liabotby {
        display: flex;
        flex-direction: column;
        margin-top: 100px
    }

    .liabotC1D1 {
        width: 200px;
    }

    .liabotC1D2 {
        flex: 2.2;
        display: flex;
        flex-direction: column
    }

    .liabotC1 {
        flex: 1;
        display: flex;
        flex-direction: row
    }

    .liabotC2 {
        flex: 0.8;
        padding-left: 20px
    }

    .liabot {
        width: 100%;
        display: flex;
        flex-direction: row;
        padding-bottom: 80px
    }

    .liabyrow1T4b1D3 a {
        color: #DE7E65;
        font-size: 14px;
        margin-left: 38px
    }

    .liabyrow1T4b1D2 {
        color: #000;
        font-size: 14px;
        font-weight: bold
    }

    .liabyrow1T4b1D1 {
        color: #000;
        font-size: 17px;
        font-weight: bold
    }

    .liabyrow1T2M1D1 {
        color: #000;
        font-size: 24px;
        letter-spacing: 10px;
        font-weight: bold
    }

    .liabyrow1T2M1D2 {
        color: #000;
        font-size: 18px;
        letter-spacing: 0px;
        font-weight: bold;

    }

    .liabyrow1T2M1D3 {
        color: #000;
        font-size: 15px;
        letter-spacing: 0px;
        margin: 5px 0;
        font-weight: bold;

    }

    .liabyrow1T4b1 {
        flex: 1;
        display: flex;
        flex-direction: column
    }

    .liabyrow1T4b2 {
        flex: 1;
        display: flex;
        flex-direction: column
    }

    .liabyrow1T4 {
        display: flex;
        flex-direction: row;
        padding-left: 10px;
        padding-top: 20px
    }

    .liabyrow1T3 {

        border-top: 1px solid #E6C9C2;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        margin-left: 10px
    }

    .liabyrow1T2M2 {
        flex: 0.5;

    }

    .liabyrow1T2M1 {
        flex: 1.4;
        display: flex;
        flex-direction: column;

    }

    .liabyrow1T1 {
        flex: 1;
    }

    .liabyrow1T2 {
        display: flex;
        flex-direction: column;
        flex: 2.2;

    }

    .liabyrow {
        display: flex;
        flex-direction: row;
        margin-bottom: 30px
    }

    .liabyrow1 {
        flex: 1;
        display: flex;
        flex-direction: row;
    }

    .liabyrow2 {
        flex: 0.8;
        border-top: 1px solid #E6C9C2;
        padding-top: 10px
    }

    .liamidimg {
        width: 35px;
        height: 30px;
        margin: 5px;
        cursor: pointer;
    }

    .Mk1 {
        color: #000;
        font-size: 40px;
        font-weight: bold;
        letter-spacing: 5px;
    }

    #I1 {
        width: 35px;
        height: 28px;
    }

    #I2 {
        width: 35px;
        height: 28px;
    }

    #I3 {
        width: 30px;
        height: 30px;
    }

    #I4 {
        width: 30px;
        height: 32px;
    }

    #I5 {
        width: 42px;
        height: 30px;
    }

    .phone_services_box {
        display: none;
    }

    .phone_space_box {
        display: none;
    }
}

/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
    .liacontent {
        background: #FAFAFA;
        padding-bottom: 100px;
        width: 100%;

        .liaheader {
            position: relative;
            min-height: 34vh;
            background-color: #2f312c;

            .liatitle {
                position: absolute;
                left: 8%;
                top: 16%;
                display: flex;
                flex-direction: column;

                .DAD {
                    display: flex;
                    flex-direction: row;

                    .D1 {
                        font-size: 26px;
                        color: #fff;
                        letter-spacing: 15px;
                        font-weight: bold;
                    }

                    .D2 {
                        color: #fff;
                        font-weight: bold;
                        font-size: 18px;
                    }
                }

                .D3 {
                    color: #fff;
                    font-size: 16px;
                    margin-top: 20px
                }

                .D4 {
                    width: 340px;
                    color: #fff;
                    font-size: 13px;
                }
            }

            .switch_btn {
                position: absolute;
                right: 4%;
                bottom: 10%;
                width: 35px;
                height: 35px;
            }
        }

        .liaby {
            padding: 20px;

            .liamid {
                width: 100%;
                display: flex;
                flex-direction: column;

                .liamidtext1 {
                    display: flex;
                    flex-direction: row;
                }

                .liamidtext2 {
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;
                }

                .liamidtext3 {
                    display: flex;
                    flex-direction: row;
                    margin-top: 15px;
                }
            }

            .liaismidDiv {
                display: flex;
                flex-direction: row;
                margin-top: 20px;

                .liaismidDivitem {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    margin-right: 20px;
                    margin-top: 10px;

                    &:last-child {
                        margin-right: 0;
                    }

                    .liaismidDitemfo {
                        display: flex;
                        flex-direction: row;

                        .lmidDitemfoT1 {
                            font-size: 14px;
                            font-weight: bold;
                            margin: 10px 0;
                        }

                        .lmidDitemfoT2 {
                            font-size: 12px;
                            font-weight: bold;
                        }

                        .lmidDitemfo {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                        }
                    }
                }
            }

            .liamidtext22 {
                display: flex;
                flex-direction: column;
                margin-top: 30px;
                margin-bottom: -25px;
            }

            .M1 {
                color: #000;
                font-size: 30px;
                font-weight: bold;
                letter-spacing: 10px;
            }

            .M2 {
                font-size: 18px;
                font-weight: bold;
            }

            .M3 {
                font-size: 18px;
                font-weight: bold;
            }
        }
    }

    .kf1 {
        font-size: 20px;
        font-weight: bold;
        color: #DE7E65;
        margin: 50px 0 10px 0;
    }

    .kfdhu {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 50px;
    }

    .top {
        margin-top: 10px !important
    }

    .minimgitemT1 {
        font-size: 18px;
        font-weight: bold;
    }

    .minimgitemT2 {
        font-size: 12px;
        font-weight: bold;
    }

    .minclass {
        width: 100%;
        height: 100%;
    }

    .minimgitem {
        flex: 1;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
    }

    .minimgitem:last-child {
        margin-right: 0;
    }

    .minimg {
        display: flex;
        flex-direction: row;
        margin-top: 50px;

    }

    .M4Div {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    .M4 {
        font-size: 18px;
        font-weight: bold;
    }

    .totop {
        margin-top: 100px
    }

    .mg {
        margin-top: 50px !important;
    }

    .DB {
        font-size: 15px !important;
    }

    .fs {
        color: #DE7E65;
    }

    .cwsy {
        flex: 1;

    }

    .submit input[type=button] {
        width: 230px;
        height: 40px;
        background: linear-gradient(to right, #1E1F23, #17181C, #121315);
        color: #fff;
        cursor: pointer;
        border: none;
        outline: none
    }

    .submit {
        flex: 1
    }

    .btzcD1 {
        display: flex;
        flex-direction: column;
        flex: 2.1
    }

    .btzcD1 span {
        width: 100%;
        ;
        font-size: 10px;
        -webkit-transform-origin-x: 0;
        -webkit-transform: scale(0.80);
        color: #A39894;
    }

    .btzc {
        display: flex;
        flex-direction: row;
        margin-top: 20px
    }

    .yszc {
        color: #DE7E65;
    }

    .lysy {
        width: 100%;

    }

    .ly {
        display: flex;
        flex-direction: column
    }

    .ssqitem {
        flex: 1;
        display: flex;
        flex-direction: row;

    }

    .ssq {
        display: flex;
        flex-direction: row
    }

    .ym span,
    .yx span {
        width: 100px;
        color: #000;
        padding-left: 20px;
    }

    .ph {
        display: flex;
        flex-direction: column;
        flex: 1;

    }

    .yxmipt {
        font-size: 15px;
        color: #000;
        padding-left: 5px;
        border: none;
        outline: none;
        background-color: #E9E3DB;
        width: 100%;
        border-radius: 20px;
        height: 30px;
    }

    .yxm {
        display: flex;
        flex-direction: row;
        font-size: 16px;
        color: #000;
    }

    .ym {
        background: #E9E3DB;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
        flex: 1;
        border-radius: 20px;
        height: 30px;
        margin-bottom: 10px;
    }

    .yx {
        height: 30px;
        background: #E9E3DB;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
        flex: 1;
        border-radius: 20px;
    }

    .yname {
        display: flex;
        flex-direction: row
    }

    .formtitleT1 {
        margin-bottom: 20px;
        font-size: 14px;
        font-weight: bold;
    }

    .formtitle {
        display: flex;
        margin-top: 20px
    }

    .lbt3 {
        color: #000;
        font-size: 15px;
        font-weight: bold
    }

    .BG1 {
        flex: 1
    }

    .BG2 {
        flex: 1
    }

    .BG3 {
        display: flex;
        flex-direction: column
    }

    .BG {
        display: flex;
        flex-direction: row;

    }

    .lbt1 {
        color: #000;
        font-size: 30px;
        letter-spacing: 16px;
        font-weight: bold
    }

    .lbt2 {
        color: #000;
        font-size: 18px;
        font-weight: bold
    }

    .liabotbytitle {
        display: flex;
        align-items: center;
    }

    .liabotby {
        display: flex;
        flex-direction: column;
    }

    .liabotC1D1 {
        width: 200px;
        display: none;
    }

    .liabotC1D2 {
        flex: 2.2;
        display: flex;
        flex-direction: column
    }

    .liabotC1 {
        flex: 1;
        display: flex;
        flex-direction: row
    }

    .liabotC2 {
        flex: 0.8;
        padding-left: 20px
    }

    .liabot {
        width: 100%;
        display: flex;
        flex-flow: column;
        padding: 0 20px 80px;
        box-sizing: border-box;
    }

    .liabyrow1T4b1D3 a {
        color: #DE7E65;
        font-size: 14px;
        margin-left: 38px
    }

    .liabyrow1T4b1D2 {
        color: #000;
        font-size: 14px;
        font-weight: bold
    }

    .liabyrow1T4b1D1 {
        color: #000;
        font-size: 17px;
        font-weight: bold
    }

    .liabyrow1T2M1D1 {
        color: #000;
        font-size: 24px;
        letter-spacing: 10px;
        font-weight: bold
    }

    .liabyrow1T2M1D2 {
        color: #000;
        font-size: 18px;
        letter-spacing: 0px;
        font-weight: bold;

    }

    .liabyrow1T2M1D3 {
        color: #000;
        font-size: 15px;
        letter-spacing: 0px;
        margin: 5px 0;
        font-weight: bold;

    }

    .liabyrow1T4b1 {
        flex: 1;
        display: flex;
        flex-direction: column
    }

    .liabyrow1T4b2 {
        flex: 1;
        display: flex;
        flex-direction: column
    }

    .liabyrow1T4 {
        display: flex;
        flex-direction: row;
        padding-left: 10px;
        padding-top: 20px
    }

    .liabyrow1T3 {

        border-top: 1px solid #E6C9C2;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        margin-left: 10px
    }

    .liabyrow1T2M2 {
        flex: 0.5;

    }

    .liabyrow1T2M1 {
        flex: 1.4;
        display: flex;
        flex-direction: column;

    }

    .liabyrow1T1 {
        flex: 1;
    }

    .liabyrow1T2 {
        display: flex;
        flex-direction: column;
        flex: 2.2;

    }

    .liabyrow {
        display: flex;
        flex-direction: row;
        margin-bottom: 30px
    }

    .liabyrow1 {
        flex: 1;
        display: flex;
        flex-direction: row;
    }

    .liabyrow2 {
        flex: 0.8;
        border-top: 1px solid #E6C9C2;
        padding-top: 10px
    }

    .liamidimg {
        width: 35px;
        height: 30px;
        margin: 5px;
        cursor: pointer;
    }

    .Mk1 {
        color: #000;
        font-size: 40px;
        font-weight: bold;
        letter-spacing: 5px;
    }

    #I1 {
        width: 28px;
        height: 23px;
    }

    #I2 {
        width: 28px;
        height: 23px;
    }

    #I3 {
        width: 25px;
        height: 25px;
    }

    #I4 {
        width: 24px;
        height: 26px;
    }

    #I5 {
        width: 35px;
        height: 25px;
    }

    .phone_services_box {
        display: none;
    }

    .phone_space_box {
        display: none;
    }
}

@media screen and (max-width: 640px) {
    .liacontent {
        background: #FAFAFA;
        padding-bottom: 100px;
        width: 100%;

        .liaheader {
            position: relative;
            min-height: 30vh;
            background-color: #2f312c;

            .liatitle {
                position: absolute;
                left: 3%;
                top: 25%;
                display: flex;
                flex-direction: column;

                .DAD {
                    display: flex;
                    flex-direction: row;

                    .D1 {
                        font-size: 12px;
                        color: #fff;
                        letter-spacing: 15px;
                        font-weight: bold;
                    }

                    .D2 {
                        color: #fff;
                        font-weight: bold;
                        font-size: 12px;
                    }
                }

                .D3 {
                    color: #fff;
                    font-size: 12px;
                    margin-top: 20px
                }

                .D4 {
                    width: 340px;
                    color: #fff;
                    font-size: 12px;
                }
            }

            .switch_btn {
                position: absolute;
                right: 4%;
                bottom: 10%;
                width: 25px;
                height: 25px;
            }
        }

        .liaby {
            padding: 10px;
            box-sizing: border-box;

            .liamid {
                width: 100%;
                display: flex;
                flex-direction: column;

                .liamidtext1 {
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                }

                .liamidtext2 {
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;
                }

                .liamidtext3 {
                    display: flex;
                    flex-direction: row;
                    margin-top: 15px;
                }
            }

            .liaismidDiv {
                display: flex;
                flex-flow: column;
                margin-top: 20px;

                .liaismidDivitem {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;

                    .liaismidDitemfo {
                        display: flex;
                        flex-direction: row;

                        .lmidDitemfoT1 {
                            font-size: 16px;
                            font-weight: bold;
                            margin: 10px 0;
                        }

                        .lmidDitemfoT2 {
                            font-size: 14px;
                            font-weight: bold;
                        }

                        .lmidDitemfo {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                        }
                    }
                }

                &.jxs_box {
                    flex-flow: row;
                    flex-wrap: wrap;
                }

                .item {
                    width: 49%;
                    flex: auto;

                    &:nth-of-type(2n) {
                        margin-left: 2%;
                    }
                }
            }

            .liamidtext22 {
                display: flex;
                flex-direction: column;
                margin-top: 30px;
                margin-bottom: -25px;
            }

            .M1 {
                color: #000;
                font-size: 14px;
                font-weight: bold;
                letter-spacing: 5px;
            }

            .M2 {
                margin-top: -8px;
                font-size: 12px;
                font-weight: bold;
            }

            .M3 {
                font-size: 18px;
                font-weight: bold;
            }

            .mt10 {
                .M2 {
                    margin-top: -5px;
                }
            }
        }
    }

    .kf1 {
        font-size: 20px;
        font-weight: bold;
        color: #DE7E65;
        margin: 50px 0 10px 0;
    }

    .kfdhu {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 50px;
    }

    .top {
        margin-top: 10px !important
    }

    .minimgitemT1 {
        font-size: 18px;
        font-weight: bold;
    }

    .minimgitemT2 {
        font-size: 12px;
        font-weight: bold;
    }

    .minclass {
        width: 100%;
        height: 100%;
    }

    .minimgitem {
        flex: 1;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
    }

    .minimgitem:last-child {
        margin-right: 0;
    }

    .minimg {
        display: flex;
        flex-flow: column;
        margin-top: 50px;

    }

    .services_box {
        display: none;
    }

    .phone_services_box {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;

        .services_item {
            margin-top: 20px;
            width: 100%;

            img {
                width: 100%;
                height: 240px;
            }

            .text_box {
                display: flex;
                flex-flow: column;

                .minimgitemT1 {
                    font-size: 16px;
                }

                .minimgitemT2 {
                    margin-top: 5px;
                    font-size: 13px;
                    font-weight: 600;
                }
            }
        }
    }

    .space_box {
        display: none;
    }

    .phone_space_box {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;

        .space_item {
            margin-top: 20px;
            width: 100%;

            img {
                width: 100%;
                height: 240px;
            }

            .text_box {
                display: flex;
                flex-flow: column;

                .minimgitemT1 {
                    font-size: 16px;
                }

                .minimgitemT2 {
                    margin-top: 5px;
                    font-size: 13px;
                    font-weight: 600;
                }
            }
        }

        .title {
            width: 100%;
            display: flex;
            align-items: center;
            flex-flow: column;
        }

        .liamidtext1 {
            display: flex;
        }

        .zl_box {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;

            .zl_item {
                width: 100%;
                display: flex;
                flex-flow: column;
                margin-top: 10px;

                img {
                    width: 100%;
                    height: 240px;
                }

                .minimgitemT1 {
                    margin-top: 5px;
                }
            }
        }
    }

    .M4Div {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    .M4 {
        font-size: 14px;
        font-weight: bold;
    }

    .totop {
        margin-top: 100px
    }

    .mt10 {
        margin-top: 10px !important;
    }

    .mg {
        margin-top: 50px !important;
    }

    .DB {
        font-size: 15px !important;
    }

    .fs {
        color: #DE7E65;
    }

    .cwsy {
        flex: 1;

    }

    .submit input[type=button] {
        width: 230px;
        height: 40px;
        background: linear-gradient(to right, #1E1F23, #17181C, #121315);
        color: #fff;
        cursor: pointer;
        border: none;
        outline: none
    }

    .submit {
        margin-top: 20px;

        input {
            width: 350px !important;
        }
    }

    .btzcD1 {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        box-sizing: border-box;
    }

    .btzcD1 span {
        width: 100%;
        display: inline-block;
        font-size: 16px;
        -webkit-transform-origin-x: 0;
        -webkit-transform: scale(0.80);
        color: #A39894;
    }

    .btzc {
        width: 100%;
        display: flex;
        align-items: center;
        flex-flow: column;
        margin-top: 20px;
    }

    .yszc {
        color: #DE7E65;
    }

    .lysy {
        width: 100%;

    }

    .ly {
        display: flex;
        flex-direction: column
    }

    .ssqitem {
        flex: 1;
        display: flex;
        flex-direction: row;

    }

    .ssq {
        display: flex;
        flex-flow: column;

        .szd {
            margin-top: 15px;
        }
    }

    .ym span,
    .yx span {
        color: #000;
        padding-left: 20px;
    }

    .ph {
        margin-top: 15px;
        display: flex;

        .ym {
            margin: 0;

            &:nth-of-type(1) {
                margin-right: 10px;
            }

            span {
                width: 40%;
                font-size: 14px;
                padding-left: 10px;
                box-sizing: border-box;
            }

            input {
                width: 60%;
            }
        }
    }

    .xxdz {
        span {
            width: 40%;
            font-size: 15px;
        }

        input {
            width: 60%;
        }
    }

    .yxmipt {
        font-size: 15px;
        color: #000;
        padding-left: 5px;
        border: none;
        outline: none;
        background-color: #E9E3DB;
        width: 100%;
        border-radius: 20px;
        height: 30px;
    }

    .yxm {
        margin-top: 15px;
        display: flex;
        font-size: 16px;
        color: #000;
    }

    .ym {
        width: 45%;
        background: #E9E3DB;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
        flex: 1;
        border-radius: 20px;
        height: 30px;
        margin-bottom: 10px;
    }

    .yx {
        width: 45%;
        height: 30px;
        background: #E9E3DB;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex: 1;
        border-radius: 20px;
    }

    .yname {
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-flow: column;
    }

    .formtitleT1 {
        margin-bottom: 20px;
        font-size: 14px;
        font-weight: bold;
    }

    .formtitle {
        display: flex;
        margin-top: 20px
    }

    .lbt3 {
        color: #000;
        font-size: 14px;
        font-weight: bold
    }

    .BG1 {
        flex: 1
    }

    .BG2 {
        flex: 1
    }

    .BG3 {
        display: flex;
        flex-direction: column
    }

    .BG {
        display: flex;
        flex-direction: row;

    }

    .lbt1 {
        color: #000;
        font-size: 14px;
        letter-spacing: 5px;
        font-weight: bold
    }

    .lbt2 {
        color: #000;
        font-size: 12px;
        font-weight: bold
    }

    .liabotbytitle {
        display: flex;
    }

    .phone_title {
        .lbt2 {
            margin-top: -5px;
        }
    }

    .liabotby {
        display: flex;
        flex-direction: column;
    }

    .liabotC1D1 {
        width: 200px;
        display: none;
    }

    .liabotC1D2 {
        width: 100%;
        display: flex;
        flex-direction: column
    }

    .liabotC1 {
        display: flex;
        flex-direction: row
    }

    .liabotC2 {
        width: 100%;

        .BG2 {
            display: none;
        }
    }

    .liabot {
        width: 100%;
        display: flex;
        flex-flow: column;
        padding: 0 10px 80px;
        box-sizing: border-box;
    }

    .liabyrow1T4b1D3 a {
        color: #DE7E65;
        font-size: 14px;
        margin-left: 38px
    }

    .liabyrow1T4b1D2 {
        color: #000;
        font-size: 14px;
        font-weight: bold
    }

    .liabyrow1T4b1D1 {
        color: #000;
        font-size: 17px;
        font-weight: bold
    }

    .liabyrow1T2M1D1 {
        color: #000;
        font-size: 24px;
        letter-spacing: 10px;
        font-weight: bold
    }

    .liabyrow1T2M1D2 {
        color: #000;
        font-size: 18px;
        letter-spacing: 0px;
        font-weight: bold;

    }

    .liabyrow1T2M1D3 {
        color: #000;
        font-size: 15px;
        letter-spacing: 0px;
        margin: 5px 0;
        font-weight: bold;

    }

    .liabyrow1T4b1 {
        flex: 1;
        display: flex;
        flex-direction: column
    }

    .liabyrow1T4b2 {
        flex: 1;
        display: flex;
        flex-direction: column
    }

    .liabyrow1T4 {
        display: flex;
        flex-direction: row;
        padding-left: 10px;
        padding-top: 20px
    }

    .liabyrow1T3 {

        border-top: 1px solid #E6C9C2;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        margin-left: 10px
    }

    .liabyrow1T2M2 {
        flex: 0.5;

    }

    .liabyrow1T2M1 {
        flex: 1.4;
        display: flex;
        flex-direction: column;

    }

    .liabyrow1T1 {
        flex: 1;
    }

    .liabyrow1T2 {
        display: flex;
        flex-direction: column;
        flex: 2.2;

    }

    .liabyrow {
        display: flex;
        flex-direction: row;
        margin-bottom: 30px
    }

    .liabyrow1 {
        flex: 1;
        display: flex;
        flex-direction: row;
    }

    .liabyrow2 {
        flex: 0.8;
        border-top: 1px solid #E6C9C2;
        padding-top: 10px
    }

    .liamidimg {
        width: 35px;
        height: 30px;
        margin: 5px;
        cursor: pointer;
    }

    .Mk1 {
        color: #000;
        font-size: 28px;
        font-weight: bold;
        letter-spacing: 5px;
    }

    #I1 {
        width: 20px;
        height: 15px;
    }

    #I2 {
        width: 20px;
        height: 15px;
    }

    #I3 {
        width: 17px;
        height: 15px;
    }

    #I4 {
        width: 15px;
        height: 17px;
    }

    #I5 {
        width: 22px;
        height: 16px;
    }
}
</style>
