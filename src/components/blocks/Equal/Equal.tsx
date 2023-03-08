import React from "react";
import { SuperBtn } from "../../SuperBtn/SuperBtn";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  setEqualAC,
  setNum1AC,
  setNum2AC,
  setOperandAC,
} from "../../../store/calc-reducer";

type EqualType = {
  disabled: boolean;
};

export const Equal: React.FC<EqualType> = ({ disabled }) => {
  const dispatch = useAppDispatch();
  const { num1, num2, operand } = useAppSelector((state) => state.calcReducer);

  const resultHandler = () => {
    const eq = num1 + num2;
    dispatch(setEqualAC({ equal: eq }));
    dispatch(setOperandAC({ value: "=" }));
    dispatch(setNum1AC({ value: 0 }));
    dispatch(setNum2AC({ value: 0 }));
  };

  return (
    <SuperBtn onClick={resultHandler} disabled={disabled} xType={"secondary"}>
      =
    </SuperBtn>
  );
};
