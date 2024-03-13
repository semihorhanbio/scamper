import Answers from "@/components/answers";

function QuestionComp(props) {
  return (
    <div>
      <h3 className='text-white text-center'>{props.question.question}</h3>
      <Answers question={props.question} onSubmit={props.onSubmit} />
    </div>
  );
}

export default QuestionComp;
