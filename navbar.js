document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById('navbar');

  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      navbarContainer.innerHTML = data;
      const currentPage = window.location.pathname.split('/').pop();
      const links = document.querySelectorAll('.nav-link');

      links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    })
    .catch(error => console.error('Error loading navbar:', error));
});