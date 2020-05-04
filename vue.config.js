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
                target: 'https://www.imooc.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    chainWebpack: (config)=>{
        config
            .resolve.alias
            .set('@', resolve('src'))
            .set('pages', resolve('src/pages'))
            .set('components', resolve('src/components'))
    }
}
