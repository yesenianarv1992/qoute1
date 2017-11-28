$(document).ready(function() {
  
  var number = 0;

  function quote(author, quote) {
    this.author = author;
    this.quote = quote;
  }

  quotes = [];
  
  quotes.push(new quote("Aubrey de Grey",	"As far as I'm concerned, ageing is humanity's worst problem, by some serious distance."));
  quotes.push(new quote("Laura Deming",	"I want to cure aging. I want to make us all live forever."));
  quotes.push(new quote("Dr. Ralph Merkle",	"Cryonics is an experiment. So far the control group isn't doing very well."));
  quotes.push(new quote("unknown",	"Can paperwork ever become so complex that death is preferable?"));
  quotes.push(new quote("Maria Konovalenko",	"That would be the best thing that could happen to a person: eternal life."));
  quotes.push(new quote("unknown",	"Guns don't die. People do."));
  quotes.push(new quote("anonymous",	"Inside every older person is a younger person wondering what the hell happened."));
  quotes.push(new quote("Aubrey de Grey",	"What I'm after is not living to 1,000. I'm after letting people avoid death for as long as they want to."));
  quotes.push(new quote("David Pizer",	"As long as we still have to die someday, the MAIN reason for living now should be to kill death."));
  quotes.push(new quote("Eric Schulke",	"If you don't support life extension, then it seems you don't give a damn about your life."));
  quotes.push(new quote("Gennady Stolyarov II",	"Without life, we are literally nothing."));
  quotes.push(new quote("Groucho Marx",	"I intend to live forever, or die trying."));
  quotes.push(new quote("Laura Deming",	"I can't imagine anything worse than not being alive..."));
  quotes.push(new quote("Robert Ettinger", "Being born is not a crime, so why must it carry a sentence of death?"));
  quotes.push(new quote("Roen Horn", "Saying that you aged gracefully is about as silly as saying you got cancer gracefully."));
  quotes.push(new quote("Steven Wright",	"I intend to live forever. So far, so good."));
  quotes.push(new quote("Woody Allen",	"My relationship with death remains the same: I'm strongly against it."));  

  function printQuote() {
    $("#quote").html('"' + quotes[number].quote + '"');
    $("#author").html(quotes[number].author);
  }
  
  function change(){
    console.log("keypress");
  }
  
  function left() {
    if(number > 0) number--;
    else number = quotes.length-1;
    printQuote();
  }
  
  function right() {
    if(number < quotes.length - 1) number++;
    else number = 0;
    printQuote();
  }
  
  function twitter() {
    var quote = quotes[number].quote;
    var author = quotes[number].author;
    
    var twitter = "https://twitter.com/intent/tweet?text=";
    var quoteLink = text2link(quote);
    var authorLink = "%20 -" + text2link(author)
    //atLink = "%20%40aaaabbbb";
    //url = "&url=http%3A%2F%2Faaaabbbb.com/quote/103";
    //hashtag = "&hashtags=dontdie";
    if(quote.length + author.length + 2 > 140) {
      var url = twitter + quoteLink;
    } else {
      var url = twitter + quoteLink + authorLink;
    }
    /*var win = */window.open(url, '_blank');
    //win.focus();
    //win.close();
  }
  
  function text2link(string) {
    text = "";
    for(var i in string) {
      if(string[i] === "") text += "%20";
      else text += string[i];
    }
    return text;
  }
  
  function dice() {
    number = Math.floor(Math.random() * quotes.length); //0 to 9
    printQuote();
  }
  
  printQuote();
  
  $(document).keydown(function(key){
    if(key.keyCode === 37) left();
    else if(key.keyCode === 39) right();
  });
  document.getElementById("left").addEventListener("click", left);
  document.getElementById("right").addEventListener("click", right);
  document.getElementById("twitter").addEventListener("click", twitter);
  document.getElementById("dice").addEventListener("click", dice);
  
});