import { useState } from 'react';
import { Button } from '../button';

export const ViewResult = () => {
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  return (
    <div className='bg-very-dark-cyan rounded-xl w-full p-5'>
      <div className='py-4'>
        <div>
          <p className='text-hsl-white w-1/2 inline-block'>
            Tip Amount
            <br />
            <span className='text-[14px] text-grayish-cyan'>
              {' '}
              / person
            </span>{' '}
          </p>
          <p className='text-2xl font-bold w-1/2 inline-block text-right text-[34px] text-strong-cyan'>
            {tipPerPerson}
          </p>
        </div>
        <div className='py-4'>
          <p className='text-hsl-white w-1/2 inline-block'>
            Total
            <br />
            <span className='text-[14px] text-grayish-cyan'> / person</span>
          </p>
          <p className='text-2xl font-bold w-1/2 inline-block text-right text-[34px] text-strong-cyan'>
            {totalPerPerson}
          </p>
        </div>
      </div>
      <Button
        buttonName='RESET'
        bgColor='second'
        classCss='w-full m-0'
      />
    </div>
  );
};
