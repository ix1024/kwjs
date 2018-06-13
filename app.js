// const http = require('http');
// const http2 = require('http2');
// const fs = require('fs');
// http
// 	.createServer(function(req, res, next) {
// 		res.writeHeader(200, {
// 			'ContentType': 'text/html'
// 		});
// 		res.end('Hello world');
// 	})
// 	.listen(8000);

const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
	key: fs.readFileSync('localhost-privkey.pem'),
	cert: fs.readFileSync('localhost-cert.pem')
});
server.on('error', (err) => console.error(err));
server.on('socketError', (err) => console.error(err));

server.on('stream', (stream, headers) => {
	// stream is a Duplex
	stream.respond({
		'content-type': 'text/html',
		':status': 200
	});
	stream.pushStream({
		':path': '/'
	}, (pushStream) => {
		pushStream.respond({
			'content-type': 'text/html',
			':status': 200
		});
		pushStream.end('<h2>Some pushed data</h2>');
	});
	stream.end('<h1>Hello World</h1>');
});

server.listen(8000);



// const client = http2.connect('https://localhost:8000', {
// 	ca: fs.readFileSync('localhost-cert.pem')
// });
// client.on('socketError', (err) => console.error(err));
// client.on('error', (err) => console.error(err));

// const req = client.request({
// 	':path': '/'
// });

// req.on('response', (headers, flags) => {
// 	for (const name in headers) {
// 		console.log(`${name}: ${headers[name]}`);
// 	}
// });

// req.setEncoding('utf8');
// let data = '';
// req.on('data', (chunk) => {
// 	data += chunk;
// });
// req.on('end', () => {
// 	console.log(`\n${data}`);
// 	client.destroy();
// });
// req.end();