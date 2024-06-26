import TeaLoadingError from "../../utils/TeaLoadingError";
import TeaFlavorItems from "./TeaFlavorItems";

function TeaAllProductsCard({ teaFlavors }) {
  if (!teaFlavors || teaFlavors.length === 0) {
    return <TeaLoadingError />;
  }

  return (
    <div className="flex gap-5 flex-wrap justify-center pt-5">
      {teaFlavors.map((tea) => (
        <TeaFlavorItems key={tea.id} tea={tea} />
      ))}
    </div>
  );
}

export default TeaAllProductsCard;
