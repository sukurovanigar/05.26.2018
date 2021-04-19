document.write("<h1>Zahlenpyramide</h1>")
function pyramid() {
    var row = 4;
    var zahl = 0;
    document.write("<center>");
    for (var i = 0; i < row; i++) {
        for (var col = 1; col <= i + 1; col++) {
            zahl++;
            document.write(zahl+ " ");
        }
        document.write("<br>");
    }
}
pyramid();
