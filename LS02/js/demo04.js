var a = 123;
var b = new Number(a);

console.log(a == b);
console.log(a === b);
//true 指向了同一区域
//false 数据类型不同，一个是基本数据类型，另一个是引用数据类型，两者的数据类型不同，所以不等


//临时包装对象 基本数据类型运用临时包装，但是引用数据类型不用再包装
var str = "abcde";
console.log(str.length);//5 临时包装成了String对象
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值

var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]