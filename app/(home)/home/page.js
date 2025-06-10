import HomeFAQ from "@/components/home/home-faq";
import HomeFooter from "@/components/home/home-footer";
import HomeIntro from "@/components/home/home-intro";
import HomeMap from "@/components/home/home-map";
import HomeNews from "@/components/home/home-news";
import HomePros from "@/components/home/home-pros";
import HomeReasons from "@/components/home/home-reasons";
import HomeTopSlide from "@/components/home/home-top-slide";
import TopNav from "@/components/top-nav/top-nav";
import "@/components/home/home.css";
import FloatButton from "@/components/float-button/float-button";
import HomeTop from "@/components/home/home-top";
import HomeTech from "@/components/home/home-tech";

const Home = () => {
  return (
    <div className="w-full flex flex-col flex-1">
      <HomeTop />
      <div className="container">
        <HomeIntro />
        <HomeTech />
        <HomeNews />
        <HomePros />
        <HomeReasons />
        <HomeFAQ />
        <HomeMap />
        {/* <FloatButton /> */}
      </div>
    </div>
  );
};

export default Home;
