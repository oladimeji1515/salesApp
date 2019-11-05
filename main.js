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