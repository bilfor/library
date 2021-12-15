let myLibrary = [];

const addButton = document.querySelector('#addButton');
const booklist = document.querySelector('#booklist');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  this.info = function() {
      if (this.read == 1) {
        return (this.title + " by " + this.author + ", " +  this.pages + " pages, has been read.");
        }
      else {
        return (title + " by " + author + ", " + pages + " pages, not read yet.");
        } 
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
} 

function displayBooks() {
  console.log("displaying books");
  for(let i = 0; i < myLibrary.length; i++) {
    const newCard = document.createElement('div');
    newCard.append(myLibrary[i].title);
    newCard.append(myLibrary[i].author);
    newCard.append(myLibrary[i].pages);
    newCard.append(myLibrary[i].read);
    newCard.append(myLibrary[i].info());
    booklist.append(newCard);
  }
  
}

let endersGame = new Book("Ender's Game", "Orson Scott Card", "999", 1);
let goDogGo = new Book("Go, Dog. Go!", "P.D. Eastman", "7", 1);

addBookToLibrary(endersGame);
addBookToLibrary(goDogGo);

let flag = 0;

addButton.addEventListener('click', function(event) {
  const newCard = document.createElement('div');
  console.log("weiner mode");
  displayBooks();
  booklist.append(newCard); 
});
