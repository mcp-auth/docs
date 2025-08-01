---
sidebar_label: MCPAuthConfig
---

# Type Alias: MCPAuthConfig

```ts
type MCPAuthConfig = 
  | AuthServerModeConfig
  | ResourceServerModeConfig;
```

Config for the [MCPAuth](/references/js/classes/MCPAuth.md) class, supporting either a single legacy `authorization server`
or the `resource server` configuration.
