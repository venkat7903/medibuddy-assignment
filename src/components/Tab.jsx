// Sub-component of categories

import React from "react";

const Tab = (props) => {
  // represents individual tab
  const { isActive, tabName, setActiveTab } = props; // Specify the active tab
  const classN = isActive ? "text-blue-600  border-2 border-blue-600" : ""; // className for active tab
  return (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`text-black mr-[5px] my-[5px] border-[0px] shadow-md font-semibold bg-white rounded-md px-[10px] py-[5px] ${classN}`}
    >
      {tabName}
    </button>
  );
};

export default Tab;
