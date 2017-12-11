var degrees = 6;
var seconds = setInterval(secTick, 1000);
var minutes = setInterval(minTick, 60000);
var hours = setInterval(hourTick, 3600000);

var time = 1;
var timeMin = 1;
var timeHour = 1;

function secTick(){
	document.getElementById("second").style.transform = "rotate(" + (degrees * time) + "deg)";
	time++;
};
function minTick(){
	document.getElementById("minute").style.transform = "rotate(" + (degrees * timeMin) + "deg)";
	timeMin++;
};
function hourTick(){
	document.getElementById("hour").style.transform = "rotate(" + ((degrees * timeHour) * 5) + "deg)";
	timeHour++;
};
