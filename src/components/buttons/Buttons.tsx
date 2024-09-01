import styles from "@styles/Button.module.css";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  // 사이즈 3개
  size?: "small" | "middle" | "large";
  // 폰트 색은 2개
  color?: "white" | "black";
  // 색은 6개
  backgroundColor?: "purple" | "red" | "green" | "blue" | "white" | "black";
  className?: string;
}

const defaultCss = {
  size: "middle",
  color: "black",
  backgroundColor: "white",
} satisfies ButtonProps;

const Buttons: React.FC<ButtonProps> = (props) => {
  const { children, className, ...remains } = { ...defaultCss, ...props };
  const buttonClass = [
    styles.Button,
    ...Object.entries(remains).map(([k, v]) => styles[`${k}-${v}`]),
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <button className={buttonClass}>{children}</button>;
};

export default Buttons;
