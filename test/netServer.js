const net = require('net')

// const server = net.createServer((socket) => {
//    socket.end('再见') 
// }).on('error', (e) => {
//     throw e;
// })

// server.listen(8000, () => {
//     console.log('打开服务器', server.address())
// })


const server = net.createServer((socket) => {
    socket.on('data', function(buffer) {
        // console.log(buffer, buffer.toString())
        const seqbuffer = buffer.slice(0, 2);
        const lessonId =  buffer.readInt32BE(2);
        setTimeout(() => {
            console.log(lessonId)
            const concactBuffer = Buffer.concat([
                seqbuffer,
                Buffer.from(data[lessonId])
            ])
            socket.write(concactBuffer);
        }, 500);
    })
})

server.listen(9010);

const data = {
    136797: '01 课程介绍',
    136798: '02 内容综述',
    136799: '03 Nodejs 是什么',
    136800: '04 node js 可以用来做什么',
    136801: '05 课程实战项目介绍',
    136802: '06 什么是技术调研'
}

