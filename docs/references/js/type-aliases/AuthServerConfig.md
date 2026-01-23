---
sidebar_label: AuthServerConfig
---

# Type Alias: AuthServerConfig

```ts
type AuthServerConfig = 
  | ResolvedAuthServerConfig
  | AuthServerDiscoveryConfig;
```

Configuration for the remote authorization server integrated with the MCP server.

Can be either:
- **Resolved**: Contains `metadata` - no network request needed
- **Discovery**: Contains only `issuer` and `type` - metadata fetched on-demand via discovery
