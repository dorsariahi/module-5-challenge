var currentDay = document.getElementById("currentDay")
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDay.innerHTML = currentDate
var textArea = $(".description")
var currentHour = moment().hour()
for (var i = 0; i < textArea.length; i++) {
    var time = $(textArea[i]).parent().attr("id")
    if (time < currentHour) {
        $(textArea[i]).addClass("past")
    }
    if (time > currentHour) {
        $(textArea[i]).addClass("future")
    }
    if (time == currentHour) {
        $(textArea[i]).addClass("present")
    }
}

function saveFunction() {
    var time = $(this).parent().attr("id")

    var value = $(this).siblings(".description").val()

    localStorage.setItem(time, value)
}

var saveBtn = $(".saveBtn")
saveBtn.on("click", saveFunction)