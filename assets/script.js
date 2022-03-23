// variable to add current date in the header to update daily 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// create var for the scheduled workday hours 

// create a for loop for the hours of 9am-5pm & design & add columns for the design 
function loadTimeBlock() {
  for (var hour = 9; hour < 18; hour++) {
    var currentHour = Number(moment().format('h'));
    console.log('current hour', currentHour);
    var timeClass;
    if (currentHour > hour) {
      timeClass = 'past'
    } else if (currentHour == hour) {
      timeClass = 'present'
    } else {
      timeClass = 'future'
    }

    // grab text area text from local storage if it exists 
    var localStorageKey = `workdayScheduler-${hour}`
    var inputText;
    if (localStorage.getItem(localStorageKey)) {
      inputText = localStorage.getItem(localStorageKey)
    } else {
      inputText = ''
    }

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

// saving the input into local storage 
function saveInput(hour, text) {
  console.log(hour, text)
  localStorage.setItem(`workdayScheduler-${hour}`, text)
}

// adding event listeners to all the buttons 
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

//start app
loadTimeBlock();
addEventListeners();




