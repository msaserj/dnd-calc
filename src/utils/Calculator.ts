import { StateType } from '../store/calc-reducer';

export const calculator = (state: StateType) => {
  const { firstNum, secondNum, operator } = state;
  const prev = parseFloat(secondNum);
  const current = parseFloat(firstNum);
  if (isNaN(prev) || isNaN(current)) return '';
  let calc: number = 0;
  switch (operator) {
    case '+':
      calc = prev + current;
      break;
    case '-':
      calc = prev - current;
      break;
    case 'x':
      calc = prev * current;
      break;
    case '/':
      calc = prev / current;
      break;
  }
  return calc.toString();
};
