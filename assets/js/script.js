var now = moment().format("dddd, MMMM Do");

var currentDayEl = function() {
    var dateHolderEl = document.querySelector("#currentDay");
    dateHolderEl.innerHTML = '<h2>'+ now + '</h2>';
}




currentDayEl();