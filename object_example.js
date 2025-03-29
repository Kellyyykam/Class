export const library = {
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

class Car {
    constructor(make, model, year, color, mileage = 0) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        console.log(`${this.make} ${this.model} is now running.`);
    }

    stop() {
        this.isRunning = false;
        console.log(`${this.make} ${this.model} has stopped.`);
    }

    drive(distance) {
        if (this.isRunning) {
            this.mileage += distance;
            console.log(`Driving ${distance} miles. Total mileage is now ${this.mileage} miles.`);
        } else {
            console.log(`Start the car before driving.`);
        }
    }

    getCarInfo() {
        return `${this.year} ${this.make} ${this.model} (${this.color}) - Mileage: ${this.mileage} miles`;
    }
}

JSON.parse(JSON.stringify(library));