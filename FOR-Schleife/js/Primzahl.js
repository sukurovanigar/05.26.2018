
// Es zeigt wie viel kan man ein Zahl teilen (Factoren)
function findFactors(num) {
    var res = [];
    for (var i = 1; i <= num; i++) {
        if (!(num % i)) {
            res[res.length] = i;
        }
    }
    return res;
}
// hier nimmt man die Zahlen die nur zwei Factoren hat
function isPrime(num) {
    return findFactors(num).length === 2;
}

// Addieren alle Zahlen in ein ARR.
function findPrimes(num) {
    for (var i = 1, res = []; i <= num; i++) {
        if (isPrime(i)) {
            res[res.length] = i;
        }
    }
    document.getElementById("prim").innerHTML=res;
}