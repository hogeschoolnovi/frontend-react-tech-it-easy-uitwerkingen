import {bestSellingTv, inventory} from "./constants/inventory.js";
import calculateSoldProducts from "./helpers/calculateSoldProducts.js";
import calculateInitialStock from "./helpers/calculateInitialStock.js";
import calculateProductsToSell from "./helpers/calculateProductsToSell.js";
import createProductName from './helpers/createProductName.js';
import createProductPrice from './helpers/createProductPrice.js';
import createScreenSizesString from './helpers/createScreenSizesString.js';
import minus from './assets/minus.png';
import check from './assets/check.png';
import './App.css';

function App() {
    return (
        <main className="page-container">
            <h1>Tech it easy dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="dashboard-container">
                    <article className="dashboard-item items-sold">
                        <h3>Aantal verkochte producten</h3>
                        <h2>{calculateSoldProducts(inventory)}</h2>
                    </article>
                    <article className="dashboard-item items-original">
                        <h3>Aantal ingekochte producten</h3>
                        <h2>{calculateInitialStock(inventory)}</h2>
                    </article>
                    <article className="dashboard-item items-to-sell">
                        <h3>Aantal te verkopen producten</h3>
                        <h2>{calculateProductsToSell(inventory)}</h2>
                    </article>
                </div>
            </section>
            <section className="best-seller-container">
                <h2>Best verkochte tv</h2>
                <article className="product product-best-seller">
                    <span className="product-image">
                        <img src={bestSellingTv.sourceImg} alt="Afbeelding van het product"/>
                    </span>
                    <div className="product-info">
                        <h3>{createProductName(bestSellingTv)}</h3>
                        <p className="product-price">{createProductPrice(bestSellingTv.price)}</p>
                        <p>{createScreenSizesString(bestSellingTv.availableSizes)}</p>
                        <ul className="option-list">
                            <li><img src={check} alt="Icoon: aanwezig" className="icon"/>wifi</li>
                            <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>speech</li>
                            <li><img src={check} alt="Icoon: aanwezig" className="icon"/>hdr</li>
                            <li><img src={check} alt="Icoon: aanwezig" className="icon"/>bluetooth</li>
                            <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>ambilight</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section>
                <h2>Alle tvs</h2>
                <button type="button" onClick={() => console.log("Meest verkocht eerst")}>
                    Meest verkocht eerst
                </button>
                <button type="button" onClick={() => console.log("Goedkoopste eerst")}>
                    Goedkoopste eerst
                </button>
                <button type="button" onClick={() => console.log("Meest geschikt voor sport eerst")}>
                    Meest geschikt voor sport eerst
                </button>
            </section>
        </main>
)
}

export default App
