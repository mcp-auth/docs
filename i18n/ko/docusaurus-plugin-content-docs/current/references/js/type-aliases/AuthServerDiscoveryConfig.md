---
sidebar_label: AuthServerDiscoveryConfig
---

# 타입 별칭: AuthServerDiscoveryConfig

```ts
type AuthServerDiscoveryConfig = {
  issuer: string;
  type: AuthServerType;
};
```

원격 인가 서버의 디스커버리(Discovery) 구성입니다.

메타데이터가 처음 필요할 때 디스커버리를 통해 온디맨드로 가져오고 싶을 때 사용하세요.
이는 Cloudflare Workers와 같이 최상위 async fetch가 허용되지 않는 엣지 런타임에서 유용합니다.

## 예시 {#example}

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

## 속성 {#properties}

### issuer {#issuer}

```ts
issuer: string;
```

인가 (Authorization) 서버의 발급자 (Issuer) URL입니다. 이 발급자에서 파생된 well-known 엔드포인트에서 메타데이터가 가져와집니다.

***

### type {#type}

```ts
type: AuthServerType;
```

인가 (Authorization) 서버의 유형입니다.

#### 참고 {#see}

가능한 값은 [AuthServerType](/references/js/type-aliases/AuthServerType.md) 을 참고하세요.
