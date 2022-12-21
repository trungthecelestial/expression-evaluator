import { useRef } from 'react';

export function FirstScreen({ operand, setOperand }) {
  const inputRef = useRef();

  return (
    <div className="flex flex-col gap-20 w-full sm:w-auto">
      <h1 className="font-thin text-6xl text-center text-teal-300">
        Expression
        <br />
        Evaluator
      </h1>

      <div className="grid grid-rows-1 gap-3 landscape:grid-cols-2">
        <div className="border border-black rounded-md p-4">
          <p className="text-gray-400 text-lg">Please enter a number</p>
          <input
            ref={inputRef}
            type="number"
            defaultValue={operand}
            className="text-2xl focus:outline-none"
          />
        </div>

        <button
          className="bg-emerald-400 text-white text-2xl p-6 rounded-md w-full"
          onClick={() => {
            setOperand(inputRef.current.value);
          }}
        >
          Add number
        </button>
      </div>
    </div>
  );
}
