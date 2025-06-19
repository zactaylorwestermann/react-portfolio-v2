import HomeHero from "./components/HomeHero";
import HomeAbout from "./components/HomeAbout";
import HomeExperience from "./components/HomeExperience";
import HomeProjects from "./components/HomeProjects";
import HomeFooter from "./components/HomeFooter";

const HomePage = () => {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <HomeHero />
      <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
        <HomeAbout />
        <HomeExperience />
        <HomeProjects />
        <HomeFooter />
      </main>
    </div>
  );
};

export default HomePage;
