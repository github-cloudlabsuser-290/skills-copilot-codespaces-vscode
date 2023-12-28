// Create Web Server 
// Create a web server that can listen to requests for /hello and responds with some HTML that says <h1>Hello World</h1>
// Create a web server that can listen to requests for /goodbye and responds with some HTML that says <h1>Goodbye World</h1>
// Create a third request handler listens to /cat and responds with HTML that displays a picture of a cat. 
// (You choose the HTML to display).
const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/api/ninjas'){
        const ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});
server.listen(3000, '