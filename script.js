let quotes = [];
let text = document.getElementById("text");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => displayNewQuote());

function displayNewQuote() {
  fetchQuotes();
}

async function fetchQuotes() {
  let url = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    let response = await fetch(url);
    quotes = await response.json();
    let indx = Math.floor(Math.random() * quotes.length);
    let obj = quotes[indx];
    text.textContent = obj.text;
    author.textContent = `- ${obj.author}`;
  } catch (error) {
    console.log(error);
  }
}
fetchQuotes();
