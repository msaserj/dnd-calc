import React from 'react';
import { SuperBtn } from '../../SuperBtn/SuperBtn';
import { useAppDispatch } from '../../../hooks/hooks';
import { equalAC } from '../../../store/calc-reducer';

type EqualType = {
  disabled: boolean;
};

export const Equal: React.FC<EqualType> = ({ disabled }) => {
  const dispatch = useAppDispatch();

  const resultHandler = () => {
    dispatch(equalAC());
  };

  return <SuperBtn onClick={resultHandler} disabled={disabled} xType={'secondary'} children={'='} />;
};
