import { Link, useParams } from "react-router-dom";
import manShoesShoppintProducts from "../data/productData";
import "./read-more-current-product.css";
import { useState } from "react";

export default function ReadMoreManCurrentProduct({
  addToCart,
  updateCartItemCount,
}) {
  const { id } = useParams();
  const product = manShoesShoppintProducts.find(
    (product) => product.id === parseInt(id)
  );

  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: count });
    setAddToCartClicked(true);
    setCount(1);
  };

  const handleIncreaseCount = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);
    addToCart({ ...product, quantity: updatedCount });
    updateCartItemCount(updatedCount);
  };
  const handleDecreaseCount = () => {
    if (count > 1) {
      const updatedCount = count - 1;
      setCount(updatedCount);
      addToCart({ ...product, quantity: updatedCount });
      updateCartItemCount(updatedCount);
    }
  };

  return (
    <div className="product-view">
      <div className="product-overview-container">
        <img
          className="product-image"
          src={product.image}
          alt={product.image}
        />
        <div className="product-information">
          <h2>{product.title}</h2>
          <span className="store-sale">Store / Sale</span>
          <div className="product-price">
            Product price - {product.price} &#8364;
          </div>
          <div className="product-brand">Brand - {product.brand}</div>
          <div className="brand-information">Information about brand:</div>
          <p>{product.brandInformation}</p>
          <div>
            <Link to="/pick-apparel/man-product">
              <button className="btn-current-product">PREVIOUS PAGE</button>
            </Link>
            {addToCartClicked ? (
              <button className="btn-current-product">
                <button className="count-btn" onClick={handleDecreaseCount}>
                  -
                </button>
                {count}
                <button className="count-btn" onClick={handleIncreaseCount}>
                  +
                </button>
              </button>
            ) : (
              <button className="btn-current-product" onClick={handleAddToCart}>
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
