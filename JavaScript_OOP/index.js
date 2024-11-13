// Define the Book constructor
function Book(title, author, genre, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;

    // Method to get the summary of the book
    this.getSummary = function() {
        return `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Year: ${this.year}`;
    }
}

// Create book objects
const book1 = new Book("1984", "George Orwell", "Science Fiction", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy", 1937);

// Log summaries to console
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());