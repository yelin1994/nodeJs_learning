const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs')
function middleware(req, res, next) {
    // 1. express request 对象
    // 2. express response 对象
    // 3. express 的一个合法中间件
    if (req.path === '/' && req.method.toLowerCase() === 'get') {
        res.setHeader('x-zhuawa', 'zhuawa');
        res.send('hello')
    }
    console.log('hello middleware');
    next();
    // res.send('hello middleware');
}
app.use(cookieParser());
app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log('middle 1 start' , req.path, new Date().getTime())
    next();
    console.log('middle 1 start' , req.path, new Date().getTime())
})

// app.use(middleware); // 中间件

function loginRequired(req, res, next) {
    const cookie = req.cookies;
    const loginToken = cookie.loginToken;
    const data = require('./data.json');
    const userInfo = data.find(item => {
        return item.id === loginToken
    })
    if (!userInfo) {
        res.redirect('/login');
    } else {
        req.userInfo = userInfo;
        next()
    }
}
app.get('/', loginRequired, function(req, res, next){
    // res.setHeader('x-header', 'hello');
    // res.send('hello express');
    const userInfo = req.userInfo;
    res.sendFile(path.resolve(__dirname, './index.html'));
    
    // res.sendFile(path.resolve(__dirname, './index.html'))
    // next();
});
app.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname, './login.html'))
})

app.get('/get/file', function(req, res) {
    const fileName = path.resolve(__dirname, './text.txt');
    const readStream = fs.createReadStream(fileName);
    readStream.pipe(res)
})

app.post('/api/login', function(req, res) {
    const {body} = req;
    const { username, password } = body;
    if (!username || !password) {
        console.log(body.username, body.password);
        res.send('用户名错误' + body.username + body.password);
        res.end();
    }
    
    const data = require('./data.json');
    const userInfo = data.filter(item => {
        return item.username === username && item.password === password
    })
    console.log(userInfo);
    if (!userInfo.length) {
        throw new Error('没有找到此用户')
    }
    res.cookie('loginToken', userInfo[0].id, {
        maxAge: 1000 * 60,
        httpOnly: true
    })
    res.json({
        data: {
            redirectUrl: '/'
        }
    })
})

app.post('/api/data', function(req, res) {
    const {body} = req;
    console.log(body, typeof body)
    res.json({
        data: body.data
    })
})

app.get('/api/data', function(res, res) {
    res.json({
        data: 'hello word'
    })
})

app.get('/:pathname/id', function(req, res) {
    const { params, query, method, headers, path} =req
    res.send(
        `
        <html>
            <body>
            <span>${JSON.stringify(params)}</span>
            </body>
        </html>
        
        `
    )
})

app.get('/file', function(req, res) {
    res.sendFile(path.resolve(__dirname, './index.html'))
})
app.listen(8080, function(){
    console.log('server start');
});