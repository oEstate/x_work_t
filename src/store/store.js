import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const state={
    //这里放全局参数 
     HeaderBg:{  "background": "rgba(0, 0, 0, 0.6)" },
     HeaderBgout:{ "background": "unset"  },
     active:-1
     }

   
export default new Vuex.Store({
    state
    })
   