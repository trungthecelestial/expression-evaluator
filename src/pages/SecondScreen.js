import { useState } from 'react';

const operators = {
  '+': function (a, b) {
    return Number(a) + Number(b);
  },
  '-': function (a, b) {
    return Number(a) - Number(b);
  },
  '*': function (a, b) {
    return Number(a) * Number(b);
  },
  '/': function (a, b) {
    return Number(a) / Number(b);
  },
};

export function SecondScreen({ firstOperand }) {
  const [secondOperand, setSecondOperand] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState();

  return (
    <div className="flex flex-col justify-center gap-4 h-full w-full sm:w-auto">
      <div className="my-auto self-center w-fit">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-100 rounded-md h-20 w-16 text-2xl grid place-content-center focus:outline-none">
            {firstOperand}
          </div>

          <div className="bg-gray-100 rounded-md h-20 w-16 text-2xl grid place-content-center text-center focus:outline-none">
            {operator}
          </div>

          <div className="bg-gray-100 rounded-md h-20 w-16 text-2xl grid place-content-center text-center focus:outline-none">
            {secondOperand}
          </div>
        </div>

        <div className="text-center font-thin text-7xl">=</div>

        <div className="text-teal-300 text-center font-thin text-7xl">
          {result ? result : <>&nbsp;</>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="border border-black rounded-md p-4">
          <p className="text-gray-400 text-lg">Operator</p>
          <select
            className="text-2xl w-full focus:outline-none"
            value={operator}
            onChange={(event) => {
              setOperator(event.target.value);
            }}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>

        <div className="border border-black rounded-md p-4">
          <p className="text-gray-400 text-lg">Operand</p>
          <input
            type="number"
            value={secondOperand}
            onChange={(event) => {
              setSecondOperand(event.target.value);
            }}
            className="text-2xl focus:outline-none w-full"
          />
        </div>

        <button
          className="bg-emerald-400 text-white text-2xl p-6 rounded-md w-full col-span-2 sm:col-span-1"
          onClick={() => {
            setResult(operators[operator](firstOperand, secondOperand));
          }}
        >
          Add Operation
        </button>
      </div>
    </div>
  );
}
