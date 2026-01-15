// ex07.js

function compterMots(chaine) {
	if (!chaine || chaine.length == 0) {
		return 0;
	}
	let total = 1;
	for (let i = 0; i < chaine.length; i++) {
		if (chaine[i] == " ") {
			total++;
		}
	}
	return total;
}
console.log(compterMots("bonjour")); // Résultat attendu: 1
console.log(compterMots("La vie est cool surtout quand on dev")); // Résultat attendu: 8
