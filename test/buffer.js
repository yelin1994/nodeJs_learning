// Buffer 类似于Uint8Array

var buffer1 = Buffer.alloc(10) // 10字节 初始化为0
var buffer2 = Buffer.alloc(10, 1)// 设置初始化值 1
var buffer3 = Buffer.allocUnsafe(10) // 不初始化

var buffer4 = Buffer.from([1, 2, 3])
var buffer5 = Buffer.from('test') // 现转化为数字在转化为一定的编码格式，在存储
var buf5 = Buffer.from([257, 257.5, -255, '1']); // 超过255 会与&255
buffer5.byteLength // 字节长度
var buf = Buffer.from('你好', 'utf16le');
// console.log(buf.toString('utf16le'));

var buf = Buffer.from('101g', 'hex')
// console.log(buf); // <buffer 10>

var buf = Buffer.from('hello', 'utf16le')

// console.log(buf)

var arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;
// Copies the contents of `arr`.
var buf1 = Buffer.from(arr);// <Buffer 88 a0>
// Shares memory with `arr`.
var buf2 = Buffer.from(arr.buffer);//  <Buffer 88 13 a0 0f>

var arr = new Uint16Array(20);
var buf = Buffer.from(arr.buffer, 0, 16);

// console.log(buf.length, buf.byteLength, arr.byteLength);

// Buffer.isBuffer(buffer1)// 判断是否为Buffer

// Buffer.concat([buffer1, buffer2])// 传入一个buffer数组

// buffer1.length
// buffer1.toString();
// buffer1.fill(value, [offset, [end]]);
// buffer1.equals(buffer2);
// buffer1.indexOf();

var buf1 = Buffer.from('buffer');

var buf = Buffer.from('ABC');
var buf1 = Buffer.from('414243', 'hex');

const fs = require('fs');
const protobuf = require('protocol-buffers');

const scheme =  protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'));
buf = scheme.Column.encode({
    id: 1,
    name: 'nodeJs',
    price: 84.01
});

console.log(scheme.Column.decode(buf))

