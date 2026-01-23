---
sidebar_label: AuthServerDiscoveryConfig
---

# Alias de tipo: AuthServerDiscoveryConfig

```ts
type AuthServerDiscoveryConfig = {
  issuer: string;
  type: AuthServerType;
};
```

Configuración de descubrimiento para el servidor de autorización remoto.

Utiliza esto cuando quieras que los metadatos se obtengan bajo demanda mediante descubrimiento la primera vez que se necesiten.
Esto es útil para entornos edge como Cloudflare Workers donde no se permite el fetch asíncrono a nivel superior.

## Ejemplo {#example}

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

## Propiedades {#properties}

### issuer {#issuer}

```ts
issuer: string;
```

La URL del emisor (Issuer) del servidor de autorización. Los metadatos se obtendrán del
endpoint well-known derivado de este emisor.

***

### type {#type}

```ts
type: AuthServerType;
```

El tipo del servidor de autorización.

#### Ver {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) para los valores posibles.