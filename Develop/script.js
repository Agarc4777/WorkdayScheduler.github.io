var now = moment()
console.log('now:', now.hours())
$("#currentDay").text(now.format('MMMM Do YYYY'));

//connect "now" hours to the class for the time block
//add id or data attribute to input or button or both that stores the current hour.
for (var i = 9; i < 18; i++) {
    var timeBlock = $("<div class='time-block'></div>")
    var timeSpan = $("<span class='time-span'>" + i + ":00</span>")
    var input = $('<input class="description" data-hour="'+i+'"></input>')

    //use local storage to link the i and previous inputs to auto fill the data.

    var oldInput = localStorage.getItem(i);
    input.val(oldInput);
    var button = $("<button class='saveBtn'>Save</button>")

    timeBlock.append(timeSpan, input, button);
    $(".container").append(timeBlock);

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



function time () {
    var time = something
    if (time == now.hours) {
        //code goes in here to add css to color code the page to present
    
    }  else if (time < now.hours) {
        //code goes in here to add css to color code the page to past
    
    } else {
        //code goes in here to add css to color code the page to future
    
    }


}