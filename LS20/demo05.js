// demo05
//贪婪模式和非贪婪模式
// 默认为贪婪模式（即尽可能多的匹配），在量词后加？可设置为非贪婪模式
"12345678".replace(/\d{3,6}/,'X');
"X78"
"12345678".replace(/\d{3,6}?/,'X');
"X45678"
"12345678".replace(/\d{3,6}?/g,'X');
"XX78"

console.log('noonday'.replace(/o?/g,'*'));
// *n***n*d*a*y*
console.log('noonday'.replace(/o{5}/g,'*'));
// noonday
console.log('nooooooonday'.replace(/o{5}/g,'*'));
// n*oonday
console.log('nooooooonday'.replace(/o{1,2}/g,'*'));//贪婪算法，以最大的作为基础
// n****nday

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));
// NameNameName_11111
// X_11111

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));
// a1b2c3d4e5
// Xd4e5
// Xe5
// Xd4e5