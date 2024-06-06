type ButtonProps = {
  buttonName: string;
  classCss?: string;
};

export const Button = (props: ButtonProps) => {
  const { buttonName } = props;
  let { classCss } = props;

  if (!classCss) {
    classCss = 'bg-very-dark-cyan';
  }

  classCss += ' p-5 inline-block';

  return <button className={`${classCss}`}>{`${buttonName}`}</button>;
};
