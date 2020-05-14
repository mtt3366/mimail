const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        host: 'localhost',
        port: '8080',
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    // webpack相关配置
    configureWebpack: {
        devtool: 'source-map',//开启这个就可以了在source里面调试vue了
    },
    chainWebpack: (config)=>{
        config
            .resolve.alias
            .set('@', resolve('src'))
            .set('pages', resolve('src/pages'))
            .set('components', resolve('src/components'))
    }
}
