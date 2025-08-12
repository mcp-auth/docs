---
sidebar_label: AuthServerModeConfig
---

# Alias de type : ~~AuthServerModeConfig~~

```ts
type AuthServerModeConfig = {
  server: AuthServerConfig;
};
```

Configuration pour le mode serveur d'autorisation hérité, MCP.

## Obsolète {#deprecated}

Utilisez la configuration `ResourceServerModeConfig` à la place.

## Propriétés {#properties}

### ~~server~~ {#server}

```ts
server: AuthServerConfig;
```

La configuration du serveur d'autorisation unique.

#### Obsolète {#deprecated}

Utilisez la configuration `protectedResources` à la place.
