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

## Deprecated {#deprecated}

Use `ResourceServerModeConfig` config instead.

## Properties {#properties}

### ~~server~~ {#server}

```ts
server: AuthServerConfig;
```

The single authorization server configuration.

#### Deprecated {#deprecated}

Use `protectedResources` config instead.
