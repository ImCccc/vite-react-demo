import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createStyleImportPlugin } from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    react(),

    createStyleImportPlugin({
      libs: [
        {
          esModule: true,
          libraryName: 'antd',
          resolveStyle: (name: string) => `antd/es/${name}/style/index`,
        },
      ],
    }),
  ],

  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: {
          '@primary-color': '#213c9e',
        },
      },
    },
  },

  // 别名
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  // 代理
  server: {
    proxy: {
      '/rpc': {
        target: 'https://smart-cloud-web.dev.inrobot.cloud',
        changeOrigin: true,
      },
    },
  },
});
