# 使用示例

## 完整的使用示例

### 1. React 项目中使用

````tsx
// App.tsx
import React from "re// pages/_app.```css
/* 你的自定义样式文件 */
@import 'impressionsunrise/css';

/* 覆盖默认样式 */ app/layout.tsx
import 'impressionsunrise/css';t";
import { Button, Loading, Waterfall } from "impressionsunrise";
// ⚠️ 重要：必须导入样式文件 - 使用以下任一方式
import "impressionsunrise/css";
// 或者: import "impressionsunrise/style.css";

function App() {
  const waterfallData = [
    {
      src: "https://picsum.photos/300/400",
      type: "image" as const,
      alt: "随机图片1",
    },
    {
      src: "https://picsum.photos/300/600",
      type: "image" as const,
      alt: "随机图片2",
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      type: "video" as const,
      poster: "https://picsum.photos/300/200",
      alt: "示例视频",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>ImpressionSunrise 组件库示例</h1>

      {/* 按钮组件 */}
      <section>
        <h2>按钮组件</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" size="small">
            小按钮
          </Button>
          <Button variant="secondary" size="medium">
            中按钮
          </Button>
          <Button variant="success" size="large">
            大按钮
          </Button>
          <Button variant="danger" disabled>
            禁用按钮
          </Button>
        </div>
      </section>

      {/* 加载组件 */}
      <section style={{ marginTop: "40px" }}>
        <h2>加载组件</h2>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Loading size={40} tip="默认加载" LoadingType="default" />
          <Loading size={40} tip="圆形加载" LoadingType="circle" />
          <Loading size={40} tip="旋转加载" LoadingType="spin" />
        </div>
      </section>

      {/* 瀑布流组件 */}
      <section style={{ marginTop: "40px" }}>
        <h2>瀑布流组件</h2>
        <Waterfall
          columns={3}
          gap={15}
          data={waterfallData}
          classNames="my-waterfall"
        />
      </section>
    </div>
  );
}

export default App;
````

### 2. Next.js 项目中使用

```tsx
// pages/_app.tsx 或 app/layout.tsx
import "impressionsunrise/dist/impressionsunrise.css";

// 然后在组件中正常使用
import { Button } from "impressionsunrise";

function MyComponent() {
  return <Button variant="primary">Hello</Button>;
}
```

### 3. 样式自定义

```css
/* 你的自定义样式文件 */
@import "impressionsunrise/dist/impressionsunrise.css";

/* 覆盖默认样式 */
.btn-primary {
  background-color: #your-color !important;
}

.loading-container .loading-tip {
  color: #your-text-color !important;
}
```

## 常见问题

### Q: 为什么组件没有样式？

A: 需要手动导入样式文件：`import 'impressionsunrise/css';` 或 `import 'impressionsunrise/style.css';`

### Q: TypeScript 类型提示不工作？

A: 确保导入了类型：`import type { ButtonProps } from 'impressionsunrise';`

### Q: 瀑布流图片不显示？

A: 检查图片链接是否有效，或者查看浏览器控制台的错误信息。

### Q: 如何自定义主题？

A: 可以通过 CSS 变量或直接覆盖 CSS 类来自定义样式。
