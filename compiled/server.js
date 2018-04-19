'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = require('../webpack.config.js');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Expressインスタンス生成
var app = (0, _express2.default)();

// トランスパイラ生成
var compiler = (0, _webpack2.default)(_webpackConfig2.default);

// webpackミドルウェアの実装(webpack.config.jsを実装)
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: _webpackConfig2.default.output.publicPath
}));

// staticディレクトリの追加
app.use(_express2.default.static('public'));

// GETでの受信をすべてindex.htmlに
app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../index.html'));
});

// ポート3000でサーバー起動
app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});