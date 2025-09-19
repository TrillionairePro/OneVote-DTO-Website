function openNav() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.style.width = "300px";
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.style.width = "0";
}

document.addEventListener('click', function(event) {
  const allDropdowns = document.querySelectorAll('.dropdown-toggle');
  const clickedButton = event.target.closest('.dropdown-toggle');

  allDropdowns.forEach(button => {
    const isThisButton = button === clickedButton;
    const wasOpen = button.classList.contains('open');
    
    if (!isThisButton && wasOpen) {
      button.classList.remove('open');
    }
  });

  if (clickedButton) {
    clickedButton.classList.toggle('open');
  }
});
