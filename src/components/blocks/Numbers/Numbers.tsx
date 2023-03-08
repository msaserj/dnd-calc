import React, { BaseHTMLAttributes, DetailedHTMLProps } from "react";
import css from "./Numbers.module.css";
import { SuperBtn } from "../../SuperBtn/SuperBtn";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setNum1AC, setNum2AC } from "../../../store/calc-reducer";

type DefaultPropsType = DetailedHTMLProps<
  BaseHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type NumbersType = DefaultPropsType & {
  disabled: boolean;
};

export const Numbers: React.FC<NumbersType> = ({ disabled, ...restProps }) => {
  const dispatch = useAppDispatch();
  const operand = useAppSelector((state) => state.calcReducer.operand);

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  return (
    <div className={css.gridTablo} {...restProps}>
      {numbers.map((el, index) => {
        const clickHandler = (ele: any) => {
          if (!operand || operand === "=") {
            dispatch(setNum1AC({ value: ele }));
          } else {
            dispatch(setNum2AC({ value: ele }));
          }
        };
        return (
          <SuperBtn
            onClick={() => clickHandler(el)}
            disabled={disabled}
            key={index}
          >
            {el}
          </SuperBtn>
        );
      })}
      <SuperBtn
        disabled={disabled}
        style={{ gridRow: "4", gridColumnStart: "1", gridColumnEnd: "3" }}
      >
        0
      </SuperBtn>
      <SuperBtn disabled={disabled}>,</SuperBtn>
    </div>
  );
};
