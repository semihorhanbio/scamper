const Team = ({ teamName, score }) => (
  <div className='flex flex-col w-[30%] max-md:ml-0 max-md:w-full'>
    <div className='self-stretch my-auto text-5xl text-center text-neutral-800 text-opacity-80 max-md:mt-10 max-md:text-4xl'>
      {teamName}
      <br />
      {score}
    </div>
  </div>
);

export default Team;
