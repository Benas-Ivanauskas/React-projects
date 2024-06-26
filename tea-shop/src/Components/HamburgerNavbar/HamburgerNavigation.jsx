import { Link } from "react-router-dom";

export default function HamburgerNavigation() {
  return (
    <nav className="w-full mb-12 pt-3">
      <ul className="flex flex-col gap-3 items-start ps-8 text-lg ">
        <Link to="/products">
          <li>TEA COLLECTIONS</li>
        </Link>
        <li>ACCESSORIES</li>
        <li>BLOG</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
  );
}
