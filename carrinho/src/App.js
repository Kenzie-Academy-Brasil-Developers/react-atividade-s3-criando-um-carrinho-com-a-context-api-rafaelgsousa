import './App.css';
import ProductList from "./components/productList"
import {CatalogueProvider} from "./providers/catalogue";
import {CartProvider} from "./providers/cart"

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <h2 className="titulo">Store</h2>
          <ProductList type="catalogue"/>
          <ProductList type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
