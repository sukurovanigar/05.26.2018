function gimmiMoney() {
    const haveValue2 = document.getElementById("zwei").value;
    const haveValue1 = document.getElementById("ein").value;
    const haveValue50 = document.getElementById("funfzig").value;
    const haveValue20 = document.getElementById("zwanzig").value;
    const haveValue10 = document.getElementById("zehn").value;
    var rest2 = 0;
    var rest1 = 0;
    var rest50 = 0;
    var rest20 = 0;
    var rest10 = 0;
    // 2€ finden
    const value = document.getElementById("add").value; // 173.70 €
    if (value == "") {
        alert("Etwas stimmt nicht!")
        document.getElementById("money").innerHTML = "Please enter a monay";
    }
    const halbvalue = value / 2; //ok 173.70 / 2 = 86.85
    const euro2 = (Math.trunc(halbvalue)); //ok 86.85 trunc = 86 mal 2€ ok
    if (euro2 > haveValue2) {
        rest2 = (euro2 - haveValue2) * 2
        document.getElementById("money").innerHTML = " 2 € : x " + haveValue2 + " 1 € : x" + rest2;
    } else {
        document.getElementById("money").innerHTML = " 2 € : x " + euro2;
    }

    // 1€ findem
    const findDifferense = (value - (2 * euro2)).toFixed(2);//ok 173.70-(2 * 86)= 173.70 - 172.00 = 01.70 € bleibt  geld
    const euro1 = (Math.trunc(findDifferense))// 1€
    if (rest2 > haveValue1) {
        rest1 = (rest2 - haveValue1)*2;
        document.getElementById("money").innerHTML = " 2 € : x " + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x " + rest1;
    } else {
        document.getElementById("money1").innerHTML = "1 € : x " + euro1;
    }
    // 0.50 € finden
    const findCent = (findDifferense - euro1).toFixed(2); //0.70
    const cent50 = Math.trunc(findCent / 0.50);// 1 mal 0.50 cent
    if (rest1 > haveValue50) {
        rest50 = (rest1 - haveValue50) * 2.5;
        document.getElementById("money").innerHTML = "2 € : x " + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x " + haveValue50 + " 0.20 € : x " + rest50;

    } else {
        document.getElementById("money2").innerHTML = "0.50 € : x " + cent50;
    }
    // 0.20 € finden
    const findModify20 = (findCent % 0.50).toFixed(2); // 0.70 - 0.50 = 0.20
    const cent20 = Math.trunc((findModify20 / 0.20).toFixed(2)); //0.20 / 0.20 = 1
    if (rest50 > haveValue20) {
        rest20 = (rest50 - haveValue20) * 2;
        document.getElementById("money").innerHTML = "2 € : x " + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x " + haveValue50 + " 0.20 € : x " + haveValue20 + " 0.10 € : x " + rest20;
    } else {
        document.getElementById("money").innerHTML = "0.20 € : x " + cent20;
    }
    // 0.10 € finden
    const findModify10 = (findModify20 % 0.20).toFixed(2);
    const cent10 = Math.trunc((findModify10 / 0.10).toFixed(2));
    if (rest20 > haveValue10) {
        rest10 = (rest20 - haveValue10);
        console.log(rest10);
        alert("Entschuldigung! Das Geld reicht nicht. Bitte nehmen Sie Ihr Geld zürück.")
        document.getElementById("message").innerHTML = "ACHTUNG: <br> ES GIBT KEIN GELD IN AUTOMAT"
        document.getElementById("money").innerHTML = "2 € : x " + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x " + haveValue50 + " 0.20 € : x " + haveValue20 + " 0.10 € : x " + haveValue10;
    
    } else {
        document.getElementById("money").innerHTML = "2 € : x " + euro2 + " 1 € : x" + euro1 + " 0.50 € : x " + cent50 + " 0.20 € : x " + cent20 + " 0.10 € : x " + cent10;    }
}