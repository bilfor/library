let myLibrary = [];
let counter = 0;

const newBookButton = document.querySelector('#newBookButton');
const addToLibButton = document.querySelector('#addToLibButton');
const clearLibButton = document.querySelector('#clearLibButton');

const booklist = document.querySelector('#booklist');
const nodeList = booklist.childNodes;


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  const newCard = document.createElement('div');

  const newTitle = document.createElement('p');
  const newAuthor = document.createElement('p');
  const newPages = document.createElement('p');
  const newRead = document.createElement('p');

  const newRemoveBookButton = document.createElement('button');
  const newToggleReadButton = document.createElement('button');
    
  newTitle.textContent = book.title;
  newAuthor.textContent = book.author;
  newPages.textContent = book.pages;
  newRead.textContent = book.read;
    
  newCard.appendChild(newTitle);
  newCard.appendChild(newAuthor);
  newCard.appendChild(newPages);
  newCard.appendChild(newRead);

  newCard.appendChild(newRemoveBookButton);
  newCard.appendChild(newToggleReadButton);

  newRemoveBookButton.textContent = 'remove book';
  newToggleReadButton.textContent = 'toggle read';

  newRemoveBookButton.addEventListener('click', function(event) {
    newCard.remove();
    myLibrary.splice(counter,1);
  });

  newToggleReadButton.addEventListener('click', function(event) {
    book.read = !book.read; 
    newRead.textContent = book.read;
  });
    
  newCard.setAttribute('data',counter);    
  counter++;

  booklist.appendChild(newCard);
} 

function clearLibrary() {
  myLibrary = [];
  while (booklist.firstChild) {
    booklist.removeChild(booklist.firstChild);
  }
}

function formToBook() {
  let data = document.getElementById('formData');

  let title = data.elements[0].value; 
  let author = data.elements[1].value;
  let pages = data.elements[2].value;
  let read = data.elements[3].checked; 

  let newBook = new Book(title, author, pages, read);

  return newBook;
}

function toggleRead(book) {
  book.read = !book.read;
}

addToLibButton.addEventListener('click', function(event) {
  let newBook = formToBook();
  addBookToLibrary(newBook); 
  //closeForm();
});
 
newBookButton.addEventListener('click', function(event) {
  //openForm(); 
}); 

clearLibButton.addEventListener('click', function(event) {
  clearLibrary();
});
