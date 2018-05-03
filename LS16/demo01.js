function thisTest(){
	console.log(this===window);
}
thisTest();
// true thisTest函数在全局直接调用，里面的this指向的是window

function thisTest(x,y){
	this.x=x;this.y=y;
	console.log('zzzz');
	console.log(this===window);
}
console.log(this===window);
thisTest();
//true
//zzzz
//true

var a=10;b='Hi';
function thisTest2(){
	this.a=20;
	delete this.b;
	this.c='新添加的属性';
}
thisTest2();
console.log(a,c);
//20 "新添加的属性"
//非严格模式下的this是可以随意的增加、删除、修改的