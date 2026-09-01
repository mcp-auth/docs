---
sidebar_label: ProtectedResourceMetadataConfig
---

# Type Alias: ProtectedResourceMetadataConfig

```ts
type ProtectedResourceMetadataConfig = {
  authorizationServer: AuthServerConfig;
  resource: string;
  resourceName?: string;
  scopesSupported?: string[];
  serviceDocumentationUrl?: string;
};
```

The RFC 9728 Protected Resource Metadata declaration of this MCP server: its identity
(`resource`), the authorization server it trusts, and the optional advertised fields.

Everything in this declaration is published through the SDK's metadata helpers (via
[MCPAuth.getAuthMetadataOptions](/references/js/classes/MCPAuth.md#getauthmetadataoptions)), and the token verifier enforces what is declared:
the `aud` claim of access tokens must match `resource`, and the `iss` claim must match the
configured authorization server — what is advertised is what is enforced.

## Properties

### authorizationServer

```ts
authorizationServer: AuthServerConfig;
```

The authorization server trusted by this MCP server, published as the single entry of
`authorization_servers` in the Protected Resource Metadata document. Either a discovery
config (`{ issuer, type }`, metadata fetched lazily on first use) or a resolved config with
metadata — hardcoded or pre-fetched via [fetchServerConfig](/references/js/functions/fetchServerConfig.md).

#### See

[AuthServerConfig](/references/js/type-aliases/AuthServerConfig.md) for the two variants.

***

### resource

```ts
resource: string;
```

The resource identifier of this MCP server (RFC 8707), e.g. `https://api.example.com/mcp`.

It is published as the `resource` value of the Protected Resource Metadata document, used
as the expected `aud` (audience) claim of access tokens, and used to build
[MCPAuth.resourceMetadataUrl](/references/js/classes/MCPAuth.md#resourcemetadataurl).

***

### resourceName?

```ts
optional resourceName: string;
```

A human-readable name for this MCP server, advertised as `resource_name`.

***

### scopesSupported?

```ts
optional scopesSupported: string[];
```

The scopes this MCP server understands, advertised as `scopes_supported`.

***

### serviceDocumentationUrl?

```ts
optional serviceDocumentationUrl: string;
```

A documentation URL for this MCP server, advertised as `resource_documentation`.
