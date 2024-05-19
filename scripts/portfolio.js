// Fetch the JSON data
fetch("/data/portfolio.json")
  .then((response) => response.json())
  .then((data) => {
    displayPortfolios(data);
  })
  .catch((error) => console.error("Error fetching data:", error));

function displayPortfolios(data) {
  const portfolioContainer = document.getElementById("portfolio-container");

  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
          <div class="card border-0 h-100" id="portfolio-card">
            <img src="${item.img}" class="card-img-top" alt="${item.name}">
            <div class="card-body text-left mt-2 mt-lg-3">
              <h6 class="card-title fw-semibold fs-5">${item.name}</h6>
              <p class="card-text">${item.desc}</p>
            </div>
          </div>
        `;

    portfolioContainer.appendChild(div);
  });
}
