const activePage = window.location.pathname;

const navLinks = document.querySelectorAll("#navbar-nav .nav-link");
const dropdownLinks = document.querySelectorAll("#navbar-nav .dropdown-menu .dropdown-item");

// Function to check if the current page is part of the services section
function isServicesPage(path) {
  const servicesPages = ["/pages/services/including-design.html", "/pages/services/construction.html", "/pages/services/project-management.html", "/pages/services/consulting-service.html"];
  return servicesPages.includes(path);
}

let servicesActive = false;

// Iterate over dropdown links to handle service page active states
dropdownLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
    servicesActive = true;
  }
});

// Set the Services parent link to active if any service page is active
if (servicesActive) {
  const servicesParentLink = document.querySelector("#navbar-nav .dropdown-toggle");
  servicesParentLink.classList.add("active");
}

// Handle top-level navigation links
navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`) && !link.classList.contains("dropdown-toggle")) {
    link.classList.add("active");
  }
});
