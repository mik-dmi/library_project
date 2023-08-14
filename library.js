function addBookToLibrary() {
    // do stuff here
  }

  function Book() {

    
  }

  
  
  let myLibrary = [];

  const showFormsButton = document.getElementById("addBookButton");
  const forms = document.querySelector("form");
  const nameOfBook = forms["name"];
  const author = forms["author"];
  const pages = forms["pages"];
  const check = forms["read_or_not"]
  const addBookButton = document.getElementById('.create_a_book_card');

  showFormsButton.addEventListener("click", ()=>{
  forms.style.display = "flex";
  showFormsButton.style.display = "none"; 
  })

  forms.addEventListener("submit", (e)=>{
    e.preventDefault();
    const book = new Book()
    forms.style.display = "none";   /*hides the forms*/
    showFormsButton.style.display = "block";  /*show the + button again"*/

    forms.reset();  /*clear the form for the next time*/
  }
  
  )

