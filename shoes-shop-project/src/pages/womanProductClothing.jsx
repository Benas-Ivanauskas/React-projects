import "./womanProductClothing.css";
import ButtonFromProduct from "../components/buttonForProduct";
import shoesShoppintProducts from "../data/productDataWoman";
import { Link } from "react-router-dom";

export default function WomanProductClothing() {
  return (
    <div className="product-box">
      {shoesShoppintProducts.map((womansProduct) => (
        <List
          image={womansProduct.image}
          title={womansProduct.title}
          brand={womansProduct.brand}
          price={womansProduct.price}
          discount={womansProduct.discount}
          productId={womansProduct.id}
          key={womansProduct.id}
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
        <Link to={`/pick-apparel/woman-product/read-more/product/${productId}`}>
          <img
            className="product-images"
            src={image}
            alt="womans product image"
          />
        </Link>
        <h2>{title}</h2>
        <h3>
          Brand - <span className="brand">{brand}</span>
        </h3>
        <p>Price - {price} &#8364;</p>
        <div className="buttons">
          <ButtonFromProduct>READ MORE</ButtonFromProduct>
          <ButtonFromProduct>ADD TO CART</ButtonFromProduct>
        </div>
      </div>
    </>
  );
}
