import React from "react";
import "./button.css";

export interface ButtonProps {
  children?: React.ReactNode;
  // 사이즈 3개
  size?: "small" | "middle" | "large";
  // 폰트 색은 2개
  color?: "white" | "black";
  // 배경색 6개
  backgroundColor?: "purple" | "red" | "green" | "blue" | "white" | "black";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional custom className
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = "middle",
  backgroundColor = "black",
  color = "white",
  label,
  className,
  ...props
}: ButtonProps) => {
  const buttonClass = [
    "storybook-button",
    `size-${size}`,
    `color-${color}`,

    className, // 사용자 정의 클래스 이름 추가
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={buttonClass}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
