<!-- 底部 -->
<template>
  <div class="footerDiv">
    <span class="T1">&copy;北京沃科系统科技有限公司2020版权所有，并保留一切权利。京ICP备15055058号</span>
    <div class="media_phone">
      <p>&copy;北京沃科系统科技有限公司2020版权所有，并保留一切权利。</p>
      <p>京ICP备15055058号</p>
    </div>
    <div class="footermenu">
      <div class="footermenu">
        <!-- <div><a href="" target="_blank"><img src="@/../static/imgs/footer/WeChat.png" class="footermenuitem"   id="I1" @mouseenter ="changeImg1($event)" @mouseleave ="changeImg2($event)" @click="tourl($event)" alt="" ></a></div> -->
        <div>
          <a href="@/../static/imgs/home/xwork.gif" target="_blank">
            <img
              src="@/../static/imgs/footer/WeChat.png"
              class="footermenuitem"
              id="I1"
              @mouseenter="changeImg1($event)"
              @mouseleave="changeImg2($event)"
              alt
            />
          </a>
        </div>
        <div>
          <a
            href="https://weibo.com/p/1006067386802651/home?from=page_100606&mod=TAB"
            target="_blank"
          >
            <img
              src="@/../static/imgs/footer/Weibo.png"
              class="footermenuitem"
              id="I2"
              @mouseenter="changeImg1($event)"
              @mouseleave="changeImg2($event)"
              alt
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/company/%E5%8C%97%E4%BA%AC%E6%B2%83%E7%A7%91%E4%BC%98%E5%93%81%E5%AE%B6%E5%85%B7%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/?viewAsMember=true"
            target="_blank"
          >
            <img
              src="@/../static/imgs/footer/LinkedIn.png"
              class="footermenuitem"
              id="I3"
              @mouseenter="changeImg1($event)"
              @mouseleave="changeImg2($event)"
              alt
            />
          </a>
        </div>
        <div>
          <a href="https://v.douyin.com/vNCv62/" target="_blank">
            <img
              src="@/../static/imgs/footer/TikTok.png"
              class="footermenuitem"
              id="I4"
              @mouseenter="changeImg1($event)"
              @mouseleave="changeImg2($event)"
              alt
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.toutiao.com/c/user/1173883637217428/#mid=1640563681520644"
            target="_blank"
          >
            <img
              src="@/../static/imgs/footer/TouTiao.png"
              class="footermenuitem"
              id="I5"
              @mouseenter="changeImg1($event)"
              @mouseleave="changeImg2($event)"
              alt
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
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
    tourl(e) {
      switch (e.target.id) {
        case "I1":
          this.$router.push({ path: "/" });
          break;
        case "I2":
          this.$router.push({ path: "/" });
          break;
        case "I3":
          this.$router.push({ path: "/" });
          break;
        case "I4":
          this.$router.push({ path: "/" });
          break;
        case "I5":
          this.$router.push({ path: "/" });
          break;

        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.footermenuitem {
  margin: 0 5px;
}
.footermenu {
  display: flex;
  flex-direction: row;
  padding-right: 10px;
  cursor: pointer;
}
.T1 {
  color: #cecbc6;
  font-size: 14px;
  margin-left: 40px;
}
.footerDiv {
  display: flex;
  flex-direction: row;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  margin-top: -90px;
  background: transparent;
  z-index: 99999;
}
#I1 {
  width: 25px;
  height: 20px;
}
#I2 {
  width: 25px;
  height: 20px;
}
#I3 {
  width: 20px;
  height: 20px;
}
#I4 {
  width: 20px;
  height: 22px;
}
#I5 {
  width: 32px;
  height: 22px;
}
.media_phone {
  display: none;
}
/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
  .footerDiv {
    flex-direction: column-reverse;
    justify-content: center;
    .T1 {
      display: none;
    }
    .media_phone {
      font-size: 13px;
      color: #cecbc6;
      text-align: center;
      margin-top: 5px;
      display: block;
    }
    .footermenu {
      padding-right: 0;
      cursor: none;
    }
  }
}

@media screen and (max-width: 640px) {
  .footerDiv {
    flex-direction: column-reverse;
    justify-content: center;

    .T1 {
      display: none;
    }
    .media_phone {
      font-size: 12px;
      color: #cecbc6;
      text-align: center;
      margin-top: 5px;
      display: block;
    }
    .footermenu {
      padding-right: 0;
      cursor: none;
    }
  }
}
</style>