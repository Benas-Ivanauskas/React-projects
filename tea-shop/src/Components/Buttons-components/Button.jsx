function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white w-56 h-12 sm:h-14 border-0 text-lg uppercase tracking-wide ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
