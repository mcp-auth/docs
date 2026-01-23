---
sidebar_label: fetchServerConfig
---

# 関数: fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<ResolvedAuthServerConfig>;
```

発行者 (Issuer) と認可サーバーの種類に基づいてサーバー構成を取得します。

この関数はサーバーの種類に応じて自動的に well-known URL を判別します。OAuth および OpenID Connect サーバーはメタデータエンドポイントの規約が異なります。

## パラメーター {#parameters}

### issuer {#issuer}

`string`

認可サーバーの発行者 (Issuer) URL。

### config {#config}

`ServerMetadataConfig`

サーバーの種類やオプションのトランスパイル関数を含む設定オブジェクト。

## 戻り値 {#returns}

`Promise`\<[`ResolvedAuthServerConfig`](/references/js/type-aliases/ResolvedAuthServerConfig.md)\>

取得したメタデータを含む静的なサーバー構成を解決する Promise。

## 参照 {#see}

 - 基本実装については [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) を参照してください。
 - OAuth 2.0 認可サーバーメタデータ仕様については [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) を参照してください。
 - OpenID Connect Discovery 仕様については [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) を参照してください。

## 例 {#example}

```ts
import { fetchServerConfig } from 'mcp-auth';
// OAuth サーバー構成の取得
// これは `https://auth.logto.io/.well-known/oauth-authorization-server/oauth` からメタデータを取得します
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// OpenID Connect サーバー構成の取得
// これは `https://auth.logto.io/oidc/.well-known/openid-configuration` からメタデータを取得します
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## 例外 {#throws}

フェッチ操作に失敗した場合にスローされます。

## 例外 {#throws}

サーバーメタデータが無効、または MCP 仕様と一致しない場合にスローされます。
