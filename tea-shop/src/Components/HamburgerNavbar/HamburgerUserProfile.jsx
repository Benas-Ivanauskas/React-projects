import { FiUser } from "react-icons/fi";

export default function HamburgerUserProfile() {
  return (
    <>
      <FiUser className="w-7 h-7" />
      <div>
        <p className="uppercase text-base">USER PROFILE</p>
        <p className="font-normal text-gray text-sm">
          We know you as a guest user
        </p>
      </div>
    </>
  );
}
