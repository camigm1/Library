const card = document.querySelector(".card");
const bookTitle = document.querySelector("#title");
console.log(bookTitle);
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const buttonSubmit = document.getElementById("buttonSubmit");

const myLibrary = [{ author: "Brandon", title: "elantris", pages: 213 }];

buttonSubmit.addEventListener("click", function () {
  // console.log(bookTitle.value);
  addBookToLibrary();
});

function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
}

function addBookToLibrary() {
  const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
  myLibrary.push(newBook);
}

const newBook = new Book("JAne Eyre", "Charlotte", 350);
console.log(newBook);

function display(object) {
  const title = document.createElement("h3");
  const author = document.createElement("h4");
  const pages = document.createElement("h4");
  title.innerHTML = `Book Title: ${object[0].title}`;
  author.textContent = `Auhor:${object[0].author}`;
  pages.textContent = `Number of Pages: ${object[0].pages}`;
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
}

display(myLibrary);

buttonSubmit.addEventListener("click", function () {
  console.log(bookTitle.value);
  addBookToLibrary();
});
