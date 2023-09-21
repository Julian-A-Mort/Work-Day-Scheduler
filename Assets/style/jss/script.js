

// current date //
$(function () {
  var currentDay = dayjs().format("dddd, MMMM D, YYYY");
  var currentDayElement = $("#currentDay");
  currentDayElement.text(currentDay);
});

// save button event listener //
$(".saveBtn").on("click", function () {
  var textarea = $(this).siblings(".description");
  var userDescription = textarea.val();
  var timeBlockId = $(this).parent().attr("id");

  localStorage.setItem(timeBlockId, userDescription);
});

// add past future present class //
$(function () {
  var currentHour = dayjs().hour(); //this is the current hour!!!//

  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);

  if (currentHour > hour) {
    $(this).removeClass("present future").addClass("past"); //past times need to be removed?!?//
  } else if (currentHour === hour) {
    $(this).removeClass("past future").addClass("present");
  } else {
    $(this).removeClass("past present").addClass("future");
  }
  });
});

// Bring up the saved local data //
$(".time-block").each(function () {
  var timeBlockId = $(this).attr("id");
  var userDescription = localStorage.getItem(timeBlockId);
  var textarea = $(this).find(".description");

  if (userDescription !== null) {
    textarea.val(userDescription);
  }
});