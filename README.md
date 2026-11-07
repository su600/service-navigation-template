# 服务导航示例

一个可自定义的静态服务导航页模板，包含搜索、分组筛选、响应式卡片布局和基础 PWA 离线体验。

## 文件

- `index.html`：导航页及客户端搜索、筛选逻辑。
- `manifest.webmanifest`：PWA 安装信息。
- `sw.js`：只缓存通用离线页、manifest 和图标，不缓存页面数据或 API。
- `offline.html`：离线提示页。
- `icons/`：PWA 安装图标。

本仓库是**完全脱敏的示例模板**：使用通用项目名称和 `example.com` 示例地址，不包含真实 IP、真实服务域名、服务截图、认证后端、凭据或服务器配置。卡片链接需要替换为你自己的地址后才可用于真实导航。

## 本地预览

可用任意静态 HTTP 服务预览，例如：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000/`。浏览器只在 HTTPS 或 localhost 等安全上下文中启用 Service Worker；部署到公开站点时请使用 HTTPS。

---

> 由 **Pi coding agent** 使用 **gpt-6-luna** 生成 · 2026-11-07 17:47 Asia/Shanghai
