//VARIABLES

//variable for the current time
var now = moment().format("dddd, MMMM Do");

//variable for each hour
var currentHour = moment().hour()
$(".time-block").each(function(){
var blockelement = $(this)
var hour = blockelement.attr("id")
var textarea = blockelement.find("textarea")
var value = textarea.val()
var saveTask = localStorage.getItem(hour);
textarea.val(JSON.parse(saveTask))
//Setting past, present, and future classes

if (hour < currentHour) {
    textarea.addClass("past")
}
else if (hour === currentHour) {
    textarea.addClass("present")
}
else {
    textarea.addClass("future")
}
});

//TIME
//function to implement current time to heading 2
var currentDayEl = function() {
    var dateHolderEl = document.querySelector("#currentDay");
    dateHolderEl.innerHTML = '<h2>'+ now + '</h2>';
}

//TASK SAVING
//Save task to local storage
var saveTask = function (){
    var button = $(this)
    var parentdiv = button.parent()
    var hour = parentdiv.attr("id")
    var textarea = parentdiv.find("textarea")
    var value = textarea.val()
    localStorage.setItem(hour, JSON.stringify(value));
    
}


 //CALL FUNCTIONS
 
//When save button is clicked, the task is saved to local storage
 $(".saveBtn").on("click", saveTask);

//the h2 current time
currentDayEl();