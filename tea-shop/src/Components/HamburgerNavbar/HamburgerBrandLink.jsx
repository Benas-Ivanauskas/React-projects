import { Link } from "react-router-dom";

export default function HamburgerBrandLink() {
  return (
    <div className="flex items-center ps-4 mt-5">
      <Link to="/">
        <img
          className="w-8 h-8"
          src="../images/leaf-logo.png"
          alt="brand logo"
        />
        <span className="ps-3 font-bold text-lg">Brand Name</span>
      </Link>
    </div>
  );
}
