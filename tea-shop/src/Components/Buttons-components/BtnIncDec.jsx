function BtnIncDec({ children, onClick }) {
  return (
    <button onClick={onClick} className={"text-2xl xl:text-4xl cursor-pointer"}>
      {children}
    </button>
  );
}

export default BtnIncDec;
