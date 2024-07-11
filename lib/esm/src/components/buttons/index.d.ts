import React from 'react';
interface ButtonProps {
    children?: React.ReactNode;
    size?: 'small' | 'middle' | 'large';
    color?: 'red' | 'green' | 'blue' | 'white' | 'black';
    backgroundColor?: 'white' | 'black';
}
declare const Buttons: React.FC<ButtonProps>;
export default Buttons;
