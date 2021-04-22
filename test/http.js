const http = require('http');
const net = require('net');
const url = require('url');

var proxy = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('响应内容')
})

proxy.on('connect', (req, clientSocket, head) => {
  const {port, hostname} = url.parse(req.url);
  const serverSocket = net.connect(port || 80, hostname, () => {
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
        'Proxy-agent: Node.js-Proxy\r\n' +
        '\r\n');
    serverSocket.write(head);
    serverSocket.pipe(clientSocket);
    clientSocket.pipe(serverSocket);
  })
});

proxy.listen(1337, '127.0.0.1', () => {

  // 向隧道代理发出请求。
  const options = {
    port: 1337,
    host: '127.0.0.1',
    method: 'CONNECT',
    path: '/'
  };

  const req = http.request(options);
  req.end();

  req.on('connect', (res, socket, head) => {
    console.log('已连接');

    // 通过 HTTP 隧道发出请求。
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: nodejs.cn:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
    socket.on('data', (chunk) => {
      console.log(chunk.toString());
    });
    socket.on('end', () => {
      proxy.close();
    });
  });
});

