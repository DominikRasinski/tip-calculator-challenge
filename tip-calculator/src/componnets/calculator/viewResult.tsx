import { useEffect, useState } from 'react';
import { Button } from '../button';

import { universalUnionType } from './calculator';

interface ViewResultProps {
  onReset: () => void;
  tip: universalUnionType;
  customTip: universalUnionType;
  peopleNumber: universalUnionType;
  bill: universalUnionType;
}

export const ViewResult = (props: ViewResultProps) => {
  const [total, setTotal] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const { onReset, tip, peopleNumber, bill, customTip } = props;

  useEffect(() => {
    let tipValue = tip === null ? customTip : tip;
    let billValue = 0, peopleNumberValue = 0;

    if (bill === null) {
      billValue = 0;
    } else {
      billValue = bill;
    }
    if (peopleNumber === null) {
      peopleNumberValue = 0;
    } else {
      peopleNumberValue = peopleNumber;
    }

    let total = Number(((billValue + (billValue * ((tipValue ? tipValue : 0) / 100))) / peopleNumberValue).toFixed(2));
    let tipPerPerson = Number((total - (billValue / peopleNumberValue)).toFixed(2));
    if (!isFinite(total)) {
      total = 0;
    }
    if(!isFinite(tipPerPerson)) {
      tipPerPerson = 0;
    }
    setTotal(total);
    setTipPerPerson(tipPerPerson);
  }, [bill, tip, peopleNumber, customTip]);


  return (
    <div className='bg-very-dark-cyan rounded-xl w-full p-5 md:h-full'>
      <div className='py-4'>
        <div>
          <p className='text-hsl-white w-1/2 inline-block'>
            Tip Amount
            <br />
            <span className='text-[14px] text-grayish-cyan'>
              / person
            </span>
          </p>
          <p className='text-2xl md:text-[40px] font-bold w-1/2 inline-block text-right text-[34px] text-strong-cyan'>
            ${tipPerPerson}
          </p>
        </div>
        <div className='py-4'>
          <p className='text-hsl-white w-1/2 inline-block'>
            Total
            <br />
            <span className='text-[14px] text-grayish-cyan'> / person</span>
          </p>
          <p className='text-2xl md:text-[40px] font-bold w-1/2 inline-block text-right text-[34px] text-strong-cyan'>
            ${total}
          </p>
        </div>
      </div>
      <div className='md:flex md:items-end md:h-3/5'>
      <Button
        buttonName='RESET'
        bgColor='second'
        classCss='w-full m-0 active:bg-light-grayish-cyan relative cursor-pointer'
        onClick={() => onReset()}
        id={9039}
        open={null}
      />
      </div>
    </div>
  );
};
