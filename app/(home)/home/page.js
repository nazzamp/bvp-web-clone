import HomeFAQ from "@/components/home/home-faq";
import HomeIntro from "@/components/home/home-intro";
import HomeMap from "@/components/home/home-map";
import HomeNews from "@/components/home/home-news";
import HomePros from "@/components/home/home-pros";
import HomeReasons from "@/components/home/home-reasons";
import "@/components/home/home.css";
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
        <div className="hidden fixed bottom-8 right-8 z-50 text-white lg:flex flex-col gap-1 text-sm bg-gray-500/10 p-2 rounded-3xl">
          <div className="px-3 py-2 bg-gray-700 font-medium rounded-full">
            <span className="font-bold">Bộ Y tế: </span>
            <a href="tel:19009095">19009095</a>
          </div>
          <div className="px-3 py-2 bg-gray-700 font-medium rounded-full">
            <span className="font-bold">Sở Y tế: </span>
            <a href="tel:0966631313">0966631313</a>
          </div>
          <div className="px-3 py-2 bg-red-600 font-medium rounded-full text-center">
            <a
              href="https://soytequangninh.gov.vn/trang-chu-chinh/thong-tin-van-chuyen-cap-cuu1"
              target="_blank"
              className="font-bold"
            >
              Thông tin cấp cứu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
