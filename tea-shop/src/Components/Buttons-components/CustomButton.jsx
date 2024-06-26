function CustomButton({ text, className }) {
  return (
    <button
      className={`cursor-pointer text-lg sm:text-xl text-center p-3 border border-black bg-white text-black  ${className}`}
    >
      {text}
    </button>
  );
}

export default CustomButton;
