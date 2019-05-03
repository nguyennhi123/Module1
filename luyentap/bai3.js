let inputmath;
let inputchemis;
let inputhistory;
inputmath = prompt("enter the math");
inputchemis = prompt("enter the chemis");
inputhistory = prompt("enter the history");
let math = parseInt(inputmath);
let chemis = parseInt(inputchemis);
let history = parseInt(inputhistory);
let TB = (math+chemis+history)/3
document.write("TB la: " + TB);