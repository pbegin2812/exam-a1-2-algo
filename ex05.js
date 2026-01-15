// ex05.js

function dernierElement(tab) {
    if (tab.length === 0) {
        return null;
    }
    return tab[tab.length - 1];
}

console.log(dernierElement([10, 20, 30])); // Résultat attendu: 30
console.log(dernierElement(["JS", "HTML"])); // Résultat attendu: "HTML"
console.log(dernierElement([])); // Résultat attendu: null