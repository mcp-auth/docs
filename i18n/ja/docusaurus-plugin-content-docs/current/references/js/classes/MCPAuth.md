---
sidebar_label: MCPAuth
---

# クラス: MCPAuth

mcp-auth ライブラリのメインクラスです。保護されたリソースのための認証 (Authentication) ポリシーを作成するためのファクトリーおよびレジストリとして機能します。

サーバー構成で初期化され、トークンベースの認証 (Authentication) 用の Express ミドルウェアを生成する `bearerAuth` メソッドを提供します。

## 例 {#example}

### `resource server` モードでの利用例 {#usage-in-resource-server-mode}

新しいアプリケーションにはこの方法が推奨されます。

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();

const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
  // `protectedResources` は単一の構成オブジェクトまたはその配列を指定できます。
  protectedResources: [
    {
      metadata: {
        resource: resourceIdentifier,
        authorizationServers: [authServerConfig],
        scopesSupported: ['read:notes', 'write:notes'],
      },
    },
  ],
});

// 保護されたリソースメタデータを処理するルーターをマウント
app.use(mcpAuth.protectedResourceMetadataRouter());

// 設定したリソース用の API エンドポイントを保護
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // このエンドポイントが属するリソースを指定
    audience: resourceIdentifier, // 任意で 'aud' クレームを検証
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    res.json({ notes: [] });
  },
);
```

### `authorization server` モードでのレガシー利用例（非推奨） {#legacy-usage-in-authorization-server-mode-deprecated}

後方互換性のためにサポートされています。

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();
const mcpAuth = new MCPAuth({
  server: await fetchServerConfig(
    'https://auth.logto.io/oidc',
    { type: 'oidc' }
  ),
});

// レガシー認可サーバーメタデータを処理するルーターをマウント
app.use(mcpAuth.delegatedRouter());

// デフォルトポリシーでエンドポイントを保護
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // ここで MCP リクエストを処理
  },
);
```

## コンストラクター {#constructors}

### コンストラクター {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

MCPAuth のインスタンスを作成します。
エラー時にすぐ失敗するよう、全体の構成を事前に検証します。

#### パラメーター {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

認証 (Authentication) 構成。

#### 戻り値 {#returns}

`MCPAuth`

## プロパティ {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

認証 (Authentication) 構成。

## メソッド {#methods}

### bearerAuth() {#bearerauth}

#### 呼び出しシグネチャ {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken">): RequestHandler;
```

リクエストの `Authorization` ヘッダー内の アクセス トークン (Access token) を検証する Bearer 認証 (Authentication) ハンドラー（Express ミドルウェア）を作成します。

##### パラメーター {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

アクセス トークン (Access token) を検証する関数です。文字列として アクセス トークン (Access token) を受け取り、検証結果に解決される promise（または値）を返す必要があります。

**参照**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) で `verifyAccessToken` 関数の型定義を確認できます。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Bearer 認証 (Authentication) ハンドラーのためのオプション構成。

**参照**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) で利用可能な構成オプション（`verifyAccessToken` と `issuer` を除く）を確認できます。

##### 戻り値 {#returns}

`RequestHandler`

アクセス トークン (Access token) を検証し、検証結果をリクエストオブジェクト（`req.auth`）に追加する Express ミドルウェア関数。

##### 参照 {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) で実装詳細および `req.auth`（`AuthInfo`）オブジェクトの拡張型を確認できます。

#### 呼び出しシグネチャ {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

事前定義された検証モードを使用して、リクエストの `Authorization` ヘッダー内の アクセス トークン (Access token) を検証する Bearer 認証 (Authentication) ハンドラー（Express ミドルウェア）を作成します。

`'jwt'` モードでは、認可サーバーの JWKS URI から JWK Set を使って JWT 検証関数を作成します。

##### パラメーター {#parameters}

###### mode {#mode}

`"jwt"`

アクセス トークン (Access token) の検証モード。現在は 'jwt' のみサポートされています。

**参照**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) で利用可能なモードを確認できます。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

JWT 検証オプションやリモート JWK Set オプションを含む、Bearer 認証 (Authentication) ハンドラーのためのオプション構成。

**参照**

 - VerifyJwtConfig で JWT 検証のための構成オプションを確認できます。
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) で利用可能な構成オプション（`verifyAccessToken` と `issuer` を除く）を確認できます。

##### 戻り値 {#returns}

`RequestHandler`

アクセス トークン (Access token) を検証し、検証結果をリクエストオブジェクト（`req.auth`）に追加する Express ミドルウェア関数。

##### 参照 {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) で実装詳細および `req.auth`（`AuthInfo`）オブジェクトの拡張型を確認できます。

##### 例外 {#throws}

`'jwt'` モード使用時にサーバーメタデータに JWKS URI が指定されていない場合にスローされます。

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

インスタンスに提供されたメタデータで、レガシー OAuth 2.0 認可サーバーメタデータエンドポイント
（`/.well-known/oauth-authorization-server`）を提供するための委譲ルーターを作成します。

#### 戻り値 {#returns}

`Router`

インスタンスに提供されたメタデータで OAuth 2.0 認可サーバーメタデータエンドポイントを提供するルーター。

#### 非推奨 {#deprecated}

代わりに [protectedResourceMetadataRouter](/references/js/classes/MCPAuth.md#protectedresourcemetadatarouter) を使用してください。

#### 例 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // 初期化済みと仮定
app.use(mcpAuth.delegatedRouter());
```

#### 例外 {#throws}

`resource server` モードで呼び出された場合にスローされます。

***

### protectedResourceMetadataRouter() {#protectedresourcemetadatarouter}

```ts
protectedResourceMetadataRouter(): Router;
```

設定されたすべてのリソースに対して OAuth 2.0 保護リソースメタデータエンドポイントを提供するルーターを作成します。

このルーターは、構成で指定された各リソース識別子に対して正しい `.well-known` エンドポイントを自動的に作成します。

#### 戻り値 {#returns}

`Router`

OAuth 2.0 保護リソースメタデータエンドポイントを提供するルーター。

#### 例外 {#throws}

`authorization server` モードで呼び出された場合にスローされます。

#### 例 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// mcpAuth が 1 つ以上の `protectedResources` 構成で初期化されていると仮定
const mcpAuth: MCPAuth;
const app = express();

// 構成したリソース識別子に基づき、`/.well-known/oauth-protected-resource/...` でメタデータを提供
app.use(mcpAuth.protectedResourceMetadataRouter());
```
