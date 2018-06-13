const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

server.listen(port, hostname, () => {
	console.log(`Server runing at http://${hostname}:${port}`);
});

require('fs').open('b.js', 'r', (err, rs) => {
	//console.log(err,rs);
});
var obj = {};
for (const a in obj) {

}
//没有提升
//块级作用
//不能重复声明
//


var p1 = new Promise(function(resolve, reject) {
	
	setTimeout(resolve, 1000, '第一');
});
var p2 = new Promise(function(resolve, reject) {
	setTimeout(resolve,500,'第二');
});
p2.catch(function(){
	console.log('p2');
});
Promise
	.race([p1,p2])
	.then(function(val1) {
		console.log(val1);
	})
	.catch(function() {
		console.log('error');
	});