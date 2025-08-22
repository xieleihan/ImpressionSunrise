# ImpressionSunrise

一个现代化的 React 组件库，包含常用的 UI 组件。

## 安装

```bash
npm install impressionsunrise
```

## 使用方法

### 基本使用

```tsx
import { Button, Loading, Waterfall } from "impressionsunrise";
// 样式导入 - 推荐使用以下任一方式：
import "impressionsunrise/css";
// 或者
// import 'impressionsunrise/style.css';

function App() {
  return (
    <div>
      <Button type="primary" size="middle">
        点击我
      </Button>

      <Loading size={40} tip="加载中..." />

      <Input placeholder="请输入内容" allowClear showCount maxLength={100} />

      <Waterfall
        columns={3}
        gap={10}
        data={[
          { src: "image1.jpg", type: "image", alt: "图片1" },
          {
            src: "video1.mp4",
            type: "video",
            poster: "poster1.jpg",
            alt: "视频1",
          },
        ]}
      />
    </div>
  );
}
```

### TypeScript 支持

```tsx
import type {
  ButtonProps,
  InputProps,
  InputRef,
  LoadingProps,
  WaterfallProps,
  MediaItem,
} from "impressionsunrise";

const myButtonProps: ButtonProps = {
  type: "primary",
  size: "large",
  children: "My Button",
};

const myInputProps: InputProps = {
  size: "large",
  status: "error",
  placeholder: "请输入内容",
  allowClear: true,
  showCount: true,
  maxLength: 100,
};
```

## 组件

### Button 按钮

- **Props**: `ButtonProps`
- **类型**: `default` | `primary` | `dashed` | `text` | `link`
- **大小**: `small` | `middle` | `large`
- **形状**: `default` | `circle` | `round`
- **特性**: 支持危险模式、幽灵模式、加载状态、禁用状态、块级布局

### Input 输入框

- **Props**: `InputProps`
- **大小**: `small` | `middle` | `large`
- **状态**: `error` | `warning`
- **功能**: 前缀后缀、清除、字数统计、前置后置标签

### Loading 加载器

- **Props**: `LoadingProps`
- **类型**: `default` | `circle` | `spin`
- **可自定义颜色数组、大小、提示文本**

### Waterfall 瀑布流

- **Props**: `WaterfallProps`
- **支持图片和视频**
- **可自定义列数、间距**
- **数据格式**: `MediaItem[]`

## 重要提醒

⚠️ **样式导入**: 使用组件前，请确保导入样式文件：

```tsx
// 推荐方式 1
import "impressionsunrise/css";

// 推荐方式 2
import "impressionsunrise/style.css";
```

或者在你的 CSS 文件中：

```css
@import "impressionsunrise/css";
```

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
