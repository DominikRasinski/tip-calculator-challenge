import './App.css';
import { Logo } from './componnets/logo';
import { Calculator } from './componnets/calculator/calculator';

function App() {
  return (
    <div className='bg-very-light-grayish-cyan'>
      <Logo logoText='SPLITTER' />
      <Calculator />
    </div>
  );
}

export default App;
