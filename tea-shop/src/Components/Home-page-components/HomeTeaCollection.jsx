import TeaCollectionCard from "./TeaCollectionCard";

function HomeTeaCollection() {
  return (
    <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-1 p-4">
      <h2 className="text-2xl font-bold sm:text-3xl col-span-full text-center mb-4">
        Our Collections
      </h2>
      <TeaCollectionCard className="col-span-2 sm:col-span-1 sm:col-start-2" />{" "}
    </div>
  );
}

export default HomeTeaCollection;
