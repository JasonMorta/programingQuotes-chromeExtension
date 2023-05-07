

let quoteBtn = document.querySelector('.getQuote');
let quote = document.querySelector('.para');
quote.innerHTML = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
quoteBtn.addEventListener('click', () => {

    let randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
 
    if (randomQuote.length > 140) {
        console.log('randomQuote: ',randomQuote.length) 
        quote.style.fontSize = '20px';
    } else {
        quote.style.fontSize = 'x-large';
    }
    quote.innerHTML = randomQuote;
});