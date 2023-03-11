import { StateType } from '../store/calc-reducer';

export const calculator = (state: StateType) => {
  const { firstNum, secondNum, operator } = state;
  const prev = parseFloat(secondNum);
  const current = parseFloat(firstNum);
  if (isNaN(prev) || isNaN(current)) return '';
  let calc: number | string = 0;
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
      if (current === 0) {
        return calc = "Не определено";
      } else {
        calc = prev / current
      }

      break;
  }
  if (calc.toString().length > 13) {
    let length = calc.toString().length - 1
    calc = (calc/Math.pow(10, length)).toString().slice(0, 3) + `e-${length}`

  }

  return calc.toString();
};

