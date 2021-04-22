const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMidddleWare = require('webpack-dev-middleware');

const app = express();
const compiler = webpack({

});

app.use('./libs', express.static(path.join(process.cwd(), 'static')))
    .use(webpackDevMidddleWare(compiler, {
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            ignore: /node_modules/,
            poll: false,
        }
    }));
    app.listen(8000);