// demo2
// 注意 g 是指全局，i是指不区分大小写，一下是用来检验
var regExp=/ab/i;
var matchResult='xxAbcaaBbxyz'.match(regExp);
console.log(matchResult);
//["Ab", index: 2, input: "xxAbcaaBbxyz", groups: undefined]

var regExp=/ab/gi;
var matchResult='xxAbcaaBbxyz'.match(regExp);
console.log(matchResult);
//(2) ["Ab", "aB"]

var regExp=/a*b/gi;
var matchResult='xxAbcaaBbxyz'.match(regExp);
console.log(matchResult);
//(3) ["Ab", "aaB", "b"]

// 注意*和.的区别！！！！！！！！！！！！！！！！
var regExp=/a.b/gi;
var matchResult='xxAbcaaBbxyz'.match(regExp);
console.log(matchResult);
// ["aaB"]

// test的了解！！！！！！！！！！！！！
var regExp=/a/i;
console.log(regExp.test('ab'));
console.log(regExp.test('ab'));
console.log(regExp.test('ab'));
console.log(regExp.test('ab'));
// true
// true
// true
// true

var regExp=/a/gi;
console.log(regExp.test('ab'));
console.log(regExp.test('ab'));
console.log(regExp.test('ab'));
console.log(regExp.test('ab'));
// true
// false
// true
// false