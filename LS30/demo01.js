var f=function(v){
	return v+1;
};
f(2);
// 3
// 等效
var f=v=>{return v+1;};
f(2);
// 3

// 没有参数和有多个参数情况下，需要使用小括号来表示参数，如果有多条语句则需要有大括号
var f=()=>5;
// 等价于
var f=function(){
	return 5;
};

var foo=(num1,num2)=>{
	if(num1>num2){
		return num1*2;
	}else{
		return num2*2;
	}
};
foo(2,3);
// 6
var foo=function(num1,num2){
	if(num1>num2){
		return num1*2;
	}else{
		return num2*2;
	}
};
foo(2,3);
// 6

var max=function(a,b){
	return a>b?a:b;
};
max(2,3);
// 3
var max=(a,b)=>{return a>b?a:b;};
max(2,3);
// 3

const full=({first,last})=>last+' '+first;
full({first:"Ming",last:"Li"});
// "Li Ming"

function full({first,last}){
	return last+' '+first;
}
full({first:"Ming",last:"Li"});
// "Li Ming"