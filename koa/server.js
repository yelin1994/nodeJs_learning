
// 异步的话也是洋葱模型 与express的区别
const koa = require('koa');
const koaRouter = require('koa-router');

const app = new koa();
const router = new  koaRouter();

app.use(router.routes()).use(router.allowedMethods());

router.get('/', (ctx, next) => {
    ctx.body = 'hello world'
})

app.listen(8081, function() {

})