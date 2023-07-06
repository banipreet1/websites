function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros to minutes and seconds
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Format the time as HH:MM:SS
  var timeString = hours + ":" + minutes + ":" + seconds;

  // Update the clock div
  document.getElementById("clock").innerHTML = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

var typed = new Typed('#element', {
  strings: ['BANI preet', 'बानी प्रीत', 'ਬਾਣੀ ਪ੍ਰੀਤ', 'Бани преет', 'バニプリート', 'ಬಾನಿ ಪ್ರೀತ್', '巴尼 預先', 'BANI PREET'],
  typeSpeed: 50,
});
var typed = new Typed('#job', {
  strings: ['software developer', 'graphic designer', 'video editor', 'full staCK developer', 'data scientist', 'ai engineer'],
  typeSpeed: 50,
});
function course() {
  alert("coming soon")
}

function nav1(){
  document.getElementById("nav-font1").style.color = "white";
  document.getElementById("nav1").style.background = "black";
  document.getElementById("nav2").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav3").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav4").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav-font2").style.color = "rgb(69, 69, 69)";
  document.getElementById("nav-font3").style.color = "rgb(69, 69, 69)";
  document.getElementById("nav-font4").style.color = "rgb(69, 69, 69)";
}
function nav2(){
  document.getElementById("nav-font2").style.color = "white";
  document.getElementById("nav2").style.background = "black";
  document.getElementById("nav1").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav3").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav4").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav-font1").style.color = "rgb(69, 69, 69)";
  document.getElementById("nav-font3").style.color = "rgb(69, 69, 69)";
  document.getElementById("nav-font4").style.color = "rgb(69, 69, 69)";
}
function nav3(){
  document.getElementById("nav-font3").style.color = "white";
  document.getElementById("nav3").style.background = "black";
  document.getElementById("nav1").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav2").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav4").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav-font2").style.color = "rgb(69, 69, 69)";
  document.getElementById("nav-font1").style.color = "rgb(69, 69, 69)";
  document.getElementById("nav-font4").style.color = "rgb(69, 69, 69)";
}
function nav4(){
  document.getElementById("nav-font4").style.color = "white";
  document.getElementById("nav4").style.background = "black";
  document.getElementById("nav1").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav3").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav2").style.background = "rgba(251, 251, 251, 0)";
  document.getElementById("nav-font2").style.color = "rgb(69, 69, 69)";
  document.getElementById("nav-font3").style.color = "rgb(69, 69, 69)";
  document.getElementById("nav-font1").style.color = "rgb(69, 69, 69)";
}


