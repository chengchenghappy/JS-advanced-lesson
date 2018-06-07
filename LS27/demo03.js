// let的用噶与var类似，其与var的不同在于，用let声明的变量只在let命令所在的代码块{}内有效
// let定义的变量并不想var那样直接作为全局对象的属性
let userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
};

// ƒ () {
//     console.log("userId = ",userId);
// }

let a=2,b=3;
if(a<b){
    let userId = 234;
}

let x=23;
let y=34;
console.log(window.x,window.y);
// undefined undefined

var x=23;
let y=34;
console.log(window.x,window.y);
// VM149:3 23 undefined
