// ex10.js

function filtrerDoublon(tab) {
    const occurrences = {}; 
    const doublons = [];  

    for (const nombre of tab) {
        if (occurrences[nombre]) {
            occurrences[nombre]++;
        } else {
            occurrences[nombre] = 1;
        }
    }

   
    for (const nombre in occurrences) {
        if (occurrences[nombre] > 1) {
            doublons.push(Number(nombre));
        }
    }

    return doublons;
}

console.log(filtrerDoublon([1, 2, 3])); // Résultat attendu: []
console.log(filtrerDoublon([1, 1, 2, 2, 3])); // Résultat attendu: [1, 2]
console.log(filtrerDoublon([1, 1, 4, 3, 4, 2])); // Résultat attendu: [1, 4]
console.log(filtrerDoublon([0, 0, 16, 25, 24, 16, 24, 2, 16, 4])); // Résultat attendu: [0, 16, 24]