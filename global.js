window.onload = function() {
  aboutTab = document.getElementById("about");
  concertsTab = document.getElementById("concerts");
  discTab = document.getElementById("discography");
  
  aboutTab.addEventListener("click", goToTab);
  concertsTab.addEventListener("click", goToTab);
  discTab.addEventListener("click", goToTab);
  
  aboutTab.click = function() {return false};
  concertsTab.click = function() {return false};
  discTab.click = function() {return false};  
}

function goToTab () {
  
  
}