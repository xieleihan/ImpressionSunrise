import { type HTMLAttributes, forwardRef } from 'react';

export type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', fullWidth, className = '', ...props }, ref) => {
        const baseClasses = 'font-medium rounded focus:outline-none focus:ring-2 transition-colors';
        const variantClasses = {
            primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
            secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
            outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300',
        };
        const sizeClasses = {
            sm: 'text-sm px-3 py-1',
            md: 'text-base px-4 py-2',
            lg: 'text-lg px-6 py-3',
        };

        return (
            <button
                ref={ref}
                className={`
                    ${baseClasses}
                    ${variantClasses[variant]}
                    ${sizeClasses[size]}
                    ${fullWidth ? 'w-full' : ''}
                    ${className}
                `}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';