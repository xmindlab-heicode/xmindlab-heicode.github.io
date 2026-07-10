# Heicode Docs

Heicode 产品文档站，基于 [Fumadocs](https://fumadocs.dev)（Next.js + MDX）构建，静态导出后部署到 Azure Static Web Apps（资源名 `heicodedocs`）。

内容源在 `content/docs/`，按栏目分目录，每个目录的 `meta.json` 控制导航顺序。

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:3000。

## 构建

```bash
npm run build
```

`next.config.mjs` 中 `output: 'export'` 会在 `out/` 目录生成静态站点，对应 CI 中的 `output_location`。

## 部署

`.github/workflows/azure-static-web-apps-ambitious-sky-06fd9a300.yml` 在 push/PR 到 `main` 时自动构建并部署到 Azure Static Web Apps。
