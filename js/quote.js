const quotes = [
    {quote:"Life is what happens when you’re busy making other plans."},
    {quote:"When the going gets tough, the tough get going."},
    {quote:"Whether you think you can or you think you can’t, you’re right."},
    {quote:"Great minds discuss ideas; average minds discuss events; small minds discuss people."},
    {quote:"Never let the fear of striking out keep you from playing the game."},
    {quote:"That’s one small step for a man, one giant leap for mankind."},
    {quote:"Don’t be afraid to give up the good to go for the great."}
]

const quote=document.querySelector("#quote span");
const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todayQuote.quote;