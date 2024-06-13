import { Button } from '../button';
import { Input } from '../input';
import { ViewResult } from './viewResult';
import { IconDollar } from '../icons/icon-dollar';
import { IconPerson } from '../icons/icon-person';
import { useState } from 'react';
import { buttons } from './buttons';

export type openUnionType = null | number;

export const Calculator = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [isOpen, setIsOpen] = useState<openUnionType>(null);

  const handleOpen = (id: number, event: any) => {
    setIsOpen(id);
    let tip = event.slice(0, -1);
    setTip(Number(tip));
  };

  const handleBill = (event: any) => {
    setBill(Number(event));
    console.log(bill);
  }

  const handlePeople = (event: any) => {
    setPeople(Number(event));
  }

  const handleCustom = (event: any) => {
    let tip = Number(event);
    if(!isNaN(tip)) {
      setTip(tip);
    }
  }

  const handleReset = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
  }

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
            onChange={(e) => handleBill(e.target.value)}
            value={`${bill}`}
          />
        </div>
        <div>
          <p className='text-[18px] py-3 text-dark-grayish-cyan font-bold'>
            Select Tip %
          </p>
          <div className='flex items-center flex-row flex-wrap justify-between'>
            {buttons.tips.map((button, index) => (
              <Button
                id={index}
                key={button.tip}
                onClick={handleOpen}
                open={isOpen}
                buttonName={button.tip}
                classCss='w-[47%]'
              />
            ))}
            <Input
              placeholder='Custom'
              inputCss='w-full'
              containerCss='w-[47%]'
              onChange={(e) => handleCustom(e.target.value)}
              value={`${tip}`}
            />
          </div>
        </div>
        <div className='w-full py-3'>
          <p className='text-[18px] py-3 text-dark-grayish-cyan font-bold'>
            Number of People
          </p>
          <Input icon={<IconPerson />} 
          onChange={(e) => handlePeople(e.target.value)}
          value={`${people}`}/>
        </div>
        <ViewResult onReset={handleReset} tip={tip} peopleNumber={people} bill={bill}/>
      </div>
    </div>
  );
};
