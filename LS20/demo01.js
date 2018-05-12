// demo01
console.log('moon2xyz'.replace(/o/,'ab'));
console.log('moon2xyz'.replace(/o/g,'ab'));
console.log('moon2 ooxyz'.replace(/\bo/g,'ab'));
console.log('moon2xyz'.replace(/\dx/,'_'));
console.log('moon2xyz'.replace(/[xyz]/g,'ab'));
console.log('moon2x2z'.replace(/\d[zo]/g,'ab'));
console.log('moon2x2z'.replace(/2[x-z]/g,''));
//  mabon2xyz 没有声明全局匹配一个
//  mababn2xyz 声明了全局所以全部匹配
//  moon2 aboxyz！！！！！！！！！！！！！！
//  moon_yz！！！！！！！！！！！！
//  moon2ababab
//  moon2xab
//  moon


// 对于文章中的转换应该如何定义

//正则表达式的表示方法
// 方法一：通过字面量直接创建
var reg1=/[bcf]at/gi;
// 方法二：通过RegExp构造函数来实例化正则对象
// match是用来和正则表达式一起用的
var reg2=new RegExp(/[bcf]at/,'gi');
var reg3=new RegExp('[bcf]at','gi');

console.log('a fAt bat,a faT cat'.match(reg1));
console.log('a fAt bat,a faT cat'.match(reg2));
console.log('a fAt bat,a faT cat'.match(reg3));
//(4) ["fAt", "bat", "faT", "cat"]
//(4) ["fAt", "bat", "faT", "cat"]
// (4) ["fAt", "bat", "faT", "cat"]

// 注意和replace表达形式的不一样