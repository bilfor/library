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
    
    newCard.setAttribute('data',i);    

    booklist.appendChild(newCard);
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
  displayBook();
  //closeForm();
});
 
newBookButton.addEventListener('click', function(event) {
  //openForm(); 
}); 

clearLibButton.addEventListener('click', function(event) {
  clearLibrary();
});

removeBookButton.addEventListener('click', function(event) {
  
});

toggleReadButton.addEventListener('click', function(event) {
  toggleRead();
});
