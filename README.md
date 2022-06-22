## 看不到查看远程分支

git remote update origin --prune

## 删除 node_modules

项目目录打开 cmd 执行: rd /s/q node_modules

## 安装公司 openapi:

```
yarn add @infore/openapi -D --registry=http://nexus.infore-robotics.cn/repository/infore-npm-group/

```

## 安装公司 infore

```
yarn add @infore/fabric -D --registry=http://nexus.infore-robotics.cn/repository/infore-npm-group/

```

## React 18 中 useEffect 会运行两次

将严格模式去掉

```jsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// 变为
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

## 保存自动格式化 import 顺序

代码保存后, 顶部的 import 语句会自动排序, 是在 .prettierrc.js 配置的

## 配置 eslint

1. 添加 .eslintrc.js:

2. 安装:

```
yarn add -D @typescript-eslint/parser eslint @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks
```

## 按需加载 antd

1. 安装

```
yarn add -D consola vite-plugin-style-import
```

2. vite.config.ts

```js
import { createStyleImportPlugin } from 'vite-plugin-style-import';
{
  plugins: [
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name: string) => {
            return `antd/es/${name}/style/index`;
          },
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
          '@primary-color': '#3d69fb',
        },
      },
    },
  },
}
```

## Css module 有提示

1. 安装: `yarn add -D typescript-plugin-css-modules`

2. vs code 的 setting.json 添加：

```
{
  "typescript.tsserver.pluginPaths": ["typescript-plugin-css-modules"],
}
```

## 页面跳转

```js
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate({ pathname: '/xxxx/application' });
```

## 提交类型指定为下面其中一个：

- build: 对构建系统或者外部依赖项进行了修改
- ci: 对 CI 配置文件或脚本进行了修改
- docs: 对文档进行了修改
- feat: 增加新的功能
- fix: 修复 bug
- pref: 提高性能的代码更改
- refactor: 既不是修复 bug 也不是增加功能的代码重构
- style: 不影响代码含义的修改，比如空格、格式化、缺失的分号等
- test: 增加确实的测试或者矫正已存在的测试
- update: 不具备以上所有类型，也不清楚什么类型
