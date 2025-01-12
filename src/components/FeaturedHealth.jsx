import React from "react";
import { useState } from "react";
import Categories from "./Categories";
import Packages from "./Packages";

const FeaturedHealth = (props) => {
  const { features } = props;
  const { categories } = features;
  const tabs = categories["10386"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  //console.log(tabs);
  let { packages } = features.props[0];
  //console.log(packages);
  packages = packages.filter(
    (each) =>
      each.contractId === 10386 &&
      each.subCategories.includes(activeTab.toUpperCase())
  );
  console.log(packages);
  return (
    <div className="bg-blue-100  p-[25px] pt-[20px] mt-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-[20px]">Featured Health Check-ups</h1>
        <p className="text-blue-500 font-semibold cursor-pointer">View All</p>
      </div>
      <Categories
        key="categories"
        tabs={tabs}
        tabDetails={{ activeTab, setActiveTab }}
      />
      <Packages packages={packages} />
    </div>
  );
};

export default FeaturedHealth;
