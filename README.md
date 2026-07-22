# zhou yu's blog · 个人技术博客

一个基于 **Jekyll + GitHub Pages** 构建的炫酷个人博客，在线地址：

👉 [https://928979883.github.io/](https://928979883.github.io/)

## ✨ 特性

- 🎨 渐变 Hero 头图 + 玻璃拟态导航
- 🌗 浅色 / 深色主题一键切换（跟随系统偏好 + 本地记忆）
- 📊 阅读进度条 + 滚动渐入动画
- 📑 文章自动目录（TOC）侧边栏
- 🔍 站内全文搜索（Simple Jekyll Search）
- 📱 完整响应式，移动端友好
- 🏷️ 标签云 / 文章归档分页
- 📈 访问统计（不蒜子 busuanzi）

## 🛠 本地开发

```bash
bundle install
bundle exec jekyll serve
```

打开 http://localhost:4000 预览。

## 📂 目录结构

```
.
├── _config.yml          # 站点配置
├── _includes/           # 页面片段（导航、Hero、页脚、社交图标等）
├── _layouts/            # 页面模板（default / post / page）
├── _posts/              # 博客文章（Markdown）
├── _sass/               # SCSS 变量与混入
├── _data/nav.yml        # 导航菜单
├── js/                  # 前端脚本（主题切换、进度条、TOC、搜索）
├── images/              # 图片资源
├── style.scss           # 主样式表
└── index.html           # 首页
```

## ✍️ 写文章

在 `_posts/` 下新建 `YYYY-MM-DD-title.md`，头部填写：

```yaml
---
layout: post
title: "文章标题"
date: 2026-07-22
tags: [前端, Vue]
---
```

## 🚀 部署

推送到 `master` 分支后，GitHub Pages 会自动构建部署，无需额外操作。

## 📝 主题来源

原始主题参考 [LOFFER](https://fromendworld.github.io/LOFFER/)，视觉与交互已大幅重写。
