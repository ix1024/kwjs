'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeixinPay = function () {
	function WeixinPay(props) {
		_classCallCheck(this, WeixinPay);
	}

	_createClass(WeixinPay, [{
		key: 'WeixinPay',
		value: function WeixinPay() {
			return this;
		}
	}, {
		key: 'go',
		value: function go() {}
	}]);

	return WeixinPay;
}();

var tpl = '\n<ul>\n<li>asdf ' + 100 + '</li>\n</ul>\n';

var Utils = function (_WeixinPay) {
	_inherits(Utils, _WeixinPay);

	function Utils() {
		_classCallCheck(this, Utils);

		return _possibleConstructorReturn(this, (Utils.__proto__ || Object.getPrototypeOf(Utils)).apply(this, arguments));
	}

	_createClass(Utils, [{
		key: 'test',
		value: function test() {
			return this;
		}
	}]);

	return Utils;
}(WeixinPay);

//解构


var _ref = [1, 2, 3],
    a = _ref[0],
    b = _ref[1],
    c = _ref[2],
    _ref$ = _ref[3],
    d = _ref$ === undefined ? 'default' : _ref$;
var e = 1,
    f = 2,
    g = 3;
var _ref2 = null,
    x = _ref2 === undefined ? 1 : _ref2;

//object

var _foo$bar = {
	foo: 'aaa',
	bar: 'bbb'
},
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;


function add(_ref3) {
	var _ref4 = _slicedToArray(_ref3, 2),
	    x = _ref4[0],
	    y = _ref4[1];

	return x + y;
}
add([1, 2]);

//变量交换
{
	var example = function example() {
		return [1, 2, 3];
	};

	var _x = 1;
	var y = 2;
	var _ref5 = [y, _x];
	_x = _ref5[0];
	y = _ref5[1];

	var _example = example(),
	    _example2 = _slicedToArray(_example, 3),
	    _a = _example2[0],
	    _b = _example2[1],
	    _c = _example2[2];
}

{
	var jsonData = {
		id: 42,
		status: 'ok',
		data: []
	};
	var id = jsonData.id,
	    status = jsonData.status,
	    number = jsonData.data;
}

{
	jQuery.ajax = function (url, _ref6) {
		// ... do stuff

		var _ref6$async = _ref6.async,
		    async = _ref6$async === undefined ? true : _ref6$async,
		    _ref6$beforeSend = _ref6.beforeSend,
		    beforeSend = _ref6$beforeSend === undefined ? function () {} : _ref6$beforeSend,
		    _ref6$cache = _ref6.cache,
		    cache = _ref6$cache === undefined ? true : _ref6$cache,
		    _ref6$complete = _ref6.complete,
		    complete = _ref6$complete === undefined ? function () {} : _ref6$complete,
		    _ref6$crossDomain = _ref6.crossDomain,
		    crossDomain = _ref6$crossDomain === undefined ? false : _ref6$crossDomain,
		    _ref6$global = _ref6.global,
		    global = _ref6$global === undefined ? true : _ref6$global;
	};
}

{
	var map = new Map();
	map.set('fist', 'hello');
	map.set('second', 'world');

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    key = _step$value[0],
			    value = _step$value[1];

			console.log(key + ' is ' + value);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

console.log('\uD842\uDFB7');