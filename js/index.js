
function handleButtonClick(buttonId, message) {
  document.getElementById(buttonId).addEventListener("click", function () {
     let task = document.getElementById("task");
      let total = parseInt(task.innerText) - 1;
      task.innerText = total;

      this.setAttribute("disabled", "true");
      this.classList.remove("bg-blue-600");
      this.classList.add("bg-gray-400");

      let btnNumber = document.getElementById("btn-number");
      let result = parseInt(btnNumber.innerText) + 1;
      btnNumber.innerText = result;

    let notification = document.getElementById("notification");
   let para = document.createElement("p");
      para.innerText = message;
      notification.appendChild(para);
      para.classList.add("bg-slate-200", "m-2", "ml-5", "rounded-lg");
  });
}


handleButtonClick("btn-fix-mobile", "You have completed mobile fix"); 
handleButtonClick("btn-dark-mode", "You have completed dark mode task");
handleButtonClick("btn-optimize", "You have completed optimization task");
handleButtonClick("btn-emoji", "You have completed emoji task");
handleButtonClick("btn-openai", "You have completed OpenAI task");
handleButtonClick("btn-job", "You have completed job task");






document.getElementById("btn-clear-history").addEventListener("click", function(){

const btnClearHistory= document.getElementById("btn-clear-history");





})