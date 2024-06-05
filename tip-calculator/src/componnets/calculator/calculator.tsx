import { Button } from '../button';
import { Input } from '../input';
import { ViewResult } from './viewResult';

export const Calculator = () => {
  return (
    <div>
      <div>
        <p>Bill</p>
        <Input icon={'🚀'} />
      </div>
      <div>
        <p>Select Tip %</p>
        <Button buttonName='5%' />
        <Button buttonName='10%' />
        <Button buttonName='15%' />
        <Button buttonName='25%' />
        <Button buttonName='50%' />
        <Input icon={'🪐'} />
      </div>
      <div>
        <p>Number of People</p>
        <Input icon={'👌'} />
      </div>
      <ViewResult />
    </div>
  );
};
