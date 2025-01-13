// It is the component where all components in components folder are imported and ordered based on design

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

  useEffect(() => {
    getPageConfig(); // Used useEffect to fetch objects using page_config API
  }, []);

  const getPageConfig = async () => {
    // Async function invoked during useEffect
    setIsLoading(true); // Loader Started
    const url =
      "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
    const response = await fetch(url);
    const data = await response.json();
    setPageConfig(data[0].page_config);
    setIsLoading(false); // Loader ended
  };

  const renderLoader = () => (
    // Rendering loader when fetching objects using api
    <div className="min-h-full flex flex-col flex-grow items-center justify-center">
      <Oval color="#000" height={50} width={50} secondaryColor="#fff" />
    </div>
  );

  const renderAfterLoad = () => {
    // Funtion to render components after fetching data from page_config API
    const icons = pageConfig[0]; // Extracted Icons
    const banners = pageConfig[1]; // Extracted banners
    const features = pageConfig[2]; // Extracted features
    const reviews = pageConfig[5]; // Extracted Feedbacks
    const safe = pageConfig[7]; // Extracted Safe and secured objects
    const questions = pageConfig[6]; // Extracted FAQs
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
    // Returning the labs_home_page
    <div className="font-signature flex flex-col my-[20px]  min-h-screen">
      <Navbar />
      {isLoading ? renderLoader() : renderAfterLoad()}
    </div>
  );
}

export default App;
