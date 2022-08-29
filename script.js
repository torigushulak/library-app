
let myLibrary = [];

class book {
    constructor(author,title,pages) {
        this.title = title,
        this.author = author,
        this.pages = pages
    }
}

let winnie = {title: "Title: Winnie the Pooh" , author: "Author: A.A.Milne", pages: "176 pages"};
let cujo = {title: "Title: Cujo", author: "Author: Stephen King", pages: "400 pages"}

myLibrary.push(winnie.title,winnie.author, winnie.pages);
myLibrary.push(cujo.title, cujo.author, cujo.pages);


let library = document.getElementById('library')
library.append(myLibrary);

let form = document.querySelector("form");
form.onsubmit = function() {
    author = document.getElementById("author").value;
    title = document.getElementById("title").value;  
    pages = document.getElementById("pages").value;  

    newBook = new book(author, title, pages);
    myLibrary.push(newBook.title, newBook.author, newBook.pages);
    library.append(myLibrary);
}


// displays and hides form
let newBookButton = document.getElementById('newbook');

form.style.visibility = "hidden";
newBookButton.addEventListener("click", function() {
    const form = document.getElementById('form');

    if(form.style.visibility === 'hidden') {
        // shows form
        form.style.visibility = 'visible';
    } else {
        // hides form
        form.style.visibility = "hidden";
    }
});

// displays new book
// const submitNewBook = getElementById('submit');

// submitNewBook.addEventListener('click', function() {
//     author = document.getElementById("author").value;
//     title = document.getElementById("title").value;  
//     pages = document.getElementById("pages").value;  

//     let newBook = new book(author, title, pages);
//     myLibrary.push(newBook.title, newBook.author, newBook.pages);
//     library.append(myLibrary);

// });



