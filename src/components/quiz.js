"use client";

import { useState } from "react";
import Team from "@/components/team";
import Question from "@/components/question";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handleAnswer = (selectedAnswer, realAnswer) => {
    console.log(selectedAnswer, realAnswer);
    if (selectedAnswer === realAnswer) {
      if (currentPlayer === 1) {
        setPlayer1Score(player1Score + 1);
      } else {
        setPlayer2Score(player2Score + 1);
      }
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };
  return (
    <div className='bg-[#ffde59] min-h-screen p-8'>
      <div className='flex justify-evenly items-center mb-6'>
        <div className='flex items-center space-x-2'>
          <Team name='Team 1' score={player1Score} />
        </div>
        <div className='flex items-center space-x-2'>
          <Team name='Team 2' score={player2Score} />
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {quizData.map((question, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Button className='bg-blue-500 text-white text-3xl h-32'>
                {index + 1}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  <Question
                    question={question}
                    choices={question.choices}
                    handleAnswer={handleAnswer}
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
