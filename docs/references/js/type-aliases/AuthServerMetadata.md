---
sidebar_label: AuthServerMetadata
---

# Type Alias: AuthServerMetadata

```ts
type AuthServerMetadata = OAuthMetadata & {
  jwks_uri?: string;
};
```

Authorization server metadata in wire format (snake_case), as fetched from the server's
discovery endpoint or provided directly in the configuration.

This is the MCP SDK's RFC 8414 `OAuthMetadata` type, extended with the `jwks_uri` field that
mcp-auth requires for JWT verification. The metadata is passed verbatim (no key-casing
transformation) to the SDK's metadata helpers such as `oauthMetadataResponse` and
`mcpAuthMetadataRouter`.

Note: mcp-auth validates the fields it consumes (`issuer`, `authorization_endpoint`,
`token_endpoint`, `response_types_supported`, `jwks_uri`, `grant_types_supported`,
`code_challenge_methods_supported`, `registration_endpoint`); other fields are passed through
as-is.

## Type declaration

### jwks\_uri?

```ts
optional jwks_uri: string;
```

URL of the authorization server's JWK Set document, used to verify JWT access token
signatures. Required by OpenID Connect Discovery; optional in RFC 8414 but required by
mcp-auth when verifying tokens.

## See

 - [OAuth 2.0 Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)
