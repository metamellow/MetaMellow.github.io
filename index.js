// Toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-theme");
  }
  
  // Check local storage for previous setting
  var previousSetting = localStorage.getItem("darkMode");
  if(previousSetting === "dark") {
    toggleDarkMode();
  }
  
  // Save setting on toggle 
  var themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", function() {
    var body = document.body;
    if(body.classList.contains("dark-theme")) {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.setItem("darkMode", "light");
    }
  });
  