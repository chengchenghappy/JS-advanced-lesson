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