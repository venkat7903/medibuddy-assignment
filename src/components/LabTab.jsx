import React from "react";


const LabTab = (props) => {
  const { isActive, tabName, setActiveTab } = props;
  const classN = isActive ? "text-blue-600  border-2 border-blue-600" : "";

  return (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`text-black mr-[5px] my-[5px] border-[0px] shadow-md font-semibold bg-white rounded-md px-[10px] py-[5px] ${classN}`}
    >
      {tabName}
    </button>
  );
};

export default LabTab;
