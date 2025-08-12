---
sidebar_label: MCPAuth
---

# 类：MCPAuth

mcp-auth 库的主类。它作为工厂和注册中心，用于为你的受保护资源创建认证 (Authentication) 策略。

它通过你的服务器配置进行初始化，并提供 `bearerAuth` 方法，用于生成基于令牌的 Express 中间件认证 (Authentication)。

## 示例 {#example}

### 在 `resource server` 模式下的用法 {#usage-in-resource-server-mode}

这是新应用推荐的方式。

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();

const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
  // `protectedResources` 可以是单个配置对象，也可以是对象数组。
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

// 挂载路由以处理受保护资源元数据
app.use(mcpAuth.protectedResourceMetadataRouter());

// 为已配置资源保护 API 端点
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // 指定该端点属于哪个资源
    audience: resourceIdentifier, // 可选，校验 'aud' 声明
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    res.json({ notes: [] });
  },
);
```

### 传统 `authorization server` 模式用法（已弃用） {#legacy-usage-in-authorization-server-mode-deprecated}

此方式为向后兼容而保留。

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

// 挂载路由以处理传统授权 (Authorization) 服务器元数据
app.use(mcpAuth.delegatedRouter());

// 使用默认策略保护端点
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // 在这里处理 MCP 请求
  },
);
```

## 构造函数 {#constructors}

### 构造函数 {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

创建 MCPAuth 的实例。
它会提前验证整个配置，以便在出错时快速失败。

#### 参数 {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

认证 (Authentication) 配置。

#### 返回值 {#returns}

`MCPAuth`

## 属性 {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

认证 (Authentication) 配置。

## 方法 {#methods}

### bearerAuth() {#bearerauth}

#### 调用签名 {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken">): RequestHandler;
```

创建一个 Bearer 认证 (Authentication) 处理器（Express 中间件），用于验证请求中 `Authorization` 头部的访问令牌 (Access token)。

##### 参数 {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

用于验证访问令牌 (Access token) 的函数。它应接受访问令牌 (Access token) 字符串，并返回一个 promise（或值），解析为验证结果。

**参见**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 以获取 `verifyAccessToken` 函数的类型定义。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Bearer 认证 (Authentication) 处理器的可选配置。

**参见**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以获取可用的配置选项（不包括 `verifyAccessToken` 和 `issuer`）。

##### 返回值 {#returns}

`RequestHandler`

一个 Express 中间件函数，用于验证访问令牌 (Access token) 并将验证结果添加到请求对象（`req.auth`）。

##### 参见 {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) 以了解实现细节及 `req.auth`（`AuthInfo`）对象的扩展类型。

#### 调用签名 {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

创建一个 Bearer 认证 (Authentication) 处理器（Express 中间件），使用预定义的验证模式验证请求中 `Authorization` 头部的访问令牌 (Access token)。

在 `'jwt'` 模式下，处理器将使用授权 (Authorization) 服务器的 JWKS URI 创建 JWT 验证函数。

##### 参数 {#parameters}

###### mode {#mode}

`"jwt"`

访问令牌 (Access token) 的验证模式。目前仅支持 'jwt'。

**参见**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) 以获取可用模式。

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

Bearer 认证 (Authentication) 处理器的可选配置，包括 JWT 验证选项和远程 JWK set 选项。

**参见**

 - VerifyJwtConfig 以获取 JWT 验证的可用配置选项。
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以获取可用的配置选项（不包括 `verifyAccessToken` 和 `issuer`）。

##### 返回值 {#returns}

`RequestHandler`

一个 Express 中间件函数，用于验证访问令牌 (Access token) 并将验证结果添加到请求对象（`req.auth`）。

##### 参见 {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) 以了解实现细节及 `req.auth`（`AuthInfo`）对象的扩展类型。

##### 抛出 {#throws}

当在 `'jwt'` 模式下，服务器元数据未提供 JWKS URI 时抛出。

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

创建一个用于服务传统 OAuth 2.0 授权 (Authorization) 服务器元数据端点（`/.well-known/oauth-authorization-server`）的委托路由器，使用实例中提供的元数据。

#### 返回值 {#returns}

`Router`

用于服务 OAuth 2.0 授权 (Authorization) 服务器元数据端点的路由器，使用实例中提供的元数据。

#### 已弃用 {#deprecated}

请改用 [protectedResourceMetadataRouter](/references/js/classes/MCPAuth.md#protectedresourcemetadatarouter)。

#### 示例 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // 假设已初始化
app.use(mcpAuth.delegatedRouter());
```

#### 抛出 {#throws}

如果在 `resource server` 模式下调用，则抛出。

***

### protectedResourceMetadataRouter() {#protectedresourcemetadatarouter}

```ts
protectedResourceMetadataRouter(): Router;
```

创建一个路由器，用于为所有已配置资源服务 OAuth 2.0 受保护资源元数据端点。

该路由器会根据你配置中提供的每个资源标识符，自动创建正确的 `.well-known` 端点。

#### 返回值 {#returns}

`Router`

用于服务 OAuth 2.0 受保护资源元数据端点的路由器。

#### 抛出 {#throws}

如果在 `authorization server` 模式下调用，则抛出。

#### 示例 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// 假设 mcpAuth 已通过一个或多个 `protectedResources` 配置初始化
const mcpAuth: MCPAuth;
const app = express();

// 这将在 `/.well-known/oauth-protected-resource/...` 路径下
// 根据你的资源标识符提供元数据。
app.use(mcpAuth.protectedResourceMetadataRouter());
```
