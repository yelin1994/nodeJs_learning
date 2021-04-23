const http = require('http');
const fs = require('fs');
const app = http.createServer((req, res) => {
    if(req.url === '/remote') {
        res.writeHead(200, {
            'Content-type': 'text-plain'
        });
        res.end('hello remote');
    } else {
        proxy(req, res);
    }
})

function proxy(req, res) {
    let options = {
        host: req.host,
        port: 3000,
        headers: req.headers,
        url: '/remote',
        agent: false,
        method: 'GET'
    }

    let httpProxy = http.request(options, (response) => {
        response.pipe(res);
    })

    req.pipe(httpProxy);
}

app.listen(3000, function() {
    console.log('server is running')
});
