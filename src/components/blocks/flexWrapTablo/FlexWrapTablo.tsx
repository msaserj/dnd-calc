import React, { BaseHTMLAttributes, DetailedHTMLProps } from 'react';
import css from './FlexWrapTablo.module.css';
import { Display } from '../Display/Display';
import { Operators } from '../Operators/Operators';
import { Numbers } from '../Numbers/Numbers';
import { Equal } from '../Equal/Equal';

type DefaultPropsType = DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type WidgetType = 'display' | 'operators' | 'numbers' | 'equal';

type FlexWrapperType = DefaultPropsType & {
  widgetType: WidgetType;
  disabled: boolean;
  opacity: boolean;
};

export const FlexWrapTablo: React.FC<FlexWrapperType> = ({ opacity, disabled, widgetType, ...restProps }) => {
  return (
    <div className={`${css.tablo} ${opacity ? css.edit : ''}`} {...restProps}>
      {widgetType === 'display' && <Display disabled={disabled} />}
      {widgetType === 'operators' && <Operators disabled={disabled} />}
      {widgetType === 'numbers' && <Numbers disabled={disabled} />}
      {widgetType === 'equal' && <Equal disabled={disabled} />}
    </div>
  );
};
