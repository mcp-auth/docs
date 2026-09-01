---
sidebar_label: ResolvedAuthServerConfig
---

# Type Alias: ResolvedAuthServerConfig

```ts
type ResolvedAuthServerConfig = {
  metadata: AuthServerMetadata;
  type: AuthServerType;
};
```

Resolved configuration for the remote authorization server with metadata.

Use this when the metadata is already available — either provided directly or fetched
beforehand via [fetchServerConfig](/references/js/functions/fetchServerConfig.md). The metadata is validated in the `MCPAuth`
constructor so misconfigurations fail fast.

## Properties

### metadata

```ts
metadata: AuthServerMetadata;
```

The metadata of the authorization server in wire format (snake_case).

#### See

[AuthServerMetadata](/references/js/type-aliases/AuthServerMetadata.md) for the type definition.

***

### type

```ts
type: AuthServerType;
```

The type of the authorization server.

#### See

[AuthServerType](/references/js/type-aliases/AuthServerType.md) for the possible values.
