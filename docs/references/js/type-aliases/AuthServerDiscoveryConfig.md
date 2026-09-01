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

Use this when you want the metadata to be fetched on-demand when first needed. This is
required for edge runtimes like Cloudflare Workers where network requests are not allowed
during module initialization, and it avoids a startup fetch elsewhere.

## Example

```ts
const mcpAuth = new MCPAuth({
  protectedResourceMetadata: {
    resource: 'https://api.example.com/mcp',
    authorizationServer: { issuer: 'https://auth.example.com/oidc', type: 'oidc' },
  },
});
```

## Properties

### issuer

```ts
issuer: string;
```

The issuer URL of the authorization server. The metadata will be fetched from the
well-known endpoint derived from this issuer according to the server type.

***

### type

```ts
type: AuthServerType;
```

The type of the authorization server.

#### See

[AuthServerType](/references/js/type-aliases/AuthServerType.md) for the possible values.
