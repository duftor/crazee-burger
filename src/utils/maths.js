export function formatPrice(priceToFormat) {
	let price = priceToFormat

	// @TODO: perhaps change this to if(!price) return 0
	if (!price) return "0,00 €"
	price = replaceFrenchCommaWithDot(price)

	const formattedPrice = new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
	}).format(price)
	return formattedPrice
}

export function replaceFrenchCommaWithDot(price) {
	if (typeof price === "string") price = parseFloat(price.replace(",", "."))
	return price
}

export function convertToNumber(chaine) {
	// Ne fonctionne plus sur "2 119,56"
	chaine = chaine.toString()

	if (chaine === "") return 0

	let prixSansEspace = chaine.replace(/\s/g, "") // Supprimer les espaces
	let virguleIndex = prixSansEspace.indexOf(",")
	let pointIndex = prixSansEspace.indexOf(".")
	if (virguleIndex !== -1 && pointIndex !== -1) {
		if (pointIndex > virguleIndex) {
			// Le point est le séparateur décimal
			prixSansEspace = prixSansEspace.replace(/\,/g, "")
		} else {
			// La virgule est le séparateur décimal
			prixSansEspace = prixSansEspace.replace(/\./g, "")
			prixSansEspace = prixSansEspace.replace(/\,/g, ".")
		}
	} else {
		prixSansEspace = prixSansEspace.replace(/[,|.]/g, ".") // Remplacer toutes les virgules ou points par des points
	}
	let prixEnNombre = parseFloat(prixSansEspace) // Convertir en nombre
	return prixEnNombre
}
