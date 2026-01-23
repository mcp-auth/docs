---
sidebar_label: ValidateIssuerFunction
---

# Type Alias: ValidateIssuerFunction()

```ts
type ValidateIssuerFunction = (tokenIssuer: string) => void;
```

Function type for validating the issuer of the access token.

This function should throw an [MCPAuthBearerAuthError](/references/js/classes/MCPAuthBearerAuthError.md) with code 'invalid_issuer' if the issuer
is not valid. The issuer should be validated against:

1. The authorization servers configured in MCP-Auth's auth server metadata
2. The authorization servers listed in the protected resource's metadata

## Parameters

### tokenIssuer

`string`

## Returns

`void`

## Throws

When the issuer is not recognized or invalid.
