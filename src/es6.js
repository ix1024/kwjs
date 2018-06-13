class WeixinPay {
	constructor(props) {

	}
	WeixinPay() {
		return this;
	}
	go() {

	}
}
var tpl = `
<ul>
<li>asdf ${100}</li>
</ul>
`;
class Utils extends WeixinPay {
	test() {
		return this;
	}
}

//解构
let [a, b, c, d = 'default'] = [1, 2, 3];
var [e, [f], g] = [1, [2], 3];
let [x = 1] = [null];

//object
let {
	foo,
	bar
} = {
	foo: 'aaa',
	bar: 'bbb'
};

function add([x, y]) {
	return x + y;
}
add([1, 2]);

//变量交换
{
	let x = 1;
	let y = 2;
	[x, y] = [y, x];

	function example() {
		return [1, 2, 3];
	}
	let [a, b, c] = example();
}


{
	let jsonData = {
		id: 42,
		status: 'ok',
		data: []
	};
	let {
		id,
		status,
		data: number
	} = jsonData;
}

{
	jQuery.ajax = function(url, {
		async = true,
		beforeSend = function() {},
		cache = true,
		complete = function() {},
		crossDomain = false,
		global = true,
		// ... more config
	}) {
		// ... do stuff
	};
}



{
	var map = new Map();
	map.set('fist', 'hello');
	map.set('second', 'world');

	for (let [key, value] of map) {
		console.log(key + ' is ' + value);
	}
}

console.log("\u{20BB7}");


 