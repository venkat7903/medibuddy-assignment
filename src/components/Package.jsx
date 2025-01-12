import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";

const Package = (props) => {
  const { packagi } = props;
  const {
    packageDisplayName,
    packageName,
    packageId,
    price,
    isHomeSampleAvailable,
    isRadiologyIncluded,
    fastingHoursText,
    reportsTatText,
    subCategories,
    testCount,
    testsSummary,
  } = packagi;
  return (
    <div className="bg-white p-[20px] rounded-2xl py-[15px] md:mr-[10px]">
      <h1 className="text-black text-[20px] font-semibold text-left">
        {packageName}
      </h1>
      <div className="mt-[20px] flex items-center">
        <img src={group1} alt={group1} className="w-[20px] mr-[7px]" />
        <p className="text-blue-700 font-semibold">{reportsTatText}</p>
      </div>
      <div>
        <div>
          <h1 className="font-signature text-purple-950 font-semibold text-[18px] mt-[10px]">
            {testCount} Tests
          </h1>
          <ul className="list-disc ml-[15px]">
            {testsSummary.map((each) => (
              <li className="text-gray-500">{each}</li>
            ))}
          </ul>
          {isRadiologyIncluded && (
            <div>
              <h1 className="font-signature text-purple-950 font-semibold text-[18px] mt-[10px]">
                Includes
              </h1>
              <div className="flex items-center">
                <img src={group2} alt="group2" className="mr-[7px]" />
                <p>Radiology</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-100 flex items-center justify-around rounded-lg mt-[20px] p-[10px]">
        <div>
          <h1 className="text-purple-950 font-semibold ">Fasting</h1>
          <p className="text-gray-800">{fastingHoursText}</p>
        </div>
        <div>
          <p className="text-purple-950 font-semibold ">Available</p>
          <div className="flex items-center">
            <FaHome className="text-orange-500 mr-[5px]" />
            <p className="">Home</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[20px]">
        <div className="flex items-center">
          <FaIndianRupeeSign color="#050A4E" />
          <h1 className="font-bold text-[22px]">{price}</h1>
        </div>
        <button className="border-[2px] text-[20px] py-[8px] px-[18px] border-blue-600 text-blue-600">
          Add
        </button>
      </div>
    </div>
  );
};

export default Package;
