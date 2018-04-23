var obj={
	num:10,
	str:'Hi',
	show:function(){
		return this.str;
	}
};
console.log(obj.__proto__);
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(obj.__proto__===Object.prototype);
//true

var obj={
	num:10,
	str:'Hi',
	show:function(){
		return this.str;
	}
};
var newObj=Object.create(obj);
newObj.age=23;
console.log(newObj.__proto__);
console.log(newObj.__proto__===obj);
//{num: 10, str: "Hi", show: ƒ}
//true

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null