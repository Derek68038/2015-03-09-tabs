window.onload = function() {
  var aboutTab = document.getElementById("about");
  var aboutTabAnchor = document.getElementsByTagName("a")[0];
  var aboutTabList = document.getElementsByTagName("li")[0];
  
  var concertsTab = document.getElementById("concerts");
  var concertsTabAnchor = document.getElementsByTagName("a")[1];
  var concertsTabList = document.getElementsByTagName("li")[1]; 
  
  var discTab = document.getElementById("discography");
  var discTabAnchor = document.getElementsByTagName("a")[2];
  var discTabList = document.getElementsByTagName("li")[2];
  
  
  aboutTabAnchor.addEventListener("click", function() {
    aboutTabList.style.backgroundColor="gray";
    aboutTabList.style.borderBottom="gray";
    aboutTab.style.display="block";
    concertsTabList.style.backgroundColor="firebrick";
    concertsTab.style.display="none";
    discTabList.style.backgroundColor="firebrick";
    discTab.style.display="none";
  });
  
  concertsTabAnchor.addEventListener("click", function() {
    concertsTabList.style.backgroundColor="gray";
    concertsTabList.style.borderBottom="gray";
    concertsTab.style.display="block";
    aboutTabList.style.backgroundColor="firebrick";
    aboutTab.style.display="none";
    discTabList.style.backgroundColor="firebrick";
    discTab.style.display="none";
  }); 
  
  discTabAnchor.addEventListener("click", function() {
    discTabList.style.backgroundColor="gray";
    discTabList.style.borderBottom="gray";
    discTab.style.display="block";
    aboutTabList.style.backgroundColor="firebrick";
    aboutTab.style.display="none";
    concertsTabList.style.backgroundColor="firebrick";
    concertsTab.style.display="none";
  });     
};

