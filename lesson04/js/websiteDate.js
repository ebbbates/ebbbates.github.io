var d = new Date();

var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var weekDays = weekDay[d.getDay()];
var months = month[d.getMonth()];

var dayOfMonth = d.getDate();
var year = d.getFullYear();

var fullDate = weekDays + ", " + dayOfMonth + " " + months + " " + year;

document.write(fullDate);