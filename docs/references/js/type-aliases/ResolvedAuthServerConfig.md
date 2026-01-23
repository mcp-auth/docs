---
sidebar_label: ResolvedAuthServerConfig
---

# Type Alias: ResolvedAuthServerConfig

```ts
type ResolvedAuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

Resolved configuration for the remote authorization server with metadata.

Use this when the metadata is already available, either hardcoded or fetched beforehand
via `fetchServerConfig()`.

## Properties {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

The metadata of the authorization server, which should conform to the MCP specification
(based on OAuth 2.0 Authorization Server Metadata).

This metadata is typically fetched from the server's well-known endpoint (OAuth 2.0
Authorization Server Metadata or OpenID Connect Discovery); it can also be provided
directly in the configuration if the server does not support such endpoints.

**Note:** The metadata should be in camelCase format as per preferred by the mcp-auth
library.

#### See {#see}

 - [OAuth 2.0 Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

The type of the authorization server.

#### See {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) for the possible values.
