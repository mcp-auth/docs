---
sidebar_label: MCPAuth
---

# クラス: MCPAuth

mcp-auth ライブラリのメインクラスであり、MCP サーバーにおける認証 (Authentication) と認可 (Authorization) のためのルーターや便利なハンドラーを作成するメソッドを提供します。

## 参照 {#see}

ライブラリやその使い方の詳細は [MCP Auth](https://mcp-auth.dev) をご覧ください。

## 例 {#example}

リモート OIDC プロバイダーとの統合例：

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

// OAuth 2.0 認可サーバーメタデータを処理するルーターをマウント
app.use(mcpAuth.delegatedRouter());

// MCP ルートで Bearer 認証 (Authentication) ハンドラーを使用
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // ここで MCP リクエストを処理
  },
);

// MCP コールバックで認証 (Authentication) 情報を利用
server.tool(
  'add',
  { a: z.number(), b: z.number() },
  async ({ a, b }, { authInfo }) => {
    console.log('Auth Info:', authInfo);
   // ...
  },
);
```

## コンストラクター {#constructors}

### コンストラクター {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

#### パラメーター {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

#### 戻り値 {#returns}

`MCPAuth`

## プロパティ {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

## メソッド {#methods}

### bearerAuth() {#bearerauth}

#### 呼び出しシグネチャ {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer">): RequestHandler;
```

リクエストの `Authorization` ヘッダー内のアクセス トークン (Access token) を検証する Bearer 認証 (Authentication) ハンドラー（Express ミドルウェア）を作成します。

##### パラメーター {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

アクセス トークン (Access token) を検証する関数です。文字列としてアクセス トークン (Access token) を受け取り、検証結果に解決する promise（または値）を返す必要があります。

**参照**

`verifyAccessToken` 関数の型定義については [VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) をご覧ください。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\>

Bearer 認証 (Authentication) ハンドラーのためのオプション設定です。

**参照**

利用可能な設定オプション（`verifyAccessToken` と `issuer` を除く）については [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) をご覧ください。

##### 戻り値 {#returns}

`RequestHandler`

アクセス トークン (Access token) を検証し、検証結果をリクエストオブジェクト（`req.auth`）に追加する Express ミドルウェア関数です。

##### 参照 {#see}

`req.auth`（`AuthInfo`）オブジェクトの実装詳細や拡張型については [handleBearerAuth](/references/js/functions/handleBearerAuth.md) をご覧ください。

#### 呼び出しシグネチャ {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer"> & BearerAuthJwtConfig): RequestHandler;
```

リクエストの `Authorization` ヘッダー内のアクセス トークン (Access token) を、事前定義された検証モードで検証する Bearer 認証 (Authentication) ハンドラー（Express ミドルウェア）を作成します。

`'jwt'` モードでは、認可サーバーの JWKS URI から JWK セットを使用して JWT 検証関数を作成します。

##### パラメーター {#parameters}

###### mode {#mode}

`"jwt"`

アクセス トークン (Access token) の検証モードです。現在は 'jwt' のみサポートされています。

**参照**

利用可能なモードについては [VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) をご覧ください。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\> & [`BearerAuthJwtConfig`](/references/js/type-aliases/BearerAuthJwtConfig.md)

JWT 検証オプションやリモート JWK セットオプションを含む、Bearer 認証 (Authentication) ハンドラーのためのオプション設定です。

**参照**

 - JWT 検証のための設定オプションについては [BearerAuthJwtConfig](/references/js/type-aliases/BearerAuthJwtConfig.md) をご覧ください。
 - 設定オプション（`verifyAccessToken` と `issuer` を除く）については [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) をご覧ください。

##### 戻り値 {#returns}

`RequestHandler`

アクセス トークン (Access token) を検証し、検証結果をリクエストオブジェクト（`req.auth`）に追加する Express ミドルウェア関数です。

##### 参照 {#see}

`req.auth`（`AuthInfo`）オブジェクトの実装詳細や拡張型については [handleBearerAuth](/references/js/functions/handleBearerAuth.md) をご覧ください。

##### 例外 {#throws}

`'jwt'` モード使用時にサーバーメタデータに JWKS URI が提供されていない場合、例外がスローされます。

***

### delegatedRouter() {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

OAuth 2.0 認可サーバーメタデータエンドポイント（`/.well-known/oauth-authorization-server`）を、インスタンスに提供されたメタデータで提供する委譲ルーターを作成します。

#### 戻り値 {#returns}

`Router`

インスタンスに提供されたメタデータで OAuth 2.0 認可サーバーメタデータエンドポイントを提供するルーターです。

#### 例 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // 初期化済みと仮定
app.use(mcpAuth.delegatedRouter());
```
