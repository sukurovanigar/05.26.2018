// Textliche Bewertung
function getPunkt() {
    var inputValue = document.getElementById("addNumber").value;
    switch (inputValue) {

        case "10":
            inputValue = "Sehr gut";
            break;

        case "9":
            inputValue = "Gut";
            break;

        case "8":
            inputValue = "Befridigend";
            break;

        case "7":
            inputValue = "Ausreichend";
            break;

        default:
            inputValue = "Leider ungenugend Punkte erreicht.";
    }
    document.getElementById("punkt").innerHTML = inputValue;
}

// Happy Day Generator
function checkMyDay() {
    var x = document.getElementById("checkNumber").value;
    var y = 3;
    var z = 5;
    if (x % y == 0 && x % z == 0) {
        document.getElementById("luckyMesage").innerHTML = "Happy Day";
    } else if (x % z == 0) {
        document.getElementById("luckyMesage").innerHTML = "Day";
    } else if (x % y == 0) {
        document.getElementById("luckyMesage").innerHTML = "Happy";
    } else {
        document.getElementById("luckyMesage").innerHTML = x;
    }
}


