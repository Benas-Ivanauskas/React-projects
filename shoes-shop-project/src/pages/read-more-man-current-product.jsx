import { Link, useParams } from "react-router-dom";
import manShoesShoppintProducts from "../data/productData";
import "./read-more-current-product.css";

export default function ReadMoreManCurrentProduct() {
  const { id } = useParams();
  const product = manShoesShoppintProducts.find(
    (product) => product.id === parseInt(id)
  );

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
            <button className="btn-current-product">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}
