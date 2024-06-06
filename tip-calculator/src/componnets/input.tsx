type InputProps = {
  icon: string;
};

export const Input = (props: InputProps) => {
  const { icon } = props;
  return (
    <div className='relative'>
      <span className='absolute'>{icon}</span>
      <input
        type='text'
        className='pl-6'></input>
    </div>
  );
};
