const data = [
  {
    img: "https://img.freepik.com/free-photo/pointing-sketch_1098-14323.jpg?t=st=1715779580~exp=1715783180~hmac=9d1f322f78f9fa5c3fe89de63617c0a7006034bfbfde18980aca5af545821974&w=540",
    title: "Community Building",
    desc: "Empowering residents through shared paces.",
  },
  {
    img: "https://img.freepik.com/free-photo/inspectors-with-sketch_1098-15451.jpg?t=st=1715779730~exp=1715783330~hmac=6c4dbbd81963966151e5f06e6da4b69114e39d6f6084e87ba06bc4b825732592&w=540",
    title: "Innovative Construction",
    desc: " Modern techniques for efficient building.",
  },
  {
    img: "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?t=st=1715779586~exp=1715783186~hmac=911d438026f7680405ab32babf9eda42a3f8c459dd65787ee063e9212f36e5aa&w=540",
    title: "Resident Support",
    desc: "Services to ensure successful transitions.",
  },
  {
    img: "https://img.freepik.com/free-photo/thinking-sketch_1098-14336.jpg?t=st=1715783567~exp=1715787167~hmac=9aea8177ea3e5c726f0b166664654617b0447b1a3cde9f16a74c199e505707a6&w=540",
    title: " Sustainable Future",
    desc: " Our commitment to the environment.",
  },
];

displayStories(data);

function displayStories(data) {
  const storiesContainer = document.getElementById("stories-container");

  data.forEach((story) => {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
          <div class="card border-0 story-card h-100">
            <img src="${story.img}" class="card-img-top" alt="${story.title}">
            <div class="card-body text-left">
              <h6 class="card-title">${story.title}</h6>
              <p class="card-text">${story.desc}</p>
            </div>
          </div>
        `;

    storiesContainer.appendChild(div);
  });
}
