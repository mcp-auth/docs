---
sidebar_label: AuthServerDiscoveryConfig
---

# Alias de Tipo: AuthServerDiscoveryConfig

```ts
type AuthServerDiscoveryConfig = {
  issuer: string;
  type: AuthServerType;
};
```

Configuração de descoberta para o servidor de autorização remoto.

Use isto quando quiser que os metadados sejam buscados sob demanda via descoberta quando necessário pela primeira vez.
Isso é útil para ambientes edge como Cloudflare Workers, onde não é permitido fazer fetch assíncrono no topo do escopo.

## Exemplo {#example}

```typescript
const mcpAuth = new MCPAuth({
  protectedResources: {
    metadata: {
      resource: 'https://api.example.com',
      authorizationServers: [
        { issuer: 'https://auth.logto.io/oidc', type: 'oidc' }
      ],
      scopesSupported: ['read', 'write'],
    },
  },
});
```

## Propriedades {#properties}

### issuer {#issuer}

```ts
issuer: string;
```

A URL do emissor (Issuer) do servidor de autorização. Os metadados serão buscados do endpoint well-known derivado deste emissor.

***

### type {#type}

```ts
type: AuthServerType;
```

O tipo do servidor de autorização.

#### Veja também {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) para os valores possíveis.