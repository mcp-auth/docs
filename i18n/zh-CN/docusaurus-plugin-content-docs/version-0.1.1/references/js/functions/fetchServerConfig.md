---
sidebar_label: fetchServerConfig
---

# 函数：fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

根据发行者 (Issuer) 和授权 (Authorization) 服务器类型获取服务器配置。

此函数会根据服务器类型自动确定 well-known URL，因为 OAuth 和 OpenID Connect 服务器在其元数据端点上有不同的约定。

## 参数 {#parameters}

### issuer {#issuer}

`string`

授权 (Authorization) 服务器的发行者 (Issuer) URL。

### config {#config}

`ServerMetadataConfig`

包含服务器类型和可选转译函数的配置对象。

## 返回值 {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

一个解析为服务器配置的 Promise。

## 参见 {#see}

 - [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) 了解底层实现。
 - [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) 查看 OAuth 2.0 授权 (Authorization) 服务器元数据规范。
 - [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) 查看 OpenID Connect 发现规范。

## 示例 {#example}

```ts
import { fetchServerConfig } from 'mcp-auth';
// 获取 OAuth 服务器配置
// 这将从 `https://auth.logto.io/.well-known/oauth-authorization-server/oauth` 获取元数据
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// 获取 OpenID Connect 服务器配置
// 这将从 `https://auth.logto.io/oidc/.well-known/openid-configuration` 获取元数据
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## 抛出异常 {#throws}

如果获取操作失败。

## 抛出异常 {#throws}

如果服务器元数据无效或不符合 MCP 规范。