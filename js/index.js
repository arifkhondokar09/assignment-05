




document.getElementById("btn-fix-mobile").addEventListener("click",function(){

//   let task= document.getElementById("task");
//  let result = parseInt(task.innerText)-1;
// document.getElementById("task").innerText= result;

const task= document.getElementById("task");
const total=parseInt(task.innerText)-1;
task.innerText= total;

//  this.disabled= true;
this.setAttribute("disbaled","true");

 this.classList.remove("bg-blue-600"); // Remove blue color
 this.classList.add("bg-gray-400","cursor-not-allowed");



 const btnNumber= document.getElementById("btn-number");
 result=  parseInt(btnNumber.innerText)+1;
 btnNumber.innerText= result;


 const notification= document.getElementById("notification");

 const para = document.createElement("p");

para.innerText="you have completed mobile fix";

notification.appendChild(para);
para.classList.add("bg-slate-200","m-2","ml-5", "rounded-lg")




 
})