import { Button } from '../button';
import { Input } from '../input';
import { ViewResult } from './viewResult';
import { IconDollar } from '../icons/icon-dollar';
import { IconPerson } from '../icons/icon-person';

export const Calculator = () => {
  return (
    <div className=' flex items-center justify-center flex-col'>
      <div className='bg-hsl-white flex items-center justify-center flex-col p-4 rounded-2xl'>
        <div className=''>
          <p>Bill</p>
          <Input icon={'🚀'} />
        </div>
        <div>
          <p>Select Tip %</p>
          <div className='flex items-center flex-row'>
            <Button buttonName='5%' />
            <Button buttonName='10%' />
            <Button buttonName='15%' />
            <Button buttonName='25%' />
            <Button buttonName='50%' />
            <Input icon={'🪐'} />
          </div>
        </div>
        <div>
          <p>Number of People</p>
          <Input icon={'👌'} />
        </div>
        <ViewResult />
      </div>
    </div>
  );
};
