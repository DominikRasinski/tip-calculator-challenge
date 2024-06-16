type LogoProps = {
  logoText: string;
};

export const Logo = (props: LogoProps) => {
  const { logoText } = props;

  if (!logoText) return null;

  const logoTextArray = logoText.split('');
  const logoTextArrayHalfLength = Math.ceil(logoTextArray.length / 2);
  const logoTextArrayFirstHalf = logoTextArray.slice(
    0,
    logoTextArrayHalfLength
  );
  const logoTextArraySecondHalf = logoTextArray.slice(logoTextArrayHalfLength);
  const logoTextArrayFirstHalfString = logoTextArrayFirstHalf.join('');
  const logoTextArraySecondHalfString = logoTextArraySecondHalf.join('');

  return (
    <div className='flex items-center justify-center w-auto h-20 mb-8'>
      <h1 className='w-[4.8rem] text-wrap text-dark-grayish-cyan font-bold text-[1.5rem] tracking-[0.5rem]'>
        {logoTextArrayFirstHalfString} {logoTextArraySecondHalfString}
      </h1>
    </div>
  );
};
