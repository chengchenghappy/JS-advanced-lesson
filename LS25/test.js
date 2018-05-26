window.onload=function(){
    console.log("window onload");
    var div1=document.getElementById("div1");
    div1.onclick=function(){
        console.log("div1 onclick");
    }
}
// div1.ondrag=function(){
//     console.log("ondrag");
// }

// window.onload=function(e){
//     console.log(e.target);
//     console.log(this);//监听对象
//     var div1=document.getElementById("div1");
//     div1.onclick=function(e){
//         // console.log(e,e.target);
//         // console.log(e.target,this);
//         console.log(e);
//         // console.log(e.hasOwnProperty);

//         console.log(e);
//         console.log(e.__proto__);
//         console.log(e.__proto__.__proto__);
//         console.log(e.__proto__.__proto__.__proto__);
//         console.log(e.__proto__.__proto__.__proto__.__proto__);

//         document.addEventListener("xx",function(){console.log("11")});
//         document.dispatchEvent(new Event("my clik"));
//     };
// }

// var div1=document.getElementById("div1");
// window.onload=function(e){
//         document.addEventListener("xx",function(){console.log("11")});
//         document.dispatchEvent(new Event("my clik"));
// }



// DOM0级事件响应
// window.onload=function(e){
//     var div1=document.getElementById("div1");
//     function clickHandle(e){
//         console.log(e.target);
//     }
//     div1.onclick=clickHandle;
//     div1.onclick=function(){
//         console.log("xx");//最后会输出这句话，如果再次写onclick的时候就会把上一次的覆盖，只是针对0级操作
//     }

//     div2.onclick=clickHandle;
//     div2.onclick=null;
// }


// DOM2级事件响应
// window.onload=function(e){
//     var div1=document.getElementById("div1");
//     var div2=document.getElementById("div2");
//     function clickHandle(e){
//         console.log(e.target);
//     }
//     div1.addEventListener("click",clickHandle);
//     div1.removeEventListener("click",clickHandle);//取消事件监听

// }

