const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  open: true,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, '0.0.0.0', () => {
  console.log('Starting server on http://localhost:8080');
});
