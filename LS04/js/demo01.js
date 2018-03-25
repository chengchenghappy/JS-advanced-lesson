var a = [1,2,3];
var b = a;
console.log(a,b);
b.pop();
console.log(a,b);
b = [4,5,6];
console.log(a,b);
// (3) [1, 2, 3] (3) [1, 2, 3]
// (2) [1, 2] (2) [1, 2]
// (2) [1, 2] (3) [4, 5, 6]
//开始时a开辟了内存，但是b只是简单的赋值，并没有开辟自己的内存空间，而是直接指向了a的内存空间，
//则b删除的时候a的数据也就发生了变化，都输出[1,2],后来又给b进行了赋值，此时a的内存空间没有发生变化那么还是输出[1,2],但是b有开辟了
//新的内存空间，则输出新的内容

function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
    //console.log(x);输出[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a);
//[1,2,3,4] 后来只是开辟了临时变量，直接释放了，并没有影响后来的函数的调用



//有问题没有解决！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
function foo(x) {
    x.push(4);
    //console.log(x); 输出[1,2,3,4]
    x.length = 0;
    x.push(5,6,7,8);
    //console.log(x);输出[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a);
//输出[5,6,7,8]



//字面量
var obj = {x:1,y:2};
var arr = [1,2,3,4,5];

//关键字知多少 arguments、break、continue...

//表达式与语句 表达式语句
var o = {x:1,y:2};
a>b;

// 存在二义性的语句，要避免有二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
// 下述代码是对象还是语句块
{
    foo:max(2,3)
}

// 存在二义性的语句 补充一
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}

// 存在二义性的语句 补充二
var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}


