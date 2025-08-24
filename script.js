
function openNav() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar) {
    sidebar.style.width = "350px";
  }
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar) {
    sidebar.style.width = "0";
  }
}

function toggleDropdown(element) {
  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.dropdown');
  allDropdowns.forEach(dropdown => {
    if (dropdown !== element) {
      dropdown.classList.remove('active');
    }
  });
  
  // Toggle current dropdown
  element.classList.toggle('active');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown')) {
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(dropdown => {
      dropdown.classList.remove('active');
    });
  }
});

// Close sidebar when clicking on main content
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById("mySidebar");
  const openBtn = document.querySelector('.openbtn');
  
  if (sidebar && !sidebar.contains(event.target) && !openBtn.contains(event.target)) {
    closeNav();
  }
});
