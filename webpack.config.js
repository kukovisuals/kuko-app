const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  watch: true,
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer', {
                      overrideBrowserslist: ['last 3 versions', 'ie >9']
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      overrideBrowserslist: ['last 3 versions', 'ie >9']
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader'
        ],
      },
      {
       test: /\.jpg/,
       type: 'asset/resource'
     },
      {
       test: /\.mp4/,
       type: 'asset/resource'
     },
     {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
          use: ['file-loader']
      },
    ]
  },
   resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
}