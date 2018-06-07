{
	var a=23;
}
console.log(a);
// VM41:4 23

for(var i=0;i<5;i++){
	
}
console.log('i:',i);
// VM53:4 i: 5

var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};

// ƒ () {
//     console.log("userId = ",userId);
//     //alert("userId = "+userId);
// }
var a=2,b=3;
if(a<b){
    let userId = 234;
	console.log(userId);
}
// VM61:4 234