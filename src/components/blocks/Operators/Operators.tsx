import React from 'react';
import {SuperBtn} from "../../SuperBtn/SuperBtn";

type OperatorsType = {
    disabled: boolean
}

export const Operators: React.FC<OperatorsType> = ({disabled}) => {
    const opers = ['/', 'x', '-', '+']
    return<>
        {opers.map((el, index) => {
            return <SuperBtn key={index} disabled={disabled}>{el}</SuperBtn>
        })}
        </>
};