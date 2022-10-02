const bookArr = [];

const bookContainer = document.querySelector(".book-container")
const bookTemplate = document.querySelector(".book.hidden")

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.addBook = function(title = "n/a", author = "n/a", pages = "n/a", hasRead = "n/a") {
  bookArr.push(new Book(...Object.values(arguments)));
  const tempClone = bookTemplate.cloneNode(true);
  tempClone.classList.toggle("hidden");

  const cloneChildren = tempClone.childNodes;
  for (let i = 0; i < cloneChildren.length; i++) {
    const child = cloneChildren[i];

    if (child.nodeName == "INPUT") {
      child.checked = arguments[i];
    }

    child.textContent = arguments[i];
  }

  bookContainer.appendChild(tempClone);
  return [bookArr.slice(-1), tempClone];
}