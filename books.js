// Load books from Local Storage
let books = JSON.parse(localStorage.getItem("books")) || [];

// Display books when page loads
displayBooks();

// Add a new book
function addBook() {
    const title = document.getElementById("bookTitle").value.trim();
    const author = document.getElementById("author").value.trim();

    if (title === "" || author === "") {
        alert("Please enter Book Title and Author Name");
        return;
    }

    const book = {
        title: title,
        author: author
    };

    books.push(book);

    function searchBooks() {
    const search = document.getElementById("searchBook").value.toLowerCase();
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        if (
            book.title.toLowerCase().includes(search) ||
            book.author.toLowerCase().includes(search)
        ) {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${book.title}</strong> - ${book.author}
                <button onclick="deleteBook(${index})">Delete</button>
            `;
            bookList.appendChild(li);
        }
    });
}

    // Save to Local Storage
    localStorage.setItem("books", JSON.stringify(books));

    // Clear input fields
    document.getElementById("bookTitle").value = "";
    document.getElementById("author").value = "";

    // Refresh book list
    displayBooks();
}

// Display all books
function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${book.title}</strong> - ${book.author}
            <button onclick="deleteBook(${index})">Delete</button>
        `;

        bookList.appendChild(li);
    });
}

// Delete a book
function deleteBook(index) {
    books.splice(index, 1);

    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();
}