const card = document.querySelector(".card");
const title = document.querySelector("#title").value;
console.log(title);
const author = document.querySelector("#author").value;
const pages = document.querySelector("#pages").value;
const myLibrary = [{ author: "Brandon", title: "elantris", pages: 213 }];

function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
}

function addBookToLibrary() {}

function display(object) {
  const title = document.createElement("h3");
  const author = document.createElement("h4");
  const pages = document.createElement("h4");
  title.innerHTML = object[0].title;
  author.textContent = object[0].author;
  pages.textContent = object[0].pages;
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
}

display(myLibrary);
