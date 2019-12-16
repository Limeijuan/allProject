const path = require('path')
// webpack 配置默认遵循CommonJs 规范

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development'
}