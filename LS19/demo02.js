console.log(Date.now());//以毫秒为单位，到现在的时间
//1525697166273

console.log((new Date()).getTime());//和Date.now()的结果是一样的
// 1525697208876

console.log(Date.parse('1970-01-01'));//转成毫秒，从1970年1月1日 00:00:00开始计算
console.log(Date.parse('1970-01-02'));
//0
// 86400000

console.log(Date.UTC(2017-9-1));//转成毫秒 标准时间
//1167609600000


var d=new Date('1978-11-25');
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
//1978 10 6 25 8
//-480

d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
// 1978 10 6 11 8

d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1999 5 4 3 8

var d=new Date(2012,3,21,15,7,23,234);//地域计时方法
console.log(d.toTimeString(),'____',d.toLocaleTimeString());
console.log(d.toDateString(),'____',d.toLocaleDateString());
console.log(d.toJSON);
//15:07:23 GMT+0800 (中国标准时间) ____ 下午3:07:23
//Sat Apr 21 2012 ____ 2012/4/21
//ƒ toJSON() { [native code] }