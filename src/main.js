import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from "vue-axios"
import App from './App.vue'


axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000//设置请求超时时间为8秒,8秒还没有请求成功,就返回失败

axios.interceptors.response.use(function (response) {
  const res =  response.data//这个response是axios封装后给我们的,并不是接口返回的值,response.data才是接口取得的值
  if(res.status === 0) {
    return res.data
  }else if (res.status === 10){
    //在main.js里面是没有挂载路由实例的,不能用this.$router,所以main.js不能使用router跳转
    window.location.href = '/#/login'
  }
})

Vue.use(VueAxios,axios)
Vue.config.productionTip = false//生产环境下默认关闭vue的底层打印出来的信息


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
