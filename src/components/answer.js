import { Button } from "@/components/ui/button";
function Answer({
  text,
  onPress,
  number,
  isQuestionDisabled,
  setIsQuestionDisabled,
}) {
  return (
    <Button
      onClick={() => {
        onPress();
        setIsQuestionDisabled((prev) => {
          const newIsQuestionDisabled = [...prev];
          newIsQuestionDisabled[number - 1] = true;
          return newIsQuestionDisabled;
        });
      }}
      disabled={isQuestionDisabled[number - 1]}
      className='bg-[#2e51bb] text-white py-2 px-4 rounded-md'
    >
      <span>{text}</span>
    </Button>
  );
}

export default Answer;
