const totalTasks = 6;
let completedCount = 0;

const colors = ["#fef3c7", "#d1fae5", "#e0f2fe", "#fae8ff", "#fcd34d", "#fca5a5", "#bbf7d0", "#c7d2fe", "#f5d0fe"];

document.getElementById("theme-btn").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;
});

document.getElementById('faq').addEventListener('click', function () {
  window.location.href = 'faq.html';
});

function handleButtonClick(buttonId, message, taskTitle) {
  document.getElementById(buttonId).addEventListener("click", function () {
    // alert
    alert("You have completed: " + taskTitle);


    let task = document.getElementById("task");
    let total = parseInt(task.innerText) - 1;
    task.innerText = total;


    this.setAttribute("disabled", "true");
    this.classList.remove("bg-blue-600");
    this.classList.add("bg-gray-400");


    let btnNumber = document.getElementById("btn-number");
    let result = parseInt(btnNumber.innerText) + 1;
    btnNumber.innerText = result;


    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let currentTime = hour + ":" + minute + ":" + second + " " + ampm;

    // notification part
    let notification = document.getElementById("notification");
    let para = document.createElement("p");
    para.innerText = "✅ You have completed " + taskTitle + " " + currentTime;
    para.classList.add("bg-slate-200", "m-2", "ml-5", "rounded-lg", "p-2", "text-left");
    notification.appendChild(para);


    completedCount++;
    if (completedCount === totalTasks) {
      setTimeout(function () {
        alert("🎉 You have completed all the tasks!");
      }, 200);
    }
  });
}

handleButtonClick("btn-fix-mobile", "You have completed mobile fix", "Fix Mobile Button Issue");
handleButtonClick("btn-dark-mode", "You have completed dark mode task", "Add Dark Mode");
handleButtonClick("btn-optimize", "You have completed optimization task", "Optimize Home page");
handleButtonClick("btn-emoji", "You have completed emoji task", "Add new emoji 🤲");
handleButtonClick("btn-openai", "You have completed OpenAI task", "Integrate OpenAI API");
handleButtonClick("btn-job", "You have completed job task", "Improve Job searching");

// clear history
document.getElementById("btn-clear-history").addEventListener("click", function () {
  let notification = document.getElementById("notification");
  let i = 2;
  while (notification.children[i]) {
    notification.removeChild(notification.children[i]);
  }
});
