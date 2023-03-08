import React, { BaseHTMLAttributes, DetailedHTMLProps } from 'react';
import css from './Numbers.module.css';
import { SuperBtn } from '../../SuperBtn/SuperBtn';
import { useAppDispatch } from '../../../hooks/hooks';
import { setNumber } from '../../../store/calc-reducer';

type DefaultPropsType = DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type NumbersType = DefaultPropsType & {
  disabled: boolean;
};

export const Numbers: React.FC<NumbersType> = ({ disabled, ...restProps }) => {
  const dispatch = useAppDispatch();

  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];

  const clickHandler = (ele: string) => {
    dispatch(setNumber({ value: ele }));
  };

  return (
    <div className={css.gridTablo} {...restProps}>
      {numbers.map((el, index) => {
        return (
          <SuperBtn onClick={() => clickHandler(el)} disabled={disabled} key={index}>
            {el}
          </SuperBtn>
        );
      })}
      <SuperBtn
        onClick={() => clickHandler('0')}
        disabled={disabled}
        style={{ gridRow: '4', gridColumnStart: '1', gridColumnEnd: '3' }}
      >
        0
      </SuperBtn>
      <SuperBtn onClick={() => clickHandler('.')} disabled={disabled}>
        ,
      </SuperBtn>
    </div>
  );
};
