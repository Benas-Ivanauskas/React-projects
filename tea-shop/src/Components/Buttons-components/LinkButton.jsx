import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

export default function LinkButton({ to, text }) {
  return (
    <Link to={to}>
      <Button className="mb-5">{text}</Button>
    </Link>
  );
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
