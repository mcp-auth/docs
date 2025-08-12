---
sidebar_label: MCPAuth
---

# 類別：MCPAuth

mcp-auth 函式庫的主要類別。它作為工廠與註冊中心，用於建立你受保護資源的驗證 (Authentication) 政策。

初始化時需傳入伺服器設定，並提供 `bearerAuth` 方法，用於產生基於權杖的 Express 中介軟體（middleware）。

## 範例 {#example}

### 在 `resource server` 模式下的用法 {#usage-in-resource-server-mode}

這是新應用程式推薦的做法。

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();

const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
  // `protectedResources` 可以是單一設定物件或其陣列。
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

// 掛載路由以處理受保護資源中繼資料
app.use(mcpAuth.protectedResourceMetadataRouter());

// 保護已設定資源的 API 端點
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // 指定此端點所屬資源
    audience: resourceIdentifier, // 可選，驗證 'aud' 宣告 (Claim)
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    res.json({ notes: [] });
  },
);
```

### 傳統 `authorization server` 模式用法（已棄用） {#legacy-usage-in-authorization-server-mode-deprecated}

此做法為相容舊系統而保留。

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

// 掛載路由以處理舊版授權伺服器中繼資料
app.use(mcpAuth.delegatedRouter());

// 使用預設政策保護端點
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // 在此處理 MCP 請求
  },
);
```

## 建構子 {#constructors}

### 建構子 {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

建立 MCPAuth 實例。
會預先驗證整份設定，若有錯誤可及早失敗。

#### 參數 {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

驗證 (Authentication) 設定。

#### 回傳 {#returns}

`MCPAuth`

## 屬性 {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

驗證 (Authentication) 設定。

## 方法 {#methods}

### bearerAuth() {#bearerauth}

#### 呼叫簽章 {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken">): RequestHandler;
```

建立一個 Bearer 權杖驗證處理器（Express 中介軟體），用於驗證請求的 `Authorization` 標頭中的存取權杖 (Access token)。

##### 參數 {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

驗證存取權杖 (Access token) 的函式。應接受字串型態的權杖並回傳一個 promise（或值），解析為驗證結果。

**參見**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 以取得 `verifyAccessToken` 函式的型別定義。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Bearer 權杖驗證處理器的選用設定。

**參見**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以取得可用設定選項（不含 `verifyAccessToken` 與 `issuer`）。

##### 回傳 {#returns}

`RequestHandler`

一個 Express 中介軟體函式，會驗證存取權杖 (Access token) 並將驗證結果加入請求物件（`req.auth`）。

##### 參見 {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) 以瞭解實作細節與 `req.auth`（`AuthInfo`）物件的擴充型別。

#### 呼叫簽章 {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

建立一個 Bearer 權杖驗證處理器（Express 中介軟體），使用預設驗證模式驗證請求 `Authorization` 標頭中的存取權杖 (Access token)。

在 `'jwt'` 模式下，處理器會使用授權伺服器 JWKS URI 的 JWK Set 建立 JWT 驗證函式。

##### 參數 {#parameters}

###### mode {#mode}

`"jwt"`

存取權杖 (Access token) 的驗證模式。目前僅支援 'jwt'。

**參見**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) 以取得可用模式。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

Bearer 權杖驗證處理器的選用設定，包含 JWT 驗證選項與遠端 JWK Set 選項。

**參見**

 - VerifyJwtConfig 以取得 JWT 驗證可用設定選項。
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以取得可用設定選項（不含 `verifyAccessToken` 與 `issuer`）。

##### 回傳 {#returns}

`RequestHandler`

一個 Express 中介軟體函式，會驗證存取權杖 (Access token) 並將驗證結果加入請求物件（`req.auth`）。

##### 參見 {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) 以瞭解實作細節與 `req.auth`（`AuthInfo`）物件的擴充型別。

##### 例外 {#throws}

若在 `'jwt'` 模式下伺服器中繼資料未提供 JWKS URI，則會拋出例外。

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

建立一個代理路由器，用於提供舊版 OAuth 2.0 授權伺服器中繼資料端點
（`/.well-known/oauth-authorization-server`），並使用實例提供的中繼資料。

#### 回傳 {#returns}

`Router`

一個路由器，會以實例提供的中繼資料服務 OAuth 2.0 授權伺服器中繼資料端點。

#### 已棄用 {#deprecated}

請改用 [protectedResourceMetadataRouter](/references/js/classes/MCPAuth.md#protectedresourcemetadatarouter)。

#### 範例 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // 假設已初始化
app.use(mcpAuth.delegatedRouter());
```

#### 例外 {#throws}

若於 `resource server` 模式下呼叫會拋出例外。

***

### protectedResourceMetadataRouter() {#protectedresourcemetadatarouter}

```ts
protectedResourceMetadataRouter(): Router;
```

建立一個路由器，為所有已設定資源提供 OAuth 2.0 受保護資源中繼資料端點。

此路由器會根據你設定的資源識別符，自動建立正確的 `.well-known` 端點。

#### 回傳 {#returns}

`Router`

一個路由器，會服務 OAuth 2.0 受保護資源中繼資料端點。

#### 例外 {#throws}

若於 `authorization server` 模式下呼叫會拋出例外。

#### 範例 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// 假設 mcpAuth 已以一個或多個 `protectedResources` 設定初始化
const mcpAuth: MCPAuth;
const app = express();

// 這會根據你的資源識別符，在 `/.well-known/oauth-protected-resource/...` 提供中繼資料
app.use(mcpAuth.protectedResourceMetadataRouter());
```
