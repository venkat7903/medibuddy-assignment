import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tab from "./Tab";

const Categories = (props) => {
  const { tabs, tabDetails } = props;
  const { activeTab, setActiveTab } = tabDetails;
  const [isOverFlow, setIsOverFlow] = useState(true);
  const classOver = isOverFlow ? "overflow-hidden h-[50px]" : "";
  //console.log(activeTab);
  const changeOverFlow = () => {
    setIsOverFlow(false);
  };

  return (
    <div className="flex items-center">
      <ul className={`${classOver}`}>
        {tabs.map((each) => (
          <Tab
            key={uuidv4()}
            isActive={activeTab === each}
            tabName={each}
            setActiveTab={setActiveTab}
          />
        ))}
      </ul>
      {isOverFlow && (
        <button
          onClick={() => changeOverFlow()}
          className={`text-blue-600 ml-[-10px] my-[5px] border-[0px] shadow-md font-semibold bg-white rounded-md px-[10px] py-[5px]`}
        >
          View More..
        </button>
      )}
    </div>
  );
};

export default Categories;
