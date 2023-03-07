import React from 'react';
import css from "./Display.module.css";

type DisplayType = {
    disabled: boolean
}

export const Display: React.FC<DisplayType> = ({disabled}) => {
    const resultStyle = `${css.display} ${disabled && css.disabled}`
    return (
        <div className={resultStyle}>
            1000 000
        </div>
    );
};
