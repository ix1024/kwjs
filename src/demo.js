var tmp = 123;

class Img {
	constructor() {
		return document.createElement('img');
	}

}

var img = new Img();

img.onload = function() {
	document.body.appendChild(this);
};
img.src = "http://files.huizecdn.com/file1/M00/54/20/wKgls1jc3fyAWzAyAADgZkxKQ18194.jpg";


var p1 = new Promise(function(resolve, reject) {
	var img = new Image();
	//throw '错误啦';
	img.onload = function() {
		resolve(img);
	};
	img.onerror = function() {
		reject('加载失败');
	};
	img.src = 'http://files.huizecdn.com/file1/M00/54/20/wKgls1jc3fyAWzAyAADgZkxKQ18194.jpg';

});

var p2 = new Promise(function(resolve, reject) {
	var img = new Image();
	img.onload = function() {
		resolve(img);
	};
	img.onerror = function() {
		reject('加载失败');
	};
	img.src = 'http://files.huizecdn.com/file1/M00/4F/E1/wKgls1jGQO2AcaBKAAGMPrLjJQM604.jpg';

});

// Promise.all([p1, p2])
// 	.then(function(a, b) {
// 		console.log(a, b);
// 	}).catch(function(err) {
// 		console.log('all', err);
// 	});
Promise.race([p1, p2])
	.then(function(a, b) {
		console.log(a, b);
	}).catch(function(err) {
		console.log('all', err);
	});


var hh = `asdf
	adsfa$ {tmp}
	sdf
	<% for(var i=0;i<10; i++){%>
		<li><%= i%></li>
	<%}%>
	`;

//数组的解构赋值
(function() {
	let [a, b, c] = [1, 2, 3];
	let [, name, test] = [1, 2, 3];
})();
let s = 0B11;

//对象的解构赋值
(function() {
	let {
		foo,
		bar
	} = {
		foo: 'aaa',
		test: 3,
		bar: 3
	};
})();

Array.from({
	length: 2
}, (item) => 'jack');


(function() {
	let {
		foo,
		bar = 0
	} = {
		foo: 'aaa',
		test: 3,
		bar: 3
	};
})();

//string 
(function() {
	const [a, b, c, d] = 'hello';
})();

(function() {
	function ex() {
		return [1, 2, 3];
	}
	let [a, b, c] = ex();
})();

let str = 'kingwell';


//函数作用域函数声明
//ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
(function() {
	if (true) {
		function f() {}
	}
	try {
		function f() {}
	} catch (e) {

	}
})();
//ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
function f() {
	//console.log('outside');
}
(function() {
	f();

	function f() {
		//console.log('inside');
	}
	f();

})();
//暂时性死区，块级作用域
//不能重复声明
//不存在变量提升
if (true) {
	tmp = 'abc'; // ReferenceError
	let tmps = 20;

}