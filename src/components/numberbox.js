import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import QuestionComp from "@/components/question";

const NumberBox = ({
  number,
  question,
  onSubmit,
  isQuestionDisabled,
  setIsQuestionDisabled,
}) => {
  const [dialogBackground, setDialogBackground] = useState("500");
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          className={`justify-center items-center text-8xl px-16 pt-24 pb-20 rounded-lg max-md:px-5 max-md:text-4xl bg-blue-${dialogBackground} hover:bg-blue-700`}
        >
          {number}
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-7xl max-h-full'>
        <DialogHeader>
          <DialogDescription>
            <QuestionComp
              id={question.id}
              question={question.question}
              choices={question.choices}
              correctAnswerIdx={question.correctAnswerIdx}
              answerVideoId={question.answerVideoId}
              onSubmit={onSubmit}
              number={number}
              isQuestionDisabled={isQuestionDisabled}
              setIsQuestionDisabled={setIsQuestionDisabled}
              setDialogBackground={setDialogBackground}
              setOpenDialog={setOpenDialog}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NumberBox;
