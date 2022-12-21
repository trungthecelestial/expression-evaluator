import { useState } from 'react';
import { FirstScreen } from './pages/FirstScreen';
import { SecondScreen } from './pages/SecondScreen';

function App() {
  const [firstOperand, setFirstOperand] = useState();

  return (
    <div className="h-screen w-screen flex items-center justify-center p-6">
      {!firstOperand ? (
        <FirstScreen operand={firstOperand} setOperand={setFirstOperand} />
      ) : (
        <SecondScreen firstOperand={firstOperand} />
      )}
    </div>
  );
}

export default App;
