//加上“z”是中国时间，没有加上是GMT时间
console.log(Date.parse('2010-01-01 11:12:23.111'));
console.log(new Date('2010-01-01 11:12:23.111'));
console.log(new Date().toISOString());
// 1262315543111
//Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
//2018-05-07T13:10:26.035Z

console.log(Date.parse('2010-01-01 11:12:23.111z'));
console.log(new Date('2010-01-01 11:12:23.111z'));
console.log(new Date().toISOString());
//1262344343111
//Fri Jan 01 2010 19:12:23 GMT+0800 (中国标准时间)
// 2018-05-07T13:10:43.451Z

console.log(new Date('2012'));
console.log(new Date('2012-02'));
console.log(new Date('2012-02-22'));
//Sun Jan 01 2012 08:00:00 GMT+0800 (中国标准时间)
//Wed Feb 01 2012 08:00:00 GMT+0800 (中国标准时间)
//Wed Feb 22 2012 08:00:00 GMT+0800 (中国标准时间)

console.log(new Date("1999-11-22T13:17"));
console.log(new Date("1999-11-22T13:17:11"));
console.log(new Date("1999-11-22T13:17:11.111"));
console.log(new Date("1999-11-22T13:17:11.111Z"));
// Mon Nov 22 1999 13:17:00 GMT+0800 (中国标准时间)
// Mon Nov 22 1999 13:17:11 GMT+0800 (中国标准时间)
// Mon Nov 22 1999 13:17:11 GMT+0800 (中国标准时间)
// Mon Nov 22 1999 21:17:11 GMT+0800 (中国标准时间)

console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());
console.log(new Date("1970-01-02") > new Date("1970-01-01"));
console.log(new Date("1970-01-02") - new Date("1970-01-01"));
console.log(new Date((new Date("1970-01-01").getTime())+86400000));
// 0
//86400000
//-315532800000
//true
//86400000