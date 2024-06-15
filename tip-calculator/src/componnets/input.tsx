type InputProps = {
  icon?: string | any;
  placeholder?: string;
  inputCss?: string;
  containerCss?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const Input = (props: InputProps) => {
  const { icon, placeholder, value, onChange } = props;
  let { inputCss, containerCss } = props;

  let displayValue = value;

  if (!containerCss) {
    containerCss = 'w-full';
  }

  if (displayValue === null || displayValue === 'null') {
    displayValue = '';
  }

  return (
    <div className={`relative flex flex-col justify-center ${containerCss}`}>
      {icon && <span className='absolute left-4'>{icon}</span>}
      <input
        type='text'
        className={`${inputCss} focus:outline-2 focus:outline focus:outline-strong-cyan placeholder:text-dark-grayish-cyan pl-6 pr-4 text-right bg-very-light-grayish-cyan py-2 rounded-lg text-very-dark-cyan font-bold text-[24px] cursor-pointer`}
        placeholder={placeholder}
        value={displayValue}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
