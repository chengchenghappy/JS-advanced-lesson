//创建数组的不同方式
var arr1 = [1,2,3,"4"];

var arr2 = new Array(5);
console.log(arr2);
for(var i=0;i<arr2.length;i++){arr2[i] = i;}

var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}

var arr3 = new Array(1,2,3,4);
console.log(arr1,arr2,arr3);

//数组直接量中的值不一定要是常量，可以是任意的表达式
var base = 1024;
var table = [base,base+1,base+2,base+3];
//也可包含对象直接量或其他数组直接量
var b = [[1,{y:2}],[2,{x:3}]];

//回顾数据类型思考：
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);

function idLog(x){
	try{
		var arr=new Array(-1);
	}
	catch(e){
		console.log(e);
	}
	finally{
		console.log('222');
	}
}
idLog(123);
//RangeError: Invalid array length
//    at idLog (<anonymous>:3:11)
   // at <anonymous>:12:1
// 222