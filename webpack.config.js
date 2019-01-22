

const path = require('path')
const webpack = require('webpack')
const VueLoader = require('vue-loader/lib/plugin')
const Htmlpacker = require('html-webpack-plugin')
const fileCopier = require('copy-webpack-plugin')
const buildClean = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.vue$/,loader: 'vue-loader',options:
      {
        transformAssetUrls: {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: 'xlink:href'
        }
      }
    },
      { test: /\.js$/,loader: 'babel-loader'},
      { test: /\.tsx?$/,loader: 'ts-loader', exclude: /node_modules/,options: {appendTsSuffixTo: [/\.vue$/],}    },
      { test: /\.(png|jpg|gif|svg)$/,loader: 'file-loader', options: {name: '[name].[ext]?[hash]'}   },
      { test: /\.scss$/,use: ['vue-style-loader','css-loader','sass-loader'] },
      { test: /\.css$/,loader: 'css-loader',options: {url: true,},},
      { test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,use: [{loader: 'file-loader',options: {name: '[name].[ext]',outputPath: 'fonts/'}}]
    }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new buildClean(['dist']),
    new fileCopier([ { from: './src/assets' }],{ }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoader(),
    new Htmlpacker({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}