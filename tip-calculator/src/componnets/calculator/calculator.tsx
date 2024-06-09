import { Button } from '../button';
import { Input } from '../input';
import { ViewResult } from './viewResult';
import { IconDollar } from '../icons/icon-dollar';
import { IconPerson } from '../icons/icon-person';
import { useState } from 'react';

export const Calculator = () => {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState('');

  return (
    <div className=' flex items-center justify-center flex-col'>
      <div className='bg-hsl-white flex items-center justify-center flex-col p-4 rounded-2xl'>
        <div className='w-full'>
          <p className='text-[18px] py-3 text-dark-grayish-cyan font-bold'>
            Bill
          </p>
          <Input
            icon={<IconDollar />}
            inputCss='w-full'
          />
        </div>
        <div>
          <p className='text-[18px] py-3 text-dark-grayish-cyan font-bold'>
            Select Tip %
          </p>
          <div className='flex items-center flex-row flex-wrap justify-between'>
            <Button
              buttonName='5%'
              classCss='w-[47%]'
            />
            <Button
              buttonName='10%'
              classCss='w-[47%]'
            />
            <Button
              buttonName='15%'
              classCss='w-[47%]'
            />
            <Button
              buttonName='25%'
              classCss='w-[47%]'
            />
            <Button
              buttonName='50%'
              classCss='w-[47%]'
            />
            <Input
              placeholder='Custom'
              inputCss='w-full'
              containerCss='w-[47%]'
            />
          </div>
        </div>
        <div className='w-full py-3'>
          <p className='text-[18px] py-3 text-dark-grayish-cyan font-bold'>
            Number of People
          </p>
          <Input icon={<IconPerson />} />
        </div>
        <ViewResult />
      </div>
    </div>
  );
};
