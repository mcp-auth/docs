---
sidebar_label: ResolvedAuthServerConfig
---

# 类型别名：ResolvedAuthServerConfig

```ts
type ResolvedAuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

带有元数据的远程授权 (Authorization) 服务器的已解析配置。

当元数据已经可用时（无论是硬编码还是通过 `fetchServerConfig()` 预先获取），可以使用此类型。

## 属性 {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

授权 (Authorization) 服务器的元数据，应符合 MCP 规范（基于 OAuth 2.0 授权 (Authorization) 服务器元数据）。

此元数据通常从服务器的 well-known 端点（OAuth 2.0 授权 (Authorization) 服务器元数据或 OpenID Connect 发现）获取；如果服务器不支持这些端点，也可以直接在配置中提供。

**注意：** 元数据应为 camelCase 格式，这是 mcp-auth 库推荐的格式。

#### 参见 {#see}

 - [OAuth 2.0 授权 (Authorization) 服务器元数据](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect 发现](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

授权 (Authorization) 服务器的类型。

#### 参见 {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) 以获取可能的取值。
