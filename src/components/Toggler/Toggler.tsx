import React from 'react';
import css from './Toggler.module.css';
import eye from '../../assets/img/eye.svg';
import selector from '../../assets/img/selector.svg';
import { useAppDispatch } from '../../hooks/hooks';
import { clearAC } from '../../store/calc-reducer';

type TogglerType = {
  disabled: boolean;
  toggleHandler: () => void;
};

export const Toggler: React.FC<TogglerType> = ({ disabled, toggleHandler }) => {
  const dispatch = useAppDispatch();
  const runtimeHandler = () => {
    toggleHandler();
    dispatch(clearAC());
  };

  return (
    <div className={css.toggler}>
      <button onClick={runtimeHandler} disabled={!disabled} className={css.toggleButton}>
        <img src={eye} alt="eye" /> Runtime
      </button>
      <button onClick={runtimeHandler} disabled={disabled} className={css.toggleButton}>
        <img src={selector} alt="selector" />
        Constructor
      </button>
    </div>
  );
};
