---
sidebar_label: AuthServerConfig
---

# 型エイリアス: AuthServerConfig

```ts
type AuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

MCP サーバーと統合されたリモート認可サーバー (Authorization server) の設定です。

## プロパティ {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

認可サーバー (Authorization server) のメタデータで、MCP 仕様（OAuth 2.0 認可サーバーメタデータ (Authorization Server Metadata) に基づく）に準拠している必要があります。

このメタデータは通常、サーバーの well-known エンドポイント（OAuth 2.0 認可サーバーメタデータ (Authorization Server Metadata) または OpenID Connect Discovery）から取得されます。サーバーがそのようなエンドポイントをサポートしていない場合は、設定内で直接指定することもできます。

**注意:** メタデータは mcp-auth ライブラリの推奨に従い、camelCase 形式である必要があります。

#### 参照 {#see}

 - [OAuth 2.0 認可サーバーメタデータ (Authorization Server Metadata)](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

認可サーバー (Authorization server) のタイプです。

#### 参照 {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) で利用可能な値を確認できます。
