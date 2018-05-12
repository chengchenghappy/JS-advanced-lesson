// demo07
// global 默认为false
// ignore case 默认为false
// multiline 默认为false 
// lastIndex 表示当前匹配内容的最后一个字符的下一个位置
// sourse 正则表达式文本字符串

var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);
// false false false 0 "\w"
// true true false 0 "\w"