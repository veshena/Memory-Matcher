const section = document.querySelector("section");
const livesCount = document.querySelector("span");
const lives = 7;

livesCount.textContent = lives;

const getData = () => [
    {imgSrc: "./images/cashew.jpeg", name: "cashew"}, 
    {imgSrc: "./images/mango.jpeg", name: "mango"},
    {imgSrc: "./images/plum.jpeg", name: "plum"},
    {imgSrc: "./images/pomerac.jpeg", name: "pomerac"},
    {imgSrc: "./images/cashew.jpeg", name: "cashew"},
    {imgSrc: "./images/mango.jpeg", name: "mango"},
    {imgSrc: "./images/plum.jpeg", name: "plum"},
    {imgSrc: "./images/pomerac.jpeg", name: "pomerac"},
];

// Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    // console.log(cardData);
    return cardData;
};

// Card Functiom
const cardGenerator = () => {
    const cardData = randomize();
    // console.log(cardData)
    
// Generate HTML
   cardData.forEach(item => {
    // console.log(item);
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // Attach info to cards
    face.src = item.imgSrc;
    // Attach cards to section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
})
};

cardGenerator();