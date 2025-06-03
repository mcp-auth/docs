---
sidebar_label: MCPAuth
---

# 類別：MCPAuth

mcp-auth 函式庫的主要類別，提供在 MCP 伺服器中建立路由器及實用的驗證 (Authentication) 與授權 (Authorization) 處理器方法。

## 參見 \{#see}

更多有關此函式庫及其用法，請參閱 [MCP Auth](https://mcp-auth.dev)。

## 範例 \{#example}

與遠端 OIDC 提供者整合的範例：

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

// 掛載路由器以處理 OAuth 2.0 授權伺服器中繼資料
app.use(mcpAuth.delegatedRouter());

// 在 MCP 路由上使用 Bearer 驗證 (Authentication) 處理器
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // 在此處理 MCP 請求
  },
);

// 在 MCP 回呼中使用驗證 (Authentication) 資訊
server.tool(
  'add',
  { a: z.number(), b: z.number() },
  async ({ a, b }, { authInfo }) => {
    console.log('Auth Info:', authInfo);
   // ...
  },
);
```

## 建構子 \{#constructors}

### 建構子 \{#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

#### 參數 \{#parameters}

##### config \{#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

#### 回傳值 \{#returns}

`MCPAuth`

## 屬性 \{#properties}

### config \{#config}

```ts
readonly config: MCPAuthConfig;
```

## 方法 \{#methods}

### bearerAuth() \{#bearerauth}

#### 呼叫簽章 \{#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer">): RequestHandler;
```

建立一個 Bearer 驗證 (Authentication) 處理器（Express 中介軟體），用於驗證請求 `Authorization` 標頭中的存取權杖 (Access token)。

##### 參數 \{#parameters}

###### verifyAccessToken \{#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

一個驗證存取權杖 (Access token) 的函式。應接受字串型態的存取權杖，並回傳一個 promise（或值），解析為驗證結果。

**參見**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 以瞭解 `verifyAccessToken` 函式的型別定義。

###### config? \{#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\>

Bearer 驗證 (Authentication) 處理器的選用設定。

**參見**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以瞭解可用的設定選項（不含 `verifyAccessToken` 與 `issuer`）。

##### 回傳值 \{#returns}

`RequestHandler`

一個 Express 中介軟體函式，會驗證存取權杖 (Access token) 並將驗證結果加入請求物件（`req.auth`）。

##### 參見 \{#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) 以瞭解實作細節與 `req.auth`（`AuthInfo`）物件的擴充型別。

#### 呼叫簽章 \{#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer"> & BearerAuthJwtConfig): RequestHandler;
```

建立一個 Bearer 驗證 (Authentication) 處理器（Express 中介軟體），使用預設的驗證模式來驗證請求 `Authorization` 標頭中的存取權杖 (Access token)。

在 `'jwt'` 模式下，處理器會使用授權伺服器 JWKS URI 的 JWK Set 建立 JWT 驗證函式。

##### 參數 \{#parameters}

###### mode \{#mode}

`"jwt"`

存取權杖 (Access token) 的驗證模式。目前僅支援 'jwt'。

**參見**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) 以瞭解可用模式。

###### config? \{#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\> & [`BearerAuthJwtConfig`](/references/js/type-aliases/BearerAuthJwtConfig.md)

Bearer 驗證 (Authentication) 處理器的選用設定，包含 JWT 驗證選項與遠端 JWK set 選項。

**參見**

 - [BearerAuthJwtConfig](/references/js/type-aliases/BearerAuthJwtConfig.md) 以瞭解 JWT 驗證可用設定選項。
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以瞭解可用設定選項（不含 `verifyAccessToken` 與 `issuer`）。

##### 回傳值 \{#returns}

`RequestHandler`

一個 Express 中介軟體函式，會驗證存取權杖 (Access token) 並將驗證結果加入請求物件（`req.auth`）。

##### 參見 \{#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) 以瞭解實作細節與 `req.auth`（`AuthInfo`）物件的擴充型別。

##### 例外拋出 \{#throws}

當使用 `'jwt'` 模式且伺服器中繼資料未提供 JWKS URI 時會拋出例外。

***

### delegatedRouter() \{#delegatedrouter}

```ts
delegatedRouter(): Router;
```

建立一個代理路由器，服務 OAuth 2.0 授權伺服器中繼資料端點
（`/.well-known/oauth-authorization-server`），並提供給此實例的中繼資料。

#### 回傳值 \{#returns}

`Router`

一個路由器，服務 OAuth 2.0 授權伺服器中繼資料端點，並提供給此實例的中繼資料。

#### 範例 \{#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // 假設已初始化
app.use(mcpAuth.delegatedRouter());
```
