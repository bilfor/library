let myLibrary = [];

const newBookButton = document.querySelector('#newBookButton');
const addToLibButton = document.querySelector('#addToLibButton');
const clearLibButton = document.querySelector('#clearLibButton');
const booklist = document.querySelector('#booklist');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
} 

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function clearLibrary() {
  myLibrary = [];
  removeAllChildNodes(booklist);
}

function displayBook() {
  removeAllChildNodes(booklist);  
  for(let i = 0; i < myLibrary.length; i++) {
    const newCard = document.createElement('div');
    const newTitle = document.createElement('p');
    const newAuthor = document.createElement('p');
    const newPages = document.createElement('p');
    const newRead = document.createElement('p');
    //newCard.className = "card";
    newTitle.textContent = myLibrary[i].title;
    newAuthor.textContent = myLibrary[i].author;
    newPages.textContent = myLibrary[i].pages;
    newRead.textContent = myLibrary[i].read;
    
    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(newRead);
    booklist.appendChild(newCard);
  }
}

addToLibButton.addEventListener('click', function(event) {
  //var newBook = formToBook();
  //addBookToLibrary(newBook); 
  displayBook();
  //closeForm();
});
 
newBookButton.addEventListener('click', function(event) {
  //openForm(); 
  let test = new Book("Ender's Game","Orson Scott Card","999",1);
  addBookToLibrary(test);
}); 

clearLibButton.addEventListener('click', function(event) {
  clearLibrary();
});
