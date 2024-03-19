import Video from "@/components/video";
import Answers from "@/components/answers";
import { useState } from "react";

function QuestionComp({
  id,
  question,
  choices,
  correctAnswerIdx,
  answerVideoId,
  onSubmit,
  number,
  isQuestionDisabled,
  setIsQuestionDisabled,
}) {
  const [showAnswerVideo, setShowAnswerVideo] = useState(false);
  const [responseText, setResponseText] = useState("Yanlış");

  const changeToAnswerView = (correct) => {
    setShowAnswerVideo(true);
    if (correct) {
      setResponseText("Doğru");
    }
  };
  return (
    <div className='text-center'>
      <div className='bg-[#2e51bb] px-72 py-12 text-white font-bold text-6xl rounded-t-md'>
        {id}
      </div>
      {showAnswerVideo ? (
        <>
          <Video videoId={answerVideoId} autoplay={0} />
          <div
            className={`text-white rounded-sm mt-2 w-1/4 px-4 py-2 mx-auto text-3xl ${
              responseText === "Doğru" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {responseText}
          </div>
        </>
      ) : (
        <div className='bg-white rounded-b-md shadow-md'>
          <p className='text-4xl px-72 my-16'>{question}</p>
          <Answers
            choices={choices}
            onSubmit={onSubmit}
            correctAnswerIdx={correctAnswerIdx}
            changeToAnswerView={changeToAnswerView}
            number={number}
            isQuestionDisabled={isQuestionDisabled}
            setIsQuestionDisabled={setIsQuestionDisabled}
          />
        </div>
      )}
    </div>
  );
}

export default QuestionComp;
