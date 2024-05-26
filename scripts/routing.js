document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const navLinks = {
    "/index.html": "home-link",
    "/pages/about-us/about-us.html": "about-link",
    "/pages/contact-us/contact-us.html": "contact-link",
    "/pages/portfolio/portfolio.html": "portfolio-link",
    "/pages/services/including-design.html": "including-design-link",
    "/pages/services/construction.html": "construction-link",
    "/pages/services/project-management.html": "project-management-link",
    "/pages/services/consulting-service.html": "consulting-service-link",
  };

  const servicesLinks = ["/pages/services/including-design.html", "/pages/services/construction.html", "/pages/services/project-management.html", "/pages/services/consulting-service.html"];

  if (navLinks[path]) {
    document.getElementById(navLinks[path]).classList.add("active");
  }

  if (servicesLinks.includes(path)) {
    document.getElementById("services-link").classList.add("active");
  }
});
