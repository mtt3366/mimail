//Vue按需引入Ant Design的一些问题（采坑）
//https://cloud.tencent.com/developer/article/1631101

//完整组件列表 以及引用方法
//https://github.com/vueComponent/ant-design-vue/blob/master/components/index.js
import { Button, Select, message } from "ant-design-vue";

const components = [Button, Select];
const ant = {
  install: function(Vue) {
    components.map(component => {
      Vue.use(component);
    });

    Vue.prototype.$message = message;
  }
};
export default ant;
