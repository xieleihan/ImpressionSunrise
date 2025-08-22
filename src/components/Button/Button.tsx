import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import './Button.scss';

export type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'link';
export type ButtonShape = 'default' | 'circle' | 'round';
export type ButtonSize = 'large' | 'middle' | 'small';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';

export interface BaseButtonProps {
    /**
     * 按钮类型
     */
    type?: ButtonType;
    /**
     * 按钮形状
     */
    shape?: ButtonShape;
    /**
     * 按钮大小
     */
    size?: ButtonSize;
    /**
     * 是否为块级按钮
     */
    block?: boolean;
    /**
     * 是否为危险按钮
     */
    danger?: boolean;
    /**
     * 是否为幽灵按钮
     */
    ghost?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 是否加载中
     */
    loading?: boolean | { delay?: number };
    /**
     * 设置按钮的图标组件
     */
    icon?: React.ReactNode;
    /**
     * 自定义类名
     */
    className?: string;
    /**
     * 自定义样式
     */
    style?: React.CSSProperties;
    /**
     * 子内容
     */
    children?: React.ReactNode;
}

export interface AnchorButtonProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'type' | 'onClick' | 'target' | 'className' | 'style'> {
    href: string;
    target?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface NativeButtonProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'className' | 'style'> {
    htmlType?: ButtonHTMLType;
    href?: never;
    target?: never;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export interface ButtonRef {
    focus: () => void;
    blur: () => void;
}

// 辅助函数：判断是否为加载状态
const isLoading = (loading: boolean | { delay?: number } | undefined): boolean => {
    return typeof loading === 'boolean' ? loading : Boolean(loading);
};

// 类型守卫：判断是否为链接按钮
const isAnchorButton = (props: ButtonProps): props is AnchorButtonProps => {
    return 'href' in props && props.href !== undefined;
};

// 过滤掉组件特有的属性，防止传递给HTML元素
type FilteredProps = Omit<Record<string, unknown>, 'type' | 'shape' | 'size' | 'block' | 'danger' | 'ghost' | 'loading' | 'icon'>;

const filterButtonProps = (props: Record<string, unknown>): FilteredProps => {
    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        type: _type,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        shape: _shape,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        size: _size,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        block: _block,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        danger: _danger,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ghost: _ghost,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        loading: _loading,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        icon: _icon,
        ...rest
    } = props;
    return rest;
};

export const Button = forwardRef<ButtonRef, ButtonProps>(
    (props, ref) => {
        const {
            children,
            type = 'default',
            shape = 'default',
            size = 'middle',
            disabled = false,
            loading = false,
            block = false,
            ghost = false,
            danger = false,
            icon,
            className,
            style,
            ...restProps
        } = props;

        const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

        useImperativeHandle(ref, () => ({
            focus: () => {
                if (buttonRef.current) {
                    buttonRef.current.focus();
                }
            },
            blur: () => {
                if (buttonRef.current) {
                    buttonRef.current.blur();
                }
            }
        }));

        const isLoadingState = isLoading(loading);

        // 构建类名
        const classNames = [
            'btn',
            `btn-${type}`,
            `btn-${size}`,
            shape !== 'default' && `btn-${shape}`,
            disabled && 'btn-disabled',
            isLoadingState && 'btn-loading',
            block && 'btn-block',
            ghost && 'btn-ghost',
            danger && `btn-danger-variant`,
            icon && !children && 'btn-icon-only',
            className
        ].filter(Boolean).join(' ');

        // 加载图标
        const loadingIcon = isLoadingState && (
            <span className="btn-loading-icon">
                <svg
                    viewBox="0 0 1024 1024"
                    focusable="false"
                    data-icon="loading"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M988 548c-19.9 0-36-16.1-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C637 83.6 579.4 72 520 72s-117 11.6-171.3 34.6a440.45 440.45 0 00-139.9 94.3 437.71 437.71 0 00-94.3 139.9C91.6 395 80 452.6 80 512s11.6 117 34.6 171.3a440.45 440.45 0 0094.3 139.9 437.71 437.71 0 00139.9 94.3C395 940.4 452.6 952 512 952s117-11.6 171.3-34.6a440.45 440.45 0 00139.9-94.3 437.71 437.71 0 0094.3-139.9C940.4 629 952 571.4 952 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 141.4-55.1 274.5-155.1 374.5S653.4 1042 512 1042 237.5 986.9 137.5 886.9 42 653.4 42 512s55.1-274.5 155.1-374.5S370.6-18 512-18s274.5 55.1 374.5 155.1S1042 370.6 1042 512c0 19.9-16.1 36-36 36z" />
                </svg>
            </span>
        );

        // 内容渲染
        const iconNode = loadingIcon || (icon && <span className="btn-icon">{icon}</span>);
        const kids = children ? <span>{children}</span> : null;

        const content = (
            <>
                {iconNode}
                {kids}
            </>
        );

        // 如果是链接类型或有 href 属性
        if (isAnchorButton(props)) {
            const { href, target, onClick, ...anchorProps } = restProps as AnchorButtonProps;
            const filteredProps = filterButtonProps(anchorProps);

            return (
                <a
                    ref={buttonRef as React.Ref<HTMLAnchorElement>}
                    className={classNames}
                    style={style}
                    href={disabled ? undefined : href}
                    target={target}
                    onClick={disabled ? undefined : onClick}
                    {...filteredProps}
                >
                    {content}
                </a>
            );
        }

        // 普通按钮
        const { htmlType = 'button', onClick, ...restButtonProps } = restProps as NativeButtonProps;
        const filteredProps = filterButtonProps(restButtonProps);

        return (
            <button
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                className={classNames}
                style={style}
                type={htmlType}
                disabled={disabled || isLoadingState}
                onClick={disabled ? undefined : onClick}
                {...filteredProps}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;