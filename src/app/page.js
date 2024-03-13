"use client";

import questions from "@/questions.json";
import { useState } from "react";
import QuestionComp from "@/components/question";
import Reset from "@/components/reset";
import Video from "@/components/video";

function App() {
  const allQuestions = questions;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const [waitingToAdvance, setWaitingToAdvance] = useState(false);

  const onSubmit = (correct) => {
    if (correct) {
      if (currentPlayer === 1) {
        setPlayer1Score(player1Score + 1);
      } else {
        setPlayer2Score(player2Score + 1);
      }
    }
    setWaitingToAdvance(true);
  };

  const advance = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    setWaitingToAdvance(false);
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  };

  const reset = () => {
    setCurrentQuestionIdx(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCurrentPlayer(1);
    setWaitingToAdvance(false);
  };

  if (currentQuestionIdx >= allQuestions.questions.length)
    return (
      <Reset
        player1Score={player1Score}
        player2Score={player2Score}
        onPress={reset}
      />
    );

  return (
    <div className='flex flex-col justify-around items-center sm:flex-row sm:justify-evenly pt-3'>
      <div className='p-4 flex flex-col w-1/2'>
        <div className='flex justify-evenly items-center mb-6'>
          <h2
            className={`text-2xl font-bold text-white ${
              currentPlayer === 1 ? "bg-red-600" : ""
            }`}
          >
            Team 1
          </h2>
          <h2
            className={`text-2xl font-bold text-white ${
              currentPlayer === 2 ? "bg-red-600" : ""
            }`}
          >
            Team 2
          </h2>
        </div>
        <QuestionComp
          question={allQuestions.questions[currentQuestionIdx]}
          onSubmit={onSubmit}
        />
        {waitingToAdvance && (
          <button
            onClick={advance}
            className='mt-4 bg-gray-900 text-white font-bold border border-gray-800 rounded-lg hover:border-blue-500'
          >
            Next Question...
          </button>
        )}
      </div>
      <Video videoId='CUAhpiRUOy0' />
    </div>
  );
}

export default App;
