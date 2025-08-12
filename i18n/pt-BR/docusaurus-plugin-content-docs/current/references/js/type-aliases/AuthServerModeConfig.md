---
sidebar_label: AuthServerModeConfig
---

# Alias de Tipo: ~~AuthServerModeConfig~~

```ts
type AuthServerModeConfig = {
  server: AuthServerConfig;
};
```

Configuração para o modo legado de servidor MCP como servidor de autorização (authorization server).

## Obsoleto {#deprecated}

Use a configuração `ResourceServerModeConfig` em vez disso.

## Propriedades {#properties}

### ~~server~~ {#server}

```ts
server: AuthServerConfig;
```

A configuração do único servidor de autorização (authorization server).

#### Obsoleto {#deprecated}

Use a configuração `protectedResources` em vez disso.