import React, { ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames';

interface BaseButtonProps {
  ClassName?: string;
  disabled?: boolean;
  text?: string; 
  textSize?: string | number;
  textColor?: string;
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  bgColor?: string;
  handleClick?: (e?: any) => void;
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

export const Button: FC<ButtonProps> =  (props) => {
  const {
    ClassName,
    disabled,
    text,
    textSize,
    textColor,
    width,
    height,
    radius,
    bgColor,
    handleClick,
    ...restProps
  } = props;

  const classes = classNames('lt-btn', ClassName);

  const handle= () => {
    return handleClick;
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      style={{ width: width, height: height, borderRadius: radius, fontSize: textSize, color: textColor, backgroundColor: bgColor }}
      onClick={handle()}
      {...restProps}
    >
      {text}
    </button>
  )
}
