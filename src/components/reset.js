import { Button } from "@/components/ui/button";

function Reset(props) {
  return (
    <div>
      <h1>
        Team 1 total points: {props.player1Score * 10} Team 2 total points:{" "}
        {props.player2Score * 10}
      </h1>
      <Button onClick={props.onPress} className='w-full mt-10'>
        Press to Try Again!
      </Button>
    </div>
  );
}

export default Reset;
