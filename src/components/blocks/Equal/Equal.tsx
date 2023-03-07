import React from 'react';
import {SuperBtn} from "../../SuperBtn/SuperBtn";

type EqualType = {
    disabled: boolean
}

export const Equal: React.FC<EqualType> = ({disabled}) => {
    return <SuperBtn disabled={disabled} xType={"secondary"}>=</SuperBtn>
};