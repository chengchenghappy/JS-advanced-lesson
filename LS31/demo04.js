// Set类似于数组，但是成员的值是唯一的，没有重复的值；用Set构造函数来生成Set对象，用法类似实例化数组对象，通过new实例化Set对象；通过add方法向Set结构部加入成员，Set结构不会添加重复的值
var s1=new Set([1,2,3,4,5,5,3,6,5,2]);
console.log(s1);
// VM1124:2 Set(6) {1, 2, 3, 4, 5, …}

var s2=new Set();
[2,3,4,5,5,2,2].map(x=>s2.add(x));
for(let i of s2){
	console.log(i);
}
// VM1128:4 2
// VM1128:4 3
// VM1128:4 4
// VM1128:4 5

var set=new Set([1,3,4,5,2,4,3,2,1,2,4]);
console.log([...set]);
// VM1132:2 (5) [1, 3, 4, 5, 2]

var item=new Set([1,2,3,4,5,6,5,5,5]);
console.log(item);
// VM1149:2 Set(6) {1, 2, 3, 4, 5, 6}

// !!!!!!!!!!
[...new Set([1,2,3,3])];
// (3) [1, 2, 3]

var set =new Set();
set.add({});
console.log(set.size);//1
set.add({});
console.log(set.size);
 // 2

 var s=new Set();
s.add(1).add(2).add(2);
console.log(s.size); // 2
console.log(s.has(1)); // true
console.log(s.has(2)); // true
console.log(s.has(3)); // false
console.log(s.delete(2));
console.log(s.has(2)); // false
// VM1233:3 2
// VM1233:4 true
// VM1233:5 true
// VM1233:6 false
// VM1233:7 true
// VM1233:8 false

var properties = new Set();
properties.add('width');
properties.add('height');
console.log(properties.size);
if (properties.has('width')&&properties.has('height')) {
    console.log("do something!");
}
// VM1243:4 2
// VM1243:6 do something!

// Array.from方法可以将Set结构转为数组
var item=new Set([1,2,3,4,5,6,5,5,5]);
var array=Array.from(item);
console.log(array);
// VM1267:1 (6) [1, 2, 3, 4, 5, 6]

console.log([...(new Set([1,2,3,4,4,3,4]))]);
// VM1284:1 (4) [1, 2, 3, 4]

console.log(...(new Set([1,2,3,4,4,3,4])));
// VM1293:1 1 2 3 4
// 如果不加[]的话，就不会转换成数组


// 下面是遍历Set的方法
var set = new Set(['red', 'green', 'blue']);
console.log(typeof set.keys());/
console.log(typeof set.values());
console.log(typeof set.entries());
// VM1303:2 object
// VM1303:3 object
// VM1303:4 object

var set = new Set(['red', 'green', 'blue']);
console.log(set.keys());
console.log(set.values());
console.log( set.entries());
// VM1304:2 SetIterator {"red", "green", "blue"}
// VM1304:3 SetIterator {"red", "green", "blue"}
// VM1304:4 SetIterator {"red", "green", "blue"}

var set = new Set(['red', 'green', 'blue']);
for (var item of set.keys()) {
    console.log(item);
}
for (var item of set.values()) {
    console.log(item);
}
for (var item of set.entries()) {
    console.log(item);
}
// VM1343:3 red
// VM1343:3 green
// VM1343:3 blue
// VM1343:6 red
// VM1343:6 green
// VM1343:6 blue
// VM1343:9 (2) ["red", "red"]
// VM1343:9 (2) ["green", "green"]
// VM1343:9 (2) ["blue", "blue"]

var set = new Set(['red', 'green', 'blue']);
for(var [key,value] of set.entries()){console.log(key,value);}
// VM1371:1 red red
// VM1371:1 green green
// VM1371:1 blue blue

// Set结构的实例的forEach方法，用于对每个成语执行某种操作，没有返回值
var set = new Set([1,2,3]);
set.forEach((value,key)=>console.log(value*2));
// VM1398:2 2
// VM1398:2 4
// VM1398:2 6

// 数组的map和filter方法也可以间接用于set了，通过...转成数组后调用后再生成set
var set = new Set([1,2,3]);
set=new Set([...set].map(x=>x*2));
// Set(3) {2, 4, 6}
var set = new Set([1,2,3,4,5]);
set=new Set([...set].filter(x=>(x%2)==0));
// Set(2) {2, 4}

let a=new Set([1,2,3]);
let b=new Set([4,3,2]);
let union=new Set([...a,...b]);
console.log(union);
// VM1475:1 Set(4) {1, 2, 3, 4}

let intersect=new Set([...a].filter(x=>b.has(x)));
console.log(intersect);
// VM1496:2 Set(2) {2, 3}

/*
WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
首先，WeakSet 的成员只能是对象，而不能是其他类型的值。

其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，
也就是说，如果其他对象都不再引用该对象，
那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
这是因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。
结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet 里面的引用，
都不计入垃圾回收机制，所以就不存在这个问题。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。
只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。
另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，
运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，
因此 ES6 规定 WeakSet 不可遍历。
*/