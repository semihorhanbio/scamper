"use client";

import questions from "@/questions.json";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import QuestionComp from "@/components/question";
import Reset from "@/components/reset";
import Video from "@/components/video";
import Image from "next/image";

function Game() {
  const allQuestions = questions;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [autoplay, setAutoplay] = useState(0);
  const [questionVideo, setQuestionVideo] = useState("CUAhpiRUOy0");
  const [answerVideo, setAnswerVideo] = useState("q5p0c6VnGqI");

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

  const addScoreToOtherPlayer = () => {
    if (currentPlayer === 1) {
      setPlayer1Score(player1Score - 10);
      setPlayer2Score(player2Score + 10);
    } else {
      setPlayer2Score(player2Score - 10);
      setPlayer1Score(player1Score + 10);
    }
  };

  const subtractScoreFromOtherPlayer = () => {
    if (currentPlayer === 1) {
      setPlayer1Score(player1Score + 10);
      setPlayer2Score(player2Score - 10);
    } else {
      setPlayer2Score(player2Score - 10);
      setPlayer1Score(player1Score + 10);
    }
  };

  const resetScore = () => {
    if (currentPlayer === 1) {
      setPlayer1Score(0);
    } else {
      setPlayer2Score(0);
    }
  };

  /*   if (currentQuestionIdx >= allQuestions.questions.length)
    return (
      <Reset
        player1Score={player1Score}
        player2Score={player2Score}
        onPress={reset}
      />
    ); */

  const Team = ({ teamName, score }) => (
    <div className='flex flex-col w-[30%] max-md:ml-0 max-md:w-full'>
      <div className='self-stretch my-auto text-5xl text-center text-neutral-800 text-opacity-80 max-md:mt-10 max-md:text-4xl'>
        {teamName}
        <br />
        {score}
      </div>
    </div>
  );

  const NumberBox = ({ number }) => (
    <Button className='justify-center items-center text-8xl px-16 pt-24 pb-20 rounded-lg max-md:px-5 max-md:text-4xl bg-blue-500 hover:bg-blue-700'>
      {number}
    </Button>
  );

  const NumberGrid = () => {
    const numbers = Array.from(
      { length: allQuestions.questions.length },
      (_, i) => i + 1
    );

    return (
      <div className='grid grid-cols-3 gap-5 justify-center items-center mx-8 mt-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl'>
        {numbers.map((number) => (
          <NumberBox key={number} number={number} />
        ))}
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-col justify-center w-full bg-neutral-200 max-md:max-w-full'>
        <div className='flex flex-col pb-12 w-full max-md:max-w-full'>
          <header className='flex flex-col justify-center bg-[#EFE607] items-center px-20 pt-10 pb-3 w-full max-md:px-5 max-md:max-w-full'>
            <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
              <Team teamName='Takım 1' score='0' />
              <Video videoId={questionVideo} autoplay={autoplay} />
              <Team teamName='Takım 2' score='0' />
            </div>
            <Button className='mt-2' onClick={() => setAutoplay(1)}>
              Senaryoyu Oynat
            </Button>
          </header>
          <main>
            <NumberGrid />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Game;
/* return (
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
      <Video videoId={questionVideo} />
      <Video videoId={answerVideo} />
    </div> 
    */
