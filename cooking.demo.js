var toolbox = require.resolve('element-toolbox');

module.exports = {
  use: 'vue',

  webpack: function (provide, config) {
    var HtmlWebpackPlugin = provide.HtmlWebpackPlugin;

    config.nodeServer = true;
    config.port = 8201;
    config.entry = { app: 'example/entry.js' };
    config.output.path = __dirname + '/example/build';
    config.output.publicPath = process.argv[2] === 'build' ? '/__component_name__' : '';
    config.devtool = false;

    // cooking 0.4.0 将重构配置文件结构，这部分代码应该写到 element-toolbox 工具里，但是
    // 那样没法修改该配置文件，临时措施
    config.resolveLoader = config.resolveLoader || {};
    config.resolveLoader.root = [
      toolbox + '/../node_modules/'
    ];

    config.module.loaders.push({
      test: /\.md$/,
      loader: 'vue-html!highlight!markdown'
    });

    if (process.argv[2] === 'build') {
      template = 'example/index.html';
      config.externals = {
        'vue': 'Vue'
      };
    } else {
      template = 'example/index.dev.html';
    }

    config.plugins = (config.plugins || []).concat([
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: template,
        inject: true
      })
    ]);

    return config;
  }
};
