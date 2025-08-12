---
sidebar_label: AuthServerModeConfig
---

# Typalias: ~~AuthServerModeConfig~~

```ts
type AuthServerModeConfig = {
  server: AuthServerConfig;
};
```

Konfiguration für den veralteten MCP-Server im Autorisierungsserver-Modus.

## Veraltet {#deprecated}

Verwende stattdessen die `ResourceServerModeConfig`-Konfiguration.

## Eigenschaften {#properties}

### ~~server~~ {#server}

```ts
server: AuthServerConfig;
```

Die einzelne Autorisierungsserver-Konfiguration.

#### Veraltet {#deprecated}

Verwende stattdessen die `protectedResources`-Konfiguration.
