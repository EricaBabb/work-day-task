//variable for the current time
var now = moment().format("dddd, MMMM Do");
//variable to append an id to each task created
var taskIdCounter = 0;
//variable for column that holds the tasks
var taskCol = document.querySelector(".col-9");
//variable to hold array for created tasks
// var tasks = {nineTask, tenTask, elevenTask};

var nineTask = document.querySelector("#nine");
var nineButtonEl = document.querySelector("#nine-btn")
var tenTask = document.querySelector("#ten");
var elevenTask = document.querySelector("#eleven");
var twelveTask = document.querySelector("#twelve");
var oneTask = document.querySelector("#one");
var twoTask = document.querySelector("#two");
var threeTask = document.querySelector("#three");
var fourTask = document.querySelector("#four");
var fiveTask = document.querySelector("#five");

//function to implement current time to heading 2
var currentDayEl = function() {
    var dateHolderEl = document.querySelector("#currentDay");
    dateHolderEl.innerHTML = '<h2>'+ now + '</h2>';
}

//function for date highlighting past, present, future task
// var taskDate = function () {
//     // if (){

//     // }
// }


var saveTaskNine = function (){
    localStorage.setItem("nineTask", JSON.stringify(nineTask.value));
    
}

// var loadTasks = function() {
//     var savedTasks = localStorage.getItem("tasks");
//     // if there are no tasks, set tasks to an empty array and return out of the function
//     if (!savedTasks) {
//       return false;
//     }
//     console.log("Saved tasks found!");
//     // else, load up saved tasks
  
//     // parse into array of objects
//     savedTasks = JSON.parse(savedTasks);
  
//     // loop through savedTasks array
//     for (var i = 0; i < savedTasks.length; i++) {
//       // pass each task object into the `createTaskEl()` function
//       createTaskEl(savedTasks[i]);
//     }
//   };

  nineButtonEl.addEventListener("click", saveTaskNine);

//calling functions
currentDayEl();