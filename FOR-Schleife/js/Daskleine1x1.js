var text = '';
for(var x = 1; x <= 10; x++){
    for(var y = 1; y <= 10; y++){
        text += x + " x " + y + " = " + x * y + "<br>";
        document.getElementById("mal11").innerHTML = text;
    }
}

