---
sidebar_label: ResourceServerModeConfig
---

# Typalias: ResourceServerModeConfig

```ts
type ResourceServerModeConfig = {
  protectedResources: ResourceServerConfig | ResourceServerConfig[];
};
```

Konfiguration für den MCP-Server im Resource-Server-Modus.

## Eigenschaften {#properties}

### protectedResources {#protectedresources}

```ts
protectedResources: ResourceServerConfig | ResourceServerConfig[];
```

Eine einzelne Resource-Server-Konfiguration oder ein Array davon.