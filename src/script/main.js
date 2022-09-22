// create current date and time
var d = new Date();
var date = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var time =
  date +
  "/" +
  month +
  "/" +
  year +
  " " +
  hours +
  ":" +
  minutes +
  ":" +
  seconds;
// print on website
document.getElementById("date").innerHTML = time;


// refresh elementid every 1 second
setInterval(function () {
  document.getElementById("date").innerHTML = time;
}, 1000);