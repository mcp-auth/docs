---
sidebar_label: fetchServerConfig
---

# Function: fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

Fetches the server configuration according to the issuer and authorization server type.

This function automatically determines the well-known URL based on the server type, as OAuth and
OpenID Connect servers have different conventions for their metadata endpoints.

## Parameters {#parameters}

### issuer {#issuer}

`string`

The issuer URL of the authorization server.

### config {#config}

`ServerMetadataConfig`

The configuration object containing the server type and optional transpile function.

## Returns {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

A promise that resolves to the server configuration.

## See {#see}

 - [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) for the underlying implementation.
 - [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) for the OAuth 2.0 Authorization Server Metadata
specification.
 - [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) for the OpenID Connect
Discovery specification.

## Example {#example}

```ts
import { fetchServerConfig } from 'mcp-auth';
// Fetching OAuth server configuration
// This will fetch the metadata from `https://auth.logto.io/.well-known/oauth-authorization-server/oauth`
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// Fetching OpenID Connect server configuration
// This will fetch the metadata from `https://auth.logto.io/oidc/.well-known/openid-configuration`
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## Throws {#throws}

if the fetch operation fails.

## Throws {#throws}

if the server metadata is invalid or does not match the
MCP specification.
