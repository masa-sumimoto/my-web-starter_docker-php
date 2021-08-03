const PATH = require('path');
const MODE = 'development';
const enabledSourceMap = MODE === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: MODE,
  entry: './entry.js',
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: 'assets/javascripts/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // mini-css-extract-pluginがスタイルの分離の役割を担うため不使用
          // "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   // CSS内の画像やファイルなどの外部リソースのカスタムパブリックパス
            //   publicPath: "/public/assets/",
            // },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: enabledSourceMap,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: enabledSourceMap,
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: enabledSourceMap,
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
    ],
  },
  // devServer: {
  //   contentBase: './dist',
  //   compress: true,
  //   port: 8080,
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/stylesheets/bundle.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'views', to: './' },
        { from: 'images', to: './assets/images' },
      ],
    }),
  ],
};
