var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);
//Jack
//Lucy
//Lucy
//因为configurable是false,所以不能删除

var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:true,
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;//delete person.name;
console.log(person.name);
//Jack
//Lucy
//undefined