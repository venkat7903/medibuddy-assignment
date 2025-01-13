// Question Component

import React from "react";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Question = (props) => {
  const { questionFreq } = props;
  const { question, answer, points } = questionFreq;
  const [isExpand, setIsExpand] = useState(false); // Specify whether the question is expanded or not
  return (
    <div className="border-t-[2px] pt-[7px] mb-[10px]">
      <div className="flex items-center">
        <p className="text-[18px] flex-grow">{question}</p>
        <button onClick={() => setIsExpand(!isExpand)}>
          {isExpand ? <CiCircleMinus size={30} /> : <CiCirclePlus size={30} />}
        </button>
      </div>
      {isExpand && <p className="text-gray-500">{answer}</p>}
      {isExpand && points.length ? (
        <ul className="list-disc pl-[20px]">
          {points.map((each) => (
            <li className="text-gray-500">{each.pnt}</li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Question;
