import { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [deliveryCity, setDeliveryCity] = useState('Coimbatore');
  const [showProduct, setShowProduct] = useState(true);

  const productName = 'Wireless Mouse';
  const price = 499;

  return (
    <div className="app-container">
      <Header />

      {showProduct && (
        <ProductCard
          productName={productName}
          price={price}
          quantity={quantity}
          selectedColor={selectedColor}
          deliveryCity={deliveryCity}
        />
      )}

      <div className="controls-container">
        <div className="control-group">
          <label htmlFor="color-select">Colour: </label>
          <select
            id="color-select"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="city-input">Delivery City: </label>
          <input
            id="city-input"
            type="text"
            value={deliveryCity}
            onChange={(e) => setDeliveryCity(e.target.value)}
            placeholder="Enter delivery city"
          />
        </div>

        <div className="button-group">
          <button onClick={() => setQuantity((prev) => prev + 1)}>
            Add to Cart
          </button>
          <button
            onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))}
            disabled={quantity === 0}
          >
            Remove One
          </button>
          <button onClick={() => setQuantity(0)}>
            Reset Cart
          </button>
          <button
            onClick={() => setShowProduct((prev) => !prev)}
            title="Show/Hide Product"
          >
            {showProduct ? 'Hide Product' : 'Show Product'}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export { Header, ProductCard, Footer };
export default App;
