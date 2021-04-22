const express = require('express');
const http = require('http');
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');
const koa = require('koa');
const mount = require('koa-mount');
const game = require('./game')

const app = new koa();
let playerWinCount = 0;
let sameCount = 0;
app.use(
    mount('/favicon.ico', function(ctx) {
        ctx.status = 200;
    })
)

const gameKoa = new koa();

gameKoa.use(
    async function(ctx, next) {
        if (playerWinCount >=3) {
            ctx.status = 500;
            ctx.body = '我不会在玩了';
            return 
        }
        await next();
        if (ctx.playerWon) {
            playerWinCount++;
        }
    },
)

gameKoa.use(
   async function(ctx, next) {
    const query = ctx.query;
    const playerAction = query.action;
    ctx.playerAction = playerAction
    await next();
   } 
)

gameKoa.use(
     async function(ctx, next) {
        const playerAction = ctx.playerAction;
        const result = game(playerAction);
        await new Promise(resolve => {
            setTimeout(() => {
                ctx.status = 200;
                if (result == 0) {
                    ctx.body = '平局';
                } else if (result == -1) {
                    ctx.body = '你输了';
                } else {
                    ctx.body = '你赢了';
                    ctx.playerWon = true;
                }
                resolve();
            }, 500);
        })
        setTimeout(() => {
            ctx.status = 200;
        });
    }
)

app.use(
    mount(
        '/game', 
        gameKoa,
    )
)

app.use(
    mount('/', function(ctx) {
        ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8')
    })
)



app.listen(3000);

