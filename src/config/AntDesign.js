//Vue按需引入Ant Design的一些问题（采坑）
//https://cloud.tencent.com/developer/article/1631101
import {Button, message} from 'ant-design-vue';

const ant = {
    install: function (Vue) {
        Vue.use(message);
        Vue.component(Button.name, Button);
        Vue.prototype.$message = message;
    }
};
export default ant
