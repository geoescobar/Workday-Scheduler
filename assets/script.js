// variable to add current date in the header to update daily 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// create var for the scheduled workday hours 
var scheduledHours = [];

// create a for loop for the hours of 9am-5pm
for (var hour = 9; hour < 18; hour++);

