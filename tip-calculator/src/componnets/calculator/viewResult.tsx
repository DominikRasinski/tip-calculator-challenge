import { useEffect, useState } from 'react';
import { Button } from '../button';

interface ViewResultProps {
  onReset: () => void;
  tip: number;
  peopleNumber: number;
  bill: number;
}

export const ViewResult = (props: ViewResultProps) => {
  const [total, setTotal] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const { onReset, tip, peopleNumber, bill } = props;

  useEffect(() => {
    let total = (bill + (bill * (tip / 100))) / peopleNumber;
    let tipPerPerson = total - (bill / peopleNumber);
    if (isNaN(total)) {
      total = 0;
    }
    if(isNaN(tipPerPerson)) {
      tipPerPerson = 0;
    }
    setTotal(total);
    setTipPerPerson(tipPerPerson);
  }, [bill, tip, peopleNumber]);


  return (
    <div className='bg-very-dark-cyan rounded-xl w-full p-5'>
      <div className='py-4'>
        <div>
          <p className='text-hsl-white w-1/2 inline-block'>
            Tip Amount
            <br />
            <span className='text-[14px] text-grayish-cyan'>
              / person
            </span>
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
            {total}
          </p>
        </div>
      </div>
      <Button
        buttonName='RESET'
        bgColor='second'
        classCss='w-full m-0 active:bg-light-grayish-cyan'
        onClick={() => onReset()}
        id={9039}
        open={null}
      />
    </div>
  );
};
