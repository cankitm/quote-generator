const quote = document.getElementById('quote');
const nextQuoteButton = document.getElementById('next-quote');
const twitterButton = document.getElementById('twitter-button');
const loader = document.getElementById('loader');
const quoteContainer = document.getElementById('quote-container')

async function getQuotes() {
  showLoader();
  proxyUrl = 'https://enigmatic-meadow-78445.herokuapp.com/';
  fetchUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + fetchUrl);
    const data = await response.json();
    quote.innerText = data.quoteText;
    hideLoader();
  } catch (error) {
    getQuotes();
  }
}

function goToTwitter() {
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerText}`, '_blank');
}

function showLoader() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function hideLoader() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

nextQuoteButton.addEventListener('click', getQuotes)
twitterButton.addEventListener('click', goToTwitter)
getQuotes();