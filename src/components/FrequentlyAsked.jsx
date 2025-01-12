import React from "react";
import Question from "./Question";

const FrequentlyAsked = (props) => {
  let { questions } = props;
  questions = questions.props.filter((each) => each.id > 1);
  return (
    <div className="p-[20px]">
      <p className="text-[20px] font-bold">Frequently Asked Questions</p>
      <ul className="mt-[20px]">
        {questions.map((each) => (
          <Question questionFreq={each} />
        ))}
      </ul>
    </div>
  );
};

export default FrequentlyAsked;
