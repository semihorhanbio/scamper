import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
const ResetGame = ({ reset, player1Score, player2Score }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='justify-center items-center text-8xl px-16 pt-24 pb-20 rounded-lg max-md:px-5 max-md:text-4xl bg-blue-500 hover:bg-blue-700'>
          8
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription className='text-center w-full h-full'>
            <Image
              className='h-64 w-120 mx-auto'
              src='/reset.png'
              alt='reset game'
              width={700}
              height={700}
            />
            <p className='text-xl font-semibold mb-4'>
              {player1Score === player2Score
                ? "Tebrikler takımlar berabere!"
                : player1Score > player2Score
                ? "Tebrikler, 1. takım kazandı!"
                : "Tebrikler, 2. takım kazandı!"}
            </p>
            <Button
              className='bg-blue-600 text-white hover:bg-blue-800'
              onClick={() => {
                reset();
                setDisabled(true);
              }}
              disabled={disabled}
            >
              Oyun Bitti
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ResetGame;
