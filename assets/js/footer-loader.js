// Footer Loader Script - Injects footer.html into all pages
window.addEventListener('DOMContentLoaded', function() {
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      const footerContainer = document.createElement('div');
      footerContainer.innerHTML = html;
      document.body.appendChild(footerContainer);
    });
});
