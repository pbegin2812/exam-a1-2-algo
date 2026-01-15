// ex07.js

function compterMots(chaine) {
  const mots = chaine.trim().split(/\s+/);
  return mots.length;
}

console.log(compterMots("bonjour")); // Résultat attendu: 1
console.log(compterMots("La vie est cool surtout quand on dev")); // Résultat attendu: 8
