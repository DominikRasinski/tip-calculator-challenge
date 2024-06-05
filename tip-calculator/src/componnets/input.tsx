type InputProps = {
  icon: string;
};

export const Input = (props: InputProps) => {
  const { icon } = props;
  return (
    <div>
      <span>{icon}</span>
      <input type='text'></input>
    </div>
  );
};
