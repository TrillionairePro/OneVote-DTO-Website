
function openNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  
  sidebar.style.width = "300px";
  sidebar.classList.add("open");
  main.style.marginLeft = "300px";
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  
  sidebar.style.width = "0";
  sidebar.classList.remove("open");
  main.style.marginLeft = "0";
  
  // Close all dropdowns when sidebar closes
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('show');
  });
  
  const dropdownToggles = document.querySelectorAll('.dropdown');
  dropdownToggles.forEach(toggle => {
    toggle.classList.remove('active');
  });
}

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const parentItem = dropdown.parentElement;
  
  // Close other dropdowns
  const allDropdowns = document.querySelectorAll('.dropdown-content');
  const allDropdownItems = document.querySelectorAll('.dropdown');
  
  allDropdowns.forEach(item => {
    if (item.id !== dropdownId) {
      item.classList.remove('show');
    }
  });
  
  allDropdownItems.forEach(item => {
    if (item !== parentItem) {
      item.classList.remove('active');
    }
  });
  
  // Toggle current dropdown
  dropdown.classList.toggle('show');
  parentItem.classList.toggle('active');
}

function changeLanguage(langCode) {
  const languageNames = {
    'en': 'English',
    'es': 'Español', 
    'fr': 'Français',
    'de': 'Deutsch'
  };
  
  const flags = {
    'en': '🇺🇸',
    'es': '🇪🇸',
    'fr': '🇫🇷', 
    'de': '🇩🇪'
  };
  
  // Update the language display
  const languageToggle = document.querySelector('.language-switcher .nav-link');
  const flagSpan = languageToggle.querySelector('.flag');
  const textSpan = languageToggle.querySelector('.nav-text');
  
  flagSpan.textContent = flags[langCode];
  textSpan.textContent = languageNames[langCode];
  
  // Close the language dropdown
  const languageDropdown = document.getElementById('languageDropdown');
  const languageItem = languageDropdown.parentElement;
  languageDropdown.classList.remove('show');
  languageItem.classList.remove('active');
  
  // Here you would typically implement actual language switching logic
  console.log(`Language changed to: ${languageNames[langCode]}`);
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('mySidebar');
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isDropdownToggle = event.target.closest('.dropdown-toggle');
  
  if (!isClickInsideSidebar || (!isDropdownToggle && isClickInsideSidebar)) {
    if (!isDropdownToggle) {
      const dropdowns = document.querySelectorAll('.dropdown-content');
      const dropdownItems = document.querySelectorAll('.dropdown');
      
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
      });
      
      dropdownItems.forEach(item => {
        item.classList.remove('active');
      });
    }
  }
});

// Handle search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchBar = document.querySelector('.search-bar');
  
  if (searchBar) {
    searchBar.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const navLinks = document.querySelectorAll('.nav-link');
      
      navLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        const item = link.closest('.item');
        
        if (text.includes(searchTerm)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      
      // Show language switcher if no search term
      const languageSwitcher = document.querySelector('.language-switcher');
      if (searchTerm === '') {
        languageSwitcher.style.display = 'block';
      } else {
        languageSwitcher.style.display = 'none';
      }
    });
  }
});
