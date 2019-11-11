function pay() {
  
    var MOP = document.getElementById("sell").value;
    document.getElementById("MOP").innerHTML = MOP;

    var CAT = document.getElementById("can").value;
    document.getElementById("CAT").innerHTML = CAT;

    var amt = document.getElementById("amt").value;
    document.getElementById("amts").innerHTML = amt;

    var DES = document.getElementById("comment").value;
    document.getElementById("DES").innerHTML = DES;
}
function num(){
var num ="";
var copy = "Photocopy";
var numm = 4;
var amt = 200;
var mop = "Cash";

var serial = [];
serial.push({Number:numm,category:copy,amount:amt,MOP:mop});

/*for(i=0; i < serial.length; i++ ){
num +=serial[i] + "<br>";


}*/
for(i=0; i < serial.length; i++){
num +="<tr><td>" + Number(i+1) + "</td><td>"+serial[i].category+"</td><td>"+serial[i].amount+"</td><td>"+serial[i].MOP+"</td></tr>";
}
document.getElementById("demo").innerHTML = num;}