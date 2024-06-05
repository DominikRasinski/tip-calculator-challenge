type ButtonProps = {
  buttonName: string;
};

export const Button = (props: ButtonProps) => {
  const { buttonName } = props;
  return <button>{`${buttonName}`}</button>;
};
