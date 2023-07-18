// PSEUDO-CODE
// maak een output-variabele
// loop over iedere entry van de array heen
// tel van ieder tv-object de ingekochte exemplaren op bij het huidige totaal
// geef die waarde terug wanneer de for-loop klaar is

function calculateInitialStock(productArray) {
    let total = 0;

    for (let i = 0; i < productArray.length; i++) {
        total = total + productArray[i].originalStock;
    }

    return total;
}

export default calculateInitialStock;