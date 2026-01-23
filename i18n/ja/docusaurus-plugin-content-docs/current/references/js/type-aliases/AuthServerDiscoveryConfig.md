---
sidebar_label: AuthServerDiscoveryConfig
---

# 型エイリアス: AuthServerDiscoveryConfig

```ts
type AuthServerDiscoveryConfig = {
  issuer: string;
  type: AuthServerType;
};
```

リモート認可サーバー (Authorization server) のディスカバリー設定です。

初めて必要になったときにディスカバリー経由でメタデータをオンデマンド取得したい場合に使用します。
これは、Cloudflare Workers のようなエッジランタイムでトップレベルの非同期 fetch が許可されていない場合に便利です。

## 例 {#example}

```typescript
const mcpAuth = new MCPAuth({
  protectedResources: {
    metadata: {
      resource: 'https://api.example.com',
      authorizationServers: [
        { issuer: 'https://auth.logto.io/oidc', type: 'oidc' }
      ],
      scopesSupported: ['read', 'write'],
    },
  },
});
```

## プロパティ {#properties}

### issuer {#issuer}

```ts
issuer: string;
```

認可サーバー (Authorization server) の発行者 (Issuer) URL です。この発行者 (Issuer) から導出される well-known エンドポイントからメタデータが取得されます。

***

### type {#type}

```ts
type: AuthServerType;
```

認可サーバー (Authorization server) のタイプです。

#### 参照 {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) で利用可能な値を確認できます。
