//原型链综述
var proObj={
	z:3,
};
var obj=Object.create(proObj);
obj.x=1;
obj.y=2;
console.log(obj.x);
console.log(obj.y);
console.log(obj.z);
//1
//2
//3

console.log('z' in obj);
console.log(obj.hasOwnProperty('z'));
//true
//false


//原型链属性操作
var proObj={
	z:3,
};
var obj=Object.create(proObj);
obj.x=1;
obj.y=2;
obj.z=5;
console.log(obj.hasOwnProperty('z'));
console.log(obj.z);
console.log(proObj.z);
//true
//5
//3

obj.z = 8;
console.log(obj.z);
//8

delete obj.z;
console.log(obj.z);

delete obj.z;
console.log(obj.z);
//上面的两个都可以删除，且结果都是3，只是第一个删除后，第二个只是默认报错，就是只是有结果，实际上没有什么了

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了