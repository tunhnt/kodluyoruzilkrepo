/* name */

var name = prompt("lütfen isminiz giriniz","ör: Ahmet");
document.getElementById("myName").innerHTML = name;

/* date */

var date = new Date();
var day = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if(day == 0){
	day = "Pazar"
}else if( day == 1){
	day = "Pazartesi"
}else if( day == 2){
	day = "Salı"
}else if( day == 3){
	day = "Çarşamba"
}else if( day == 4){
	day = "Perşembe"
}else if( day == 5){
	day = "Cuma"
}else if( day == 6){
	day = "Cumartesi"
}


document.getElementById("myClock").innerHTML = day + " "+ hours +":"+minutes+":"+seconds;