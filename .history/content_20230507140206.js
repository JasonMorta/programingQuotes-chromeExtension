

let quoteBtn = document.querySelector('.getQuote');
let quote = document.querySelector('.para');
quote.innerHTML = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
quoteBtn.addEventListener('click', () => {

    let randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    console.log('randomQuote: ',randomQuote.length)
    quote.innerHTML = randomQuote;
});