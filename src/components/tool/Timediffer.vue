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
        var date1= '2015/8/28 00:00:00';  //开始时间
        var date2 = new Date();    //结束时间
        var date3 = date2.getTime() - new Date(date1).getTime(); 
        var days=Math.floor(date3/(24*3600*1000))
        this.gettime=days
     },
    }
  }

</script>
<style scoped>


</style>
