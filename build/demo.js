'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tmp = 123;

var Img = function Img() {
	_classCallCheck(this, Img);

	return document.createElement('img');
};

var img = new Img();

img.onload = function () {
	document.body.appendChild(this);
};
img.src = "http://files.huizecdn.com/file1/M00/54/20/wKgls1jc3fyAWzAyAADgZkxKQ18194.jpg";

var p1 = new Promise(function (resolve, reject) {
	var img = new Image();
	//throw '错误啦';
	img.onload = function () {
		resolve(img);
	};
	img.onerror = function () {
		reject('加载失败');
	};
	img.src = 'http://files.huizecdn.com/file1/M00/54/20/wKgls1jc3fyAWzAyAADgZkxKQ18194.jpg';
});

var p2 = new Promise(function (resolve, reject) {
	var img = new Image();
	img.onload = function () {
		resolve(img);
	};
	img.onerror = function () {
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
Promise.race([p1, p2]).then(function (a, b) {
	console.log(a, b);
}).catch(function (err) {
	console.log('all', err);
});

var hh = 'asdf\n\tadsfa$ {tmp}\n\tsdf\n\t<% for(var i=0;i<10; i++){%>\n\t\t<li><%= i%></li>\n\t<%}%>\n\t';

//数组的解构赋值
(function () {
	var a = 1,
	    b = 2,
	    c = 3;
	var _ref = [1, 2, 3],
	    name = _ref[1],
	    test = _ref[2];
})();
var s = 3;

//对象的解构赋值
(function () {
	var _foo$test$bar = {
		foo: 'aaa',
		test: 3,
		bar: 3
	},
	    foo = _foo$test$bar.foo,
	    bar = _foo$test$bar.bar;
})();

Array.from({
	length: 2
}, function (item) {
	return 'jack';
});

(function () {
	var _foo$test$bar2 = {
		foo: 'aaa',
		test: 3,
		bar: 3
	},
	    foo = _foo$test$bar2.foo,
	    _foo$test$bar2$bar = _foo$test$bar2.bar,
	    bar = _foo$test$bar2$bar === undefined ? 0 : _foo$test$bar2$bar;
})();

//string 
(function () {
	var _hello = 'hello',
	    _hello2 = _slicedToArray(_hello, 4),
	    a = _hello2[0],
	    b = _hello2[1],
	    c = _hello2[2],
	    d = _hello2[3];
})();

(function () {
	function ex() {
		return [1, 2, 3];
	}

	var _ex = ex(),
	    _ex2 = _slicedToArray(_ex, 3),
	    a = _ex2[0],
	    b = _ex2[1],
	    c = _ex2[2];
})();

var str = 'kingwell';

//函数作用域函数声明
//ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
(function () {
	if (true) {
		var _f = function _f() {};
	}
	try {
		var _f2 = function _f2() {};
	} catch (e) {}
})();
//ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
function f() {
	//console.log('outside');
}
(function () {
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
	var tmps = 20;
}