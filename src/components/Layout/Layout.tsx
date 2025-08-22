import React, { 
  forwardRef, 
  createContext, 
  useMemo
} from 'react';
import type { 
  CSSProperties,
  ReactNode,
  HTMLAttributes 
} from 'react';
import './Layout.scss';

// ============ 类型定义 ============

export interface LayoutContextValue {
  siderCollapsed?: boolean;
  siderWidth?: number | string;
  hasSider?: boolean;
}

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 是否有侧边栏 */
  hasSider?: boolean;
  /** 子元素 */
  children?: ReactNode;
}

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 子元素 */
  children?: ReactNode;
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 子元素 */
  children?: ReactNode;
}

export interface ContentProps extends HTMLAttributes<HTMLElement> {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 子元素 */
  children?: ReactNode;
}

export interface SiderProps extends HTMLAttributes<HTMLDivElement> {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 子元素 */
  children?: ReactNode;
  /** 侧边栏宽度 */
  width?: number | string;
  /** 收缩宽度 */
  collapsedWidth?: number | string;
  /** 是否可收起 */
  collapsible?: boolean;
  /** 是否收起 */
  collapsed?: boolean;
  /** 收起状态改变时的回调 */
  onCollapse?: (collapsed: boolean, type: 'clickTrigger' | 'responsive') => void;
  /** 触发器，设为 null 时隐藏 */
  trigger?: ReactNode | null;
  /** 自定义触发器 */
  reverseArrow?: boolean;
  /** 主题颜色 */
  theme?: 'light' | 'dark';
  /** 断点触发响应式收缩 */
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** 响应式收缩的回调 */
  onBreakpoint?: (broken: boolean) => void;
  /** 侧边栏位置 */
  position?: 'left' | 'right';
}

// ============ Context ============

const LayoutContext = createContext<LayoutContextValue>({});

// ============ Layout 主组件 ============

const Layout = forwardRef<HTMLElement, LayoutProps>(
  ({ className = '', style, hasSider = false, children, ...restProps }, ref) => {
    const prefixCls = 'impression-layout';
    
    // 检测是否包含 Sider 组件
    const detectSider = useMemo(() => {
      let hasActualSider = hasSider;
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === Sider) {
          hasActualSider = true;
        }
      });
      return hasActualSider;
    }, [children, hasSider]);

    const layoutContextValue = useMemo<LayoutContextValue>(() => ({
      hasSider: detectSider,
    }), [detectSider]);

    const classNames = [
      prefixCls,
      detectSider ? `${prefixCls}-has-sider` : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <LayoutContext.Provider value={layoutContextValue}>
        <section
          ref={ref}
          className={classNames}
          style={style}
          {...restProps}
        >
          {children}
        </section>
      </LayoutContext.Provider>
    );
  }
);

Layout.displayName = 'Layout';

// ============ Header 组件 ============

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className = '', style, children, ...restProps }, ref) => {
    const prefixCls = 'impression-layout-header';
    
    const classNames = [prefixCls, className].filter(Boolean).join(' ');

    return (
      <header
        ref={ref}
        className={classNames}
        style={style}
        {...restProps}
      >
        {children}
      </header>
    );
  }
);

Header.displayName = 'Layout.Header';

// ============ Footer 组件 ============

const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ className = '', style, children, ...restProps }, ref) => {
    const prefixCls = 'impression-layout-footer';
    
    const classNames = [prefixCls, className].filter(Boolean).join(' ');

    return (
      <footer
        ref={ref}
        className={classNames}
        style={style}
        {...restProps}
      >
        {children}
      </footer>
    );
  }
);

Footer.displayName = 'Layout.Footer';

// ============ Content 组件 ============

const Content = forwardRef<HTMLElement, ContentProps>(
  ({ className = '', style, children, ...restProps }, ref) => {
    const prefixCls = 'impression-layout-content';
    
    const classNames = [prefixCls, className].filter(Boolean).join(' ');

    return (
      <main
        ref={ref}
        className={classNames}
        style={style}
        {...restProps}
      >
        {children}
      </main>
    );
  }
);

Content.displayName = 'Layout.Content';

// ============ Sider 组件 ============

const Sider = forwardRef<HTMLDivElement, SiderProps>(
  ({ 
    className = '',
    style,
    children,
    width = 200,
    collapsedWidth = 80,
    collapsible = false,
    collapsed = false,
    onCollapse,
    trigger = '⚪', // 默认触发器
    reverseArrow = false,
    theme = 'dark',
    breakpoint,
    onBreakpoint,
    position = 'left',
    ...restProps 
  }, ref) => {
    const prefixCls = 'impression-layout-sider';
    const [internalCollapsed, setInternalCollapsed] = React.useState(collapsed);
    const [below, setBelow] = React.useState(false);

    // 处理响应式断点
    React.useEffect(() => {
      if (!breakpoint) return;

      const mediaQueryList = window.matchMedia(getBreakpointQuery(breakpoint));
      
      const handleChange = (e: MediaQueryListEvent) => {
        setBelow(e.matches);
        if (onBreakpoint) {
          onBreakpoint(e.matches);
        }
      };

      mediaQueryList.addEventListener('change', handleChange);
      setBelow(mediaQueryList.matches);

      return () => {
        mediaQueryList.removeEventListener('change', handleChange);
      };
    }, [breakpoint, onBreakpoint]);

    // 当外部控制 collapsed 状态时同步内部状态
    React.useEffect(() => {
      setInternalCollapsed(collapsed);
    }, [collapsed]);

    const handleCollapse = () => {
      const newCollapsed = !internalCollapsed;
      setInternalCollapsed(newCollapsed);
      onCollapse?.(newCollapsed, 'clickTrigger');
    };

    const actualCollapsed = below ? true : internalCollapsed;
    const actualWidth = actualCollapsed ? collapsedWidth : width;

    const siderStyle: CSSProperties = {
      ...style,
      flex: `0 0 ${actualWidth}px`,
      maxWidth: `${actualWidth}px`,
      minWidth: `${actualWidth}px`,
      width: `${actualWidth}px`,
    };

    const classNames = [
      prefixCls,
      `${prefixCls}-${theme}`,
      `${prefixCls}-${position}`,
      actualCollapsed ? `${prefixCls}-collapsed` : '',
      below ? `${prefixCls}-below` : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <aside
        ref={ref}
        className={classNames}
        style={siderStyle}
        {...restProps}
      >
        <div className={`${prefixCls}-children`}>
          {children}
        </div>
        {collapsible && trigger !== null && (
          <div 
            className={`${prefixCls}-trigger`}
            onClick={handleCollapse}
            role="button"
            tabIndex={0}
            aria-label={actualCollapsed ? '展开侧边栏' : '收起侧边栏'}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCollapse();
              }
            }}
          >
            <span className={`${prefixCls}-trigger-icon ${actualCollapsed ? 'collapsed' : ''} ${reverseArrow ? 'reverse' : ''}`}>
              {trigger}
            </span>
          </div>
        )}
      </aside>
    );
  }
);

Sider.displayName = 'Layout.Sider';

// ============ 工具函数 ============

function getBreakpointQuery(breakpoint: string): string {
  const breakpoints = {
    xs: '(max-width: 575px)',
    sm: '(max-width: 767px)',
    md: '(max-width: 991px)',
    lg: '(max-width: 1199px)',
    xl: '(max-width: 1599px)',
    xxl: '(min-width: 1600px)',
  };
  return breakpoints[breakpoint as keyof typeof breakpoints] || '';
}

// ============ 复合导出 ============

const LayoutComponent = Layout as typeof Layout & {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Sider: typeof Sider;
};

LayoutComponent.Header = Header;
LayoutComponent.Footer = Footer;
LayoutComponent.Content = Content;
LayoutComponent.Sider = Sider;

export { Header, Footer, Content, Sider };
export default LayoutComponent;
