---
sidebar_label: McpAuthInfo
---

# Type Alias: McpAuthInfo

```ts
type McpAuthInfo = AuthInfo & {
  claims: JWTPayload;
  issuer: string;
  subject: string;
};
```

The MCP SDK's `AuthInfo`, extended with the guarantees mcp-auth provides after successful JWT
verification:

- `issuer`: the verified `iss` claim — always the configured trusted authorization server
- `subject`: the verified `sub` claim, identifying the end user or client (required, per
  RFC 9068)
- `claims`: the full verified JWT payload for access to any custom claims

## Type declaration

### claims

```ts
claims: JWTPayload;
```

The full verified JWT payload.

### issuer

```ts
issuer: string;
```

The issuer of the token (the `iss` claim).

### subject

```ts
subject: string;
```

The subject of the token (the `sub` claim), typically the user ID.
