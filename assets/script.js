// Adding the current date to the header to actively change daily 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));



// Create a for loop for the hours of 9am-5pm & design
function loadTimeBlock() {
  for (var hour = 9; hour < 18; hour++) {
    var currentHour = Number(moment().format('HH'));
    console.log('current hour', currentHour);

    // Create if statements for so the browser knows when to activate past, present, and future elements of CSS to the page
    var timeClass;
    if (currentHour >= hour) {
      timeClass = 'past'
    } else if (currentHour === hour) {
      timeClass = 'present'
    } else {
      timeClass = 'future'
    }

    // Record input text from local storage if it exists otherwise leave the input text fields blank
    var localStorageKey = `workdayScheduler-${hour}`
    var inputText;
    if (localStorage.getItem(localStorageKey)) {
      inputText = localStorage.getItem(localStorageKey)
    } else {
      inputText = ''
    }
// Creating divs for the columns and rows. Also adding corresponding classes.
// Adding moment.js to fill in the time blocks 
    $('.container').append(`<div class="row time-block" data-time="${hour}"> 
         <!--hour column-->
             <div class="col-sm col-md-2 hour"> 
               <p class=dayHour>${moment({ hour }).format('h  a')}</p>
             </div> 
             
         <!-- input text area-->
             <div class="col-sm col-md-8 d-flex description"> 
               <textarea class="textArea ${timeClass}">${inputText}</textarea> 
             </div> 
        
         <!--save button-->
             <div class="col-sm col-md-2 saveBtn">
             <i class="far fa-save fa-2x" id=icon></i>  
             </div>
      </div>`);
  }
}

// Saving the input text into local storage 
function saveInput(hour, text) {
  console.log(hour, text)
  localStorage.setItem(`workdayScheduler-${hour}`, text)
}


// Adding event listeners to all the save button 
function addEventListeners() {
  $('.saveBtn').each(function () {
    $(this).click(function () {
      var buttonHour = $(this).parent().attr('data-time')
      var row = $(this).parent()
      var inputText = row.children('.description').children('.textArea').val();
      saveInput(buttonHour, inputText)
    })
  })
}

// Invoking the functions 
loadTimeBlock();
addEventListeners();




