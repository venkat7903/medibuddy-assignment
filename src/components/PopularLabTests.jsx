import React, { useState } from "react";
import LabTab from "./LabTab";
import group1 from "../assets/group1.png";
import group3 from "../assets/Group 104846.png";
import { FaHome, FaRupeeSign } from "react-icons/fa";

const tabs = [
  { id: "labtest0", name: "For Amazon Employees" },
  { id: "labtest1", name: "Popular" },
  { id: "labtest2", name: "Covid 19" },
  { id: "labtest3", name: "Fever" },
  { id: "labtest4", name: "Anemia" },
  { id: "labtest5", name: "Diabetes" },
  { id: "labtest6", name: "Kidney" },
  { id: "labtest7", name: "Heart" },
  { id: "labtest8", name: "Liver" },
  { id: "labtest9", name: "Hormone" },
  { id: "labtest10", name: "Joint" },
  { id: "labtest11", name: "Vitamin" },
  { id: "labtest12", name: "Cancer" },
  { id: "labtest13", name: "Hepatitis" },
  { id: "labtest14", name: "Allergy" },
  { id: "labtest15", name: "Sexual Wellness" },
  { id: "labtest16", name: "Infections" },
  { id: "labtest17", name: "Blood Tests" },
  { id: "labtest18", name: "Urine Tests" },
];

const PopularLabTests = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [isOverFlow, setIsOverFlow] = useState(true);
  const classOver = isOverFlow ? "overflow-hidden h-[50px]" : "";
  const four = [11, 22, 33, 44];
  const changeOverFlow = () => {
    setIsOverFlow(false);
  };

  return (
    <div className="px-[20px] py-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-bold">Book Popular Lab Tests</h1>
        <p className="cursor-pointer text-blue-600 font-semibold">View More</p>
      </div>
      <div className="flex items-center">
        <ul className={`${classOver}`}>
          {tabs.map((each) => (
            <LabTab
              key={each.id}
              tabName={each.name}
              isActive={activeTab === each.name}
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
      <div className="mt-[20px]">
        <ul>
          {four.map((each) => (
            <li
              key={each}
              className="border-[2px] mb-[15px] p-[15px] rounded-xl shadow-lg flex items-center justify-between"
            >
              <div>
                <h1 className="text-[18px] font-semibold">
                  Complete Blood Count (CBC) - EDTA Whole Blood
                </h1>
                <div className="flex items-center mt-[7px]">
                  <img src={group1} alt="group" />
                  <p className="ml-[10px] ">Reports in 10-12 hrs</p>
                </div>
                <div className="flex items-center mt-[7px]">
                  <div className="flex items-center mr-[10px]">
                    <FaHome className="text-orange-500" />
                    <p className="ml-[10px]">Home</p>
                  </div>
                  <div className="flex items-center">
                    <img src={group3} alt="group" />
                    <p className="ml-[10px]">Lab</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end md:flex-row md:items-center">
                <div>
                  <div className="flex items-center">
                    <p className="text-gray-400 line-through flex items-center mr-[10px]">
                      <FaRupeeSign /> 800/-
                    </p>
                    <p className="bg-green-200 text-green-600 p-[3px] rounded-md">
                      55% OFF
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="flex items-center mr-[10px] font-semibold">
                      <FaRupeeSign /> 500/-
                    </p>
                    <p className="text-gray-400 p-[3px] rounded-md">Onwards</p>
                  </div>
                </div>
                <div>
                  <button className="border-[2px] md:ml-[20px] font-semibold cursor-pointer border-blue-600 text-blue-600 p-[5px] rounded-lg w-[80px]">
                    Add
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularLabTests;
