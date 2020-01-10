
// ref: https://umijs.org/config/
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
  chainWebpack(config, { webpack }) {
    console.log('config=======', config.target)
    // 设置 alias
    config.target('electron-renderer');
  }
}
