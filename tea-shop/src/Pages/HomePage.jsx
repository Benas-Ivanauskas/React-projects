import HomeLandingSection from "../Components/Home-page-components/HomeLandingSection";
import HomeTeaCollection from "../Components/Home-page-components/HomeTeaCollections/HomeTeaCollection";
import HomeWholeSalersSection from "../Components/Home-page-components/HomeWholeSalersSection";
import LastBlogsArticle from "../Components/Home-page-components/LastBlogs/LastBlogsArticle";
import LearnMoreSection from "../Components/Home-page-components/LearnMore/LearnMoreSection";

function HomePage() {
  return (
    <div>
      <HomeLandingSection />
      <LearnMoreSection />
      <HomeTeaCollection />
      <LastBlogsArticle />
      <HomeWholeSalersSection />
    </div>
  );
}

export default HomePage;
