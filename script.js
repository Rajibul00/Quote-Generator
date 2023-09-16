let i = 0
function generatequote(){
    const objOfQuote =  {
    
        '- Albert Einstein -' : ' “Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.” '
    ,
    
        ' - J.K. Rowling, Harry Potter and the Goblet of Fire -' : ' “If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.” '
    ,

        '- Mark Twain - ' : '  “If you tell the truth, you don\'t have to remember anything.” '
    ,
    
        ' -  Friedrich Nietzsche, Twilight of the Idols - ' : 
        ' “Without music, life would be a mistake.” '
    ,
    
       ' -  Ralph Waldo Emerson - ' : 
        ' “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” '
    }

let authors = Object.keys(objOfQuote);

let author = authors[i++];
let quote = objOfQuote[author];
document.querySelector('#authorname').innerText = author;
document.querySelector('#quote').innerText = quote

if(i==5){
    i=0
}

}
