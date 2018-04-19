var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;
console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log(obj.toString());//[object object]
//toString()返回该对象的字符串表示。通常，ToString方法会返回一个"以文本方式表示"此对象的字符串。
//结果应是一个简明但易于读懂的信息表达式
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1
//y 2
// z 3
//不能访问到toString的值