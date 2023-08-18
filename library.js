/*-----------------------------------------Functions----------------------------------------*/
function addBookToLibrary() {
    // do stuff here
  }
  function resetScreen(){
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

    const removeButton = document.createElement("button");
    removeButton.classList = "removeButton"
    removeButton.textContent="X"

    const labelForToggleSwitch = document.createElement("label"); /*lable for the Toggle*/
    labelForToggleSwitch.className  = "switch";
    
    const readToggleSwitch = document.createElement("input");   /*The Toggle*/
    readToggleSwitch.type = "checkbox";
    readToggleSwitch.checked =this.readBoolean;

    const spanForReadToggle = document.createElement("span");
    spanForReadToggle.className  = "slider round";

    const divForToggle =  document.createElement("div");
    divForToggle.className  = "toggle_container";
    
    cardContainer.appendChild(removeButton);
    labelForToggleSwitch.appendChild(readToggleSwitch);
    labelForToggleSwitch.appendChild(spanForReadToggle);
    

    for (let i = 1; i < 8; i++) {
      paragraph[i] = document.createElement("p");
      cardContainer.appendChild(paragraph[i]);
      if( i%2 ===0){
        paragraph[i].className = "userInput"
      }else{
        paragraph[i].className = "cardTitles"
      }
    }
    cardContainer.appendChild(labelForToggleSwitch);
    paragraph[1].textContent = "Name of the Book:";
    paragraph[2].textContent =  this.nameOfBook;
    paragraph[3].textContent = "Author:"
    paragraph[4].textContent = this.nameOfAuthor;
    paragraph[5].textContent = "Number of pages:" 
    paragraph[6].textContent = this.numberOfPages;
    paragraph[7].textContent = "Did you read the Book:";
    cardContainer.classList.add("card_with_content");
    
    cardContainer.appendChild(divForToggle);
    divForToggle.appendChild(paragraph[7]);
    divForToggle.appendChild(labelForToggleSwitch);
    
    removeButton.addEventListener('click', function() {
      // Get the parent element (the container) of the delete button
      const itemContainer = this.parentElement;
      
      
      // Remove the parent element from the DOM
      itemContainer.remove();
    });
    
    return cardContainer;
  }
  /*---------------------------------------------------------------------------------------------*/


  const mainContainer = document.querySelector(".container");
  const cardGrid = document.querySelector(".innerGrid");
  const showFormsButton = document.getElementById("addBookButton");
  const formsInput = document.getElementById("bookForm");
  const formsDisplay = document.querySelector('.formsContainer');
  const nameOfBook = formsInput["name"];
  const author = formsInput["author"];
  const pages = formsInput["pages"];
  const check = formsInput["read_or_not"];
  const deleteButton = document.querySelector('.removeButton');


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
    cardGrid.appendChild(card);

    resetScreen(); 
  });

  


  

