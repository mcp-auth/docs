---
sidebar_label: AuthServerConfig
---

# 类型别名：AuthServerConfig

```ts
type AuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

与 MCP 服务器集成的远程授权服务器 (Authorization Server) 配置。

## 属性 {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

授权服务器 (Authorization Server) 的元数据，需符合 MCP 规范
（基于 OAuth 2.0 授权服务器元数据）。

此元数据通常从服务器的 well-known 端点（OAuth 2.0 授权服务器元数据或 OpenID Connect 发现）获取；如果服务器不支持这些端点，也可以直接在配置中提供。

**注意：** 元数据应为 camelCase 格式，这是 mcp-auth 库所推荐的。

#### 参见 {#see}

 - [OAuth 2.0 授权服务器元数据](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect 发现](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

授权服务器 (Authorization Server) 的类型。

#### 参见 {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) 以获取可能的取值。
