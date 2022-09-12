import { getRandomNum } from "../utils/index.js";

const quote = document.querySelector(".quote");
const changeQuote = document.querySelector(".change-quote");
const author = document.querySelector(".author");

let randomQuote = getRandomNum(1643);

async function getQuotes(id = 0) {
  const url = "https://type.fit/api/quotes";
  const res = await fetch(url);
  const data = await res.json();

  quote.textContent = data[id].text;
  author.textContent = data[id].autho;
}

changeQuote.addEventListener("click", () => {
  getQuotes(getRandomNum(1643));
});

getQuotes(randomQuote);
