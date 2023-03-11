import React, { BaseHTMLAttributes, DetailedHTMLProps } from 'react';
import css from './FlexWrapTablo.module.css';
import { Display } from '../Display/Display';
import { Operators } from '../Operators/Operators';
import { Numbers } from '../Numbers/Numbers';
import { Equal } from '../Equal/Equal';

type DefaultPropsType = DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type FlexWrapperType = DefaultPropsType & {
  widgetType: string;
  disabled: boolean;
  editable: boolean;
  opacity?: boolean;
  visibility?: boolean;
};

export const FlexWrapTablo: React.FC<FlexWrapperType> = ({
  visibility,
  opacity,
  editable,
  disabled,
  widgetType,
  ...restProps
}) => {
  return (
    <div
      className={`${css.tablo} ${editable ? css.edit : ''} ${opacity ? css.opacity : ''} ${
        visibility ? css.visibility : ''
      }`}
      {...restProps}
    >
      {widgetType === 'display' && <Display opacity={opacity} />}
      {widgetType === 'operators' && <Operators disabled={disabled} />}
      {widgetType === 'numbers' && <Numbers disabled={disabled} />}
      {widgetType === 'equal' && <Equal disabled={disabled} />}
    </div>
  );
};
