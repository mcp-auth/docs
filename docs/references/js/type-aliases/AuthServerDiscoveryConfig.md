---
sidebar_label: AuthServerDiscoveryConfig
---

# Type Alias: AuthServerDiscoveryConfig

```ts
type AuthServerDiscoveryConfig = {
  issuer: string;
  type: AuthServerType;
};
```

Discovery configuration for the remote authorization server.

Use this when you want the metadata to be fetched on-demand via discovery when first needed.
This is useful for edge runtimes like Cloudflare Workers where top-level async fetch
is not allowed.

## Example

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

## Properties

### issuer

```ts
issuer: string;
```

The issuer URL of the authorization server. The metadata will be fetched from the
well-known endpoint derived from this issuer.

***

### type

```ts
type: AuthServerType;
```

The type of the authorization server.

#### See

[AuthServerType](/references/js/type-aliases/AuthServerType.md) for the possible values.
