<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "../static/css/main.css";
.slide_img{
  object-fit: cover;
}
/*浏览器窗口宽度大于等于640px 小于等于1199px*/
@media screen and (min-width: 640px) and (max-width: 1199px) {
  a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
  }
}

@media screen and (max-width: 640px) {
  a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
  }
}
* {
  margin: 0;
  padding: 0;
}
/* scrollbar style start */
::-webkit-scrollbar {
  background: transparent;
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: transparent;
  width: 6px;
  height: 6px;
  border: 2px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-track {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: transparent;
}
/* scrollbar style end */
</style>
