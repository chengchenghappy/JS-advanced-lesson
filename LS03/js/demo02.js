var str2 =console.log( "abcdef".slice(2));//截取
var str3 = console.log("abcdef".slice(2,5));
var str4 =console.log( "abcdef".slice(-2));
var str5 =console.log( "abcdef".slice(2,-2));

var arr6 =console.log( "abcdef".split("c"));//从c开始分开，并且转化成数组
var arr7 =console.log( "abcdef".split("c",1));//从c开始分开，并且转化成数组，保留一个
var arr8 =console.log( "abcdef".split("c",2));

var str9 =console.log( "abcdef".charAt(2));//返回指定位置的字符。
var str10 = console.log("abcdef".charCodeAt(3));//返回字符串第一个字符的 Unicode 编码
var str11 = console.log("abcdefabcdef".indexOf("d",1));//可返回某个指定的字符串值在字符串中首次出现的位置
var str12 =console.log( "abcdefabcdef".indexOf("d",4));//后面的数字表示从第几个位置开始检索
//cdef
//cde
//ef
//cd
//(2) ["ab", "def"]
//["ab"]
//(2) ["ab", "def"]
//c
//100
//3
//9


//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏
