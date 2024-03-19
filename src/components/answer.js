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
      size='lg'
      onClick={() => {
        onPress();
        setIsQuestionDisabled((prev) => {
          const newIsQuestionDisabled = [...prev];
          newIsQuestionDisabled[number - 1] = true;
          return newIsQuestionDisabled;
        });
      }}
      disabled={isQuestionDisabled[number - 1]}
      className='bg-[#2e51bb] py-6 px-4 rounded-md text-lg'
    >
      {text}
    </Button>
  );
}

export default Answer;
