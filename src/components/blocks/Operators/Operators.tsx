import React from 'react';
import { SuperBtn } from '../../SuperBtn/SuperBtn';
import { useAppDispatch } from '../../../hooks/hooks';
import { setOperatorAC } from '../../../store/calc-reducer';

type OperatorsType = {
  disabled: boolean;
};

export const Operators: React.FC<OperatorsType> = ({ disabled }) => {
  const dispatch = useAppDispatch();
  const opers = ['/', 'x', '-', '+'];

  return (
    <>
      {opers.map((el, index) => {
        const setOperand = (value: string) => {
          dispatch(setOperatorAC({ value }));
        };
        return (
          <SuperBtn onClick={() => setOperand(el)} key={index} disabled={disabled}>
            {el}
          </SuperBtn>
        );
      })}
    </>
  );
};
