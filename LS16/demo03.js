//函数作为对象的一个属性时，称之为对象的方法
var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		this.x=x;
		this.y=y;
	}
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);
//{x: 1, y: 1, moveTo: ƒ}

var Person=function (name,age){
	this.name=name;
	this.age=age;
	this.showMe=function(){
		console.log(name,age);
	}
}
var p1=new Person('Mike',23);
p1.showMe();

//Mike 23

var Person=function (name,age){
	this.namePrivate=name;
	this.agePrivate=age;
	this.showMe=function(){
		console.log(namePrivate,agePrivate);
	}
}
var p1=new Person('Mike',23);
p1.showMe();
//此时是私有属性，是闭包，无法访问到，会报错