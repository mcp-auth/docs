---
sidebar_label: AuthServerDiscoveryConfig
---

# Alias de type : AuthServerDiscoveryConfig

```ts
type AuthServerDiscoveryConfig = {
  issuer: string;
  type: AuthServerType;
};
```

Configuration de découverte pour le serveur d’autorisation distant.

Utilisez ceci lorsque vous souhaitez que les métadonnées soient récupérées à la demande via la découverte lors de la première utilisation.
Ceci est utile pour les environnements edge comme Cloudflare Workers où l’appel asynchrone fetch au niveau supérieur n’est pas autorisé.

## Exemple {#example}

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

## Propriétés {#properties}

### issuer {#issuer}

```ts
issuer: string;
```

L’URL de l’émetteur (Issuer) du serveur d’autorisation. Les métadonnées seront récupérées à partir du point de terminaison well-known dérivé de cet émetteur.

***

### type {#type}

```ts
type: AuthServerType;
```

Le type du serveur d’autorisation (Authorization).

#### Voir {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) pour les valeurs possibles.
