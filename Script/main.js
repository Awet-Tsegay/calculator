let digit1=document.getElementById("num1");
let digit2=document.getElementById("num2");
let add=document.getElementById("add");
let sub=document.getElementById("sub");
let mul=document.getElementById("mul");
let divi=document.getElementById("divi");
let resu=document.querySelector("span");



function addition(a,b){
    return a+b;
}
function subtruction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}

add.onclick=()=>{
 let value1=parseInt(digit1.value);
let value2=parseInt(digit2.value);
if(!isNaN(value1)&&!isNaN(value2)){
let result=addition(value1,value2);
   resu.innerText=result;
   
}
else{
    resu.innerText="0";
}
}
sub.onclick=()=>{
    let value1=parseInt(digit1.value);
   let value2=parseInt(digit2.value);
   if(!isNaN(value1)&&!isNaN(value2)){
   let result=subtruction(value1,value2);
      resu.innerText=result;
   }
   else{
    resu.innerText="0";
}
   }
   mul.onclick=()=>{
    let value1=parseInt(digit1.value);
   let value2=parseInt(digit2.value);
   if(!isNaN(value1)&&!isNaN(value2)){
   let result=multiplication(value1,value2);
      resu.innerText=result;
   }
   else{
    resu.innerText="0";
}
   }
   divi.onclick=()=>{
    let value1=parseInt(digit1.value);
   let value2=parseInt(digit2.value);
   if(!isNaN(value1)&&!isNaN(value2)){
   let result=division(value1,value2);
      resu.innerText=result;
   }
   else{
    resu.innerText="0";
}
   }

