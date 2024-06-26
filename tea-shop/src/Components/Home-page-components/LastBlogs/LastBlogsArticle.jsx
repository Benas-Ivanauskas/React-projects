import LastBlogsCard from "./LastBlogsCard";
import LastBlogsTitle from "./LastBlogsTitle";

function LastBlogsArticle() {
  return (
    <div className="w-full h-max  bg-slate-200 ">
      <LastBlogsTitle />
      <div className="max-w-full flex justify-center flex-wrap lg:flex-none gap-0 lg:gap-4 h-max">
        <LastBlogsCard />
      </div>
    </div>
  );
}

export default LastBlogsArticle;
