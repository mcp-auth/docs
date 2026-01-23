---
sidebar_label: AuthServerConfig
---

# Alias de tipo: AuthServerConfig

```ts
type AuthServerConfig = 
  | ResolvedAuthServerConfig
  | AuthServerDiscoveryConfig;
```

Configuración para el servidor de autorización remoto integrado con el servidor MCP.

Puede ser:
- **Resuelto**: Contiene `metadata` - no se necesita solicitud de red
- **Descubrimiento**: Contiene solo `issuer` y `type` - los metadatos se obtienen bajo demanda mediante descubrimiento