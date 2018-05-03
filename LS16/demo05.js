//简介调用this 
objA={name:"AA",x:1};
objB={name:"BB",x:5};
objA.test=function(){
	console.log(this.name,this.x);
};
objA.test();
objA.test.call(objB);
//AA 1
//BB 5


var bird={
	name:'liuy',
	fly:function(x,y){
		console.log("i'm"+this.name+"i can fly",x,y);
	}
};
var me ={
	name:"QL"
};
bird.fly(5,6);
bird.fly.call(me,7,8);
//i'mliuyi can fly 5 6
//i'mQLi can fly 7 8