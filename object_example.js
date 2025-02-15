const library = {
    name: 'City Library',
    location: 'Downtown',
    books: [
        { title: '1984', author: 'George Orwell', year: 1949 },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
    ],
    staff: {
        manager: {
            name: 'Alice',
            yearsOfExperience: 10,
            greet() {
                console.log(`Hello, I am ${this.name}, the manager.`);
            }
        },
        assistants: [
            { name: 'Bob', yearsOfExperience: 5 },
            { name: 'Charlie', yearsOfExperience: 3 }
        ]
    },
    getBookTitles() {
        return this.books.map(book => book.title);
    },
    getTotalBooks() {
        return this.books.length;
    },
    addBook(book) {
        this.books.push(book);
    }
};
