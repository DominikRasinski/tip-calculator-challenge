import { openUnionType } from './calculator/calculator';

interface ButtonProps {
  id: number;
  buttonName: string;
  open: openUnionType;
  classCss?: string;
  bgColor?: 'primary' | 'second' | 'none';
  onClick: (id: number) => void;
}

export const Button = (props: ButtonProps) => {
  const { buttonName, bgColor = 'primary', id, onClick } = props;
  let { classCss } = props;
  const open = props.open === id;

  const handleClick = (e: any, id: number) => {
    onClick(id);
  };

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
      onClick={(e) => handleClick(e.currentTarget.value, id)}
      value={buttonName}>
      {`${buttonName}`}
    </button>
  );
};
