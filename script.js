const cardSection = document.querySelector(".card-section");
const bookTitle = document.querySelector("#title");
console.log(bookTitle);
const read = document.querySelector("#read");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const buttonSubmit = document.getElementById("buttonSubmit");

const myLibrary = [
  { author: "charlote", title: "Jane", pages: 213, read: true },
  { author: "Brandon", title: "elantris", pages: 213, read: false },
  { author: "Paulo", title: "alchemist", pages: 213, read: true },
];

console.log(myLibrary);

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, read) {
  const newBook = new Book(bookTitle, bookAuthor, bookPages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const newTitle = bookTitle.value;
  console.log(newTitle);
  const newAuthor = bookAuthor.value;
  const newPages = bookPages.value;
  const readBook = read.checked;
  console.log(readBook);
  addBookToLibrary(newTitle, newAuthor, newPages, readBook);
  display(myLibrary);
});

function display(list) {
  cardSection.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const read = document.createElement("p");
    const deleteBtn = document.createElement("button");
    title.innerHTML = `Book Title: ${list[i].title}`;
    author.textContent = `Author:${list[i].author}`;
    pages.textContent = `Number of Pages: ${list[i].pages}`;
    read.textContent = `${list[i].read ? "Read" : "Unread"}`;
    read.style.backgroundColor = `${list[i].read ? "#2a9d8f" : "#e63946"}`;
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("data-num", `${i}`);
    card.classList.add("card");
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(deleteBtn);
    card.appendChild(read);
    cardSection.appendChild(card);
    read.addEventListener("click", function () {
      if (read.textContent == "Read") {
        read.textContent = "Unread";
        read.style.backgroundColor = "#e63946";
      } else {
        read.textContent = "Read";
        read.style.backgroundColor = "#2a9d8f";
      }
    });
    deleteBtn.addEventListener("click", function () {
      let btnNum = deleteBtn.getAttribute("data-num");
      console.log(btnNum);
      myLibrary.splice(btnNum, 1);
      display(myLibrary);
    });
  }
}

display(myLibrary);
