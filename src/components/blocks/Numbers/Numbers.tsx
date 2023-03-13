import React from 'react';
import css from './Numbers.module.css';
import {SuperBtn} from '../../SuperBtn/SuperBtn';
import {useAppDispatch} from '../../../hooks/hooks';
import {setNumber} from '../../../store/calc-reducer';

type NumbersType = {
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
        return <SuperBtn onClick={() => clickHandler(el)} disabled={disabled} key={index} children={el} />;
      })}
      <SuperBtn
        onClick={() => clickHandler('0')}
        disabled={disabled}
        style={{ gridRow: '4', gridColumnStart: '1', gridColumnEnd: '3' }}
        children={'0'}
      />

      <SuperBtn onClick={() => clickHandler('.')} disabled={disabled} children={','} />
    </div>
  );
};
