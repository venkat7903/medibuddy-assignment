// Rendering FAQs extracted from page_config

import React from "react";
import Question from "./Question";
import { v4 as uuidv4 } from "uuid";

const FrequentlyAsked = (props) => {
  let { questions } = props;
  questions = questions.props.filter((each) => each.id > 1);
  return (
    <div className="p-[20px]">
      <p className="text-[20px] font-bold">Frequently Asked Questions</p>
      <ul className="mt-[20px]">
        {questions.map(
          (
            each // Rendering each question based on array of questions
          ) => (
            <Question key={uuidv4()} questionFreq={each} />
          )
        )}
      </ul>
    </div>
  );
};

export default FrequentlyAsked;
