import { Button } from "@/components/ui/button";

function Answer(props) {
  const style = props.color ? { color: props.color } : {};

  return (
    <Button
      onClick={props.onPress}
      disabled={props.disabled}
      className='bg-gray-900 text-white font-sans font-extrabold border border-black rounded-lg hover:border-blue-500'
    >
      <span style={style}>{props.text}</span>
    </Button>
  );
}

export default Answer;
