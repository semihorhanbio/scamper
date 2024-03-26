"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Video from "@/components/video";
import Team from "@/components/team";
import NumberGrid from "@/components/numbergrid";

function Game() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [autoplay, setAutoplay] = useState(0);
  const [questionVideo, setQuestionVideo] = useState("hPaYbHvODok");

  const onSubmit = (correct) => {
    if (correct) {
      if (currentPlayer === 1) {
        setPlayer1Score(player1Score + 1);
      } else {
        setPlayer2Score(player2Score + 1);
      }
    }
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const reset = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCurrentPlayer(1);
  };

  const addScoreToPlayer = (score) => {
    if (currentPlayer === 1) {
      setPlayer1Score(player1Score + score);
    } else {
      setPlayer2Score(player2Score + score);
    }
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const togglePoints = (score) => {
    if (currentPlayer === 1) {
      setPlayer1Score(player1Score + score);
      setPlayer2Score(player2Score - score);
    } else {
      setPlayer2Score(player2Score - score);
      setPlayer1Score(player1Score + score);
    }
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-col justify-center w-full bg-neutral-200 max-md:max-w-full'>
        <div className='flex flex-col pb-12 w-full max-md:max-w-full'>
          <header className='flex flex-col bg-[#EFE607] items-center px-20 pt-10 pb-3 w-full max-md:px-5 max-md:max-w-full'>
            <div className='flex justify-between gap-5 max-md:flex-col max-md:gap-0'>
              <Team teamName='Takım 1' score={player1Score} />
              <Video videoId={questionVideo} autoplay={autoplay} />
              <Team teamName='Takım 2' score={player2Score} />
            </div>
            <Button className='mt-2' onClick={() => setAutoplay(1)}>
              Senaryoyu Oynat
            </Button>
          </header>
          <main>
            <NumberGrid
              onSubmit={onSubmit}
              addScoreToPlayer={addScoreToPlayer}
              togglePoints={togglePoints}
              reset={reset}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Game;
