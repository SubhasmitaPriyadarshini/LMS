function Book(title, author, page, genre) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.genre = genre;

}
var library = [];

function addBook() {
    var title = document.getElementById("title").Value;
    var author = document.getElementById("author").Value;
    var page = document.getElementById("page").Value;
    var genre = document.getElementById("genre").Value;
    var book = new Book(title, author, page, genre);
    library.push(book);
    displayBooks();
}

function removeBook() {
    var title = prompt("Enter the Book Name");

}

function displayBooks(books) {
    var bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    if (books) {
        books = library;
    }
    for (var i = 0; i < books.length; i++) {
        var tr = document.createElement("tr");
        var tdTitle = document.createElement("td");
        tdTitle.innerText = books[i].title;
        var tdAuthor = document.createElement("td");
        tdAuthor.innerText = books[i].author;
        var tdPage = document.createElement("td");
        tdPage.innerText = books[i].page;
        var tdGenre = document.createElement("td");
        tdGenre.innerText = books[i].Genre;

        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPages);
        tr.appendChild(tdGenre);
        bookList.appendChild(tr);
    }
}