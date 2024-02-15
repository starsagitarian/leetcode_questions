
const body = document.getElementsByTagName("body")[0];  
const div = document.getElementById("div");
const span = document.getElementById("span");
const button = document.getElementById("button");

body.addEventListener("click", (event) => { console.log("body was clicked") });

div.addEventListener("click", (event) => { console.log("div was clicked") });

span.addEventListener("click", (event) => { console.log("span was clicked") });

button.addEventListener("click", (event) => { 
    console.log("button was clicked") });

const books = [
        { title: "C++", author: "Bjarne" },
        { title: "Java", author: "James" },
        { title: "Python", author: "Guido" },
        { title: "Java", author: "James" },
    ];

let jsonObject = books.map(JSON.stringify);
console.log(jsonObject);

let uniqueSet = new Set(jsonObject);
console.log(uniqueSet);

let uniqueArray = Array.from(uniqueSet).map(JSON.parse);

console.log(uniqueArray);

Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

const newBooks = books.myMap((book, index, array) => {
    return {
        title: book.title + ", A DK Publishin book",
        author: book.author + ", A DK Publishin author",
        index: index + 1,
        array: array
}});

console.log("this is newBooks: ", newBooks);

Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArray = numArray.myFilter((num) => {
    return num % 2 === 0;
})

console.log("this is numArray: ", evenArray);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const fizzBuzz = (arr) => {
    for (i = 0; i < arr.length; i++) {
        let output = "";
        if (arr[i] % 3 === 0) {
           output += "Fizz";
        }
        if (arr[i] % 5 === 0) {
           output += "Buzz";
        }
        console.log(output || arr[i]);
    }}
console.log(fizzBuzz(numbers));
