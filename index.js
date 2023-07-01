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