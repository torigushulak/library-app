
let myLibrary = [];

class book {
    constructor(author, title, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages
    }
}

// this code is the view "refresher"
function render() {
    myLibrary.forEach(book => {
        // append to library element
        library.innerHTML = '';
        for (i = 0; i < myLibrary.length; i++) {
            temp = document.createElement('div');
            temp.className = 'book';
            temp.innerHTML = myLibrary[i];
            document.getElementsByTagName('div')[0].appendChild(temp);
        }
    });
}

const winnie = {
    title: "Title: Winnie the Pooh", 
    author: "Author: A.A.Milne",
    pages: "Pages: 176 " 
};

const cujo = { 
    title: "Title: Cujo", 
    author: "Author: Stephen King", 
    pages: "Pages: 400 " 
};

myLibrary.push(winnie.title, winnie.author, winnie.pages);
myLibrary.push(cujo.title, cujo.author, cujo.pages);



let library = document.getElementById('library')

let form = document.querySelector("form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

form.onsubmit = function () {
    author = document.getElementById("author").value;
    title = document.getElementById("title").value;
    pages = document.getElementById("pages").value;

    newBook = new book(author, title, pages);
    myLibrary.push(newBook.title, newBook.author, newBook.pages);

    // reset dom
    render ()
}


// displays and hides form
let newBookButton = document.getElementById('newbook');

form.style.visibility = "hidden";
newBookButton.addEventListener("click", function () {
    const form = document.getElementById('form');

    if (form.style.visibility === 'hidden') {
        // shows form
        form.style.visibility = 'visible';
    } else {
        // hides form
        form.style.visibility = "hidden";
    }
});


window.onload = () => render();

