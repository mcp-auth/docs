---
sidebar_label: AuthServerDiscoveryConfig
---

# 类型别名：AuthServerDiscoveryConfig

```ts
type AuthServerDiscoveryConfig = {
  issuer: string;
  type: AuthServerType;
};
```

远程授权 (Authorization) 服务器的发现配置。

当你希望在首次需要时通过发现按需获取元数据时使用此配置。
这对于像 Cloudflare Workers 这样的边缘运行时非常有用，因为不允许顶层异步 fetch。

## 示例 {#example}

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

## 属性 {#properties}

### issuer {#issuer}

```ts
issuer: string;
```

授权 (Authorization) 服务器的发行者 (Issuer) URL。元数据将从由此发行者 (Issuer) 派生的 well-known 端点获取。

***

### type {#type}

```ts
type: AuthServerType;
```

授权 (Authorization) 服务器的类型。

#### 参见 {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) 以获取可能的取值。
