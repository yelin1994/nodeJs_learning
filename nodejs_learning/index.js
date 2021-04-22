const http = require('http');
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');
const game = require('./game');
let playerWon = 0;
http
    .createServer(function(req, res) {
        const parseUrl = url.parse(req.url);
        if(parseUrl.pathname == '/favicon.ico') {
            res.writeHead(200);
            res.end();
            return;
        }

        if (parseUrl.pathname == '/game'){
            const query = queryString.parse(parseUrl.query);
            const playerAction = query.action;
            const gameResult = game(playerAction);
            if (playerWon === 3) {
                res.writeHead(500);
                res.end('再也不和你一起玩了');
                return;
            }
            if (gameResult == 0) {
                res.end('平局')
            } else if (gameResult == 1) {
                res.end('获胜');
                playerWon++;
            } else {
                res.end('失败');
            }

            res.end();
        }

        if(parseUrl.pathname == '/') {
            res.writeHead(200);
            fs.createReadStream(__dirname + '/index.html').pipe(res);
        }
    }).listen(3001);