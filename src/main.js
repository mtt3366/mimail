import Vue from "vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyLoad from "vue-lazyload";
import VueCookie from "vue-cookie";
import ant from "./config/AntDesign";
import App from "./App.vue";

const mock = true; //mock开关
if (mock) {
  require("./mock/api.js");
}
axios.defaults.baseURL = "/api"; //在所有请求前面添加'/api'
axios.defaults.timeout = 8000; //设置请求超时时间为8秒,8秒还没有请求成功,就返回失败
// axios.defaults.baseURL = env.baseURL;
axios.interceptors.response.use(function(response) {
  const res = response.data; //这个response是axios封装后给我们的,并不是接口返回的值,response.data才是接口取得的值
  const path = location.hash;
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    //在main.js里面是没有挂载路由实例的,不能用this.$router,所以main.js不能使用router跳转
    if (path !== "#/index") {
      //不是首页才进行跳转
      window.location.href = "/#/login";
    }
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
});

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg"
});
Vue.use(ant);
Vue.config.productionTip = false; //生产环境下默认关闭vue的底层打印出来的信息

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
