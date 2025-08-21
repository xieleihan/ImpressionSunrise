import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ImpressionSunrise',
      fileName: (format) => `impression-sunrise.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'impression-sunrise.css';
          return assetInfo.name!;
        }
      }
    },
    sourcemap: true, // 输出单独的 source 文件
    minify: 'terser', // 使用 terser 进行代码压缩
  }
})


