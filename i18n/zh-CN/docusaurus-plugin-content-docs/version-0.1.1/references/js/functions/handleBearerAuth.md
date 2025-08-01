---
sidebar_label: handleBearerAuth
---

# 函数：handleBearerAuth()

```ts
function handleBearerAuth(param0: BearerAuthConfig): RequestHandler;
```

在 Express 应用中创建用于处理 Bearer 认证 (Authentication) 的中间件函数。

该中间件会从 `Authorization` 头中提取 Bearer 访问令牌 (Access token)，使用提供的 `verifyAccessToken` 函数进行验证，并检查发行者 (Issuer)、受众 (Audience) 和所需权限 (Scopes)。

- 如果令牌有效，会将认证 (Authentication) 信息添加到 `request.auth` 属性中；
  如果无效，则返回相应的错误信息。
- 如果访问令牌 (Access token) 验证失败，则返回 401 未授权错误。
- 如果令牌不包含所需的权限 (Scopes)，则返回 403 禁止访问错误。
- 如果在认证 (Authentication) 过程中发生意外错误，中间件会重新抛出这些错误。

**注意：** `request.auth` 对象会包含比 `@modelcontextprotocol/sdk` 模块中定义的标准 AuthInfo 接口更多的扩展字段。详情请参见本文件中的扩展接口。

## 参数 {#parameters}

### param0 {#param0}

[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md)

Bearer 认证 (Authentication) 处理器的配置。

## 返回值 {#returns}

`RequestHandler`

用于 Express 的 Bearer 认证 (Authentication) 中间件函数。

## 参见 {#see}

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以了解配置选项。
