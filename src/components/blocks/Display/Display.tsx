import React from 'react';
import css from "./Display.module.css";
import {useAppSelector} from "../../../hooks/hooks";

type DisplayType = {
    disabled: boolean
}

export const Display: React.FC<DisplayType> = ({disabled}) => {
    const num1 = useAppSelector(state => state.calcReducer.num1)
    const num2 = useAppSelector(state => state.calcReducer.num2)
    const operand = useAppSelector(state => state.calcReducer.operand)
    const result = useAppSelector(state => state.calcReducer.result)

    let num
    if (operand === null) {
        num = num1
    } else if (operand === "=") {
        num = result
    } else if (operand) {
        num = num2
    }
    const resultStyle = `${css.display} ${disabled && css.disabled}`
    return (
        <div className={resultStyle}>
            {num}
        </div>
    );
};
