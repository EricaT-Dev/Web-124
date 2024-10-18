/*
Name : Erica Talley
Date : 10/17/2024
 */
var myName = "Erica Talley";
var para1 = document.getElementById("p1");
para1.textContent = myName;

var n1 = 20;
var n2 = 19;
//change n1 and n2 values
n1 = 5;
n2 = 3;
var numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

var numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

var myNameAddNum = myName + " " + n2;
document.getElementById("p4").textContent = myNameAddNum;

var myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

var myAge= 19;
var ageCompare = (numberMult > myAge);
document.getElementById("p6").textContent = ageCompare;
