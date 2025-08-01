---
sidebar_label: AuthServerConfig
---

# 型別別名：AuthServerConfig

```ts
type AuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

與 MCP 伺服器整合的遠端授權伺服器（Authorization Server）設定。

## 屬性 {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

授權伺服器（Authorization Server）的中繼資料，需符合 MCP 規範
（基於 OAuth 2.0 授權伺服器中繼資料）。

這些中繼資料通常從伺服器的 well-known endpoint（OAuth 2.0
授權伺服器中繼資料或 OpenID Connect Discovery）取得；若伺服器不支援這類 endpoint，也可直接在設定中提供。

**注意：** 中繼資料需為 camelCase 格式，符合 mcp-auth 函式庫的偏好。

#### 參考 {#see}

 - [OAuth 2.0 授權伺服器中繼資料 (Authorization Server Metadata)](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

授權伺服器（Authorization Server）的類型。

#### 參考 {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) 以瞭解可能的值。
