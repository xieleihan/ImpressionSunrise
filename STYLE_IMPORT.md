# 样式导入说明

## 问题解决

如果你遇到了 `Module not found: Error: Can't resolve 'impressionsunrise'` 的错误，请按照以下步骤操作：

## 正确的导入方式

### ✅ 推荐方式

```tsx
import { Button, Loading, Waterfall } from "impressionsunrise";
// 样式导入 - 选择以下任一方式：
import "impressionsunrise/css";
// 或者
import "impressionsunrise/style.css";
```

### ❌ 错误方式（不要使用）

```tsx
// 这种方式会报错！
import "impressionsunrise/dist/impressionsunrise.css";
```

## 验证安装

1. 安装组件库：

```bash
npm install impressionsunrise@latest
```

2. 在你的 React 项目中使用：

```tsx
import React from "react";
import { Button } from "impressionsunrise";
import "impressionsunrise/css"; // 重要！

function App() {
  return (
    <div>
      <Button variant="primary">测试按钮</Button>
    </div>
  );
}

export default App;
```

## 支持的导入路径

以下样式导入路径都是有效的：

1. `import 'impressionsunrise/css'` ✅ (推荐)
2. `import 'impressionsunrise/style.css'` ✅ (推荐)
3. `import 'impressionsunrise/dist/impressionsunrise.css'` ✅ (完整路径)

## 如果仍有问题

1. 确保安装了最新版本：`npm install impressionsunrise@latest`
2. 清除 node_modules 和 package-lock.json，重新安装
3. 重启开发服务器

## Next.js 项目

在 Next.js 项目中，建议在 `_app.tsx` 或 `layout.tsx` 中导入样式：

```tsx
// pages/_app.tsx (Pages Router)
import "impressionsunrise/css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

```tsx
// app/layout.tsx (App Router)
import "impressionsunrise/css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```
