import React from 'react';
import './Button.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * 按钮变体
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    /**
     * 按钮大小
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 子元素
     */
    children: React.ReactNode;
    /**
     * 自定义类名
     */
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = '',
    ...props
}) => {
    const buttonClass = `btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${className}`;

    return (
        <button
            className={buttonClass}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;