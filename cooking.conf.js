module.exports = {
  use: 'vue',

  webpack: function(provide, config) {
    var ExtractTextPlugin = provide.ExtractTextPlugin;
    var webpack = provide.webpack;

    config.entry = {
      'index': 'src/index.js'
    };
    config.output.library = 'ElementPopup';
    config.output.libraryTarget = 'umd';
    config.devtool = false;
    config.output.filename = 'index.js';
    config.plugins = [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new ExtractTextPlugin('style.css')
    ];
    config.externals = {
      vue: 'vue',
      'el-utils': 'ElementUtil'
    };

    return config;
  }
};
