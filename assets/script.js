// variable to add current date in the header to update daily 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// create var for the scheduled workday hours 
var scheduledHours = [];

// create a for loop for the hours of 9am-5pm & design 
for (var hour = 9; hour < 18; hour++) {
    scheduledHours.push(moment({hour}).format('h  a'));
    $('.container').append(`<div class="row time-block" data-time="${hour}"> 
       <!--hour column-->
           <div class="col-sm col-md-2 hour"> 
             <p class=dayHour>${moment({hour}).format('h  a')}</p>
           </div> 
           
       <!-- input text area-->
           <div class="col-sm col-md-8 d-flex description"> 
             <textarea class=textArea></textarea> 
           </div> 
      
       <!--save button-->
           <div class="col-sm col-md-2 saveBtn">
           <i class="far fa-save fa-2x" id=icon></i>  
           </div>`);
}
