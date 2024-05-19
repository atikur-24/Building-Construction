// // Fetch the JSON data
// fetch("/data/success.json")
//   .then((response) => response.json())
//   .then((data) => {
//     displayStories(data);
//   })
//   .catch((error) => console.error("Error fetching data:", error));

// function displayStories(data) {
//   const storiesContainer = document.getElementById("stories-container");

//   data.forEach((story) => {
//     const div = document.createElement("div");
//     div.classList.add("col");

//     div.innerHTML = `
//           <div class="card border-0 story-card h-100">
//             <img src="${story.img}" class="card-img-top" alt="${story.title}">
//             <div class="card-body text-left">
//               <h6 class="card-title">${story.title}</h6>
//               <p class="card-text">${story.desc}</p>
//             </div>
//           </div>
//         `;

//     storiesContainer.appendChild(div);
//   });
// }
