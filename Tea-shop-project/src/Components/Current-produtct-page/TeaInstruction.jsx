import AboutTea from "./AboutTea";
import SteepingInstructions from "./SteepingInstructions";

function TeaInstruction() {
  return (
    <div className="w-full flex justify-center sm:justify-around mt-10 mb-10 flex-wrap">
      <SteepingInstructions />
      <AboutTea />
    </div>
  );
}

export default TeaInstruction;
