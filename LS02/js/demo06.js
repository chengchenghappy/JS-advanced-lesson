//其他类型转化成布尔类型
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean({}));

if(new Boolean(false)){
    console.log("执行");
}
//false
//false
//false
//false
//true
//false
//true
//true
//执行
//undefined 0 NaN null  "" 在Boolean中都将转化成false;其他情况（对象）将转化咸true