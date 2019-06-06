
function myfunction() {
document.body.style.backgroundColor = "lightblue";}
function myfunction2() {
document.body.style.backgroundColor = "lightgreen"}
function myfunction3() {
document.getElementById('demo').innerHTML = Date()}
function myfunction4() {
document.getElementById('Moro').innerHTML =':)'}

function aloitus() {
		var t ="A";//Muuttuja, sisältää tekstiä
		var n = 9;//Muuttuja, siältää numeron
		var s1 = t + t;
		var s2 = n + n;
		var s3 = t + n;
		console.log(s1 + "<br>");//Suoraan html-sivulle tapahtuva tulostus
		console.log(s2 + "<br>");
		console.log(s3 + "<br>");
}

function myfunction11() {
document.getElementById('disp').innerHTML +='1'}
function myfunction12() {
document.getElementById('disp').innerHTML +='2'}
function myfunction13() {
document.getElementById('disp').innerHTML +='3'}
function myfunction14() {
document.getElementById('disp').innerHTML +='4'}
function myfunction15() {
document.getElementById('disp').innerHTML +='5'}
function myfunction16() {
document.getElementById('disp').innerHTML +='6'}
function myfunction17() {
document.getElementById('disp').innerHTML +='7'}
function myfunction18() {
document.getElementById('disp').innerHTML +='8'}
function myfunction19() {
document.getElementById('disp').innerHTML +='9'}
function myfunction00() {
document.getElementById('disp').innerHTML +='0'}
function myfunction000() {
document.getElementById('disp').innerHTML =arvo}

function aloitus() {
document.getElementById("disp2").innerHTML = arvo;
document.getElementById("disp").innerHTML = '-';
document.getElementById("aika").innerHTML = '-';
}
var arvo = 0;//Globaali muuttuja

function add() {
	arvo++;
	if (arvo ==10) {
		arvo= 0;
	}
	aloitus();
}
function sub() {
	arvo--;
	if (arvo==-10) {
		arvo= 0
	}
	aloitus();
}
function Hehee() {
document.getElementById("aika").innerHTML = '<b>Hehee</b>';
}
function showWeekDay() { 
var d = new Date();
var today =d.getDay();

	if(today==0){
		document.getElementById("aika").innerHTML = "Sunnuntai";
	}

	if(today==1){
		document.getElementById("aika").innerHTML = "Maanantai";
	}	

	if(today==2){
		document.getElementById("aika").innerHTML = "Tiistai";
	}	

	if(today==3){
		document.getElementById("aika").innerHTML = "Keskiviikko";
	}

	if(today==4){
		document.getElementById("aika").innerHTML = "Torstai";
	}

	if(today==5){
		document.getElementById("aika").innerHTML = "Perjantai";
	}

	if(today==6){
		document.getElementById("aika").innerHTML = "Lauantai";
	}
}