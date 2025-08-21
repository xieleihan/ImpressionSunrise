import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/  
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      // 明确指定入口文件
      entryRoot: resolve(__dirname, 'src'),
      // 只包含 src 目录下的文件
      include: ['src/**/*.{ts,tsx}'],
      // 明确排除所有不需要的文件和目录
      exclude: [
        'node_modules/**/*',
        'dist/**/*',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/*.stories.{ts,tsx}',
        'vite.config.ts'
      ],
      // 确保只处理指定的文件
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json')
    })
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
          return assetInfo.name || 'asset';
        },
        exports: 'named'
      }
    },
    sourcemap: true,
    minify: 'esbuild' // 先使用 esbuild，避免 terser 依赖问题
  }
})