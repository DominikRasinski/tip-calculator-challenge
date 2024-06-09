import './App.css';
import { Logo } from './componnets/logo';
import { Calculator } from './componnets/calculator/calculator';

function App() {
  return (
    <div className='bg-light-grayish-cyan h-[100vh] flex justify-center flex-col'>
      <Logo logoText='SPLITTER' />
      <Calculator />
    </div>
  );
}

export default App;
