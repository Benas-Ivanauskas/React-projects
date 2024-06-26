import { MdArrowRightAlt } from "react-icons/md";

export default function ReadMoreButton() {
  return (
    <button className="text-lg sm:text-xl cursor-pointer flex items-center gap-2">
      Read more <MdArrowRightAlt />
    </button>
  );
}
