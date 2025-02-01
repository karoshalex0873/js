// Write a JavaScript program that filters a list of books based on a given search term. The program should:
// Use an array of book objects, where each book has a title, author, and yearPublished.
// Allow users to search for books by title using a case-insensitive search.
// Return all books that contain the search term as a partial match in their title.
// If no books match, return an empty array.

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 },
  { title: "1984", author: "George Orwell", yearPublished: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
  { title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813 },
  { title: "Moby-Dick", author: "Herman Melville", yearPublished: 1851 }
];

const searchTerm = "the"; // You can change this
const searchBook = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

const searchBookNames = searchBook.map(book => book.title).join(", ");

console.log(searchBookNames.length > 0 ? `Matching books: ${searchBookNames}` : "No books found.");
