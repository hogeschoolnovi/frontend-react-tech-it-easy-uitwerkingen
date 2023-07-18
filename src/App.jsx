import './App.css';
import { inventory} from "./constants/inventory.js";
import calculateSoldProducts from "./helpers/calculateSoldProducts.js";
import calculateInitialStock from "./helpers/calculateInitialStock.js";
import calculateProductsToSell from "./helpers/calculateProductsToSell.js";

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
        </main>
    )
}

export default App
