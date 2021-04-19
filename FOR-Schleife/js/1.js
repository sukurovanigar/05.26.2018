// 1.1 Aufghabe 
var number = "";
var i;
for (i = 1; i < 100; i++) {
number += "Es gibt " + i + " Luftballon."+"<br>";
}
document.getElementById("demo").innerHTML = number;
//  1.2 Aufgabe
var number2="";
var Luftballon2 =new Array(99);
for(var i2=1; i2<100;i2++){
Luftballon2[i2]= i2 + 1;
}
for (var i2 = Luftballon2.length - 1; i2 >= 1; i2--) {
number2 += i2+" Luftballon"+"<br>";
document.getElementById("demo2").innerHTML= number2;
}
//1.3
var number = "";
for (var i=1; i < 100; i+=2) {
number += "Es gibt " + i + " Luftballon."+"<br>";
}
document.getElementById("demo3").innerHTML = number; 
// 1.4 
var number4="";
var Luftballon4 =new Array(99);
for(var i4=1; i4<100;i4++){
Luftballon4[i4]= i4 + 1;
}
for (var i4 = Luftballon4.length - 1; i4 >= 1; i4-=2) {
number4 += i4+" Luftballon"+"<br>";
document.getElementById("demo4").innerHTML= number4;
}