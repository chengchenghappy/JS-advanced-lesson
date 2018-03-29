//高阶函数
function add(x, y, f) {
    return f(x) + f(y);
}
console.log(add(2,3,function(z){return z*z;}));
console.log(add(2,-3,Math.abs));
console.log(add(2,3,Math.sqrt));
// 13  2*2+3*3
// 5   2+3
//3.1462643699419726 

function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
console.log(foo(1,1,f1,f3));
console.log(foo(1,1,f3,f2));
console.log(foo(1,1,f1,f2));
// 1   2*(1+1)-3*(1*1)
// 2   2*(1*1)-3*(1-1)
//4    2*(1+1)-3*(1-1)

var word_2 = "do another thing.";
var function_1=function(callback){
    this.word_1 = "do something.";
    console.log(this.word_1);
    (callback && typeof(callback) === "function") && callback();//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
};
var function_2=function(){console.log(this.word_2)};
function_1(function_2);
//do something 
//do another thing
//先调用自身，后调用实参

var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());
console.log("输出：",obj.fun3()());
console.log("输出：",obj.fun4());
// 输出： ƒ fun2() {
//     return this.x;
// }相当于fun3（）是一个函数
// 输出： 12  fun3（）作为一个函数后又调用了全局函数
// 输出： 34  作为一个普通的函数进行调用


//间接或者绑定达到指向的目的