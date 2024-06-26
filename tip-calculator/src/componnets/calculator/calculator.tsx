import { Button } from '../button';
import { Input } from '../input';
import { ViewResult } from './viewResult';
import { IconDollar } from '../icons/icon-dollar';
import { IconPerson } from '../icons/icon-person';
import { useState } from 'react';
import { buttons } from './buttons';

export type universalUnionType = null | number;

export const Calculator = () => {
  const [bill, setBill] = useState<universalUnionType>(null);
  const [people, setPeople] = useState<universalUnionType>(null);
  const [tip, setTip] = useState<universalUnionType>(null);
  const [customTip, setCustomTip] = useState<universalUnionType>(null);
  const [isOpen, setIsOpen] = useState<universalUnionType>(null);

  const handleOpen = (id: number, event: any) => {
    setIsOpen(id);
    let tip = event.slice(0, -1);
    setTip(Number(tip));
  };

  const handleBill = (event: any) => {
    if(isFinite(Number(event))) {
      setBill(Number(event));
    } else {
      setBill(null);
    }
  };

  const handlePeople = (event: any) => {
    if(isFinite(Number(event))) {
      setPeople(Number(event));
    } else {
      setPeople(null);
    }
  };

  const handleCustom = (event: any) => {
    if (isFinite(Number(event))) {
      setTip(null);
      setCustomTip(Number(event));
    }
  };

  const handleReset = () => {
    setBill(null);
    setPeople(null);
    setTip(null);
    setCustomTip(null);
  };

  return (
    <div className=' flex items-center justify-center flex-col flex-grow-0'>
      <div className='bg-hsl-white max-width-full flex items-center justify-center flex-col md:flex-row p-4 md:p-6 rounded-2xl'>
        <div className='md:w-1/2 md:pr-4'>
          <div className='w-full'>
            <p className='text-[1.125rem] py-3 text-dark-grayish-cyan font-bold'>
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
            <p className='text-[1.125rem] py-3 text-dark-grayish-cyan font-bold'>
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
                value={`${customTip}`}
              />
            </div>
          </div>
          <div className='w-full py-3'>
            <p className='text-[1.125rem] py-3 text-dark-grayish-cyan font-bold'>
              <p className='inline-block w-1/2 text-left'>Number of People</p>
              {bill ? (
                <p className='text-red-400 text-right w-1/2 inline-block'>
                  {people ? '' : "Can't be a zero!"}
                </p>
              ) : (
                ''
              )}
            </p>
            <Input
              icon={<IconPerson />}
              onChange={(e) => handlePeople(e.target.value)}
              value={`${people}`}
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 md:h-full max-width-full'>
          <ViewResult
            onReset={handleReset}
            tip={tip}
            peopleNumber={people}
            bill={bill}
            customTip={customTip}
          />
        </div>
      </div>
    </div>
  );
};
