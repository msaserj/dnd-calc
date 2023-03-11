import React from 'react';
import css from './Display.module.css';
import { useAppSelector } from '../../../hooks/hooks';

type DisplayType = {
  opacity?: boolean;
};

export const Display: React.FC<DisplayType> = ({ opacity }) => {
  const firstNum = useAppSelector(state => state.calcReducer.firstNum);

  const resultStyle = `${css.display} ${opacity && css.disabled}`;
  return <div className={resultStyle}>{+firstNum.toLocaleString()}</div>;
};
