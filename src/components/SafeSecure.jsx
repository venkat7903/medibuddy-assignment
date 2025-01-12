import React from "react";
import { v4 as uuidv4 } from "uuid";

const SafeSecure = (props) => {
  let { safe } = props;
  safe = safe.props;
  return (
    <div className="p-[20px]">
      <p className="text-[20px] font-bold">100% Safe & Secure Lab Tests</p>
      <div className="flex flex-wrap lg:justify-around mt-[20px]">
        {safe.map((each) => (
          <div
            key={uuidv4()}
            className="bg-blue-100 w-[200px] lg:w-[220px] mr-[20px] mb-[20px] rounded-xl flex flex-col items-start px-[20px] py-[15px]"
          >
            <img src={each.img} alt="img" />
            <p>{each.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafeSecure;
