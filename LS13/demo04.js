//创建对象
//通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
console.log(obj.show());//Hi
console.log(obj.__proto__);//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(obj.__proto__ === Object.prototype);//true


//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
var newObj = Object.create(obj);//newObj的原型是obj
newObj.age = 23;
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);//自有属性
console.log(newObj.__proto__);
console.log(newObj.__proto__ === obj);
// 10
// Hi
// Hi
// 23
// {num: 10, str: "Hi", show: ƒ}
// true

//构造函数的方式创建JS对象  此处略讲，详情参照后续面向对象编程 注：JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();


//hello,i'm Mike 21 years old

var objStr = new Object("xxx");
console.log(typeof objStr);//object
console.log(objStr instanceof String);//true

var objNum = new Object(23);
console.log(typeof objNum);//object
console.log(objNum instanceof Number);//true

var objBoolean = new Object(true);
console.log(typeof objBoolean);//object
console.log(objBoolean instanceof Boolean);//true


