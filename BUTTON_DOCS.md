# Button 按钮组件文档

ImpressionSunrise 的 Button 组件提供了丰富的样式和交互功能，完全兼容 Ant Design 的 API 设计。

## 特性

- 🎨 **多种类型**: Primary、Default、Dashed、Text、Link
- 📏 **三种尺寸**: Large、Middle、Small
- 🔶 **多种形状**: Default、Circle、Round
- 🎭 **丰富状态**: Normal、Hover、Active、Focus、Disabled、Loading
- 👻 **幽灵模式**: 透明背景的幽灵按钮
- ⚠️ **危险模式**: 危险操作的警告样式
- 📱 **响应式**: 自适应不同屏幕尺寸
- 🌙 **暗色主题**: 支持暗色模式
- 🔗 **链接支持**: 支持作为链接使用
- ♿ **无障碍**: 完整的键盘导航和屏幕阅读器支持

## 基础用法

```tsx
import { Button } from 'impressionsunrise';

// 基础按钮
<Button>Default Button</Button>
<Button type="primary">Primary Button</Button>
<Button type="dashed">Dashed Button</Button>
<Button type="text">Text Button</Button>
<Button type="link">Link Button</Button>
```

## 尺寸

Button 组件提供三种尺寸：

```tsx
<Button size="large" type="primary">Large</Button>
<Button size="middle" type="primary">Middle (默认)</Button>
<Button size="small" type="primary">Small</Button>
```

## 形状

```tsx
<Button type="primary">Default</Button>
<Button type="primary" shape="circle">A</Button>
<Button type="primary" shape="round">Round</Button>
```

## 状态

### 禁用状态

```tsx
<Button disabled>Disabled Button</Button>
<Button type="primary" disabled>Disabled Primary</Button>
```

### 加载状态

```tsx
<Button loading>Loading Button</Button>
<Button type="primary" loading>Loading Primary</Button>

// 带延迟的加载状态
<Button loading={{ delay: 500 }}>Delayed Loading</Button>
```

### 危险状态

```tsx
<Button type="primary" danger>Danger Primary</Button>
<Button type="default" danger>Danger Default</Button>
<Button type="text" danger>Danger Text</Button>
<Button type="link" danger>Danger Link</Button>
```

## 幽灵按钮

在深色背景上使用的透明按钮：

```tsx
<Button type="primary" ghost>Primary Ghost</Button>
<Button type="default" ghost>Default Ghost</Button>
<Button type="dashed" ghost>Dashed Ghost</Button>
```

## 块级按钮

```tsx
<Button type="primary" block>
  Block Button
</Button>
```

## 带图标的按钮

```tsx
import { Button } from 'impressionsunrise';

<Button type="primary" icon={<DownloadIcon />}>
  Download
</Button>

// 只有图标的按钮
<Button type="primary" icon={<SearchIcon />} />

// 圆形图标按钮
<Button type="primary" shape="circle" icon={<UserIcon />} />
```

## 链接按钮

```tsx
<Button type="link" href="https://github.com">GitHub</Button>
<Button type="primary" href="https://github.com" target="_blank">
  External Link
</Button>
```

## API

### Button Props

| 属性      | 说明                                                  | 类型                                                     | 默认值      |
| --------- | ----------------------------------------------------- | -------------------------------------------------------- | ----------- |
| type      | 按钮类型                                              | `'default' \| 'primary' \| 'dashed' \| 'text' \| 'link'` | `'default'` |
| size      | 按钮大小                                              | `'large' \| 'middle' \| 'small'`                         | `'middle'`  |
| shape     | 按钮形状                                              | `'default' \| 'circle' \| 'round'`                       | `'default'` |
| block     | 将按钮宽度调整为其父宽度的选项                        | `boolean`                                                | `false`     |
| danger    | 设置危险按钮                                          | `boolean`                                                | `false`     |
| ghost     | 幽灵属性，使按钮背景透明                              | `boolean`                                                | `false`     |
| disabled  | 按钮失效状态                                          | `boolean`                                                | `false`     |
| loading   | 设置按钮载入状态                                      | `boolean \| { delay?: number }`                          | `false`     |
| icon      | 设置按钮的图标组件                                    | `ReactNode`                                              | -           |
| htmlType  | 设置 `button` 原生的 `type` 值                        | `'submit' \| 'button' \| 'reset'`                        | `'button'`  |
| href      | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | `string`                                                 | -           |
| target    | 相当于 a 链接的 target 属性，href 存在时生效          | `string`                                                 | -           |
| onClick   | 点击按钮时的回调                                      | `(event: MouseEvent) => void`                            | -           |
| className | 自定义类名                                            | `string`                                                 | -           |
| style     | 自定义样式                                            | `CSSProperties`                                          | -           |

### Button Ref

| 属性  | 说明     | 类型         |
| ----- | -------- | ------------ |
| focus | 获取焦点 | `() => void` |
| blur  | 失去焦点 | `() => void` |

## 样式定制

Button 组件完全采用 ImpressionSunrise 的色彩系统，支持以下定制：

### CSS 变量

组件使用 `_color.scss` 中定义的色彩变量：

- `$monet-sky-blue-*`: 主色系（Primary）
- `$monet-ash-grey-*`: 灰色系（Default）
- `$monet-cherry-red-*`: 危险色系（Danger）
- `$monet-grass-green-*`: 成功色系（Success）
- `$monet-honey-yellow-*`: 警告色系（Warning）

### 响应式设计

在移动端（< 768px）会自动调整：

- Large 按钮尺寸减小
- Middle 按钮尺寸减小
- Small 按钮尺寸减小
- 保持良好的触摸体验

### 暗色主题

支持 `prefers-color-scheme: dark` 媒体查询，在暗色主题下：

- Default 按钮使用深色背景
- Text 按钮使用浅色文字
- 其他变体保持良好的对比度

## 最佳实践

1. **类型选择**

   - `primary`: 主要操作（如提交、确认）
   - `default`: 次要操作（如取消、重置）
   - `text`: 轻量级操作（如编辑、删除）
   - `link`: 导航类操作

2. **尺寸使用**

   - `large`: 重要的 CTA 按钮
   - `middle`: 常规操作按钮
   - `small`: 辅助功能按钮

3. **状态管理**

   - 使用 `loading` 状态提供操作反馈
   - 使用 `disabled` 防止重复提交
   - 使用 `danger` 警示危险操作

4. **无障碍性**
   - 提供有意义的按钮文本
   - 使用适当的 `htmlType`
   - 确保足够的颜色对比度

## TypeScript 支持

组件提供完整的 TypeScript 类型定义：

```tsx
import type { ButtonProps, ButtonRef } from "impressionsunrise";

// 受控组件示例
const MyComponent: React.FC = () => {
  const buttonRef = useRef<ButtonRef>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked:", event);
  };

  return (
    <Button ref={buttonRef} type="primary" onClick={handleClick}>
      Click Me
    </Button>
  );
};
```
