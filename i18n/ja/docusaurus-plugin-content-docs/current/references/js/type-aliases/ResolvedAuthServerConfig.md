---
sidebar_label: ResolvedAuthServerConfig
---

# 型エイリアス: ResolvedAuthServerConfig

```ts
type ResolvedAuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

メタデータ付きのリモート認可サーバー (Authorization server) の解決済み設定。

この型は、メタデータがすでに利用可能な場合（ハードコーディングされているか、事前に `fetchServerConfig()` で取得されている場合）に使用します。

## プロパティ {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

認可サーバー (Authorization server) のメタデータで、MCP 仕様（OAuth 2.0 認可サーバーメタデータに基づく）に準拠している必要があります。

このメタデータは通常、サーバーの well-known エンドポイント（OAuth 2.0 認可サーバーメタデータまたは OpenID Connect Discovery）から取得されます。サーバーがそのようなエンドポイントをサポートしていない場合は、設定に直接指定することもできます。

**注意:** メタデータは mcp-auth ライブラリの推奨に従い、camelCase 形式である必要があります。

#### 参考 {#see}

 - [OAuth 2.0 認可サーバーメタデータ](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

認可サーバー (Authorization server) のタイプ。

#### 参考 {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) で利用可能な値を確認できます。
