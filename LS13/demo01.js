//JS对象是一种复合值，将很多值复合在一起，JS对象是若干属性的属性，可以直接通过属性名来访问对象的属性
//函数作为某一个对象的属性时，称其为该对象的方法
var obj ={
	num:10,
	str:'Hi',
	show:function(){
		console.log(this.str);
	}
};
console.log(obj.num);
console.log(obj.str);
obj.show();
// 10  
// Hi
// Hi
