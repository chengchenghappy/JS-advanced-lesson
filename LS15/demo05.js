function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.sayhi=function(){
	console.log(this.name,this.age);
}
var p1=new Person('Mike');
console.log(p1.name);
console.log(p1.age);
p.sayhi();
console.log(p1.__proto__===Person.prototype);
//Mike
//undefined
// Mike undefined
//true