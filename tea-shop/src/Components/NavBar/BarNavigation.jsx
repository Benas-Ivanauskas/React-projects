import { Link } from "react-router-dom";

export default function BarNavigation() {
  return (
    <ul className="flex gap-10">
      <Link to="/products">
        <li>TEA COLLECTIONS</li>
      </Link>
      <li>ACCESSORIES</li>
      <li>BLOG</li>
      <li>CONTACT US</li>
    </ul>
  );
}
