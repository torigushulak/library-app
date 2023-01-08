
let myLibrary = [];

class book {
    constructor(title, author, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.readStatus = false
    }
}
// testing books
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

myLibrary.push(winnie);
myLibrary.push(cujo);

// this code is the view "refresher"
function render() {
    library.innerHTML = '';

    myLibrary.forEach(book => {
        // append to library element
        bookCard = document.createElement('div');
        bookCard.id = "book";

        bookTitle = document.createElement('h2');
        bookTitle.textContent = book.title;
        bookCard.appendChild(bookTitle);

        bookAuthor = document.createElement('h4');
        bookAuthor.textContent = book.author;
        bookCard.appendChild(bookAuthor);
        

        bookPages = document.createElement('p');
        bookPages.textContent = book.pages;
        bookCard.appendChild(bookPages);

        checkLabel = document.createElement('label');
        checkLabel.textContent = "Read:";
        checkLabel.id = "checklabel"
        bookCard.appendChild(checkLabel);
        
        newCheck = document.createElement('input');
        newCheck.type = "checkbox";
        newCheck.id = "check";
        bookCard.appendChild(newCheck);

        removeB = document.createElement('button');
        removeB.textContent = "Remove Book";
        removeB.id = "removeB";
        bookCard.appendChild(removeB);

        removeB.addEventListener('click', function() {
            const index = myLibrary.indexOf(book);
            if(index > -1) {
                myLibrary.splice(index, 1);
            }
            render()
        });

        library.append(bookCard);
        }
    )
}

let library = document.getElementById('library');
let form = document.querySelector("form");

// prevents submit button from reloading page when clicked
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

form.onsubmit = function () {
    
     title = document.getElementById("title").value;
    //  if(title == "") {
    //     alert("no")
    //  }
     author = document.getElementById("author").value;
     pages = document.getElementById("pages").value;

    newBook = new book(title, author, pages);
    myLibrary.push(newBook);

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

// displays current books when page renders
window.onload = () => render();

