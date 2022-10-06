const bookArr = [];

const bookContainer = document.querySelector(".book-container");
const bookTemplate = document.querySelector(".book.hidden");
const formContainer = document.querySelector(".form-container");
const formSubmitButton = document.querySelector(".submit");
const addBookButton = document.querySelector(".book-button");

addBookButton.addEventListener("click", toggleFormEvent);
formSubmitButton.addEventListener("click", addBookEvent)
document.querySelector(".exit-button").addEventListener("click", toggleFormEvent);

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookEvent() {
    const newBook = new Book;
    const formFields = document.querySelectorAll("form input");

    formFields.forEach(field => {
      if (field.name == "hasRead") {
        field.checked ? newBook.hasRead = true : newBook.hasRead = false;
      } else {
        newBook[field.name] = field.value
      }
    });

    bookArr.push(newBook);
    cloneTemplate(newBook);
    toggleFormEvent();
}

function resetForm() {
  formContainer.querySelector("form").reset();
}

function removeBookEvent(book) {
  console.log(this)
  bookArr.splice(bookArr.findIndex(i => i == book), 1);
  this.remove();
}

function toggleReadEvent(book, e) {
  book.hasRead = !book.hasRead;
  e.target.checked = book.hasRead;
}

function toggleFormEvent() {
  resetForm();
  formContainer.classList.toggle("hidden");
}

function cloneTemplate(book) {
  const tempClone = bookTemplate.cloneNode(true);
  tempClone.classList.toggle("hidden");

  tempClone.querySelector(".title").textContent = book.title;
  tempClone.querySelector(".author").textContent = book.author;
  tempClone.querySelector(".pages").textContent = book.pages;
  tempClone.querySelector(".hasRead").checked = book.hasRead;

  tempClone.querySelector(".remove").addEventListener("click", removeBookEvent.bind(tempClone, book));
  tempClone.querySelector(".hasRead").addEventListener("click", toggleReadEvent.bind(tempClone, book));
  bookContainer.appendChild(tempClone);
}