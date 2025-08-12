---
sidebar_label: AuthServerModeConfig
---

# Alias de tipo: ~~AuthServerModeConfig~~

```ts
type AuthServerModeConfig = {
  server: AuthServerConfig;
};
```

Configuración para el modo de servidor de autorización heredado, MCP.

## Obsoleto {#deprecated}

Utiliza la configuración `ResourceServerModeConfig` en su lugar.

## Propiedades {#properties}

### ~~server~~ {#server}

```ts
server: AuthServerConfig;
```

La configuración del único servidor de autorización.

#### Obsoleto {#deprecated}

Utiliza la configuración `protectedResources` en su lugar.