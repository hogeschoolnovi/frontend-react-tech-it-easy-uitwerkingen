import {inventory} from './inventory.js';

// We hebben alle uitkomsten in deze functie gezet zodat we deze kunnen aanroepen in App.jsx
// Als je dat niet zou doen, wordt dit bestand nooit geladen en verschijnen de uitkomsten niet in de console
function showOefeningOneInConsole() {

// ==== OPDRACHT 1A ====
	const productTypes = inventory.map((tv) => {
		return tv.type;
	});

	console.log(productTypes);

// ==== OPDRACHT 1B ====
	const soldOutProducts = inventory.filter((tv) => {
		return tv.originalStock === tv.sold;
	});

	console.log(soldOutProducts);

// ==== OPDRACHT 1C ====
	const specificProduct = inventory.find((tv) => {
		return tv.type === 'NH3216SMART';
	});

	console.log(specificProduct);

// ==== OPDRACHT 1D ====
	const sportProducts = inventory.map((tv) => {
		if (tv.refreshRate >= 100) {
			return {name: `${tv.brand} ${tv.name}`, suitable: true}
		} else {
			return {name: `${tv.brand} ${tv.name}`, suitable: false}
		}

		// het kan ook nog korter door de uitkomst van de evaluatie als waarde te gebruiken:
		// return { name: `${tv.brand} ${tv.name}`, suitable: tv.refreshRate >= 100 }
	});

	console.log(sportProducts);

// ==== OPDRACHT 1E ====
	const largeProducts = inventory.filter((tv) => {
		const hasLargeScreen = tv.availableSizes.find((size) => {
			return size >= 65;
		});

		return hasLargeScreen;

		// je kunt dit ook korter opschrijven:
		// return tv.availableSizes.find((size) => size >= 65);
	});

	console.log(largeProducts);

// ==== OPDRACHT 1F ====
	const ambiLightProducts = inventory.filter((tv) => {
		const optionAmbilight = tv.options.find((option) => {
			return option.name === 'ambiLight';
		});

		if (optionAmbilight.applicable === true) {
			return true;
		}

		// je kunt dit ook korter opschrijven:
		// return optionAmbilight.applicable === true;
	});

	console.log(ambiLightProducts);
}

export default showOefeningOneInConsole;