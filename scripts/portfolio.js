const data = [
  {
    img: "https://img.freepik.com/premium-photo/3d-rendering-house-architecture_256301-1475.jpg?w=740",
    name: "Oregano Height",
    desc: "2464 Royal Ln. Mesa, New Jersey",
  },
  {
    img: "https://img.freepik.com/premium-photo/modern-fashionable-model-room-night-view_576554-26.jpg?w=740",
    name: "Wildstone Infra Hotel",
    desc: "2715 Ash Dr. San Jose, South Dakota",
  },
  { img: "https://img.freepik.com/premium-photo/3d-rendering-house-architecture_256301-1475.jpg?w=740", name: "Wish Stone Building", desc: " 2972 Westheimer Rd. Santa Ana, Illinois" },
  {
    img: "https://img.freepik.com/premium-photo/residential-modern-facade-building-blue-sky-background_100800-12849.jpg?w=740",
    name: "Mr. Parkinston’s House",
    desc: "3517 W. Gray St. Utica, Pennsylvania",
  },
  {
    img: "https://img.freepik.com/premium-photo/asian-traditions-building-architecture-prairie-style-house-exterior_124507-61374.jpg?w=740",
    name: "Oregano Height",
    desc: "2464 Royal Ln. Mesa, New Jersey",
  },
  { img: "https://img.freepik.com/premium-photo/3d-rendering-modern-cubic-house-close-up_190619-1478.jpg?w=740", name: "Mr. Parkinston’s House", desc: " 3517 W. Gray St. Utica, Pennsylvania" },
];

displayPortfolios(data);

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
