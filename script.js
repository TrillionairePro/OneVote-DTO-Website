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
  const arrow = dropdown.previousElementSibling.querySelector('.dropdown-arrow');
  
  if (dropdown.style.maxHeight === "200px") {
    dropdown.style.maxHeight = "0";
    arrow.style.transform = "rotate(0deg)";
  } else {
    // Close all other dropdowns first
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    const allArrows = document.querySelectorAll('.dropdown-arrow');
    allDropdowns.forEach(dd => dd.style.maxHeight = "0");
    allArrows.forEach(arr => arr.style.transform = "rotate(0deg)");
    
    // Open the clicked dropdown
    dropdown.style.maxHeight = "200px";
    arrow.style.transform = "rotate(180deg)";
  }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown')) {
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    const allArrows = document.querySelectorAll('.dropdown-arrow');
    allDropdowns.forEach(dd => dd.style.maxHeight = "0");
    allArrows.forEach(arr => arr.style.transform = "rotate(0deg)");
  }
});