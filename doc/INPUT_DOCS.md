# Input 组件使用说明

## 🎯 功能特性

Input 组件完全实现了 Ant Design Input 的功能，使用了项目自定义的莫奈印象派色彩系统：

### ✨ 主要功能

1. **基础功能**：受控/非受控模式、placeholder、disabled 等
2. **尺寸大小**：small、middle、large 三种尺寸
3. **状态样式**：error、warning 状态
4. **边框控制**：bordered 属性控制是否显示边框
5. **前缀后缀**：prefix、suffix 支持图标或文本
6. **前置后置标签**：addonBefore、addonAfter
7. **清除功能**：allowClear 属性显示清除按钮
8. **字数统计**：showCount 和 maxLength 支持字符计数
9. **事件处理**：onChange、onPressEnter、onClear 等
10. **Ref 支持**：focus、blur、select 方法

## 📦 使用方法

### 基础用法

```tsx
import { Input } from 'impressionsunrise';
import 'impressionsunrise/css';

// 基础输入框
<Input placeholder="请输入内容" />

// 不同大小
<Input size="small" placeholder="小尺寸" />
<Input size="middle" placeholder="中等尺寸（默认）" />
<Input size="large" placeholder="大尺寸" />
```

### 前缀后缀

```tsx
// 带图标前缀
<Input
  prefix={<SearchIcon />}
  placeholder="搜索..."
/>

// 带文本后缀
<Input
  suffix="@gmail.com"
  placeholder="请输入邮箱前缀"
/>

// 同时有前缀后缀
<Input
  prefix={<UserIcon />}
  suffix={<span>⌘K</span>}
  placeholder="用户名"
/>
```

### 前置后置标签

```tsx
// URL 输入
<Input
  addonBefore="https://"
  addonAfter=".com"
  placeholder="请输入网址"
/>

// 价格输入
<Input
  addonBefore="¥"
  addonAfter="元"
  type="number"
  placeholder="请输入价格"
/>
```

### 状态和清除

```tsx
// 不同状态
<Input placeholder="正常状态" />
<Input status="warning" placeholder="警告状态" />
<Input status="error" placeholder="错误状态" />
<Input disabled placeholder="禁用状态" />

// 可清除
<Input
  allowClear
  placeholder="可清除的输入框"
  defaultValue="这是一些文本"
/>
```

### 字数统计

```tsx
// 显示字数
<Input
  showCount
  placeholder="显示字数统计"
/>

// 限制最大长度
<Input
  showCount
  maxLength={50}
  placeholder="最多50个字符"
/>
```

### 无边框模式

```tsx
<Input bordered={false} placeholder="无边框输入框" />
```

### 事件处理

```tsx
const handleChange = (e) => {
  console.log("输入值:", e.target.value);
};

const handlePressEnter = (e) => {
  console.log("按下回车:", e.target.value);
};

const handleClear = () => {
  console.log("清除内容");
};

<Input
  placeholder="事件处理示例"
  onChange={handleChange}
  onPressEnter={handlePressEnter}
  onClear={handleClear}
  allowClear
/>;
```

### Ref 使用

```tsx
import { useRef } from "react";
import { Input, InputRef } from "impressionsunrise";

const MyComponent = () => {
  const inputRef = useRef<InputRef>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const selectAll = () => {
    inputRef.current?.select();
  };

  return (
    <div>
      <Input ref={inputRef} placeholder="可编程控制的输入框" />
      <button onClick={focusInput}>聚焦</button>
      <button onClick={selectAll}>全选</button>
    </div>
  );
};
```

## 🎨 自定义样式

Input 组件使用了项目的莫奈印象派色彩系统：

- **主色调**：天空蓝 (#7aa9e9)
- **错误状态**：花朵红 (#f06c9b)
- **警告状态**：日落橙 (#f5b96f)
- **背景色**：雾白色 (#f7f8f9)
- **边框色**：云雾灰 (#cfd8dc)

### 覆盖样式

```css
/* 自定义主题色 */
.input-wrapper-focused {
  border-color: #your-color !important;
  box-shadow: 0 0 0 2px rgba(your-color, 0.12) !important;
}

/* 自定义错误状态 */
.input-wrapper-error {
  border-color: #your-error-color !important;
}
```

## 📱 响应式支持

组件在移动端会自动调整字体大小，确保在不同设备上都有良好的用户体验。

## TypeScript 支持

```tsx
import type { InputProps, InputRef } from "impressionsunrise";

const customInputProps: InputProps = {
  size: "large",
  status: "error",
  placeholder: "自定义输入框",
  maxLength: 100,
  showCount: true,
};

// Ref 类型
const inputRef = useRef<InputRef>(null);
```
