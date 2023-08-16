const cardSection = document.querySelector(".card-section");
const bookTitle = document.querySelector("#title");
console.log(bookTitle);
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const buttonSubmit = document.getElementById("buttonSubmit");

const myLibrary = [
  { author: "charlote", title: "Jane", pages: 213 },
  { author: "Brandon", title: "elantris", pages: 213 },
  { author: "Paulo", title: "alchemist", pages: 213 },
];

console.log(myLibrary);

function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages) {
  const newBook = new Book(bookTitle, bookAuthor, bookPages);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

display(myLibrary);

function display(list) {
  cardSection.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const deleteBtn = document.createElement("button");
    title.innerHTML = `Book Title: ${list[i].title}`;
    author.textContent = `Auhor:${list[i].author}`;
    pages.textContent = `Number of Pages: ${list[i].pages}`;
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("data-num", `${i}`);
    card.classList.add("card");
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(deleteBtn);
    cardSection.appendChild(card);
    deleteBtn.addEventListener("click", function () {
      let btnNum = deleteBtn.getAttribute("data-num");
      console.log(btnNum);
      myLibrary.splice(btnNum, 1);
      display(myLibrary);
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
