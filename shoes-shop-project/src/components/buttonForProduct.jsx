import "./buttonForProduct.css";
export default function ButtonFromProduct({ children }) {
  return (
    <div>
      <button className="buttonForProduct">{children}</button>
    </div>
  );
}
