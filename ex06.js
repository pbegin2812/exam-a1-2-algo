// ex06.js

function sommePositifs(tab) {
    let somme = 0;
    for (let nombre of tab) {
        if (nombre > 0) {
            somme += nombre;
        }
    }
    return somme;
}

console.log(sommePositifs([1, -2, 3, 4])); // Résultat attendu: 8
console.log(sommePositifs([-1, -5])); // Résultat attendu: 0
console.log(sommePositifs([0, 2, 10])); // Résultat attendu: 12