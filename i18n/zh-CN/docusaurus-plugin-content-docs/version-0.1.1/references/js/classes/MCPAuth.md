---
sidebar_label: MCPAuth
---

# 类：MCPAuth

mcp-auth 库的主类，提供在 MCP 服务器中创建路由器以及用于认证 (Authentication) 和授权 (Authorization) 的实用处理器的方法。

## 参见 {#see}

更多关于该库及其用法的信息，请参见 [MCP Auth](https://mcp-auth.dev)。

## 示例 {#example}

与远程 OIDC 提供方集成的示例：

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

// 挂载路由以处理 OAuth 2.0 授权 (Authorization) 服务器元数据
app.use(mcpAuth.delegatedRouter());

// 在 MCP 路由中使用 Bearer 认证 (Authentication) 处理器
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // 在这里处理 MCP 请求
  },
);

// 在 MCP 回调中使用认证 (Authentication) 信息
server.tool(
  'add',
  { a: z.number(), b: z.number() },
  async ({ a, b }, { authInfo }) => {
    console.log('Auth Info:', authInfo);
   // ...
  },
);
```

## 构造函数 {#constructors}

### 构造函数 {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

#### 参数 {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

#### 返回值 {#returns}

`MCPAuth`

## 属性 {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

## 方法 {#methods}

### bearerAuth() {#bearerauth}

#### 调用签名 {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer">): RequestHandler;
```

创建一个 Bearer 认证 (Authentication) 处理器（Express 中间件），用于验证请求的 `Authorization` 头中的访问令牌 (Access token)。

##### 参数 {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

一个用于验证访问令牌 (Access token) 的函数。它应接受访问令牌 (Access token) 字符串，并返回一个 promise（或值），解析为验证结果。

**参见**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 以获取 `verifyAccessToken` 函数的类型定义。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\>

Bearer 认证 (Authentication) 处理器的可选配置。

**参见**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以获取可用的配置选项（不包括 `verifyAccessToken` 和 `issuer`）。

##### 返回值 {#returns}

`RequestHandler`

一个 Express 中间件函数，用于验证访问令牌 (Access token) 并将验证结果添加到请求对象（`req.auth`）。

##### 参见 {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) 以了解实现细节以及 `req.auth`（`AuthInfo`）对象的扩展类型。

#### 调用签名 {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer"> & BearerAuthJwtConfig): RequestHandler;
```

创建一个 Bearer 认证 (Authentication) 处理器（Express 中间件），使用预定义的验证模式，验证请求的 `Authorization` 头中的访问令牌 (Access token)。

在 `'jwt'` 模式下，处理器将使用授权 (Authorization) 服务器的 JWKS URI 创建 JWT 验证函数。

##### 参数 {#parameters}

###### mode {#mode}

`"jwt"`

访问令牌 (Access token) 的验证模式。目前仅支持 'jwt'。

**参见**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) 以获取可用模式。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\> & [`BearerAuthJwtConfig`](/references/js/type-aliases/BearerAuthJwtConfig.md)

Bearer 认证 (Authentication) 处理器的可选配置，包括 JWT 验证选项和远程 JWK 集选项。

**参见**

 - [BearerAuthJwtConfig](/references/js/type-aliases/BearerAuthJwtConfig.md) 以获取 JWT 验证的可用配置选项。
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以获取可用的配置选项（不包括 `verifyAccessToken` 和 `issuer`）。

##### 返回值 {#returns}

`RequestHandler`

一个 Express 中间件函数，用于验证访问令牌 (Access token) 并将验证结果添加到请求对象（`req.auth`）。

##### 参见 {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) 以了解实现细节以及 `req.auth`（`AuthInfo`）对象的扩展类型。

##### 抛出异常 {#throws}

当在 `'jwt'` 模式下，服务器元数据中未提供 JWKS URI 时会抛出异常。

***

### delegatedRouter() {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

创建一个委托路由器，服务于 OAuth 2.0 授权 (Authorization) 服务器元数据端点
(`/.well-known/oauth-authorization-server`)，并使用实例提供的元数据。

#### 返回值 {#returns}

`Router`

一个路由器，服务于 OAuth 2.0 授权 (Authorization) 服务器元数据端点，并使用实例提供的元数据。

#### 示例 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // 假设已初始化
app.use(mcpAuth.delegatedRouter());
```
