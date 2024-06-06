type LogoProps = {
  logoText: string;
};

export const Logo = (props: LogoProps) => {
  const { logoText } = props;
  return (
    <div className='flex items-center justify-center w-auto'>
      <h1 className='w-8 text-wrap h-10'>{logoText}</h1>
    </div>
  );
};
