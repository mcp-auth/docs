---
sidebar_label: getIssuer
---

# 函数：getIssuer()

```ts
function getIssuer(config: AuthServerConfig): string;
```

从认证服务器配置中获取发行者 (Issuer) URL。

- 已解析配置：从 `metadata.issuer` 提取
- 发现配置：直接返回 `issuer`

## 参数 {#parameters}

### config {#config}

[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)

## 返回值 {#returns}

`string`
