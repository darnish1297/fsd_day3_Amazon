import { useEffect } from 'react';
import mouseIcon from '../assets/mouse.svg';

function ProductCard({
  productName = 'Wireless Mouse',
  price = 499,
  quantity = 0,
  selectedColor = 'Black',
  deliveryCity = 'Coimbatore',
}) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const numericPrice =
    typeof price === 'number'
      ? price
      : parseInt(String(price).replace(/[^0-9]/g, ''), 10) || 499;

  const displayPrice =
    typeof price === 'string' && price.includes('₹') ? price : `₹${price}`;

  const totalAmount = quantity * numericPrice;
  const status = quantity > 0 ? 'Product added to cart' : 'Cart is empty';

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={mouseIcon}
          alt="Wireless Mouse"
          className="product-image"
          width="60"
          height="90"
        />
      </div>
      <p>Product: {productName}</p>
      <p>Price: {displayPrice}</p>
      <p>Colour: {selectedColor}</p>
      <p>Deliver to: {deliveryCity}</p>
      <p>Cart Quantity: {quantity}</p>
      <p>Total Amount: ₹{totalAmount}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default ProductCard;
