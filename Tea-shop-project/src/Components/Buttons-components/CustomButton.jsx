/* eslint-disable react/prop-types */
function CustomButton({ children, className }) {
  return (
    <button
      className={`cursor-pointer text-lg sm:text-xl text-center p-3 border border-black bg-white text-black  ${className}`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
