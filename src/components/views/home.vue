<!-- home-->
<template>
    <div class="homemain">
      <HEADER ref="child"></HEADER> 
      <router-view></router-view>
      <FOOTER></FOOTER> 
    </div>
</template>


<script>
 
 import HEADER from '@/components/common/header'
 import FOOTER from '@/components/common/footer'
  export default {
    data() {
      return {
        heclr:""
       }
      },
      
      components: {
      HEADER,
      FOOTER
    },
    mounted() {
      this.atPosition();
      // $('body').bind('touchmove',function(e){
      //   // e.preventdefault();
      //   console.log($('.liacontent').offset().top);
      // })
    },
      methods: {
       atPosition(){
        let that=this;
        let ua = window.navigator.userAgent;
        let ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
        if(isMobile){
          window.addEventListener('touchmove',function(e){
            var scrolH = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            console.log(scrolH);
            if (scrolH >  80) {
              $("#HDR").css(  that.$store.state.HeaderBg  );
              $("#HDR1").css(  that.$store.state.HeaderBg  );
              that.$refs.child.changeHeaderbg();
            } else {
              $("#HDR").css(that.$store.state.HeaderBgout);
              $("#HDR1").css(that.$store.state.HeaderBgout);
              that.$refs.child.fzbg()
            }
          })
        }else{
          console.log('else');
          $(window).scroll(function () {
            var scrolH = document.documentElement.scrollTop|| window.pageYOffset || document.body.scrollTop;
            if (scrolH >  80) {
              $("#HDR").css(  that.$store.state.HeaderBg  );
              $("#HDR1").css(  that.$store.state.HeaderBg  );
              that.$refs.child.changeHeaderbg();
            } else {
              $("#HDR").css(that.$store.state.HeaderBgout);
              $("#HDR1").css(that.$store.state.HeaderBgout);
              that.$refs.child.fzbg()
            }
          })
        }
      },
    }
  }

</script>
<style>
 .homemain{
   display: flex;
   flex-direction: column;
   
 }
  
</style>
