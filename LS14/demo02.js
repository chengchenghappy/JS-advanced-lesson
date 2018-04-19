//JS属性的设置
//当属性没有写明的时候就是FALSE
var obj={
	x:1,
	y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
//y 2

var obj={
	x:1,
	y:2
};
Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
for(var k in obj){
    console.log(k,obj[k]);
}
// y 2  尽管设置了value，但是因为不可以枚举，以及不可写，不可读的性质，所以value输出