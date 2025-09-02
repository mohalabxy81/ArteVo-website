// Navbar Loader Script - Injects navbar.html into all pages
window.addEventListener('DOMContentLoaded', function() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
      const navbarContainer = document.createElement('div');
      navbarContainer.innerHTML = html;
      const placeholder = document.getElementById('navbar-placeholder');
      if (placeholder) {
        placeholder.replaceWith(navbarContainer);
      } else {
        console.error('Navbar placeholder not found!');
      }
    })
    .catch(error => console.error('Error loading navbar:', error));
});
