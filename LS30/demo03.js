// ES5版本
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//本应为1+0+0，但此处为1+4+5，代码有问题需优化，优化如下

//优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

// ES6版本
var sum=function(a,b=4,c=5){
	return a+b+c;
}
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));
// VM670:4 6
// VM670:5 8
// VM670:6 10
// VM670:7 1

// ...Rest（剩余操作符）主要用在函数参数的声明中，可获得隐含的实参，取代ES5中函数隐藏变量arguments；arguments（获得所有实参）是个类数组对象，缺点不能像操作数组那样直接操作；..Rest操作符需放在了函数形参的最后


