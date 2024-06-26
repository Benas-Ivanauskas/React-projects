import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CustomButton from "./CustomButton";

export default function LinkButtonWhite({ to, text }) {
  return (
    <Link to={to}>
      <CustomButton className="mb-5">{text}</CustomButton>
    </Link>
  );
}
LinkButtonWhite.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
