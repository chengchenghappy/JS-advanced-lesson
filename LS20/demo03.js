// demo3
// 匹配一个词的边界 \b 一个词的边界就是一个词不被另外一个词跟随的位置或者不是另一个词汇字符前边的位置。
// 注意:一个匹配的词的边界并不包含在匹配的内容中。
console.log(/oo/.test('moon'));
console.log(/oo\b/.test('moon'));
console.log(/oon\b/.test('moon'));
console.log(/\boo/.test('moon'));
//true
//false
//true
//false

// 对\b的理解
var reg=/ab\b/gi;
console.log('abcdab'.match(reg));
// ["ab"]

var reg=/ab\b/gi;
console.log('cdeabcdab'.match(reg));
// ["ab"]

var reg=/\bab/gi;
console.log('cdeabcdab'.match(reg));
// null

// search的用法！！！！！！！！！！！！！！！！！！！！！！
console.log('moon'.search(/oo/));
console.log('moon'.search(/oo\b/));
console.log('moon'.search(/oon\b/));
console.log('moon'.search(/\boo/));
// 1
//-1
// 1
// -1


//匹配一个非单词边界 \B 他匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词。
//一个字符串的开始和结尾都被认为是非单词。
console.log(/oo\B/.test('moon'));
console.log(/oon\B/.test('moon'));
console.log(/oo\B/.test('moon'));
console.log(/\Boo\B/.test('moon'));
// true
// false
// true
// true

console.log('moon'.match(/oo\B/));
console.log('moonoonxoo'.match(/oo\B/));
console.log('moon'.match(/oon\B/));
console.log('moon'.match(/\Boo\B/));
// ["oo", index: 1, input: "moon", groups: undefined]
// ["oo", index: 1, input: "moonoonxoo", groups: undefined]
// null
// ["oo", index: 1, input: "moon", groups: undefined]

'noonday'.search(/\Boo/);
// 1
'noonday'.replace(/\Boo/,'XX');
// "nXXnday"

console.log('aaa'.replace(/\Ba/,'x'));
// axa

console.log('possibly yesterday'.replace(/y\B./,'aaa'));
console.log('possibly yesterday'.replace(/y\B/,'aaa'));
// possibly aaasterday 点就是后面的以为去除
// possibly aaaesterday

/*
\w
匹配一个单字字符（字母、数字或者下划线）。
等价于[A-Za-z0-9_]。
例如, /\w/ 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。
*/

/*
\W
匹配一个非单字字符。
等价于[^A-Za-z0-9_]。
例如, /\W/ 或者 /[^A-Za-z0-9_]/ 匹配 "50%." 中的 '%'。
 */
console.log('sdafsa sdfea2s'.replace(/a\ds/g,'*'));
console.log('sdafsa sdfea2s'.replace(/a\Ds/g,'*'));
console.log('sdafsa sdfea2s'.replace(/a\ws/g,'*'));
console.log('sdafsa sdfea2s'.replace(/a\Ws/g,'*'));
// sdafsa sdfe*
// sd**dfea2s
// sd*a sdfe*
// sdafs*dfea2s
// 从\d前面的单词起替代他后面的一个数字，直至下一个词，若是没有后面的那个词，就只单纯的替代就可以,若是后面的那个词没有出现就不会替代

//  \s匹配一个空白字符 例如, /\s\w*/ 匹配"foo bar."中的' bar'
//  \S匹配一个非空白字符 例如, /\S\w*/ 匹配"foo bar."中的'foo'

var str = "test22314234244dgfqeqe232qe13ed";
var newStr = str.search(/\dqe/);
console.log(newStr);
str.replace(/\dqe/,11223344);
console.log(str);
// 24
// test22314234244dgfqeqe232qe13ed

//匹配一个非单词边界  /\B../匹配"noonday"中得'oo', 而/y\B./匹配"possibly yesterday"中得’ye‘
console.log("noonday".match(/\B../));
console.log(/\B../.test("noonday"));
// ["oo", index: 1, input: "noonday", groups: undefined]
// true

//特殊的转义字符
'a2d5'.replace(/\w/gi,'X');
//"XXXX"
'a2d5'.replace(/\W/gi,'X');
//"a2d5"
'a2d5'.replace(/\D/gi,'X');
//"X2X5"
'a2d5'.replace(/\d/gi,'X');
//"aXdX"
'a2d5'.replace(/\s/gi,'X');
//"a2d5"
'a2d5'.replace(/\t/gi,'X');
//"a2d5"
'a2 d5 hello world'.replace(/\t/gi,'X');
//"a2 d5 hello world"
'a2 d5 hello world'.replace(/\h/gi,'X');
//"a2 d5 Xello world"
'a2 d5 hello world'.replace(/ \s/gi,'X');
//"a2 d5 hello world"