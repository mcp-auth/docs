---
sidebar_label: fetchServerConfig
---

# 函式：fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

根據簽發者 (Issuer) 與授權伺服器類型，取得伺服器設定。

此函式會根據伺服器類型自動判斷 well-known URL，因為 OAuth 及 OpenID Connect 伺服器的 metadata endpoint 慣例不同。

## 參數 {#parameters}

### issuer {#issuer}

`string`

授權伺服器的簽發者 (Issuer) URL。

### config {#config}

`ServerMetadataConfig`

包含伺服器類型與可選轉換函式的設定物件。

## 回傳值 {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

一個 promise，解析後會得到伺服器設定。

## 參見 {#see}

 - [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) 以瞭解底層實作。
 - [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) 參考 OAuth 2.0 授權伺服器 metadata 規範。
 - [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) 參考 OpenID Connect Discovery 規範。

## 範例 {#example}

```ts
import { fetchServerConfig } from 'mcp-auth';
// 取得 OAuth 伺服器設定
// 這會從 `https://auth.logto.io/.well-known/oauth-authorization-server/oauth` 取得 metadata
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// 取得 OpenID Connect 伺服器設定
// 這會從 `https://auth.logto.io/oidc/.well-known/openid-configuration` 取得 metadata
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## 例外 {#throws}

若 fetch 操作失敗則會拋出例外。

## 例外 {#throws}

若伺服器 metadata 無效或不符合 MCP 規範則會拋出例外。
