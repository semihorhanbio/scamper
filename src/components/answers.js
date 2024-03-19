import Answer from "@/components/answer";

function Answers({
  choices,
  onSubmit,
  correctAnswerIdx,
  changeToAnswerView,
  number,
  isQuestionDisabled,
  setIsQuestionDisabled,
}) {
  const onPress = (idx) => {
    onSubmit(correctAnswerIdx === idx);
    changeToAnswerView(correctAnswerIdx === idx);
  };

  return (
    <div className='flex flex-col justify-between gap-2'>
      {choices.map((choice, idx) => {
        return (
          <Answer
            key={idx}
            text={choice}
            onPress={() => onPress(idx)}
            number={number}
            isQuestionDisabled={isQuestionDisabled}
            setIsQuestionDisabled={setIsQuestionDisabled}
          />
        );
      })}
    </div>
  );
}

export default Answers;
