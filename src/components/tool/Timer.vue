<!-- 时间 -->
<template>
  <p class="time">{{gettime}}</p>
</template>

<script>
  export default {
    data() {
      return {
        gettime: '', //当前时间
        timer: ""
      };
    },

    components: {},

    computed: {},

    mounted() {
      this.getTime()
      this.currentTime();
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    methods: {
      currentTime() {
        this.timer = setInterval(this.getTime, 60000)
      },
      getTime: function () {
 
        var _this = this;
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth() + 1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
        _this.gettime = yy + '.' + mm + '.' + dd;
      },
    }
  }

</script>
<style scoped>


</style>
