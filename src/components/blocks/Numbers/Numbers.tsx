import React, {BaseHTMLAttributes, DetailedHTMLProps} from 'react';
import css from "./Numbers.module.css";
import {SuperBtn} from "../../SuperBtn/SuperBtn";

type DefaultPropsType = DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>

type NumbersType = DefaultPropsType & {
    disabled: boolean
}

export const Numbers: React.FC<NumbersType> = ({disabled, ...restProps}) => {
    const numbers = [7,8,9,4,5,6,1,2,3]
    return (
        <div className={css.gridTablo} {...restProps}>
            {numbers.map((el, index) => <SuperBtn disabled={disabled} key={index}>{el}</SuperBtn>)}
            <SuperBtn  disabled={disabled} style={{gridRow: '4', gridColumnStart: "1", gridColumnEnd: "3"}}>0</SuperBtn>
            <SuperBtn  disabled={disabled}>,</SuperBtn>
        </div>
    );
};