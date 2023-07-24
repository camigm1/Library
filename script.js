const cardSection = document.querySelector(".card-section");
const bookTitle = document.querySelector("#title");
console.log(bookTitle);
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const buttonSubmit = document.getElementById("buttonSubmit");

const myLibrary = [
  { author: "Brandon", title: "elantris", pages: 213 },
  { author: "Brandon", title: "elantris", pages: 213 },
  { author: "Brandon", title: "elantris", pages: 213 },
];

console.log(myLibrary);

// buttonSubmit.addEventListener("click", function () {
//   console.log(bookTitle);
//   addBookToLibrary();
// });

function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages) {
  const newBook = new Book(bookTitle, bookAuthor, bookPages);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

// const janeEyre = new Book("Jane Eyre", "Charlotte", 350);
// myLibrary.push(janeEyre);

function display(object) {
  cardSection.innerHTML = "";
  for (let book of object) {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("h4");
    const pages = document.createElement("h4");
    const deleteBtn = document.createElement("button");
    title.innerHTML = `Book Title: ${book.title}`;
    author.textContent = `Auhor:${book.author}`;
    pages.textContent = `Number of Pages: ${book.pages}`;
    deleteBtn.textContent = "Delete";
    card.classList.add("card");
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(deleteBtn);
    cardSection.appendChild(card);
    deleteBtn.addEventListener("click", function () {
      cardSection.display = "none";
      console.log("working button");
    });
  }
}

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const newTitle = bookTitle.value;
  console.log(newTitle);
  const newAuthor = bookAuthor.value;
  const newPages = bookPages.value;
  addBookToLibrary(newTitle, newAuthor, newPages);
  display(myLibrary);
});

display(myLibrary);
