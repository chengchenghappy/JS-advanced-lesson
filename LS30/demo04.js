function test(){
	console.log(arguments);
}
test("a","b","c");
// VM707:2 Arguments(3) ["a", "b", "c", callee: ƒ, Symbol(Symbol.iterator): ƒ]

function test(){
	console.log(test.arguments);
}
test("a","b","c");
// VM712:2 Arguments(3) ["a", "b", "c", callee: ƒ, Symbol(Symbol.iterator): ƒ]

function f(...y){
	console.log(y);
}
f("a","b","c");
// VM731:2 (3) ["a", "b", "c"]

function add(...values){//此时变成了[2,3,4]
	let sum=0;
	for(var val of values){
		sum+=val;
	}
	return sum;
}
add(2,3,4);
// 9

// ...Spread（扩展操作符）主要用在函数的调用中（虽然也是...，但是使用场景不同）；Spread将一个数组转换成一个用逗号隔开的参数序列，是...Rest的逆过程；在call和apply的转换过程中十分有用

function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);//等价于f("a","b","c");
f("a");//输出 "a",[]
f();//输出 undefined,[]

//Part333333333333 扩展知识 call与apply的转换 两者之间的区别 课通过...Rest和...Spread转换
function abc(...v){
    console.log(v)
}
o1 = {};
abc.call(o1,...[1,2,3]);//等效于 abc.apply(o1,[1,2,3]);