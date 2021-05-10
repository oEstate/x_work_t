<!--联系-->

<template>
  <div class="liacontent">
    <div class="liaheader">
      <img src="@/../static/imgs/liaison/Showroom-1.jpg" alt="">
      <div class="liatitle">
        <div class="DAD"><span class="D1">CONTACTUS</span> <span class="D2">联系我们</span></div>
        <span class="D3">身为您的忠实伙伴，我们一直在这里为您提供支持。</span>
        <span class="D4">We are proud of being your whole-hearted partner And we are already right here for you</span>
      </div>
    </div>
    <div class="liaby">
      <div class="liamid">
        <div style="width:310px" > </div>
        <div class="liamidtext1">
          <span class="M1">CONNECT</span>
          <span class="M2">保持联系</span>
        </div>
        <div class="liamidtext2">
          <span class="M3">YoU ARE MoRE THAN WELCoME TO FOLLOW US ON</span>
        </div>
        <div class="liamidtext3">
          <img class="liamidimg" src="@/../static/imgs/footer/WeChat.png"   id="I1" @mouseenter ="changeImg1($event)" @mouseleave ="changeImg2($event)" @click="tourl($event)"  alt="">
          <img class="liamidimg" src="@/../static/imgs/footer/Weibo.png"    id="I2" @mouseenter ="changeImg1($event)" @mouseleave ="changeImg2($event)"  @click="tourl($event)" alt="">
          <img class="liamidimg" src="@/../static/imgs/footer/LinkedIn.png" id="I3" @mouseenter ="changeImg1($event)" @mouseleave ="changeImg2($event)" @click="tourl($event)"  alt="">
          <img class="liamidimg" src="@/../static/imgs/footer/TikTok.png"   id="I4" @mouseenter ="changeImg1($event)" @mouseleave ="changeImg2($event)" @click="tourl($event)"  alt="">
          <img class="liamidimg" src="@/../static/imgs/footer/TouTiao.png"  id="I5" @mouseenter ="changeImg1($event)" @mouseleave ="changeImg2($event)" @click="tourl($event)"  alt="">
        </div>
      </div>
      <div v-for="(item,index) in dataList" :key="index">
        <div class="liabyrow">
          <div class="liabyrow1">
            <div class="liabyrow1T1">
              <img :src="item.map" style="width:310px;height:100%" alt="">
            </div>
            <div class="liabyrow1T2">
              <div class="liabyrow1T3">
                <div class="liabyrow1T2M1">
                  <span class="liabyrow1T2M1D1">{{item.T1}}</span>
                  <span class="liabyrow1T2M1D2">{{item.T2}}</span>
                  <span class="liabyrow1T2M1D3">{{item.T3}}</span>
                </div>
                <div class="liabyrow1T2M2"></div>
              </div>
              <div class="liabyrow1T4">
                <div class="liabyrow1T4b1">
                  <span class="liabyrow1T4b1D1">{{item.X1}}</span>
                  <span class="liabyrow1T4b1D2">{{item.X2}}</span>
                  <span class="liabyrow1T4b1D3"><a href="https://map.baidu.com/search/%E5%8C%97%E4%BA%AC%E6%B2%83%E7%A7%91/@12967507.18499999,4833254.759999997,19z?querytype=inf&uid=b413be62e38a4536e0110317&wd=%E5%8C%97%E4%BA%AC%E6%B2%83%E7%A7%91&all=1&c=131&provider=pc-aladin&da_src=shareurl" target="_blank">在地图中显示</a></span>
                  <span class="liabyrow1T4b1D2"> {{item.X3}}</span>
                  <span class="liabyrow1T4b1D2"> {{item.X4}}</span>
                </div>
                <div class="liabyrow1T4b2">
                  <span class="liabyrow1T4b1D1">{{item.X5}}</span>
                  <span class="liabyrow1T4b1D2">{{item.X6}}</span>
                  <span class="liabyrow1T4b1D2">{{item.X7}}</span>
                  <span class="liabyrow1T4b1D2">{{item.X8}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="liabyrow2">
            <img :src="item.imgSrc" style="width:100%;height:100%" alt="">
          </div>
        </div>
      </div>
      <div class="liabotby">
        <div class="BG">
          <div class="BG1"></div>
          <div class="BG2">
            <div class="liabotbytitle">
              <span class="lbt1">LEAVEAMESSAGE</span>
              <span class="lbt2">留言给我们</span>
            </div>
            <div class="BG3">
              <span class="lbt3">48小时之内会有专人与您取得联系，</span>
              <span class="lbt3">我们期待为您服务。</span>
            </div>
          </div>
        </div>
        <div class="liabot">
          <div class="liabotC1">
            <div class="liabotC1D1"></div>
            <div class="liabotC1D2">
              <div class="formtitle">
                <span class="formtitleT1">您的称谓与姓名</span>
                <span style="color:#D96F55">*</span>
              </div>
              <div class="yname">
                <div class="cw">
                  <el-select v-model="cwvalue" placeholder="称谓选择" class="cwsy">
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
              <div class="formtitle">
                <span class="formtitleT1">您的联系偏好</span>
                <span style="color:#D96F55">*</span>
              </div>
              <div class="yname">
                <div class="cw">
                  <el-select v-model="phvalue" placeholder="偏好选择" class="cwsy">
                    <el-option v-for="item in phoptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="ph">
                  <div class="ym">
                    <span>联系电话</span>
                    <input type="text" class="yxmipt">
                  </div>
                  <div class="ym">
                    <span>电子邮箱</span>
                    <input type="text" class="yxmipt">
                  </div>
                </div>
              </div>
              <br>
              <div class="formtitle">
                <span class="formtitleT1">您的联系地址</span>
              </div>
              <div class="ssq">
                <div class="ssqitem">
                  <el-select v-model="cwvalue" placeholder="国家/地区" class="cwsy">
                    <el-option v-for="item in cwoptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="ssqitem">
                  <el-select v-model="cwvalue" placeholder="所在城市" class="cwsy">
                    <el-option v-for="item in cwoptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="ssqitem">
                  <el-select v-model="cwvalue" placeholder="所在地区" class="cwsy">
                    <el-option v-for="item in cwoptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="ym">
                  <span>邮编</span>
                  <input type="text" class="yxmipt">
                </div>
              </div>
              <div class="formtitle">
                <div class="ym" style="margin-left:0px">
                  <span style="margin-left:15px">详细地址</span>
                  <input type="text" class="yxmipt">
                </div>
              </div>


            </div>
          </div>
          <div class="liabotC2">
            <div class="formtitle">
              <span class="formtitleT1">您的咨询主题</span>
              <span style="color:#D96F55">*</span>
            </div>
            <div>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="常规咨询" name="first">
                  <div class="ly">
                    <div class="formtitle">
                      <span class="formtitleT1">您的留言</span>
                      <span style="color:#D96F55">*</span>
                     
                    </div>
                     <el-input type="textarea" class="lysy"  :autosize="{ minRows: 7, maxRows: 7}"  placeholder=" " 
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
                    <el-input type="textarea" placeholder=" " :autosize="{ minRows: 7, maxRows: 7}" 
                    v-model="yycg">
                    </el-input>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="产品信息与销售" name="third">
                  <div class="ly">
                    <div class="formtitle">
                      <span class="formtitleT1">您的留言</span>
                      <span style="color:#D96F55">*</span>
                    </div>
                    <el-input type="textarea" placeholder=" " :autosize="{ minRows: 7, maxRows: 7}" 
                    v-model="cpxxyxs">
                    </el-input>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="项目咨询" name="fourth">
                  <div class="ly">
                    <div class="formtitle">
                      <span class="formtitleT1">您的留言</span>
                      <span style="color:#D96F55">*</span>
                    </div>
                    <el-input type="textarea" placeholder=" "  :autosize="{ minRows: 7, maxRows: 7}"
                     v-model="xmzx">
                    </el-input>
                  </div>
                </el-tab-pane>
                 <el-tab-pane label="售后服务" name="five">
                  <div class="ly">
                    <div class="formtitle">
                      <span class="formtitleT1">您的留言</span>
                      <span style="color:#D96F55">*</span>
                    </div>
                    <el-input type="textarea" placeholder=" "  :autosize="{ minRows: 7, maxRows: 7}"
                     v-model="shfw">
                    </el-input>
                  </div>
                </el-tab-pane>
              </el-tabs>
              <div class="btzc">
                <div class="btzcD1">
                  <el-checkbox v-model="yszc">我同意<a href="" class="yszc">隐私政策条款</a></el-checkbox>
                 <span>点击“提交”，即表示您同意我们以您所填写的联系方式为您提供更多X-WORK的相关信息。</span>
                 <span>且您对可能会使用到的计算机辅助拨号及预先录制的电话或信息表示理解。</span>
                </div>
                <div class="submit">
                       <input type="button" value="提交" >
                </div>
                
              </div>
              
            </div>
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
        cgzx:"",
        yycg:"",
        cpxxyxs:"",
        xmzx:"",
        shfw:"",
        yszc:false,
        textarea: "",
        activeName: 'first',
        phvalue: "",
        phoptions: [{
          value: '1',
          label: '偏好选择'
        }, {
          value: '2',
          label: '偏好选择'
        }],
        cwvalue: "",
        cwoptions: [{
          value: '1',
          label: '称谓选择'
        }, {
          value: '2',
          label: '称谓选择'
        }],
        dataList: [{
            map: "@/../static/imgs/liaison/map.jpg",
            T1: "X-WoRK BEIJING HEADQUARTERS",
            T2: "沃科北京总部",
            T3: "占地逾1000平方米，以沃科原创设计及国际战略合作品牌产品，呈现出令人耳目一新的办公环境生命力。",
            X1: "联系信息",
            X2: "addr.北京市朝阳区亮马桥路5号，100028",
            X3: "tel. (010) 8420 0995",
            X4: "eml. x-work@x-work.com.cn",
            X5: "办公时间",
            X6: "星期一至星期五：8：30 a.m ~ 6：00 p.m",
            X7: "星期六：9：30 a.m ~ 5：00 p.m",
            X8: "星期日：休息",
            imgSrc: "@/../static/imgs/liaison/Showroom-2.jpg"

          },
          {
            map: "@/../static/imgs/liaison/map.png",
            T1: "X-WoRK SHANGHAI OFFICE",
            T2: "沃科上海办公室",
            T3: "",
            X1: "联系信息",
            X2: "addr.上海市闵行区紫秀路100号楼1楼A幢，201100",
            X3: "tel. +86 138 1654 2006",
            X4: "eml. x-work_shanghai@x-work.com.cn",
            X5: "办公时间",
            X6: "星期一至星期五：8：30 a.m ~ 6：00 p.m",
            X7: "星期六：9：30 a.m ~ 5：00 p.m",
            X8: "星期日：休息",
            imgSrc: "@/../static/imgs/liaison/Showroom-3.jpg"

          },
          {
            map: "",
            T1: "X-WoRK SHENZHEN OFFICE",
            T2: "沃科深圳办公室",
            T3: "",
            X1: "联系信息",
            X2: "addr.上海市闵行区紫秀路100号楼1楼A幢，201100",
            X3: "tel. +86 138 1654 2006",
            X4: "eml. x-work_shenzhen@x-work.com.cn",
            X5: "办公时间",
            X6: "星期一至星期五：8：30 a.m ~ 6：00 p.m",
            X7: "星期六：9：30 a.m ~ 5：00 p.m",
            X8: "星期日：休息",
            imgSrc: "@/../static/imgs/liaison/Showroom-4.jpg"

          },
          {
            map: "",
            T1: "X-WoRK SHENZHEN OFFICE",
            T2: "沃科郑州办公室",
            T3: "",
            X1: "联系信息",
            X2: "addr.上海市闵行区紫秀路100号楼1楼A幢，201100",
            X3: "tel. +86 138 1654 2006",
            X4: "eml. x-work_zhengzhou@x-work.com.cn",
            X5: "办公时间",
            X6: "星期一至星期五：8：30 a.m ~ 6：00 p.m",
            X7: "星期六：9：30 a.m ~ 5：00 p.m",
            X8: "星期日：休息",
            imgSrc: "@/../static/imgs/liaison/Showroom-6.jpg"

          },
          {
            map: "",
            T1: "X-WoRK SHENZHEN OFFICE",
            T2: "沃科济南办公室",
            T3: "",
            X1: "联系信息",
            X2: "addr.上海市闵行区紫秀路100号楼1楼A幢，201100",
            X3: "tel. +86 138 1654 2006",
            X4: "eml. x-work_jinan@x-work.com.cn",
            X5: "办公时间",
            X6: "星期一至星期五：8：30 a.m ~ 6：00 p.m",
            X7: "星期六：9：30 a.m ~ 5：00 p.m",
            X8: "星期日：休息",
            imgSrc: "@/../static/imgs/liaison/Showroom-5.jpg"

          }
        ]
      };
    },

    components: {},

    computed: {},

    mounted() {
   this.$store.state.active=6;
    },
   
    methods: {
      
      handleClick(tab, event) {
        console.log(tab, event);
      },
        changeImg1(e){
         switch (e.target.id) {
             case "I1":
                   e.target.src="@/../static/imgs/footer/WeChatO.png"
                 break;
                   case "I2":
                   e.target.src="@/../static/imgs/footer/WeiboO.png"
                 break;
                   case "I3":
                   e.target.src="@/../static/imgs/footer/LinkedInO.png"
                 break;
                   case "I4":
                   e.target.src="@/../static/imgs/footer/TikTokO.png"
                 break;
                   case "I5":
                   e.target.src="@/../static/imgs/footer/TouTiaoO.png"
                 break;
         
             default:
                 break;
         }
        
        
     },
      changeImg2(e){
          switch (e.target.id) {
             case "I1":
                   e.target.src="@/../static/imgs/footer/WeChat.png"
                 break;
                   case "I2":
                   e.target.src="@/../static/imgs/footer/Weibo.png"
                 break;
                   case "I3":
                   e.target.src="@/../static/imgs/footer/LinkedIn.png"
                 break;
                   case "I4":
                   e.target.src="@/../static/imgs/footer/TikTok.png"
                 break;
                   case "I5":
                   e.target.src="@/../static/imgs/footer/TouTiao.png"
                 break;
         
             default:
                 break;
         }
        
     },
     tourl(e){
         switch (e.target.id) {
             case "I1":
                    this.$router.push({path:"/"})
                 break;
                   case "I2":
                 this.$router.push({path:"/"})
                 break;
                   case "I3":
                    this.$router.push({path:"/"})
                 break;
                   case "I4":
                    this.$router.push({path:"/"})
                 break;
                   case "I5":
                     this.$router.push({path:"/"})
                 break;
         
             default:
                 break;
         }
     }
    }
  }

</script>
<style scoped>
.cwsy{
  width: 140px;
}
.submit input[type=button]{
   width: 250px;
    height: 40px;
    background: linear-gradient(to right,#1E1F23, #17181C, #121315);
    color: #fff;
    cursor: pointer;
    border: none;
    outline: none
}
.submit{
  flex: 1
}
.btzcD1{
    display:flex;
  flex-direction: column;
  flex: 2
}
.btzcD1 span{
  font-size: 12px;
  color: #A39894;
}
.btzc{
  display:flex;
  flex-direction: row;
  margin-top: 20px
}
.yszc{
  color: #DE7E65;
}
.lysy{
  width: 100%;
   
}
.ly{
  display: flex;
  flex-direction: column
}
  .ssqitem {
    flex: 1;
  }

  .ssq {
    display: flex;
    flex-direction: row
  }

  .ym span {
    width: 100px;
    color: #DE7E65;
  }

  .ph {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 80px;
  }

  .yxmipt {
    font-size: 20px;
    color: #DE7E65;
    padding-left: 5px;
    border: none;
    outline: none;
    background-color: #FAFAFA;
    width: 100%;
  }

  .yxm {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    color: #DE7E65;
  }

  .ym {
    border-bottom: 1px solid #DE7E65;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    flex: 1
  }

  .yx {
    border-bottom: 1px solid #DE7E65;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    flex: 1
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
    flex: 5.4
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
    font-size: 40px;
    letter-spacing: 21px;
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
    flex: 1;

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

  .liaby {
    padding: 30px;
  }

  .liamidimg {
    width: 35px;
    height: 30px;
    margin: 5px;
    cursor: pointer;
  }

  .M1 {
    color: #000;
    font-size: 42px;
    font-weight: bold;
    letter-spacing: 15px;
  }

  .M2 {
    font-size: 22px;
    font-weight: bold;
  }

  .M3 {
    font-size: 21px;
    font-weight: bold;
    width: 400px
  }

  .liamid {
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;


  }

  .liamidtext1 {
    flex: 1.7;
    display: flex;
    flex-direction: row;
     

  }
  .liamidtext2 {
    flex: 1;
    display: flex;
    flex-direction: row;
     

  }
  .liamidtext3 {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

  }

  .liatitle {
    position: absolute;
    left: 8%;
    top: 15%;
    display: flex;
    flex-direction: column;
  }

  .D1 {
    font-size: 35px;
    color: #fff;
    letter-spacing: 15px;
    font-weight: bold;

  }

  .DAD {
    display: flex;
    flex-direction: row
  }

  .D2 {
    color: #fff;
    font-weight: bold;
    font-size: 21px;
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

  .liacontent {
    background: #FAFAFA;
    padding-bottom:100px ;
    width:100%;
  }

  .liaheader {
    position: relative;
  }
  #I1{
    width: 35px ;
    height: 28px;
  }
   #I2{
    width: 35px ;
    height: 28px;
  }
   #I3{
    width: 30px ;
    height: 30px;
  }
  #I4{
    width: 30px ;
    height: 32px;
  }
  #I5{
    width: 42px ;
    height: 30px;
  }
</style>
