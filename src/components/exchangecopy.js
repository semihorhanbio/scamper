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
const ExchangeCopy = ({ togglePoints }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='justify-center items-center text-8xl px-16 pt-24 pb-20 rounded-lg max-md:px-5 max-md:text-4xl bg-blue-500 hover:bg-blue-700'>
          9
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription className='text-center'>
            <div className='bg-[#2e51bb] p-4 text-center text-white font-bold text-xl rounded-t-md'>
              9
            </div>
            <Image
              className='h-72 w-screen mx-auto'
              src='/togglepoints.png'
              alt='Gain Points'
              width={700}
              height={700}
            />
            <p className='text-xl font-semibold mb-4'>
              Karşı takımdan 15 puan al
            </p>
            <Button
              size='lg'
              className='bg-blue-600 text-white hover:bg-blue-800'
              onClick={() => {
                togglePoints(15);
                setDisabled(true);
              }}
              disabled={disabled}
            >
              Tamam
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ExchangeCopy;
