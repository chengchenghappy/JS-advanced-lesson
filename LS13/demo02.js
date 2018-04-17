console.log(new String('str'));
console.log(new Number(1));
console.log(new Boolean(true));
console.log(new Object({name:'Anne'}));
console.log(new Array([1,2,3,4]));
console.log(new Date());
console.log(new Error());
console.log(new Function());
console.log(new RegExp('\\d'));
//String {"str"}
//Number {1}
//Boolean {true}
//{name: "Anne"}
//[Array(4)]
// Tue Apr 17 2018 19:42:03 GMT+0800 (中国标准时间)
// Error
 //   at <anonymous>:7:13
//ƒ anonymous() {

//}
// /\d/

console.log(typeof(new String('str')));
console.log(typeof(new Number(1)));
console.log(typeof(new Boolean(true)));
console.log(typeof(new Object({name:'Anne'})));
console.log(typeof(new Array([1,2,3,4])));
console.log(typeof(new Date()));
console.log(typeof(new Error()));
console.log(typeof(new Function()));
console.log(typeof(new RegExp('\\d')));
//object
//object
//object
//object
//object
// object
//object
// function
//object


//typeof用来检验
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
console.log(typeof String);
console.log(typeof Boolean);
console.log(typeof Math);
console.log(typeof JSON);
//function
//function
//function
//function
//function
// function
// object
// object


//instanceof
console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true
//JSON Math是对象但是不是函数，其他的都既是函数又是对象
