/ 解构赋值是指ES6允许按照一定的模式，从数组和对象中提取值，对变量进项赋值
var a=1;
var b=2;
var c=3;
console.log(a,b,c);
// VM282:4 1 2 3
// 用解构赋值
var [a,b,c]=[1,2,3];
console.log(a,b,c);
// VM298:1 1 2 3

let[foo,[[bar],baz]]=[1,[[2],3]]
console.log(foo,bar,baz);
// VM321:1      1 2 3

let [,,xx]=["foo","bar","baz"];
console.log(xx);
// VM338:2      baz

let[x,,y]=[1,2,3];
console.log(x,y);
// VM354:2     1 3

let [head,...tail]=[1,2,3,4];
console.log(head,tail);
// VM375:2    1 (3) [2, 3, 4]

let [d,e,...f]=['a'];
console.log(d,e,f);
// VM394:2     a undefined []

let[x2,y2]=[1,2,3];
console.log(x2,y2);
// VM412:2 1 2

let [a2,[b2],d2]=[1,[2,3],4];
console.log(a2,b2,d2);
// VM431:2 1 2 4

//解构赋值中的默认值
var [foo3 = true] = [];
[x3, y3 = 'b'] = ['a']; 
[x4, y4 = 'b'] = ['a',undefined];
console.log(foo3,x3,y3,x4,y4);
// true "a" "b" "a" "b"

// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [x5 = 1] = [undefined];//x5 为 1
var [x6 = 1] = [null];//x6 为 null

function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);
// VM443:5 1

let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
console.log(m1,n1,m2,n2,m3,n3);
VM453:5 1 1 2 2 1 2

let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);
// VM480:4 false