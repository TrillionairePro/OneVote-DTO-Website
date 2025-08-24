function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

function toggleDropdown(element) {
  element.classList.toggle('active');
}