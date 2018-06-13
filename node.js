const http = require('http');
const app = http.createServer(function (req, res, next) {
    res.end('http2');
});
app.listen(8000);
process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H');

// const promise = new Promise(function (resolve, reject) {
//     resolve('ok');
// });

// promise
//     .then(function (val) {
//         console.log(val);
//         return new Promise(function (resolve, reject) {
//             setTimeout(() => {
//                 resolve(1);
//             }, 1000);
//         });
//     })
//     .then(function (val) {
//         console.log(val);
//     });

// var p1 = function () {
//     return new Promise(function (resolve, reject) {
//         resolve(1);
//     });
// };
// var p2 = function () {
//     return new Promise(function (resolve, reject) {
//         reject(2);
//     });
// };
// var pp = p2();
// pp.catch(function () {
//     console.log(222);
// });
// Promise
//     .all([
//         p1(),
//         pp
//     ])
//     .then(res => {
//         console.log(212222222,res);
//     })
//     .catch(err => {
//         console.log('出错了', err);
//     });


// function* helloWorldGenerator() {
//     yield console.log('hello');
//     yield console.log('world');
//     yield console.log('ending');

// }
// var hw = helloWorldGenerator();
// hw.next(true);
// hw.next(false);
// hw.next();