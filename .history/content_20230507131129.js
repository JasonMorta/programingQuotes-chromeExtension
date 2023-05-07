

let quoteBtn = document.querySelector('.getQuote');
quoteBtn.addEventListener('click', () => {
    let randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    let quote = document.querySelector('.para');
    quote.innerHTML = randomQuote;
});