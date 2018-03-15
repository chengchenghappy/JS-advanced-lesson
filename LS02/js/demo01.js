// 数据类型
// 基本数据类型

var a=123;
console.log(typeof(a));
// number

var str="abcdef";
console.log(typeof(str));
//  string

function foo(){
 
}
foo instanceof Object;
//true
//基本数据类型用typeof检验是否是基本数据类型，引用数据类型用instanceof
var a=2;
var b=2;
console.log(a==b);
// true

var c=[1,2];
var d=[1,2];
d===c
d==c
// false 两者是引用类型，因为引用的不是同一对象，所以返回false
// false 如果是基本类型，则进行值比较。如果引用类型，则进行引用比较，
//也就是说引用同一个对象时才等

var a=123;
var b=new Number(123);
console.log(a===b);
console.log(a==b);
// false
// true

var a=123;
function foo(x){
 x=345;
}
foo(a);
console.log(a);
// 123 因为在函数调用时调用了a

var a={y:123};
function foo(x){
  x.y=345;
}
foo(a);
console.log(a.y);
// 345 x是形参变量，a是实参

var a={y:123};
function foo(x){
  x.y=345;
  x={y:456};
}
foo(a);
console.log(a.y);
// 345

var a={y:123};
function foo(x){
  x={y:456};
  x.y=345;
}
foo(a);
console.log(a.y);
// 123