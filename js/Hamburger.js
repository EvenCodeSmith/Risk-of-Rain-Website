let isShown = false;

function openSidebar() {
  if (isShown) {
    closeSidebar();
    return;
  }
  document.getElementById("mySidebar").style.width = "250px";
  isShown = true;
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
  isShown = false;
}
