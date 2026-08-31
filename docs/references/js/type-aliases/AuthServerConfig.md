---
sidebar_label: AuthServerConfig
---

# Type Alias: AuthServerConfig

```ts
type AuthServerConfig = 
  | ResolvedAuthServerConfig
  | AuthServerDiscoveryConfig;
```

Configuration for the remote authorization server trusted by the MCP server.

Can be either:

- **Discovery**: contains `issuer` and `type` — metadata is fetched on-demand and cached
- **Resolved**: contains `metadata` — no network request needed
