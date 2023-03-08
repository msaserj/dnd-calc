import React from 'react';
import css from './Display.module.css';
import {useAppSelector} from '../../../hooks/hooks';

type DisplayType = {
  disabled: boolean;
};

export const Display: React.FC<DisplayType> = ({ disabled }) => {
  const firstNum = useAppSelector(state => state.calcReducer.firstNum);

  const resultStyle = `${css.display} ${disabled && css.disabled}`;
  return <div className={resultStyle}>{+firstNum.toLocaleString()}</div>;
};
