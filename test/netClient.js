const net = require('net');
// const client = net.createConnection({ port: 8000 }, () => {
//   // 'connect' 监听器
//   console.log('已连接到服务器');
//   client.write('你好世界!\r\n');
// });
// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });
// client.on('end', () => {
//   console.log('已从服务器断开');
// });
const socket = new net.Socket({});
socket.connect({
  host: '127.0.0.1',
  port: 9010
})

// socket.write('good morning');


const lessonIds = [
  '136797',
  '136798',
  '136799',
  '136800',
  '136801',
  '136802'
]

let buffer = Buffer.alloc(4);
buffer.writeInt32BE(
  lessonIds[Math.floor(Math.random() * lessonIds.length)]
)

socket.write(buffer);
socket.on('data', (buffer) => {
    const seqbuffer = buffer.slice(0, 2);
    const titlebuffer = buffer.slice(2)
    console.log(seqbuffer, titlebuffer.toString());
    const id = Math.floor(Math.random() * lessonIds.length);
    console.log(encode(id).readInt32BE(2));
    socket.write(encode(id));
})
let seq = 0;
function encode(index) {
  buffer = Buffer.alloc(6);
  buffer.writeInt16BE(seq++);
  buffer.writeInt32BE(
    lessonIds[index], 2
  );
  return buffer;
}