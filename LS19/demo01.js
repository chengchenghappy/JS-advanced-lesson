//时间以1999.1.1.00.00

var date1=new Date(2017,9,18,12,34,1);
console.log(date1);
//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)

var date2=new Date(18,12,34,1);
console.log(date2);
//Mon Feb 03 1919 01:00:00 GMT+0800 (中国标准时间) 

var date3=new Date('2018-5-7');
console.log(date3);
// Mon May 07 2018 00:00:00 GMT+0800 (中国标准时间)


var date4=new Date(1000);//以毫秒为单位，数值就是时间
console.log(date4);
//Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)

var date=new Date();//获取当前时间
console.log(date);
// Mon May 07 2018 20:41:07 GMT+0800 (中国标准时间)

var date2=new Date(NaN)
console.log(date2);

// Invalid Date
date2 instanceof Date
//true

var d1=new Date();
var d2=Date();
console.log(d1,typeof d1);
console.log(d2,typeof d2);
//Mon May 07 2018 20:43:46 GMT+0800 (中国标准时间) "object"
//Mon May 07 2018 20:43:46 GMT+0800 (中国标准时间) string
//两者输出结果是一样的，只是两者的数据类型不一样


