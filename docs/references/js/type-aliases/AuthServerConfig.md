---
sidebar_label: AuthServerConfig
---

# Type Alias: AuthServerConfig

```ts
type AuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

Configuration for the remote authorization server integrated with the MCP server.

## Properties

### metadata

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

#### See

 - [OAuth 2.0 Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type

```ts
type: AuthServerType;
```

The type of the authorization server.

#### See

[AuthServerType](/references/js/type-aliases/AuthServerType.md) for the possible values.
