const series = [
  {
    title: "The Boys",
    description: "This series is a thriller with action",
    image: "./theboys.webp",
    button: "See More",
  },
  {
    title: "Prison Break",
    description: "This series involves plot twists",
    image: "./prison.webp",
    button: "See More",
  },
  {
    title: "Better Call Saul",
    description: "This involves a lawyer's life story",
    image: "./saul.webp",
    button: "See More",
  },
];

// Function to display each series card
function displayseries({ title, description, image, button }, index) {
  // Check local storage for like status
  const isLiked = localStorage.getItem(`like-status-${index}`) === "true";

  return `<div class="card-Container" id="card-${index}">
      <img src="${image}" alt="">
      <h2>${title}</h2>
      <p>${description}</p>
      <button>${button}</button>
      <div class="like-buttons">
        <!-- Use heart icons for like -->
        <i class="fas fa-heart" id="like-${index}" style="color: ${
    isLiked ? "red" : "gray"
  }; cursor: pointer;"></i>
        <i class="fas fa-heart-broken" id="dislike-${index}" style="cursor: pointer;"></i>
      </div>
    </div>`;
}

// Select the card container
let cardSeries = document.getElementById("card-container");

// Render the cards
let seriesCard = series
  .map((items, index) => {
    return displayseries(items, index);
  })
  .join("");

cardSeries.innerHTML = seriesCard;

// Add event listeners for Like and Dislike buttons
series.forEach((_, index) => {
  // Like (Heart) button
  document.getElementById(`like-${index}`).addEventListener("click", () => {
    localStorage.setItem(`like-status-${index}`, "true"); // Store like status
    document.getElementById(`like-${index}`).style.color = "red"; // Turn heart red
  });

  // Dislike (Broken Heart) button
  document.getElementById(`dislike-${index}`).addEventListener("click", () => {
    localStorage.setItem(`like-status-${index}`, "false"); // Remove like status
    document.getElementById(`like-${index}`).style.color = "gray"; // Turn heart gray
  });
});

// const series = [
//   {
//     title: "The Boys",
//     description: "This series is a thriller with action",
//     image: "./theboys.webp",
//     button: "See More",
//   },
//   {
//     title: "Prison Break",
//     description: "This series involves plot twists",
//     image: "./prison.webp",
//     button: "See More",
//   },
//   {
//     title: "Better Call Saul",
//     description: "This involves a lawyer's life story",
//     image: "./saul.webp",
//     button: "See More",
//   },
// ];

// // Function to display each series card
// function displayseries({ title, description, image, button }, index) {
//   // Check local storage for like status
//   const isLiked = localStorage.getItem(`like-status-${index}`) === "true";

//   return `<div class="card-Container" id="card-${index}">
//       <img src="${image}" alt="">
//       <h2>${title}</h2>
//       <p>${description}</p>
//       <button>${button}</button>
//       <div class="like-buttons">
//         <button class="like-button" id="like-${index}" style="background-color: ${
//     isLiked ? "green" : "white"
//   }">Like</button>
//         <button class="dislike-button" id="dislike-${index}">Dislike</button>
//       </div>
//     </div>`;
// }

// // Select the card container
// let cardSeries = document.getElementById("card-container");

// // Render the cards
// let seriesCard = series
//   .map((items, index) => {
//     return displayseries(items, index);
//   })
//   .join("");

// cardSeries.innerHTML = seriesCard;

// // Add event listeners for Like and Dislike buttons
// series.forEach((_, index) => {
//   // Like button
//   document.getElementById(`like-${index}`).addEventListener("click", () => {
//     localStorage.setItem(`like-status-${index}`, "true"); // Store like status
//     document.getElementById(`like-${index}`).style.backgroundColor = "green"; // Change button color to indicate like
//   });

//   // Dislike button
//   document.getElementById(`dislike-${index}`).addEventListener("click", () => {
//     localStorage.setItem(`like-status-${index}`, "false"); // Remove like status
//     document.getElementById(`like-${index}`).style.backgroundColor = "white"; // Revert button color
//   });
// });

// // const series = [
// //   {
// //     title: "The Boys",
// //     description: "This series is a thriller with action",
// //     image: "./theboys.webp", // Added a real image URL

// //     button: "See More",
// //   },
// //   {
// //     title: "Prison Break",
// //     description: "This series involves plot twists",
// //     image: "./prison.webp",
// //     button: "See More",
// //   },
// //   {
// //     title: "Better Caul Saul",
// //     description: "This involves a lawyer lifestory",
// //     image: "./saul.webp",
// //     button: "See More",
// //   },
// // ];

// // function displayseries({ title, description, image, button }) {
// //   return `<div class ="card-Container">
// //   <img src="${image}" alt="">
// //   <h2>${title}</h2>
// //   <p>${description}</p>
// //   <button>${button}</button>
// //   </div>`;
// // }

// // let cardSeries = document.getElementById("card-container");
// // let seriesCard = series
// //   .map((items) => {
// //     return displayseries(items);
// //   })
// //   .join("");
// // cardSeries.innerHTML = seriesCard;
// // // cardSeries.innerHTML = "";
// // // series.forEach((series) => {
// // //     cardSeries.innerHTML += displayseries(series.title, series.description, series.image, series.button);
// // //     });
