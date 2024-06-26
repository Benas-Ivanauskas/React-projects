import { Link } from "react-router-dom";

export default function TeaFlavorItems({ tea }) {
  return (
    <div className="flex flex-col items-center" key={tea.id}>
      <Link to={`/current-product/${tea.id}`}>
        <img
          className="cursor-pointer w-[250px] h-[230px] md:h-[250px] lg:w-[240px] lg:h-[240px] xl:w-[350px] xl:h-[350px]"
          src={tea.image}
          alt={tea.name}
        />
      </Link>
      <p className="uppercase mt-2 text-base w-[200px] text-center md:w-max">
        {tea.name}
      </p>
      <div className="flex gap-1">
        <span className="font-bold">{tea.price}€</span>/
        <span>{tea.grams}g</span>
      </div>
    </div>
  );
}
