const path = require('path');
const cracoSassResourcesLoader = require('craco-sass-resources-loader');
const CracoCSSModules = require('craco-css-modules');
const addPath = (dir) => path.join(__dirname, dir);
const webpack = require('webpack');

const PAY_MODE = process.env.PAY_ENV;
//加载对应.env文件的变量
require('dotenv').config({ path: `./env/.env.${PAY_MODE}` });

const reg = /^PAY_/;
const env = {};
for (const key in process.env) {
  //只有key为NODE_ENV或者正则校验通过才去设置
  if (key === 'NODE_ENV' || reg.test(key)) {
    env[key] = process.env[key];
  }
}

module.exports = {
  webpack: {
    alias: {
      '@': addPath('src'),
    },
    configure: (webpackConfig) => {
      webpackConfig.devtool =
        webpackConfig.mode === 'production' ? false : 'inline-source-map';
      return webpackConfig;
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(env),
      }),
    ],
  },
  style: {
    postcss: {
      loaderOptions: () => {
        const obj = {
          postcssOptions: {
            ident: 'postcss',
          },
        };
        return obj;
      },
    },
  },
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: '@arco-design/web-react',
          libraryDirectory: 'es',
          camel2DashComponentName: false,
          style: true, // 样式按需加载
        },
      ],
      [
        'import',
        {
          libraryName: '@arco-design/web-react/icon',
          libraryDirectory: 'react-icon',
          camel2DashComponentName: false,
        },
        'react-icon',
      ],
    ],
  },
  plugins: [
    {
      plugin: cracoSassResourcesLoader,
      options: {
        resources: addPath('src/style/var.scss'),
      },
    },
    { plugin: CracoCSSModules },
  ],
};
