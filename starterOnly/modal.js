//------------------- EXISTING CODE -------------------//

// DOM Elements
const formData = document.querySelectorAll(".formData");

//------------------- NEW CODE -------------------//

// ---------------------------
// ISSUE 1 - OPEN AND CLOSE MODAL
// ---------------------------

// ---------------------------
// PART 1 - OPEN THE MODAL 
// ---------------------------
// SUB FUNCTIONS THAT ARE USED BY THE MAIN FUNCTION BELOW TO OPEN THE MODAL 

// Select the modal in the DOM to be able to access it for modification
const modal1 = document.querySelector(".bground");

// Display the modal form block
function displayModalForm1() {
  modal1.style.display = "block";
}
// Reset form in case values were previously entered
function resetFormInputs() {
  document.forms.reserve.reset();
}
// Reset error messages in case values were previously entered
function resetErrorMessages() {
  firstError.style.display = "none";
  lastError.style.display = "none";
  emailError.style.display = "none";
  dateError.style.display = "none";
  quantityError.style.display = "none";
  locationError.style.display = "none";
  checkbox1Error.style.display = "none";
  formError.style.display = "none";
}
// Reset error borders on fields in case values were previously entered
function resetErrorBorders() {
  firstInput.classList.remove("redborder");
  lastInput.classList.remove("redborder");
  dateInput.classList.remove("redborder");
  emailInput.classList.remove("redborder");
  quantityInput.classList.remove("redborder");
  checkbox1Input.classList.remove("redborder");
}

// MAIN FUNCTION TO OPEN THE MODAL 
// Launches all sub functions to reset the form if needed + open it
// called on click on button "je m'inscris" in HTML 
function launchModal() {
  displayModalForm1();
  scrollTop();
  lockScreen();
  resetFormInputs();
  resetErrorMessages();
  resetErrorBorders();
  borderColorChange();
}

// ---------------------------
// PART 2 - CLOSE THE MODAL 
// ---------------------------
// Hides the form
// called on click on popup cross button in HTML
// called when form is validated
function closeModal1() {
  modal1.style.display = "none";
  hideDateText();
  unlockScreen();
}

// ---------------------------
// ISSUES 2 & 3 - VERIFY VALUES FOR EACH FIELD, DISPLAY ERRORS, VALIDATE FORM
// ---------------------------

// ---------------------------
// 2.1 VERIFY USER FIRST NAME (COMPLIANCE + NOT EMPTY)
// ---------------------------

// SETUP
// By default the answer value is not valid 
var firstValide = null;
// Select DOM elements for modification when needed 
const firstInput = document.getElementById("first");
const firstError = document.getElementById("firstError");
// Hide error messages by default 
firstError.style.display = "none";

// FIRST NAME ERRORS (Issue #3)
// Function that will be called when the validation criteria are met
// Set the answer value to valid 
// Hide error messages and formatting if there are any
function firstValid() {
  firstValide = true;
  firstError.style.display = "none";
  firstInput.classList.remove("redborder");
}

// Function that will be called when the validation criteria are NOT met
// Set the answer value to NOT valid 
// Show error messages and formatting if needed
function firstInvalid() {
  firstValide = false;
  firstError.style.display = "block";
  firstInput.classList.add("redborder");
}

// FIRST NAME VALUES CHECK
// Verifiy if the field name is empty to make the answer invalid
// Called in the global form check function 
function checkfirstEmpty() {
  if (firstInput.value.length == 0) {
    firstInvalid();
  }
}

// When the field has a value, verifies if it matches the criteria at each new input 
// Called in the global form check function 
function checkfirstValue() {
  firstInput.addEventListener("input", function (e) {
    var value = e.target.value;
    // The regex below verifies that there is only text and at least 2 characters + includes french special characters
    if (value.match(/^[A-Za-z-éèêàâäiîçô]{2,}$/)) {
      firstValid();
    } else {
      firstInvalid();
    }
  });
}

// FIRST NAME VALIDATION
// Checks if the answer values are not empty, and match the criteria
// Called on click in the form field for first name 
function checkfirstValidation() {
  checkfirstEmpty();
  checkfirstValue();
}

// ---------------------------
// 2.2 VERIFY USER LAST NAME (COMPLIANCE + NOT EMPTY)
// ---------------------------
// For explanations see part 2.1 about the first name, its the same

var lastValide = null;
const lastInput = document.getElementById("last");
const lastError = document.getElementById("lastError");
lastError.style.display = "none";

function lastValid() {
  lastValide = true;
  lastError.style.display = "none";
  lastInput.classList.remove("redborder");
}

function lastInvalid() {
  lastValide = false;
  lastError.style.display = "block";
  lastInput.classList.add("redborder");
}

function checklastEmpty() {
  if (lastInput.value.length == 0) {
    lastInvalid();
  }
}

function checklastValue() {
  lastInput.addEventListener("input", function (e) {
    var value = e.target.value;
    if (value.match(/^[A-Za-z-éèêàâäiîçô]{2,}$/)) {
      lastValid();
    } else {
      lastInvalid();
    }
  });
}

function checklastValidation() {
  checklastEmpty();
  checklastValue();
}

// ---------------------------
// 2.3 VERIFY USER EMAIL (COMPLIANCE + NOT EMPTY)
// ---------------------------
// For explanations see part 2.1 about the first name, its the same
// EXCEPT the different REGEX for email validation 

var emailValide = null;
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
emailError.style.display = "none";

function emailValid() {
  emailValide = true;
  emailError.style.display = "none";
  emailInput.classList.remove("redborder");
}

function emailInvalid() {
  emailValide = false;
  emailError.style.display = "block";
  emailInput.classList.add("redborder");
}

function checkemailEmpty() {
  if (emailInput.value.length == 0) {
    emailInvalid();
  }
}

function checkemailValue() {
  emailInput.addEventListener("input", function (e) {
    var value = e.target.value;
    if (
      value.match(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) 
        {
      emailValid();
    } else {
      emailInvalid();
    }
  });
}

function checkemailValidation() {
  checkemailEmpty();
  checkemailValue();
}

// ---------------------------
// VERIFY BIRTHDATE -- won't do not required in specs see issue #2
// ---------------------------

var dateValide = null; 
const dateInput = document.getElementById("birthdate");
const dateError = document.getElementById("birthdateError");
dateError.style.display = "none";

function dateValid() {
  dateValide = true;
  dateError.style.display = "none";
  dateInput.classList.remove("redborder");
}

function dateInvalid() {
  dateValide = false;
  dateError.style.display = "block";
  dateInput.classList.add("redborder");
}

function checkdateEmpty() {
  if (dateInput.value.length == 0) {
    dateInvalid();
  }
}

function checkdateValue() {
  dateInput.addEventListener("input", function (e){
    var value = e.target.value;
    // Check if the value is a date and if the user is roughly more than 16 years old
      if (value < "2008-01-01") { 
      dateValid();
    } else {
      dateInvalid();
    }
  });
}

function checkdateValidation() {
  checkdateEmpty();
  checkdateValue();
}


// ---------------------------
// 2.4 VERIFY QUANTITY OF TOURNAMENTS COMPLETED BY USER (COMPLIANCE + NOT EMPTY)
// ---------------------------
// For explanations see part 2.1 about the first name, its the same
// EXCEPT the use of "if (parseInt(value).toString() === value) {" for integer validation 

var quantityValide = null;
const quantityInput = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");
quantityError.style.display = "none";

function quantityValid() {
  quantityValide = true;
  quantityError.style.display = "none";
  quantityInput.classList.remove("redborder");
}

function quantityInvalid() {
  quantityValide = false;
  quantityError.style.display = "block";
  quantityInput.classList.add("redborder");
}

function checkquantityEmpty() {
  if (quantityInput.value.length == 0) {
    quantityInvalid();
  }
}

function checkquantityValue() {
  quantityInput.addEventListener("input", function (e) {
    var value = e.target.value;
    // Check if the value has nothing else than in integer 
      if (parseInt(value).toString() === value) { 
      quantityValid();
    } else {
      quantityInvalid();
    }
  });
}

function checkquantityValidation() {
  checkquantityEmpty();
  checkquantityValue();
}

// ---------------------------
// 2.5 VERIFY LOCATION OF TOURNAMENT WANTED BY USER (COMPLIANCE + NOT EMPTY)
// ---------------------------
// For explanations see part 2.1 about the first name, its the same
// EXCEPT for the use of document.forms.reserve.location.value to check all the radio buttons value at once
// No need for a checklocationValue function, because if the value is not null, the conditions are valid

var locationValide = null;
const locationError = document.getElementById("locationError");
locationError.style.display = "none";

function locationValid() {
  locationValide = true;
  locationError.style.display = "none";
}

function locationInvalid() {
  locationValide = false;
  locationError.style.display = "block";
}

function checklocationEmpty() {
  // Verify if there is a checked field in the reserve form
  if (document.forms.reserve.location.value == "") {
    locationInvalid();
  } else {
    locationValid();
  }
}

function checklocationValidation() {
  checklocationEmpty();
}

// ---------------------------
// 2.6 VERIFY IF CHECKBOX1 FOR TERMS AND CONDITIONS IS CHECKED (COMPLIANCE + NOT EMPTY)
// ---------------------------
// For explanations see part 2.1 about the first name, its the same
// EXCEPT for the use of checkbox1Input.checked to verify if the field is checked
// No need for a checkcheckbox1Value function, because if the value is checked, the conditions are valid

var checkbox1Valide = null;
const checkbox1Input = document.getElementById("checkbox1");
const checkbox1Error = document.getElementById("checkbox1Error");
checkbox1Error.style.display = "none";

function checkbox1Valid() {
  checkbox1Valide = true;
  checkbox1Error.style.display = "none";
  checkbox1Input.classList.remove("redborder");
}

function checkbox1Invalid() {
  checkbox1Valide = false;
  checkbox1Error.style.display = "block";
  checkbox1Input.classList.add("redborder");
}

function checkcheckbox1Empty() {
    // Verify if the checkbox is checked
  if (checkbox1Input.checked) {
    checkbox1Valid();
  } else {
    checkbox1Invalid();
  }
}

function checkcheckbox1Validation() {
  checkcheckbox1Empty();
}

// ---------------------------
// 2.7 VERIFY IF ALL CONDITIONS ARE MET AT FORM SUBMISSION (COMPLIANCE + NOT EMPTY)
// ---------------------------
const formError = document.getElementById("formError");
const registerForm = document.getElementById("registerForm");
// Prevent form from being submitted 
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
formError.style.display = "none";

// FORM ERRORS (Issue #3)
// Called if the conditions to validate the whole form are met
function formValid() {
  // not used anymore : formValide = true;
  formError.style.display = "none";
  // If the form is validated, close it 
  closeModal1();
  // If the form is validated, show the thank you page
  launchModal2();
}

function formInvalid() {
  formError.style.display = "block";
}

// FORM VALUES CHECK
// Called to update the results of all fields
// Useful in case the user clicks on "c'est parti" without filling any value in the form, to display an error
function checkformCompletion() {
  checkfirstValidation();
  checklastValidation();
  checkemailValidation();
  checkdateValidation();
  checkquantityValidation();
  checklocationValidation();
  checkcheckbox1Validation();
}

// Called to make the form valid if all fields have a correct value
function formvalueCheck() {
  if (
    firstValide &&
    lastValide &&
    emailValide &&
    quantityValide &&
    locationValide &&
    checkbox1Valide
  ) {
    formValid();
  } else {
    formInvalid();
  }
}

// FORM VALIDATION
// Called when the form is submitted (onsubmit in <form> in the HTML)
// This means when clicking on the submit input or when using the keyboard
function checkformValidation() {
  checkformCompletion();
  formvalueCheck();
}

// ---------------------------
// ISSUE 4 - DISPLAY VALIDATION POPUP
// ---------------------------

// ---------------------------
// 4.1 DISPLAY POPUP
// ---------------------------
// Select the thank you popup to be able to modify it 
const modal2 = document.getElementById("thankYou");

// Display the thank you popup, called when the form is validated
function launchModal2() {
  modal2.style.display = "block";
}

// ---------------------------
// 4.2 CLOSE POPUP
// ---------------------------
// Hide the thank you popup, called via the HTML when the users clicks the exit cross or confirm button
function closeModal2() {
  modal2.style.display = "none";
  unlockScreen();
  hideDateText();
}

// ---------------------------
// OTHER 
// ---------------------------

// Change the border color of the radio button input if it is checked
function borderColorChange() { 
  for (let i = 1; i < 7; i++) {
    var icon = document.getElementById("checkbox-icon-"+[i]);
    var input = document.getElementById("location"+[i]);
    if (input.checked) {
      icon.style.border = "2px solid rgb(39, 158, 122)";
    } else {
      icon.style.border = "2px solid white";
    }
  } 
}

// Display modible menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector("#closeIcon");
const menuIcon = document.querySelector("#menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    hamburger.classList.remove("lockedBurger");
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    hamburger.classList.add("lockedBurger");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
);

// Lock the screen to the top when the modal is open 
function scrollTop() {
  window.scrollTo(0,0);
}

const docbody = document.querySelector("body");

function lockScreen() {
  docbody.style.overflow = "hidden";
}

function unlockScreen() {
  docbody.style.overflow = "auto";
}

// Display the date field content after click
function displayDateText() {
  document.getElementById("birthdate").style.color = "black";
}

function hideDateText() {
  document.getElementById("birthdate").style.color = "white";
}