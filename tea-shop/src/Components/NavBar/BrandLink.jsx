import { Link } from "react-router-dom";

export default function BrandLink() {
  return (
    <Link to="/">
      <div className="flex items-center m-4 md:m-0 ">
        <img src="../images/leaf-logo.png" alt="brand logo" />
        <span className="ps-4">Brand Name</span>
      </div>
    </Link>
  );
}
