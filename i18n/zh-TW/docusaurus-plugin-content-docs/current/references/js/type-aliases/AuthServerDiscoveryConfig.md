---
sidebar_label: AuthServerDiscoveryConfig
---

# 型別別名：AuthServerDiscoveryConfig (Type Alias: AuthServerDiscoveryConfig)

```ts
type AuthServerDiscoveryConfig = {
  issuer: string;
  type: AuthServerType;
};
```

遠端授權伺服器的探索（Discovery）設定。

當你希望在首次需要時，透過探索機制（discovery）即時取得 metadata 時，請使用此設定。
這對於像 Cloudflare Workers 這類不允許頂層 async fetch 的 edge 執行環境特別有用。

## 範例 (Example) {#example}

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

## 屬性 (Properties) {#properties}

### issuer {#issuer}

```ts
issuer: string;
```

授權伺服器（authorization server）的簽發者 (Issuer) URL。metadata 將會從此 issuer 派生的 well-known endpoint 取得。

***

### type {#type}

```ts
type: AuthServerType;
```

授權伺服器的型別。

#### 參見 (See) {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) 以瞭解所有可能的值。