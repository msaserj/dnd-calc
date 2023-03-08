import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import css from "./SuperBtn.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

export const SuperBtn: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const finalClassName = `${css.button} ${
    xType === "red"
      ? css.red
      : xType === "secondary"
      ? css.secondary
      : css.default
  } ${disabled ? css.disabled : ""} ${className ? className : ""}`;

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};
