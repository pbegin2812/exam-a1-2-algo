// ex08.js

function compterChaine(tab) {
    let count = 0;
    for (let i = 0; i < tab.length; i++) {
        if (typeof tab[i] === 'string') {
            count++;
        }
    }
    return count;
}

console.log(compterChaine([4, 6, 8])); // Résultat attendu: 0
console.log(compterChaine(["toto", 6, "tutu"])); // Résultat attendu: 2
console.log(compterChaine([4, false, "nunu"])); // Résultat attendu: 1