import { Link } from "react-router-dom";

export default function TeaCollectionItem({ tea }) {
  return (
    <div className="flex flex-col items-center ">
      <Link to="/products">
        <img
          className=" cursor-pointer w-[180px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]"
          src={tea.teaImage}
          alt="black tea"
        />
      </Link>
      <p className="uppercase mt-2 text-base">{tea.teaSpecies}</p>
    </div>
  );
}
