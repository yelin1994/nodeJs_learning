const express = require('express');
const http = require('http');
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');
const game = require('./game');
const app = express();

let playerWon = 0;
// app.use(function(req, res, next) {
 
// });

app.get('/favicon.ico', function(req, res){
    res.send(200);
    return;
});

app.get('/', function(req, res) {
    // res.status(200);
    // fs.createReadStream(__dirname + '/index.html').pipe(res);
    // return;
    res.send(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
})

app.get('/game', 
    
    function(req, res) {
    // const parseUrl = url.parse(req.url);
    // const query = queryString.parse(parseUrl.query);
    const query = req.query;
    const playerAction = query.action;
    const gameResult = game(playerAction);
    if (playerWon === 3) {
        res.status(500)
        res.send('再也不和你一起玩了');
        return;
    }
    if (gameResult == 0) {
        res.send('平局')
    } else if (gameResult == 1) {
        playerWon++;
        res.send('获胜');
    } else {
        res.send('失败');
    }
});

app.listen(3008);