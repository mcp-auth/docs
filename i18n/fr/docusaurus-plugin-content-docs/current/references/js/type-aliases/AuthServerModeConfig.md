---
sidebar_label: AuthServerModeConfig
---

# Alias de type : ~~AuthServerModeConfig~~

```ts
type AuthServerModeConfig = {
  server: AuthServerConfig;
};
```

Configuration pour l'ancien serveur MCP en mode serveur d’autorisation (authorization server).

## Obsolète {#deprecated}

Utilisez la configuration `ResourceServerModeConfig` à la place.

## Propriétés {#properties}

### ~~server~~ {#server}

```ts
server: AuthServerConfig;
```

La configuration du serveur d’autorisation (authorization server) unique.

#### Obsolète {#deprecated}

Utilisez la configuration `protectedResources` à la place.
