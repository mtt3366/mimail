const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    host: "localhost",
    port: "8080",
    proxy: {
      "/api": {
        //当遇到/api ,进行拦截,拦截的操作如下,这样,将主机头的源点,更改为目标地址(这样就是相同协议,相同的域名了)
        target: "http://mall-pre.springboot.cn", //协议与域名转发到这里
        changeOrigin: true,
        pathRewrite: {
          //将 后面请求中的 '/api' 字符串替换为空
          "/api": ""
        }
      }
      // '/mooctest':{
      //     target: 'https://www.imooc.com',
      //     pathRewrite: {
      //         '/mooctest': ''
      //     }
      // }
    }
  },
  // webpack相关配置
  configureWebpack: {
    devtool: "source-map" //开启这个就可以了在source里面调试vue了
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("pages", resolve("src/pages"))
      .set("components", resolve("src/components"))
      .set("assets", resolve("src/assets"));
  }
};
