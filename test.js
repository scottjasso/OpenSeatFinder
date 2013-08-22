var classname = "cs 4911";
var classesToPoll = new Array();
var index = 0;

function createUrl(classToPoll) {
  return "http://burdellanswers.com:3000/api/oscar/" + classToPoll.classname.replace(" ","/") + "/2013/fall/" + classToPoll.crn;
}

function alertIfOpenSeat(classToJoin) {
  return function(data) {
    if (data.seats.remaining > 0) {
      setTimeout(function() {alert("Found open seat!");}, 1);
      $("#openClasses").append("<b> CRN: " + classToJoin.crn + "</b> (Section " + data.section + ")<br>");
      console.log(classToJoin);
      window.open("http://www.youtube.com/watch?v=2Z4m4lnjxkY");
    }
    console.log(data);
  }
};

function pollClasses() {
  $("#openClasses").text("");
  for (var i = 0; i < classesToPoll.length; i++) {
    var classToJoin = classesToPoll[i];
    $.get(createUrl(classToJoin), alertIfOpenSeat(classToJoin));
  }
}

var sectionQuery = $.get("http://burdellanswers.com:3000/api/oscar/" + classname.replace(" ","/") + "/2013/fall/");
var windowLoad = $.Deferred();

sectionQuery.done(function(data) {
  for (var i = 0; i < data.length; i++) {
    classesToPoll[index] = {crn:data[i].crn, classname:classname};
    index++;
  }
  console.log(classesToPoll);
});

$(window).load(function() {
  windowLoad.resolve();
  $("body").prepend("<h1>Polling " + classname.toUpperCase() + " For Open Seats...</h1>");
});

$.when(sectionQuery, windowLoad).done(function() {
  pollClasses();
  setInterval(pollClasses, 60000);
});