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
const GainPoints = ({ addScoreToPlayer }) => {
  const [dialogBackground, setDialogBackground] = useState("500");
  const [openDialog, setOpenDialog] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          className={`justify-center items-center text-8xl px-16 pt-24 pb-20 rounded-lg max-md:px-5 max-md:text-4xl bg-blue-${dialogBackground} hover:bg-blue-700`}
        >
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
              className=''
              src='/gainpoints.png'
              alt='Gain Points'
              width={1700}
              height={1700}
            />
            <p className='text-xl font-semibold mb-4'>15 Puan Kazan</p>
            <Button
              className='bg-blue-600 text-white hover:bg-blue-800'
              onClick={() => {
                addScoreToPlayer(15);
                setDisabled(true);
                setOpenDialog(false);
                setDialogBackground("100");
              }}
              disabled={isDisabled}
            >
              Tamam
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default GainPoints;
