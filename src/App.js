import { Oval } from "react-loader-spinner";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { useEffect, useState } from "react";
import Banners from "./components/Banners";
import FeaturedHealth from "./components/FeaturedHealth";
import ActiveBookings from "./components/ActiveBookings";
import PopularLabTests from "./components/PopularLabTests";
import LabsVisited from "./components/LabsVisited";
import Trrust from "./components/Trrust";
import Reviews from "./components/Reviews";
import LifeStyle from "./components/LifeStyle";
import HowItWorks from "./components/HowItWorks";
import SafeSecure from "./components/SafeSecure";
import FrequentlyAsked from "./components/FrequentlyAsked";

function App() {
  const [pageConfig, setPageConfig] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(pageConfig, 1);
  useEffect(() => {
    getPageConfig();
  }, []);

  const getPageConfig = async () => {
    setIsLoading(true);
    const url =
      "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
    const response = await fetch(url);
    const data = await response.json();
    setPageConfig(data[0].page_config);
    setIsLoading(false);
  };

  const renderLoader = () => (
    <div className="min-h-full flex flex-col flex-grow items-center justify-center">
      <Oval color="#000" height={50} width={50} secondaryColor="#fff" />
    </div>
  );

  const renderAfterLoad = () => {
    const icons = pageConfig[0];
    const banners = pageConfig[1];
    const features = pageConfig[2];
    const reviews = pageConfig[5];
    const safe = pageConfig[7];
    const questions = pageConfig[6];
    //console.log(icons);
    console.log(reviews);
    return (
      <div>
        <Services key={icons.id} icons={icons} />
        {banners && <Banners key={banners.id} banners={banners} />}
        {features && <FeaturedHealth key={features.id} features={features} />}
        <ActiveBookings />
        <PopularLabTests />
        <LabsVisited />
        <Trrust />
        {reviews && <Reviews reviews={reviews} />}
        <LifeStyle />
        <HowItWorks />
        {safe && <SafeSecure safe={safe} />}
        {questions && <FrequentlyAsked questions={questions} />}
      </div>
    );
  };

  return (
    <div className="font-signature flex flex-col my-[20px]  min-h-screen">
      <Navbar />
      {isLoading ? renderLoader() : renderAfterLoad()}
    </div>
  );
}

export default App;
