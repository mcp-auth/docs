---
sidebar_label: fetchServerConfigByWellKnownUrl
---

# 函数：fetchServerConfigByWellKnownUrl()

```ts
function fetchServerConfigByWellKnownUrl(wellKnownUrl: string | URL, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

从提供的 well-known URL 获取服务器配置，并根据 MCP 规范进行校验。

如果服务器元数据不符合预期的 schema，但你确定它是兼容的，你可以定义一个 `transpileData` 函数，将元数据转换为预期格式。

## 参数 {#parameters}

### wellKnownUrl {#wellknownurl}

用于获取服务器配置的 well-known URL。可以是字符串或 URL 对象。

`string` | `URL`

### config {#config}

`ServerMetadataConfig`

包含服务器类型和可选 transpile 函数的配置对象。

## 返回值 {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

一个解析为服务器配置的 Promise。

## 抛出异常 {#throws}

如果获取操作失败，则抛出异常。

## 抛出异常 {#throws}

如果服务器元数据无效或不符合 MCP 规范，则抛出异常。
