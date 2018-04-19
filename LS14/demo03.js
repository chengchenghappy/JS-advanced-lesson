var person={name:'Jack'};
Object.defineProperty(person,'name',{
	value:"Mike",
	writable:false,
	configurable:false,
	enumerable:true
	
});
console.log(person.name);
person.name='Lucy';
console.log(person.name);
delete person.name;
console.log(person.name);
//Mike
//Mike
//Mike
// 因为定义的person是不可枚举的，即不能去上一层寻找，则只能输出自身定义的Mike

var person={name:'Jack'};
Object.defineProperty(person,'name',{
	writable:false,
	configurable:false,
	enumerable:true
});
console.log(person.name);
person.name='Lucy';
console.log(person.name);
delete person.name;
console.log(person.name);
//Jack
//Jack
//Jack
// 因为定义的person是可枚举的，即能去上一层寻找，则只能输出自身定义的MJack