//为什么要使用Symbol
// ES5里面对象的属性名都是字符串，
// 如果你需要使用一个别人提供的对象，你对这个对象有哪些属性也不是很清楚，
// 但又想为这个对象新增一些属性，那么你新增的属性名就很可能和原来的属性名发送冲突

var obj={
	x:1,
	y:2,
	moveTo:function(x,y){
		this.x=x;
		this.y=y;
	}
};
obj.moveTo=function(x,y){
	console.log("方法被覆盖了");
};
obj.moveTo(0,0);

// VM865:10 方法被覆盖了

//定义Symbol变量，注意Symbol是基本数据类型的一种，不能用new
//回顾下基本数据类型的特点，区分基本类型和引用类型

let s=Symbol();
typeof s;
// "symbol"

//Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

var s1=Symbol('foo');
var s2=Symbol('bar');
console.log(s1);
console.log(s2);
// VM895:3 Symbol(foo)
// VM895:4 Symbol(bar)

console.log(s1.toString());
console.log(s2.toString());
// VM908:1 Symbol(foo)
// VM908:2 Symbol(bar)

//注意，Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的。
// 没有参数的情况

var s1=Symbol();
var s2=Symbol();
s1===s2;
// false
var s1=Symbol('foo');
var s2=Symbol('foo');
s1===s2;
// false

//如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
const obj={
	toString(){
		return 'abc';
	}
};
const sym=Symbol(obj);
sym;
// Symbol(abc)

//Symbol值不能与其他类型的值进行运算，会报错。
var sym = Symbol('My symbol');
//"your symbol is " + sym;//报错
//但是，Symbol值可以显式转为字符串。
var sym = Symbol('My symbol');
String(sym); // 'Symbol(My symbol)'
sym.toString(); // 'Symbol(My symbol)'
"Symbol(My symbol)"

var sym = Symbol('My symbol');
sym.toString(); 
// "Symbol(My symbol)"

var sym = Symbol('My symbol');
String(sym);
// "Symbol(My symbol)"