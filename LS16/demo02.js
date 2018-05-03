//严格模式下的this
function thisTest(){
	'use strict'
	console.log(this);
}
thisTest();
// undefined

//判断是否是严格模式
function isStrictMode(){
	return this==undefined?true:false;
}
isStrictMode();
//false