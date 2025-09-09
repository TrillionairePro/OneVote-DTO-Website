function openNav() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.style.width = "300px";
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.style.width = "0";
}

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const button = dropdown.previousElementSibling;
  const arrow = button.querySelector('.dropdown-arrow');
  
  if (dropdown.style.maxHeight === "200px") {
    dropdown.style.maxHeight = "0";
    arrow.style.transform = "rotate(0deg)";
    button.classList.remove('open');
  } else {
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    const allArrows = document.querySelectorAll('.dropdown-arrow');
    const allButtons = document.querySelectorAll('.dropdown-toggle');
    allDropdowns.forEach(dd => dd.style.maxHeight = "0");
    allArrows.forEach(arr => arr.style.transform = "rotate(0deg)");
    allButtons.forEach(btn => btn.classList.remove('open'));

    dropdown.style.maxHeight = "200px";
    arrow.style.transform = "rotate(180deg)";
    button.classList.add('open');
  }
}

document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown')) {
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    const allArrows = document.querySelectorAll('.dropdown-arrow');
    const allButtons = document.querySelectorAll('.dropdown-toggle');
    allDropdowns.forEach(dd => dd.style.maxHeight = "0");
    allArrows.forEach(arr => arr.style.transform = "rotate(0deg)");
    allButtons.forEach(btn => btn.classList.remove('open'));
  }
});