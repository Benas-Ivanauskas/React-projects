import { useContext } from "react";
import { Link } from "react-router-dom";
import { TeaCollectionContext } from "../../context/TeaDataContext";

function TeaCollectionCard() {
  const { teaData } = useContext(TeaCollectionContext);

  if (!teaData) {
    return (
      <p className="text-center">
        Tea products not reachable at this moment! Try again later.
      </p>
    );
  }

  return (
    <>
      {teaData &&
        teaData.map((tea) => (
          <div className="flex flex-col items-center " key={tea.id}>
            <Link to="/products">
              <img
                className=" cursor-pointer w-[180px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]"
                src={tea.teaImage}
                alt="black tea"
              />
            </Link>
            <p className="uppercase mt-2 text-base">{tea.teaSpecies}</p>
          </div>
        ))}
    </>
  );
}

export default TeaCollectionCard;
