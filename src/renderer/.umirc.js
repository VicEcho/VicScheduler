
// ref: https://umijs.org/config/
var nodeExternals = require('webpack-node-externals');

const path = __dirname;
export default {
  publicPath: './',
  history: 'hash',
  outputPath: '../../dist/renderer',
  exportStatic: {
    htmlSuffix: true,
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/test', component: '../pages/vic/Test' },
        { path: '/newBrower', component: '../pages/NewBrower', title: 'vicTest' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      title: 'vicAppZero',
      dll: true,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  externals(context, request, callback) {
    let IGNORES = ['realm', 'sqlite3', '@journeyapps/sqlcipher'];
    if (IGNORES.indexOf(request) >= 0) {
      return callback(null, "require('" + request + "')");
    }
    callback();
  },
  chainWebpack(config, { webpack }) {
    console.log('config=======', config.target)
    // 设置 alias
    config.target('electron-renderer');
    extraBabelPresets: []
  }
}
