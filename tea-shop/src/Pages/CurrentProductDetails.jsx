import { useParams } from "react-router-dom";
import ProductInformation from "../Components/Current-produtct-page/ProductInformation";
import TeaInstruction from "../Components/Current-produtct-page/TeaInstruction";

function CurrentProductDetails() {
  const { id } = useParams();
  return (
    <div className="container mx-auto">
      <ProductInformation id={id} />
      <TeaInstruction />
    </div>
  );
}

export default CurrentProductDetails;
