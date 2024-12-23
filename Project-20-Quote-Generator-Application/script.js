const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl = "http://api.quotable.io/random";

async function getQuote(url) {

    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}
getQuote(apiUrl);

function xTweet() {
    window.open("https://x.com/intent/post?text=" + quote.innerHTML + " — by " + author.innerHTML, "X window ", "width=600, height=600");
}