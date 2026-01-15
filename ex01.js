// ex01.js

function doublerSi(nombre, estDouble) {
    if (estDouble) {
        return nombre * 2;
    } else {
        return nombre;
    }
}

console.log(doublerSi(1, true));  // Résultat attendu: 2
console.log(doublerSi(2, false)); // Résultat attendu: 2