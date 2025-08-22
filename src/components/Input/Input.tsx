import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import './Input.scss';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
    /**
     * 输入框大小
     */
    size?: 'small' | 'middle' | 'large';
    /**
     * 输入框状态
     */
    status?: 'error' | 'warning';
    /**
     * 是否有边框
     */
    bordered?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 输入框前缀图标
     */
    prefix?: React.ReactNode;
    /**
     * 输入框后缀图标
     */
    suffix?: React.ReactNode;
    /**
     * 输入框前置标签
     */
    addonBefore?: React.ReactNode;
    /**
     * 输入框后置标签
     */
    addonAfter?: React.ReactNode;
    /**
     * 是否显示清除图标
     */
    allowClear?: boolean;
    /**
     * 最大长度
     */
    maxLength?: number;
    /**
     * 是否显示字数统计
     */
    showCount?: boolean;
    /**
     * 变更回调
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * 按下回车回调
     */
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * 清除回调
     */
    onClear?: () => void;
    /**
     * 自定义类名
     */
    className?: string;
    /**
     * 样式
     */
    style?: React.CSSProperties;
}

export interface InputRef {
    focus: () => void;
    blur: () => void;
    select: () => void;
    input: HTMLInputElement | null;
}

export const Input = forwardRef<InputRef, InputProps>(({
    size = 'middle',
    status,
    bordered = true,
    disabled = false,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    allowClear = false,
    maxLength,
    showCount = false,
    onChange,
    onPressEnter,
    onClear,
    className = '',
    style,
    value,
    defaultValue,
    placeholder,
    ...restProps
}, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);
    const [innerValue, setInnerValue] = useState(defaultValue || '');

    // 使用受控或非受控模式
    const isControlled = value !== undefined;
    const inputValue = isControlled ? value : innerValue;

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
        blur: () => inputRef.current?.blur(),
        select: () => inputRef.current?.select(),
        input: inputRef.current,
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        if (!isControlled) {
            setInnerValue(newValue);
        }

        onChange?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onPressEnter?.(e);
        }
        restProps.onKeyDown?.(e);
    };

    const handleClear = () => {
        if (inputRef.current) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                'value'
            )?.set;

            nativeInputValueSetter?.call(inputRef.current, '');

            const event = new Event('input', { bubbles: true });
            inputRef.current.dispatchEvent(event);
        }

        if (!isControlled) {
            setInnerValue('');
        }

        onClear?.();
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        restProps.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        restProps.onBlur?.(e);
    };

    // 计算字符长度（支持中文）
    const getStringLength = (str: string) => {
        return [...str].length;
    };

    const currentLength = getStringLength(String(inputValue || ''));
    const showClearIcon = allowClear && inputValue && !disabled;

    // 构建类名
    const wrapperClasses = [
        'input-wrapper',
        `input-wrapper-${size}`,
        bordered && 'input-wrapper-bordered',
        status && `input-wrapper-${status}`,
        disabled && 'input-wrapper-disabled',
        focused && 'input-wrapper-focused',
        (prefix || suffix || showClearIcon) && 'input-wrapper-affix',
        className
    ].filter(Boolean).join(' ');

    const groupClasses = [
        'input-group',
        (addonBefore || addonAfter) && 'input-group-wrapper'
    ].filter(Boolean).join(' ');

    const renderInput = () => (
        <span className={wrapperClasses} style={style}>
            {prefix && <span className="input-prefix">{prefix}</span>}
            <input
                ref={inputRef}
                className="input"
                value={inputValue}
                disabled={disabled}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...restProps}
            />
            {showClearIcon && (
                <span className="input-suffix input-clear" onClick={handleClear}>
                    <svg viewBox="64 64 896 896" width="12" height="12" fill="currentColor">
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
                    </svg>
                </span>
            )}
            {suffix && <span className="input-suffix">{suffix}</span>}
        </span>
    );

    const renderInputWithAddons = () => {
        if (!addonBefore && !addonAfter) {
            return renderInput();
        }

        return (
            <span className={groupClasses}>
                {addonBefore && <span className="input-group-addon">{addonBefore}</span>}
                {renderInput()}
                {addonAfter && <span className="input-group-addon">{addonAfter}</span>}
            </span>
        );
    };

    const renderWithCount = () => {
        if (!showCount) {
            return renderInputWithAddons();
        }

        return (
            <div className="input-affix-wrapper-with-count">
                {renderInputWithAddons()}
                <span className="input-show-count-suffix">
                    {maxLength ? `${currentLength}/${maxLength}` : currentLength}
                </span>
            </div>
        );
    };

    return renderWithCount();
});

Input.displayName = 'Input';

export default Input;
