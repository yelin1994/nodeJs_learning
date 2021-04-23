const fs = require('fs')
const path = require('path')
const readline = require('readline')
const memeye = require('memeye');
// memeye()
// function promisefy(func) {
//     return function(...args) {
//         return new Promise((resolve, reject) => {
//             args.push(function(err, result) {
//                 if (err) return reject(err)
//                 return resolve(result)
//             })
//             return func.apply(func, args)
//         })
//     }
// }

// const fsReadFileAsync = promisefy(fs.readFile)
// fsReadFileAsync(__dirname + './http.js', 'utf-8')
//     .catch(err => {

//     }).then(res => {
        
//     })

// let folder = 'src';
// let result = fs.readdirSync(folder);
// console.log(result);
// console.log(__dirname)
// fs.appendFile('hasd.txt', 'sdfdf', (err) => {
//     if (err) throw err;
//     console.log('数据已被追加到文件');
//   });
// console.log(fs.stat())
// const stream = fs.createReadStream(path.resolve('./test/index.html'));
// const buffer = Buffer.alloc(10);
// const value = stream.read(10);

// function copy () {
//     var filename1 = path.resolve(__dirname, 'test.txt');
//     var filename2 = path.resolve(__dirname, 'output.txt');
//     var readStream = fs.createReadStream(filename1);
//     var writeStream = fs.createWriteStream(filename2);
//     readStream.pipe(writeStream);
//     readStream.on('end', function() {
//         console.log('拷贝完成')
//     })
// }

// setTimeout(() => {
//     for (let i = 0; i< 100; i++) {
//         copy();
//     }
// }, 500)

var filename1 = path.resolve(__dirname, 'test.txt');
var readStream = fs.createReadStream(filename1);

var readlineObj = readline.createInterface({
    input: readStream
})

readlineObj.on('line', (lineDate) => {
    console.log(lineDate);
})

readlineObj.on('close', () => {
    console.log('end');
})