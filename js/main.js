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


const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData);
};

randomize();