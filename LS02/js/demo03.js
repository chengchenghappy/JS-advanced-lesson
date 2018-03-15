var str = "abc_def_ghi_jkl_mn";
console.log(str.split("_"));
console.log(str.split("_",2));
console.log(str.concat("_opq"));
console.log(str.substr(4,7));
console.log(str.substring(4,7));
console.log(str.slice(2));
console.log(str.slice(2,5));
console.log(str.slice(-2));
console.log(str.slice(2,-2));
//(5) ["abc", "def", "ghi", "jkl", "mn"]转换成数组
//(2) ["abc", "def"]转化成数组，后面数字是第二个
//abc_def_ghi_jkl_mn_opq添加新的末尾
//def_ghi前面数字是下标，后面是长度
//def前后都是下标
//c_def_ghi_jkl_mn截取，第一个数字是下标，负数从后面开始取
//c_d
// mn
//c_def_ghi_jkl_
