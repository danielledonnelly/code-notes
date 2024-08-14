document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById('navbar');

  // HTML content for the navbar
  const navbarHTML = `
    <div class="sidebar bg-dark p-4">
      <h1 class="text-center" id="nav-header">Learn...</h1>
      <div class="nav flex-column nav-pills" id="myTab" role="tablist">
        <a class="nav-link nav-item" href="html.html" role="tab" aria-selected="true">HTML</a>
        <a class="nav-link nav-item" href="css.html" role="tab" aria-selected="false">CSS</a>
        <a class="nav-link nav-item" href="javascript.html" role="tab" aria-selected="false">JavaScript</a>
        <a class="nav-link nav-item" href="bootstrap.html" role="tab" aria-selected="false">Bootstrap</a>
        <a class="nav-link nav-item" href="react.html" role="tab" aria-selected="false">React</a>
      </div>
    </div>
  `;

  // Insert the navbar HTML into the DOM
  navbarContainer.innerHTML = navbarHTML;

  // Highlight the active link based on the current page
  const currentPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    // Remove 'active' class from all links
    link.classList.remove('active');
    // Add 'active' class to the link that matches the current page
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});