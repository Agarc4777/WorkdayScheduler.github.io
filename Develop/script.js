var now = moment()
console.log('now:', now.hours())
$("#currentDay").text(now.format('MMMM Do YYYY'));
//^^connect "now.hours" to the class for the time block AND color function.

//dynamically create the div elements
//add id or data attribute to input or button or both that stores the current hour.
for (var i = 9; i < 18; i++) {
    var timeBlock = $("<div class='time-block' data-id='time-block'></div>")
    var timeSpan = $("<span class='time-span' data-id='"+i+"'>" + i + ":00</span>")
    var input = $('<input class="description" data-id="input" data-hour="'+i+'"></input>')

    //use local storage to link the i and previous inputs to auto fill the data.

    var oldInput = localStorage.getItem(i);
    input.val(oldInput);
    var button = $("<button class='saveBtn'>Save</button>")

    timeBlock.append(timeSpan, input, button);
    $(".container").append(timeBlock);
    console.log(input)
}

//uses input and pulls it back when refreshed.
function saveBtnHandler (event) {
    var userInput = $(event.target).siblings("input").val();
    var Time = $(event.target).siblings("input").data("hour");
    localStorage.setItem( Time , userInput);
}

//add event listener to all the save buttons that grabs the input value for the corresponding time-block.
var saveButtons = document.getElementsByClassName('saveBtn');
for(var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", saveBtnHandler);
}

$(".description").each(time);

var timeSpanArray = $('.time-span');

console.log('timeSpanArray:', timeSpanArray);



// function to change the color of the page and the format.
function time () {
    var time = ($(this).attr("time-block"))
    
    if (time == now.hours) {
        //code goes in here to add css to color code the page to present
        $("#time-block").addClass(".present");
    }  else if (time < now.hours) {
        //code goes in here to add css to color code the page to past
        $("#time-block").addClass(".past");
    } else {
        //code goes in here to add css to color code the page to future
        $("#time-block").addClass(".future");
    }


}

//add a clear all button to remove data from html and local storage

