"use client";

import { useState, useEffect } from "react";
import Answer from "@/components/answer";

function Answers(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [props.question]);

  const onPress = (idx) => {
    setShowAnswer(true);
    props.onSubmit(props.question.correctAnswerIdx === idx);
  };

  return (
    <div className='flex items-center flex-wrap justify-evenly'>
      {props.question.choices.map((choice, idx) => {
        let color = "";

        if (showAnswer && props.question.correctAnswerIdx === idx)
          color = "green";
        else if (showAnswer) color = "red";

        return (
          <Answer
            text={choice}
            onPress={() => onPress(idx)}
            color={color}
            disabled={showAnswer}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default Answers;
