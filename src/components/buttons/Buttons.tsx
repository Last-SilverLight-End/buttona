import styles from '@styles/Button.module.css';
import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  size?: 'small' | 'middle' | 'large';
  color?: 'red' | 'green' | 'blue' | 'white' | 'black';
  backgroundColor?: 'white' | 'black'; 
}

const defaultCss = {
  size: 'middle',
  color: 'blue',
  backgroundColor: 'white'
} satisfies ButtonProps;

const Buttons: React.FC<ButtonProps> = (props) =>{
  const { children, ...remains } = { ...defaultCss, ...props };
  const buttonClass = [styles.Button, ...Object.entries(remains).map(([k,v]) => styles[`${k}-${v}`])].join(" ");
  
  return <button className={buttonClass}>{children}</button>;
}

export default Buttons;
