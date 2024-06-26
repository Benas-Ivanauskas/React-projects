import TeaProducts from "../Components/Products-page-components/TeaProducts";

function ProductsPage() {
  return (
    <div className="min-h-[609px]">
      <img
        className="w-full h-[400px] object-cover"
        src="images/banner-image.png"
        alt="banner tea"
      />
      <TeaProducts />
    </div>
  );
}

export default ProductsPage;
