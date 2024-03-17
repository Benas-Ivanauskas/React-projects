import { Link, useParams } from "react-router-dom";
import shoesShoppintProducts from "./../data/productDataWoman";
import "./read-more-current-product.css";
import { useState } from "react";

export default function ReadMoreWomanCurrentProduct() {
  const { id } = useParams();
  const product = shoesShoppintProducts.find(
    (product) => product.id === parseInt(id)
  );

  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setAddToCartClicked(true);
    setCount(1);
  };

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
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
            <Link to="/pick-apparel/woman-product">
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
