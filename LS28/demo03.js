const [a, b, c, d, e] = 'hello';
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
/*VM677:2 h
VM677:3 e
VM677:4 l
VM677:5 l*/

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
console.log(len); // 5

//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
let {toString: s1} = 123;
console.log(s1); //
//s1 === Number.prototype.toString // true

let {toString: s2} = true;
console.log(s2); //
//s2 === Boolean.prototype.toString // true