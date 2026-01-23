---
sidebar_label: MCPAuth
---

# 類別：MCPAuth

mcp-auth 函式庫的主要類別。它作為工廠與註冊中心，用於建立受保護資源的驗證 (Authentication) 原則。

初始化時需傳入伺服器設定，並提供 `bearerAuth` 方法，用於產生基於權杖的 Express 中介軟體（middleware）。

## 範例 {#example}

### 在 `資源伺服器 (resource server)` 模式下的用法 {#usage-in-resource-server-mode}

這是新應用程式推薦的方式。

#### 選項 1：Discovery 設定（建議用於 edge 執行環境） {#option-1-discovery-config-recommended-for-edge-runtimes}

當你希望隨需擷取 metadata 時使用。這對於如 Cloudflare Workers 這類不允許頂層 async fetch 的 edge 執行環境特別有用。

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const resourceIdentifier = 'https://api.example.com/notes';

const mcpAuth = new MCPAuth({
  protectedResources: [
    {
      metadata: {
        resource: resourceIdentifier,
        // 只需傳入 issuer 與 type，metadata 會在首次請求時自動擷取
        authorizationServers: [{ issuer: 'https://auth.logto.io/oidc', type: 'oidc' }],
        scopesSupported: ['read:notes', 'write:notes'],
      },
    },
  ],
});
```

#### 選項 2：Resolved 設定（預先擷取 metadata） {#option-2-resolved-config-pre-fetched-metadata}

當你希望在啟動時就擷取並驗證 metadata 時使用。

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();
const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
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
```

#### 使用中介軟體 {#using-the-middleware}

```ts
// 掛載路由以處理 Protected Resource Metadata
app.use(mcpAuth.protectedResourceMetadataRouter());

// 保護已設定資源的 API 端點
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // 指定此端點所屬資源
    audience: resourceIdentifier, // 可選，驗證 'aud' 宣告 (claim)
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    res.json({ notes: [] });
  },
);
```

### 傳統 `授權伺服器 (authorization server)` 模式用法（已棄用） {#legacy-usage-in-authorization-server-mode-deprecated}

此方式為相容舊版而保留。

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth = new MCPAuth({
  // Discovery 設定 - metadata 隨需擷取
  server: { issuer: 'https://auth.logto.io/oidc', type: 'oidc' },
});

// 掛載路由以處理舊版授權伺服器 Metadata
app.use(mcpAuth.delegatedRouter());

// 使用預設原則保護端點
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
會在初始化時即驗證整份設定，錯誤會立即拋出。

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

建立一個 Bearer 權杖驗證處理器（Express 中介軟體），用於驗證請求 `Authorization` 標頭中的存取權杖 (Access token)。

##### 參數 {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

驗證存取權杖 (Access token) 的函式。應接受字串型態的權杖並回傳 promise（或值），解析為驗證結果。

**參見**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 以取得 `verifyAccessToken` 函式型別定義。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Bearer 權杖驗證處理器的可選設定。

**參見**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以取得可用設定選項（不含 `verifyAccessToken` 與 `issuer`）。

##### 回傳 {#returns}

`RequestHandler`

一個 Express 中介軟體函式，會驗證存取權杖 (Access token) 並將驗證結果加到請求物件 (`req.auth`) 上。

##### 參見 {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) 以瞭解實作細節與 `req.auth`（`AuthInfo`）物件的擴充型別。

#### 呼叫簽章 {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

建立一個 Bearer 權杖驗證處理器（Express 中介軟體），使用預設驗證模式驗證請求 `Authorization` 標頭中的存取權杖 (Access token)。

在 `'jwt'` 模式下，處理器會使用授權伺服器的 JWKS URI 建立 JWT 驗證函式。

##### 參數 {#parameters}

###### mode {#mode}

`"jwt"`

存取權杖 (Access token) 的驗證模式。目前僅支援 'jwt'。

**參見**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) 以取得可用模式。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

Bearer 權杖驗證處理器的可選設定，包含 JWT 驗證選項與遠端 JWK set 選項。

**參見**

 - VerifyJwtConfig 以取得 JWT 驗證可用設定選項。
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以取得可用設定選項（不含 `verifyAccessToken` 與 `issuer`）。

##### 回傳 {#returns}

`RequestHandler`

一個 Express 中介軟體函式，會驗證存取權杖 (Access token) 並將驗證結果加到請求物件 (`req.auth`) 上。

##### 參見 {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) 以瞭解實作細節與 `req.auth`（`AuthInfo`）物件的擴充型別。

##### 拋出 {#throws}

若在 `'jwt'` 模式下伺服器 metadata 未提供 JWKS URI，則會拋出錯誤。

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

建立一個 delegated router，用於提供舊版 OAuth 2.0 授權伺服器 (Authorization Server) Metadata 端點
（`/.well-known/oauth-authorization-server`），內容來自實例設定的 metadata。

#### 回傳 {#returns}

`Router`

一個提供 OAuth 2.0 授權伺服器 Metadata 端點的路由器，內容來自實例設定的 metadata。

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

#### 拋出 {#throws}

若於 `資源伺服器 (resource server)` 模式下呼叫會拋出錯誤。

***

### protectedResourceMetadataRouter() {#protectedresourcemetadatarouter}

```ts
protectedResourceMetadataRouter(): Router;
```

建立一個路由器，為所有已設定資源提供 OAuth 2.0 Protected Resource Metadata 端點。

此路由器會根據你設定的資源識別符，自動建立正確的 `.well-known` 端點。

#### 回傳 {#returns}

`Router`

一個提供 OAuth 2.0 Protected Resource Metadata 端點的路由器。

#### 拋出 {#throws}

若於 `授權伺服器 (authorization server)` 模式下呼叫會拋出錯誤。

#### 範例 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// 假設 mcpAuth 已以一個或多個 `protectedResources` 設定初始化
const mcpAuth: MCPAuth;
const app = express();

// 這會根據你的資源識別符，在 `/.well-known/oauth-protected-resource/...` 提供 metadata
app.use(mcpAuth.protectedResourceMetadataRouter());
```
