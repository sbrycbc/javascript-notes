//Mini Library

/* Your task is to create a Book class representing a library.

Write a Book class that should have 4 properties

a title as a string
an author as a string
an isbn as a number
isCurrentlyAvailable as a boolean (true as a default value)
The constructor should take 3 parameters initializing those properties. For example 

 const atomicHabbits = new Book("Atomic Habbits", "James Clear", 87254612)
 const steveJobs = new Book("Steve Jobs Biography", "Walter Isaacson", 5561246)
 
 The class should also have a method called isBookAvailable()

 atomicHabbits.isBookAvailable() //Atomic Habbits from James Clear is currently available.

*/

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isCurrentlyAvailable = true;
    }

    isBookAvailable(){
        return `${this.title} from ${this.author} is currently available.`
    }
}

const atomicHabbits = new Book("Atomic Habbits", "James Clear", 87254612,true);
const steveJobs = new Book("Steve Jobs Biography", "Walter Isaacson", 5561246,true);

console.log(atomicHabbits.isBookAvailable());
console.log(steveJobs.isBookAvailable());