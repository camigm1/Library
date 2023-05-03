const cardSection = document.querySelector(".card-section");
const bookTitle = document.querySelector("#title");
console.log(bookTitle);
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const buttonSubmit = document.getElementById("buttonSubmit");

const myLibrary = [
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
}

// const janeEyre = new Book("Jane Eyre", "Charlotte", 350);
// myLibrary.push(janeEyre);

function display(object) {
  for (let book of myLibrary) {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("h4");
    const pages = document.createElement("h4");
    title.innerHTML = `Book Title: ${object[0].title}`;
    author.textContent = `Auhor:${object[0].author}`;
    pages.textContent = `Number of Pages: ${object[0].pages}`;
    card.classList.add("card");
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    cardSection.appendChild(card);
  }
}

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const newTitle = bookTitle.value;
  console.log(newTitle);
  const newAuthor = bookAuthor.value;
  const newPages = bookPages.value;
  addBookToLibrary(newTitle, newAuthor, newPages);
});

display(myLibrary);
