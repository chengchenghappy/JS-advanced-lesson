//基本数据类型定义在全局变量中，是没有在栈区开辟空间的，所以会输出true
var a1 = 100;
var b1 = 100;
console.log(a1 == b1);
console.log(a1 === b1);
// true
// true

// 对于===，只要两边类型不一样，就直接返回false，根本就不用考虑是引用类型还是
// 基本类型如果两边类型一样，那就是按==来判断，然后再考虑是引用类型还是基本类
//型如果是基本类型，则进行值比较。如果引用类型，则进行引用比较，也就是说引用同
//一个对象时才等
var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);
console.log(a2 === b2);
// false
//false

var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);
console.log(a3 === b3);

b3 = new Number(200);
console.log(a3 === b3);
//true
//true
//false