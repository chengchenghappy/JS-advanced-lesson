for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
// 3
// VM172:3 Thu Jun 07 2018 19:28:28 GMT+0800 (中国标准时间) 3
// VM172:3 Thu Jun 07 2018 19:28:29 GMT+0800 (中国标准时间) 3
// VM172:3 Thu Jun 07 2018 19:28:30 GMT+0800 (中国标准时间) 3

// let解决的变量共享的问题
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
// 6
// VM175:3 Thu Jun 07 2018 19:28:40 GMT+0800 (中国标准时间) 0
// VM175:3 Thu Jun 07 2018 19:28:41 GMT+0800 (中国标准时间) 1
// VM175:3 Thu Jun 07 2018 19:28:42 GMT+0800 (中国标准时间) 2