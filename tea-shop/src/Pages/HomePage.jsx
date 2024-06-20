import HomeLandingSection from "../Components/Home-page-components/HomeLandingSection";
import HomeTeaCollection from "../Components/Home-page-components/HomeTeaCollection";
import HomeWholeSalersSection from "../Components/Home-page-components/HomeWholeSalersSection";
import LastBlogsArticle from "../Components/Home-page-components/LastBlogsArticle";
import LearnMoreBanner from "../Components/Home-page-components/LearnMoreBanner";
import TeaCollectionProvider from "../context/TeaDataContext";

function HomePage() {
  return (
    <div>
      <HomeLandingSection />
      <LearnMoreBanner />
      <TeaCollectionProvider>
        <HomeTeaCollection />
      </TeaCollectionProvider>
      <LastBlogsArticle />
      <HomeWholeSalersSection />
    </div>
  );
}

export default HomePage;
