---
sidebar_label: fetchServerConfig
---

# Function: fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<ResolvedAuthServerConfig>;
```

Fetches the server configuration according to the issuer and authorization server type.

This function automatically determines the well-known URL based on the server type, as OAuth
and OpenID Connect servers have different conventions for their metadata endpoints. It also
validates that the `issuer` field in the fetched metadata matches the expected issuer, as
required by RFC 8414 and OpenID Connect Discovery.

## Parameters

### issuer

`string`

The issuer URL of the authorization server.

### config

[`ServerMetadataConfig`](/references/js/type-aliases/ServerMetadataConfig.md)

The configuration object containing the server type and optional transpile function.

## Returns

`Promise`\<[`ResolvedAuthServerConfig`](/references/js/type-aliases/ResolvedAuthServerConfig.md)\>

A promise that resolves to the resolved server configuration with fetched metadata.

## See

 - [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) for the underlying implementation, which can be
used directly when the well-known URL differs from the standard conventions (no issuer match
validation is performed in that case).
 - [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) for the OAuth 2.0 Authorization Server
Metadata specification.
 - [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) for the OpenID Connect
Discovery specification.

## Example

```ts
import { fetchServerConfig } from 'mcp-auth';

// Fetching OAuth server configuration
// This fetches the metadata from `https://auth.logto.io/.well-known/oauth-authorization-server/oauth`
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// Fetching OpenID Connect server configuration
// This fetches the metadata from `https://auth.logto.io/oidc/.well-known/openid-configuration`
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## Throws

if the fetch operation fails.

## Throws

if the server metadata is invalid, does not match the
MCP specification, or its issuer does not match the expected issuer.
