import { Button } from '../button';

export const ViewResult = () => {
  return (
    <div className='bg-very-dark-cyan'>
      <div>
        <p>Tip Amount</p>
      </div>
      <div>
        <p>Total</p>
      </div>
      <Button
        buttonName='RESET'
        classCss='bg-strong-cyan'
      />
    </div>
  );
};
