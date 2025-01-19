//Task 1: Create a constructor function for the Book object with properties for title,
 //author, and pages.


//constructor function for Book

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};


//Task 2: Implement a method within the Book object to display book information.
Book.prototype.displayBook = function () {
    return `${this.title} by ${this.author}, is ${this.pages} long.`;
}


const book1 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 754);

//Task 3: Create an array to store book objects and implement functions to add new books 
//and search for books by title or author.

const library = [];

function addBook(title, author, pages) {

    const book = {
            title: title,
            author: author,
            pages: pages,

    };
  library.push(book);

  }

  addBook(book1);
  addBook("What Evolution Is", "Ernst Mayr", 687);

  console.log(library);

  addBook("Life Ascending", "Nick Lane", 483);
console.log(library);

function searchBooks(books, query) {

    const results = [];

    for (const book of books) {
      if (
          book.author.toLowerCase().includes(query.toLowerCase())) {
        results.push(book);
      }
    }

    return results;
  }

  const searchResults = searchBooks(library, "wolfe");
  console.log(searchResults);

