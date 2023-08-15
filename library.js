/*-----------------------------------------Functions----------------------------------------*/
function addBookToLibrary() {
    // do stuff here
  }
  function resetScreen(){
    formsInput.style.display = "none";   /*hides the forms*/
    showFormsButton.style.display = "block";  /*show the + button again"*/
    formsDisplay.style.display = "none";
    formsInput.reset();  /*clear the form for the next time*/

  }
  function Book(name, writer, pag, read) {
    this.nameOfBook = name;
    this.nameOfAuthor = writer;
    this.numberOfPages =  pag;
    this.readBoolean = read; 
  }
  /*-----------------------------------------Functions----------------------------------------*/
  /*------------ Make a prototype for book to make the book cards on the DOM --------------------*/
  Book.prototype.createBookCard = function(){
    const paragraph = [];
    const cardContainer = document.createElement("div");

    const labelForToggleSwitch = document.createElement("label"); /*lable for the Toggle*/
    labelForToggleSwitch.class = "switch";
    
    const readToggleSwitch = document.createElement("input");   /*The Toggle*/
    readToggleSwitch.type = "checkbox"; 

    const spanForReadToggle = document.createElement("span");
    spanForReadToggle.class = "slider_round"

    labelForToggleSwitch.appendChild(readToggleSwitch)
    labelForToggleSwitch.appendChild(spanForReadToggle);

    for (let i = 1; i < 4; i++) {
      paragraph[i] = document.createElement("p");
      cardContainer.appendChild(paragraph[i]);
    }
    cardContainer. appendChild(labelForToggleSwitch);
    paragraph[1].textContent = this.nameOfBook;
    paragraph[2].textContent = this.nameOfAuthor;
    paragraph[3].textContent = this.numberOfPages;
    readToggleSwitch.checked = this.readBoolean;
    cardContainer.class = "card";
    
    return cardContainer;
  }
  /*---------------------------------------------------------------------------------------------*/


  const mainContainer = document.querySelector(".container"); 
  const showFormsButton = document.getElementById("addBookButton");
  const formsInput = document.getElementById("bookForm");
  const formsDisplay = document.querySelector('.formsContainer');
  const nameOfBook = formsInput["name"];
  const author = formsInput["author"];
  const pages = formsInput["pages"];
  const check = formsInput["read_or_not"];
  
  let myLibrary = [];

  showFormsButton.addEventListener("click", ()=>{
    
    formsDisplay.style.display = "flex";
  });

  formsInput.addEventListener("submit", (e)=>{
    e.preventDefault();
    const bookObject = new Book(nameOfBook.value, author.value, pages.value, check.checked );
    console.log(bookObject);
    const card = bookObject.createBookCard();
    console.log(card)
    console.log(mainContainer)
    mainContainer.appendChild(card) ;
    resetScreen(); 
  });

