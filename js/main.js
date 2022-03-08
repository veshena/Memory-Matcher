// Get the section and span from the body
const section = document.querySelector("section");
const livesCount = document.querySelector("span");
let lives = 4;




// Link text
livesCount.textContent = lives;




// Put the images on the page
const getData = () => [
    { imgSrc: "./images/cashew.jpeg", name: "cashew" },
    { imgSrc: "./images/mango.jpeg", name: "mango" },
    { imgSrc: "./images/plum.jpeg", name: "plum" },
    { imgSrc: "./images/pomerac.jpeg", name: "pomerac" },
    { imgSrc: "./images/cashew.jpeg", name: "cashew" },
    { imgSrc: "./images/mango.jpeg", name: "mango" },
    { imgSrc: "./images/plum.jpeg", name: "plum" },
    { imgSrc: "./images/pomerac.jpeg", name: "pomerac" },
];




// This function randomize the pictures in the game everytime it restarts.
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData);
    return cardData;
};




// // Card Functiom
// const cardGenerator = () => {
//     const cardData = randomize();
//     // console.log(cardData)

//     // Generate HTML
//     cardData.forEach(item => {
//         // console.log(item);

//         const card = document.createElement("div");
//         const face = document.createElement("img");
//         const back = document.createElement("div");
//         card.classList = "card";
//         face.classList = "face";
//         back.classList = "back";

//         // Attach info to cards
//         face.src = item.imgSrc;
//         card.setAttribute("name", item.name)


//         // Attach cards to section
//         section.appendChild(card);
//         card.appendChild(face);
//         card.appendChild(back);

//         card.addEventListener("click", (v) => {
//             card.classList.toggle("toggleCard");
//             checkCards(v);
//         });
//     });
// };




// // Check cards
// const checkCards = (v) => {
//     console.log(v);

//     const clickedCard = v.target;
//     clickedCard.classList.add("flipped");
//     const flippedCards = document.querySelectorAll(".flipped");
//     const toggleCard = document.querySelectorAll(".toggleCard");
//     console.log(flippedCards);

//     // if statement
//     if (flippedCards.length === 2) {
//         if (
//             flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")
//         ) {
//             console.log("match");
//             flippedCards.forEach(card => {
//                 card.classList.remove("flipped")
//                 card.style.pointerEvent = "none";
//             })
//         } else {
//             console.log("wrong")
//             flippedCards.forEach(card => {
//                 card.classList.remove("flipped");
//                 setTimeout(() => card.classList.remove("toggleCard"), 1000);
//             });
//             lives--;
//             livesCount.textContent = lives;
//             if (lives === 0) {
//                 restart(" 😭 TRY AGAIN!!! 😭 ");
//             }
//         }
//     }
//     if (toggleCard.length === 8) {
//         restart(" 🥳 YOU WON!!! 🔥 ");
//     }
// };





// // Restart
// const restart = (text) => {
//     let cardData = randomize();
//     let faces = document.querySelectorAll(".face");
//     let cards = document.querySelectorAll(".card");
//     section.style.pointerEvents = "none";
//     cardData.forEach((item, index) => {
//         cards[index].classList.remove("toggleCard");

//         setTimeout(() => {
//             cards[index].style.pointerEvents = "all";
//             faces[index].src = item.imgSrc;
//             cards[index].setAttribute("name", item.name);
//             section.style.pointerEvents = "all";
//         }, 1000);
//     });
//     lives = 4;
//     livesCount.textContent = lives;
//     setTimeout(() => window.alert(text), 100);
// }
// cardGenerator()