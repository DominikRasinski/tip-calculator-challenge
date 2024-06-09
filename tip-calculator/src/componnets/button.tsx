import { ButtonHTMLAttributes, useState } from 'react';
interface ButtonProps {
  buttonName: string;
  classCss?: string;
  bgColor?: 'primary' | 'second' | 'none';
  onClick?: (e: any) => void;
}

export const Button = (props: ButtonProps) => {
  const [open, setOpen] = useState(false);
  const {onClick} = props;

  const handleClick = (e: any) => {
    if (onClick) { 
      onClick(e)
    }
    setOpen((o) => !o);
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
      className={`${classCss} ${open ? 'bg-red-500 text-blue-500' : ''}`}
      onClick={(e) => handleClick(e.currentTarget.value)}
      value={buttonName}>
      {`${buttonName}`}
    </button>
  );
};
