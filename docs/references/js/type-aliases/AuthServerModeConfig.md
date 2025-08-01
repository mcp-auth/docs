---
sidebar_label: AuthServerModeConfig
---

# Type Alias: ~~AuthServerModeConfig~~

```ts
type AuthServerModeConfig = {
  server: AuthServerConfig;
};
```

Configuration for the legacy, MCP server as authorization server mode.

## Deprecated

Use `ResourceServerModeConfig` config instead.

## Properties

### ~~server~~

```ts
server: AuthServerConfig;
```

The single authorization server configuration.

#### Deprecated

Use `protectedResources` config instead.
