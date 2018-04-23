//通过字面量的方式创建 JS对象
var obj={
	num:10,
	str:'Hi',
	show:function(){
		return this.str;
	}
}
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());
//10
//Hi
//Hi


//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var obj={
	num:10,
	str:'Hi',
	show:function(){
		return this.str;
	}
}
var newObj = Object.create(obj);
newObj.age = 23;
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);//newObj自身的属性
//10
//Hi
//Hi
//23


//构造函数的方式创建JS对象
//JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.sayhi=function(){
	console.log(this.name,this.age);
}
var p=new Person('Mike',23);
p.sayhi();
// Mike 23