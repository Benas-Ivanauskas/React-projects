import "./mansClothing.css";
import manShoesShoppintProducts from "../data/productData";
import ButtonFromProduct from "../components/buttonForProduct";
import { Link } from "react-router-dom";

export default function WomansClothing() {
  return (
    <div className="mans-product-box">
      {manShoesShoppintProducts.map((mansProduct) => (
        <List
          image={mansProduct.image}
          title={mansProduct.title}
          brand={mansProduct.brand}
          price={mansProduct.price}
          discount={mansProduct.discount}
          key={mansProduct.id}
          productId={mansProduct.id}
          brandInformation={mansProduct.brandInformation}
        />
      ))}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function List({ image, title, brand, price, productId }) {
  return (
    <>
      <div className="card">
        <Link to={`/pick-apparel/man-product/read-more/product/${productId}`}>
          <img
            className="mans-product-images"
            src={image}
            alt="mans product image"
          />
        </Link>
        <h2>{title}</h2>
        <h3>
          Brand - <span className="brand">{brand}</span>
        </h3>
        <p>Price - {price} &#8364;</p>
        <div className="buttons">
          <Link to={`/pick-apparel/man-product/read-more/product/${productId}`}>
            <ButtonFromProduct>READ MORE</ButtonFromProduct>
          </Link>
        </div>
      </div>
    </>
  );
}
