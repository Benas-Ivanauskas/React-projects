import LastBlogsCard from "./LastBlogsCard";

function LastBlogsArticle() {
  return (
    <div className="w-full h-max  bg-slate-200 ">
      <h2 className="font-bold text-2xl sm:text-3xl text-center mt-10 mb-12 pt-4">
        Last Blog Posts
      </h2>
      <div className="max-w-full flex justify-center flex-wrap lg:flex-none gap-0 lg:gap-4 h-max">
        <LastBlogsCard />
      </div>
    </div>
  );
}

export default LastBlogsArticle;
