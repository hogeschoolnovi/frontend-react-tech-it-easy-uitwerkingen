import calculateInitialStock from "./calculateInitialStock.js";
import calculateSoldProducts from "./calculateSoldProducts.js";

// PSEUDO-CODE
// Gebruik de twee andere helperfuncties het verschil te berekenen
// geef die waarde terug

function calculateProductsToSell(productArray) {
    const initialProducts = calculateInitialStock(productArray);
    const soldProducts = calculateSoldProducts(productArray);
    return initialProducts - soldProducts;
}

export default calculateProductsToSell;