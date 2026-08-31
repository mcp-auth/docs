---
sidebar_label: MCPAuthConfig
---

# Type Alias: MCPAuthConfig

```ts
type MCPAuthConfig = {
  jwtVerifyOptions?: Omit<JWTVerifyOptions, "issuer" | "audience">;
  protectedResourceMetadata: ProtectedResourceMetadataConfig;
};
```

Config for the [MCPAuth](/references/js/classes/MCPAuth.md) class. One instance protects one resource and trusts one
authorization server.

## Properties

### jwtVerifyOptions?

```ts
optional jwtVerifyOptions: Omit<JWTVerifyOptions, "issuer" | "audience">;
```

Per-call options passed to the underlying `jose.jwtVerify` function, e.g. `clockTolerance`
or `requiredClaims`. The `issuer` and `audience` options are derived from
[protectedResourceMetadata](/references/js/type-aliases/MCPAuthConfig.md#protectedresourcemetadata) and cannot be set here: the MCP authorization
specification requires access tokens to be bound to this server's `resource` identifier
(RFC 8707), and accepting unbound tokens would let a token issued for a different resource
of the same authorization server be replayed against this MCP server.

#### See

JWTVerifyOptions

***

### protectedResourceMetadata

```ts
protectedResourceMetadata: ProtectedResourceMetadataConfig;
```

The Protected Resource Metadata declaration (RFC 9728) of this MCP server, published
through the SDK's metadata helpers and enforced by the token verifier.

#### See

[ProtectedResourceMetadataConfig](/references/js/type-aliases/ProtectedResourceMetadataConfig.md)
