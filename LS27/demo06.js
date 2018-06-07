console.log(a);
var a=1;
console.log(a);
// VM206:1 undefined
// VM206:3 1
//在用ｖａｒ定义的时候，要提前

var temp=new Date();
function f(){
	console.log(temp);
		var temp='Hi!';
}
f();
// VM218:3 undefined
// 改为ｌｅｔ后会报错

var temp=new Date();
function f(){
	console.log(temp);
		let temp='Hi!';
}
f();
// 报错，ｌｅｔ不会提前