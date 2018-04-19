import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.js';

// Expressインスタンス生成
var app = express();

// トランスパイラ生成
var compiler = webpack(config);

// webpackミドルウェアの実装(webpack.config.jsを実装)
app.use(requre('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// staticディレクトリの追加
app.use(express.static('public'));

// GETでの受信をすべてindex.htmlに
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// ポート3000でサーバー起動
app.listen(3000, 'localhost', function(err) {
  if(err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
