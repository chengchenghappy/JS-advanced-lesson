// 变量共享的问题
for(var i=0;i < 3;i++){
	setTimeout(function(){
		console.log(new Date,i);
	},1000*i);
}
console.log("i:",i);
// VM99:6 i: 3
// VM99:3 Thu Jun 07 2018 19:18:46 GMT+0800 (中国标准时间) 3
// VM99:3 Thu Jun 07 2018 19:18:47 GMT+0800 (中国标准时间) 3
// VM99:3 Thu Jun 07 2018 19:18:48 GMT+0800 (中国标准时间) 3

for(var i=0;i < 3;i++){
	(function(j){
        setTimeout(function(){
            console.log(new Date,i);
        },1000*i);
    })(i);
}
console.log("i:",i);
// VM109:8 i: 3
// VM109:4 Thu Jun 07 2018 19:20:13 GMT+0800 (中国标准时间) 3
// VM109:4 Thu Jun 07 2018 19:20:14 GMT+0800 (中国标准时间) 3
// VM109:4 Thu Jun 07 2018 19:20:15 GMT+0800 (中国标准时间) 3