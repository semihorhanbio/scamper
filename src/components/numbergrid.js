import questions from "@/questions.json";
import NumberBox from "@/components/numberbox";
import GainPoints from "@/components/gainpoints";
import ExchangePoints from "@/components/exchangepoints";
import ResetGame from "@/components/reset";
import GainCopy from "@/components/gaincopy";
import ExchangeCopy from "@/components/exchangecopy";
import { useState } from "react";
const NumberGrid = ({ onSubmit, addScoreToPlayer, togglePoints, reset }) => {
  const allQuestions = questions.questions;
  const numbers = Array.from({ length: allQuestions.length }, (_, i) => i + 1);
  const [isQuestionDisabled, setIsQuestionDisabled] = useState(
    Array(allQuestions.length).fill(false)
  );
  return (
    <div className='grid grid-cols-3 gap-5 justify-center items-center mx-8 mt-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl'>
      {numbers.map((number) => (
        <NumberBox
          key={number}
          number={number}
          question={allQuestions[number - 1]}
          onSubmit={onSubmit}
          isQuestionDisabled={isQuestionDisabled}
          setIsQuestionDisabled={setIsQuestionDisabled}
        />
      ))}
      <GainPoints addScoreToPlayer={addScoreToPlayer} />
      <ExchangePoints togglePoints={togglePoints} />
      <ResetGame reset={reset} />
      <ExchangeCopy togglePoints={togglePoints} />
      <GainCopy addScoreToPlayer={addScoreToPlayer} />
    </div>
  );
};

export default NumberGrid;
