//构造函数中的this只带通过new新创建的对象
function Point(x,y){
	this.x=x;
	this.y=y;
}
var p=new Point(2,3);
console.log(p);
// Point {x: 2, y: 3}
Point(5,6);
console.log(window.x,window.y);
//5 6
//this是定义在window上的