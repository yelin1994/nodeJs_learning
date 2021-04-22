const _ = require('loadsh')

let debounce = (fn, delay) => {
    let timer = null;
    let lastTime = null;
    return function() {
        let nowTime = new Date().getTime();
        if (!lastTime) lastTime = nowTime;
        if (nowTime - lastTime < delay) {
            clearTimeout(timer);
        } 
        timer = setTimeout(fn, delay);
    }
}


// var a = [...new Array(230).keys()];
// let getSplit = (arr, gulp) => {
//     let lastIndex = 0;
//     let obj = {};
//     while(lastIndex < arr.length) {
//         let result = [];
//         if (lastIndex + gulp > arr.length) {
//             result = arr.slice(lastIndex, arr.length);
//         } else {
//             result = arr.slice(lastIndex, lastIndex + gulp);
//         }
//         let index = 'item' + Math.floor(lastIndex / gulp);
//         obj[index] = result;
//         lastIndex += gulp;
//     }
//     return obj;
// }

// console.log(getSplit(a, 100));


function shellSort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0;gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let current = arr[i];
            let j = i;
            while(j -gap >=0 && current < arr[j -gap]) {
                arr[j] = arr[j -gap];
                j = j - gap;
            }
            arr[j] = current;
        }
    }
    return arr;
}


// const collection = {
//     '1': [1, 2, 3],
//     '2': [4, 5],
//     '6': ['7, 8']
// }

// const arr = _.reduce(collection, (acc, value) => acc.concat(value));
// // console.log(arr, collecco
// console.log(_.isEmpty({}));

// var obj = {
//     a: 12
// };
// function A () {}
// A.prototype = obj;
// var b = new A();
// console.log(_.isEmpty(b), b.a);


// function * gege() {
//     try {
//         yield 1;
//     } catch(e) {
//         console.log('nei bu bu huo')
//     }
// }

// let y = gege();
// console.log(y.next());
// y.throw(0)


// function* foo() {
//     yield 'a';
//     yield 'b';
//   }
  
//   function* bar() {
//     yield 'x';
//     // 手动遍历 foo()
//     // for (let i of foo()) {
//     //   console.log(i);
//     // }
//     yield * foo();
//     yield 'y';
//   }
//   let index = 0;
//   for (let v of bar()){
//     console.log(index);
//     index++;
//     console.log(v);
//   }

// const express = require('express');
// const app = express();
// const router = express.Router()

// function mid1 (req, res, next) {
//     // res.sendStatus(200);
//     console.log(req.params.id);
//     next();
// }


// app.get('/hello/:id', mid1, function(req, res, next) {
    
//     res.send('hello');
// })


// app.get('/', function(req, res) {
//     res.send('world');
// })

// app.get('/user/:id', function (req, res, next) {
//     // if the user ID is 0, skip to the next route
//     if (req.params.id === '0') next('route')
//     // otherwise pass the control to the next middleware function in this stack
//     else next()
//   }, function (req, res, next) {
//     // send a regular response
//     res.send('regular')
//   })
  
//   // handler for the /user/:id path, which sends a special response
//   app.get('/user/:id', function (req, res, next) {
//     res.send('special')
//   })

// app.listen(3200, function() {
//     console.log('server start')
// });

// const obj = [
//     {
//       "system_id": "1586",
//       "questionnaire_code": "childExamTable1",
//       "follow_date": "2012-05-15"
//     },
//     {
//       "system_id": "1586",
//       "questionnaire_code": "childExamTable3",
//       "follow_date": "2012-07-16"
//     },
//     {
//       "system_id": "1586",
//       "questionnaire_code": "childExamTable6",
//       "follow_date": "2012-10-25"
//     }
// ]
// const arr = [
//     {name: '1', id: 1, parentId: 0},
//     {name: '2', id: 2, parentId: 0},
//     {name: '3', id: 3, parentId: 1},
//     {name: '4', id: 4, parentId: 1},
//     {name: '5', id: 5, parentId: 2},
//     {name: '6', id: 6, parentId: 2},
//     {name: '7', id: 7, parentId: 7},
// ]
   

// function transferArraytoTree(arr) {
//     const root = {
//         id: 0,
//         children: []
//     }
//     arr.forEach(item => {
//         const {parentId} = item
//         if (parentId === 0) {
//             root.children.push(item);
//         } else {
//             const parent = getParentNode(arr, parentId);
//             // console.log(parent)
//             if (!parent.children) {
//                 parent.children = [];
//             }
//             parent.children.push(item);
//             // console.log(parent)
//         }
//     });
//     return root;
// }

// function getParentNode(arr, parentId) {
//     return arr.find(item => item.id === parentId);
// }

// console.log(transferArraytoTree(arr))

const express = require('express');

// const app = express();
// app.get('/user/:id', function (req, res, next) {
//     // if the user ID is 0, skip to the next route
//     console.log(req);
//     if (req.params.id === '0') next('route')
//     // otherwise pass the control to the next middleware function in this stack
//     else next()
//   }, function (req, res, next) {
//     // send a regular response
//     res.send('regular')
//   })
  
//   // handler for the /user/:id path, which sends a special response
//   app.get('/user/:id', function (req, res, next) {
//     res.send('special')
//   })

// var app = express()
// var router = express.Router()

// // predicate the router with a check and bail out when needed
// router.use(function (req, res, next) {
// //   if (!req.headers['x-auth']) return next('router')
//   next()
// })

// router.get('/', function (req, res) {
//   res.send('hello, user!')
// })

// // use the router and 401 anything falling through
// app.use('/admin', router, function (req, res) {
//   res.sendStatus(401)
// })

//   app.listen(3002);

// const http = require('http');
// http.get({
//   hostname: 'localhost',
//   port: 8080,
//   path: '/',
// })

const app = express();
app.use(function(req, res, next) {
    console.log('start 1')
    next()
    console.log('start 2')
})

app.use(function(req, res, next) {
    console.log('start 3')
    next()
    console.log('start 4')
})
app.get('/', function(req, res) {
    res.writeHead(302, {
        'Location': '/hello'
    })
    res.end();
})

app.get('/hello', function(req, res) {
    res.send('hello');
    
})

app.listen(8080);