var n1 = 12345.6789;
console.log(n1.toFixed(2));//保留小数
console.log(n1.toPrecision(2));//可在对象的值超出指定位数时将其转换为指数计数法。
console.log(n1.toString());//把一个逻辑值转换为字符串，并返回结果。
console.log(n1.toExponential(2));//返回一个字符串，该字符串以指数计数法表示当前数值。
//12345.68
//1.2e+4
//12345.6789
//1.23e+4

console.log(NaN === NaN);
console.log(isNaN("12,3"));//isNaN指的是医师一个非数值
console.log(Math.floor(3.8));//向下取整
console.log(Math.floor(-3.8));
console.log(Math.ceil(3.2));//向上取整
console.log(Math.ceil(-3.2));
console.log(Math.round(-3.2));//四舍五入
console.log(Math.round(-3.5));
console.log(Math.round(-3.8));
// false
// true
// 3
// -4
//  4
// -3
//-3
//-3
//-4


