//'_'作用是成为私有变量
var o={
	_x:1.0,
	get x(){
		return this._x;
	},
	set x(val){
		this._x=val;
	}
};
console.log(o.x);
o.x=2;
console.log(o.x,o._x);
// 1
//2 2
//若是都改写成x将会报错!!!!!!!!!!1
var o={
	x:1.0,
	get x(){
		return this._x;
	},
	set x(val){
		this._x=val;
	}
};
console.log(o.x);
o.x=2;
console.log(o.x,o._x);
//undefined
// 2 2

//只读
var o={
	_x:1.0,
	get x(){
		return this._x;
	}
};
console.log(o.x);
o.x=2;
console.log(o.x,o._x);
//1
//1 1


var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);
//请设置正常年龄
//23
//将p1.age = 178;改成p1.age = 13;就会输出13，就会有保护的作用


var p ={
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(q.r);
console.log(q.theta);
//2.8284271247461903
//0.7853981633974483