var quotes = [
   "If people only knew how hard I work to gain my mastery", 
   "it wouldn't seem so wonderful at all",
   "I believe life is an intelligent thing that things aren't random",
"Random chance plays a huge part in everybody's life"
];


function genQuote() {
var randomN = Math.floor(Math.random() * quotes.length);
document.getElementById('newQuoteSection').innerHTML = quotes[randomN];
}
   
   