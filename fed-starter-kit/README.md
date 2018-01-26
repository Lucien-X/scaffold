# 前端开发入门工具包（FED Starter Kit）

作者：Lucien-X (正沧)

最后修改时间：2018-01-27  01:50



## 是什么？

前端开发的脚手架，包含了我个人在前端领域积累的最佳实践



## 为什么？

距离Pjax元年（2006，Gmail发布），已经过去了12年。

新时代的前端同学们，迫切需要一个开箱即用的开发环境，来快速熟悉语言和工具特性，投入生产。



## 怎么用？

开始开发：

```bash
npm run dev
```

打包代码：

```bash
npm run build
```



## 怎么样？

### 技术栈：

| 名称      | 文档地址                                     |
| ------- | ---------------------------------------- |
| Webpack | https://doc.webpack-china.org/guides/    |
| React   | https://doc.react-china.org/docs/hello-world.html |
| ES6     | http://es6.ruanyifeng.com/#docs/intro    |
| Sass    | https://www.sass.hk/guide/               |

### 功能特性：

| 特性                      | 实现方式                             |
| ----------------------- | -------------------------------- |
| 编译 jsx、js(ES6)、scss 等资源 | webpack babel-loader sass-loader |
| 自动引入静态资源到相应 HTML 页面     | html-webpack-plugin              |
| 实时编译和刷新浏览器              | webpack-dev-server HMR           |
| 自动给 css 添加浏览器内核前缀       | postcss-loader  autoprefixer     |
| 按需打包合并 js、css           | ExtractTextPlugin等               |
| 压缩 js、css、html          | uglifyjs-webpack-plugin等         |
| 图片路径处理、压缩、CssSprite     | url-loader等                      |
| 跨平台CSS中文字体解决方案          | fonts.css                        |
| 浏览器默认样式统一               | normalize.css                    |
| 对文件使用 hash 命名，做强缓存      | webpack配置                        |
| 真的很严格的语法检查              | eslint-config-airbnb             |
| 本地接口模拟服务【暂未开发】          | express                          |
| 发布到远端机器【暂未开发】           | ftp                              |

