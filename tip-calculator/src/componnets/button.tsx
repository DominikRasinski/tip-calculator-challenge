import { ButtonHTMLAttributes, useState } from 'react';

interface ButtonProps {
  buttonName: string;
  classCss?: string;
  bgColor?: 'primary' | 'second' | 'none';
}

export const Button = (props: ButtonProps) => {
  const [tip, setTip] = useState('');

  const handleClick = (e: any) => {
    setTip(e);
  };

  const { buttonName, bgColor = 'primary' } = props;
  let { classCss } = props;

  switch (bgColor) {
    case 'primary':
      classCss +=
        ' bg-very-dark-cyan text-hsl-white font-bold my-1 text-[24px]';
      break;
    case 'second':
      classCss += ' bg-strong-cyan text-very-dark-cyan font-bold text-[24px]';
      break;
    case 'none':
      classCss += ' bg-none';
      break;
  }

  classCss += ' p-3 inline-block rounded-md';

  return (
    <button
      className={`${classCss}`}
      onClick={(e) => handleClick(e.currentTarget.value)}
      value={buttonName}>
      {`${buttonName}`}
    </button>
  );
};
