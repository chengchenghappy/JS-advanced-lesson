var obj={x:5};
Object.defineProperty(obj,'y',{
	configurable:false,
	writable:false,
	enumerable:true,
	value:6
});
Object.defineProperty(obj,'z',{
	configurable:false,
	value:7
});
Object.getOwnPropertyDescriptor(obj,'x');
Object.getOwnPropertyDescriptor(obj,'y');
Object.getOwnPropertyDescriptor(obj,'z');
//{value: 5, writable: true, enumerable: true, configurable: true}
//{value: 6, writable: false, enumerable: true, configurable: false}
//{value: 7, writable: false, enumerable: false, configurable: false}