import { openUnionType } from './calculator/calculator';

interface ButtonProps {
  id: number;
  buttonName: string;
  open: openUnionType;
  classCss?: string;
  bgColor?: 'primary' | 'second' | 'none';
  onClick: (id: number, event: any) => void;
}

export const Button = (props: ButtonProps) => {
  const { buttonName, bgColor = 'primary', id, onClick } = props;
  let { classCss } = props;
  let activeCss = classCss;
  let open = false;
  open = props.open === id;

  const handleClick = (e: any, id: number) => {
    onClick(id, e);
  };

  switch (bgColor) {
    case 'primary':
      classCss += ' bg-very-dark-cyan text-hsl-white';
      activeCss += ' bg-strong-cyan text-very-dark-cyan';
      break;
    case 'second':
      classCss += ' bg-strong-cyan text-very-dark-cyan';
      activeCss += ' bg-very-dark-cyan text-hsl-white';
      break;
    case 'none':
      classCss += ' bg-none';
      activeCss += ' bg-none';
      break;
  }

  return (
    <button
      className={`font-bold text-[24px] p-3 inline-block my-1 rounded-md ${open ? activeCss : classCss}`}
      onClick={(e) => handleClick(e.currentTarget.value, id)}
      value={buttonName}>
      {`${buttonName}`}
    </button>
  );
};
