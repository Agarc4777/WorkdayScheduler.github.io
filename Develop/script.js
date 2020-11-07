var now = moment()
console.log('now:', now.hours())
$("#currentDay").text(now.format('MMMM Do YYYY'));

//connect "now" hours to the class for the time block
//add id or data attribute to input or button or both that stores the current hour.
for (var i = 9; i < 18; i++) {
    var timeBlock = $("<div class='time-block'></div>")
    var timeSpan = $("<span class='time-span'>" + i + ":00</span>")
    var input = $('<input class="description"></input>')
    var button = $("<button class='saveBtn'>Save</button>")
    timeBlock.append(timeSpan, input, button);
    $(".container").append(timeBlock);

}


//add event listener to all the save buttons that grabs the input value for the corresponding time-block.


//use local storage to link the i and previous inputs to auto fill the data.