# Layout 布局组件文档

Layout 布局组件为页面提供了经典的布局结构，基于 Ant Design 的设计理念，采用语义化的 HTML5 标签，支持响应式设计和主题切换。

## 🎯 设计特点

### 语义化标签
- `Layout` → `<section>` 布局容器
- `Header` → `<header>` 页面头部
- `Footer` → `<footer>` 页面底部
- `Content` → `<main>` 主内容区域
- `Sider` → `<aside>` 侧边栏

### 性能优化
- 使用 `useMemo` 优化子组件检测
- CSS-in-SCSS 架构，减少运行时计算
- 支持 Tree Shaking，按需加载
- 响应式断点使用原生 `matchMedia` API

### 无障碍访问
- 完整的键盘导航支持
- ARIA 标签和语义
- 屏幕阅读器友好
- 支持 `prefers-reduced-motion`

## 📱 响应式设计

### 断点系统
```scss
xs: (max-width: 575px)   // 手机
sm: (max-width: 767px)   // 平板竖屏
md: (max-width: 991px)   // 平板横屏
lg: (max-width: 1199px)  // 小桌面
xl: (max-width: 1599px)  // 大桌面
xxl: (min-width: 1600px) // 超大桌面
```

### 自适应特性
- 自动调整间距和字号
- 移动端优化的触控体验
- 侧边栏响应式收起
- 灵活的网格布局

## 🎨 主题系统

### 色彩变量
基于 `_color.scss` 的莫奈印象派配色：

```scss
// 主色调 - 天空蓝系
$monet-sky-blue-3: #7aa9e9;     // 主要色彩
$monet-deep-water-1: #3b6978;   // 深色主题
$monet-mist-white-1: #f7f8f9;   // 浅色背景

// 辅助色彩
$monet-cloud-gray-2: #e0e6ea;   // 边框分割
$monet-ash-grey-6: #434343;     // 文字颜色
```

### 暗色主题
自动适配 `prefers-color-scheme: dark`：
- 背景色自动切换
- 文字对比度优化
- 边框颜色调整

## 📋 API 参考

### Layout 主组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| hasSider | boolean | false | 是否包含侧边栏 |
| children | ReactNode | - | 子元素 |

### Header 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| children | ReactNode | - | 子元素 |

**默认样式：**
- 高度：64px（桌面）/ 56px（平板）/ 48px（手机）
- 背景：天空蓝主题色
- 文字：白色
- 阴影：subtle box-shadow

### Footer 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| children | ReactNode | - | 子元素 |

**默认样式：**
- 最小高度：48px
- 背景：浅灰色
- 上边框分割线

### Content 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| children | ReactNode | - | 子元素 |

**默认样式：**
- 自动填充剩余空间
- 内边距：24px（桌面）/ 16px（平板）/ 8px（手机）
- 背景：浅色主题
- 可滚动内容

### Sider 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| width | number \| string | 200 | 侧边栏宽度 |
| collapsedWidth | number \| string | 80 | 收起时宽度 |
| collapsible | boolean | false | 是否可收起 |
| collapsed | boolean | false | 是否收起 |
| onCollapse | function | - | 收起状态改变回调 |
| trigger | ReactNode \| null | '⚪' | 触发器，null 时隐藏 |
| reverseArrow | boolean | false | 反转箭头方向 |
| theme | 'light' \| 'dark' | 'dark' | 主题颜色 |
| breakpoint | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' | - | 响应式断点 |
| onBreakpoint | function | - | 断点触发回调 |
| position | 'left' \| 'right' | 'left' | 侧边栏位置 |

## 🚀 使用示例

### 基础布局

```tsx
import { Layout } from 'impressionsunrise';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <h1>网站标题</h1>
      </Header>
      <Content>
        <h2>主要内容</h2>
        <p>这里是页面的主要内容区域</p>
      </Content>
      <Footer>
        <p>版权信息 ©2025</p>
      </Footer>
    </Layout>
  );
}
```

### 带侧边栏的布局

```tsx
import { Layout } from 'impressionsunrise';

const { Header, Footer, Content, Sider } = Layout;

function App() {
  return (
    <Layout hasSider>
      <Sider collapsible theme="dark" width={240}>
        <div className="logo">LOGO</div>
        <nav>
          <a href="/">首页</a>
          <a href="/about">关于</a>
          <a href="/contact">联系</a>
        </nav>
      </Sider>
      <Layout>
        <Header>
          <h1>后台管理系统</h1>
        </Header>
        <Content>
          <h2>欢迎使用管理系统</h2>
        </Content>
        <Footer>
          <p>管理系统 v1.0</p>
        </Footer>
      </Layout>
    </Layout>
  );
}
```

### 响应式布局

```tsx
import { Layout } from 'impressionsunrise';

const { Header, Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="md"
        collapsedWidth={0}
        onBreakpoint={(broken) => {
          console.log('屏幕断点变化:', broken);
        }}
      >
        <nav>导航菜单</nav>
      </Sider>
      <Layout>
        <Header>
          <h1>响应式应用</h1>
        </Header>
        <Content>
          <p>这个布局在中等屏幕以下会自动隐藏侧边栏</p>
        </Content>
      </Layout>
    </Layout>
  );
}
```

### 嵌套布局

```tsx
import { Layout } from 'impressionsunrise';

const { Header, Footer, Content, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Header>顶部导航</Header>
      <Layout hasSider>
        <Sider theme="light">侧边导航</Sider>
        <Layout style={{ padding: '24px' }}>
          <Content>
            <Layout>
              <Header style={{ background: '#52c41a' }}>
                内嵌头部
              </Header>
              <Content>
                内嵌内容区域
              </Content>
            </Layout>
          </Content>
        </Layout>
      </Layout>
      <Footer>底部信息</Footer>
    </Layout>
  );
}
```

## 🎛️ 高级定制

### 自定义样式类

```scss
// 固定头部
.fixed-header {
  .impression-layout-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  
  .impression-layout-content {
    margin-top: 64px;
  }
}

// 无边距内容
.seamless-content {
  .impression-layout-content {
    padding: 0;
  }
}

// 自定义侧边栏
.custom-sider {
  .impression-layout-sider {
    background: linear-gradient(145deg, #667eea 0%, #764ba2 100%);
    
    .impression-layout-sider-trigger {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }
  }
}
```

### TypeScript 支持

```tsx
import type { 
  LayoutProps, 
  HeaderProps, 
  SiderProps 
} from 'impressionsunrise';

// 扩展组件属性
interface CustomSiderProps extends SiderProps {
  logo?: React.ReactNode;
  menuItems?: MenuItem[];
}

function CustomSider({ logo, menuItems, ...props }: CustomSiderProps) {
  return (
    <Sider {...props}>
      {logo && <div className="sider-logo">{logo}</div>}
      {menuItems && <Menu items={menuItems} />}
    </Sider>
  );
}
```

## ⚡ 性能建议

### 1. 避免不必要的重渲染

```tsx
// ✅ 好的做法：使用 useMemo 缓存复杂计算
const siderConfig = useMemo(() => ({
  width: 240,
  collapsible: true,
  theme: 'dark' as const
}), []);

// ✅ 好的做法：回调函数使用 useCallback
const handleCollapse = useCallback((collapsed: boolean) => {
  setCollapsed(collapsed);
}, []);

return (
  <Sider {...siderConfig} onCollapse={handleCollapse}>
    {children}
  </Sider>
);
```

### 2. 合理使用断点

```tsx
// ✅ 只在必要时使用响应式断点
<Sider 
  breakpoint="md"  // 只在中等屏幕以下收起
  collapsedWidth={0}  // 完全隐藏以节省空间
/>
```

### 3. 样式优化

```scss
// ✅ 使用 CSS 变量便于主题切换
.impression-layout {
  --header-height: 64px;
  --sider-width: 240px;
  --content-padding: 24px;
}

@media (max-width: 768px) {
  .impression-layout {
    --header-height: 56px;
    --content-padding: 16px;
  }
}
```

## 🔧 故障排除

### 常见问题

**Q: 侧边栏收起功能不工作？**
A: 确保设置了 `collapsible={true}` 并提供 `onCollapse` 回调函数。

**Q: 响应式断点不生效？**
A: 检查 `breakpoint` 属性是否正确设置，并确保浏览器支持 `matchMedia` API。

**Q: 样式冲突？**
A: 确保组件的 CSS 在其他样式之后加载，或使用 `!important` 提高优先级。

**Q: TypeScript 类型错误？**
A: 确保导入了正确的类型定义：
```tsx
import type { LayoutProps } from 'impressionsunrise';
```

### 调试技巧

```tsx
// 开启调试模式
<Sider
  onCollapse={(collapsed, type) => {
    console.log('Sider collapsed:', { collapsed, type });
  }}
  onBreakpoint={(broken) => {
    console.log('Breakpoint triggered:', broken);
  }}
/>
```

## 📚 相关链接

- [Button 组件文档](./BUTTON_DOCS.md)
- [Input 组件文档](./INPUT_DOCS.md)
- [项目总览](./PROJECT_SUMMARY.md)
- [色彩系统](./src/styles/_color.scss)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进 Layout 组件：

1. 性能优化建议
2. 新的布局模式
3. 无障碍访问改进
4. 样式主题扩展
5. TypeScript 类型完善

---

**ImpressionSunrise Layout 组件** - 让每个页面都拥有印象派的优雅布局 🎨
