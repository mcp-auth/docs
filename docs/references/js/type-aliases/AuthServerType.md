---
sidebar_label: AuthServerType
---

# Type Alias: AuthServerType

```ts
type AuthServerType = "oauth" | "oidc";
```

The type of the authorization server. It determines which discovery convention is used to
locate the server metadata:

- `'oidc'`: OpenID Connect Discovery (`<issuer>/.well-known/openid-configuration`)
- `'oauth'`: OAuth 2.0 Authorization Server Metadata (RFC 8414 path insertion,
  `<origin>/.well-known/oauth-authorization-server<issuer-path>`)
