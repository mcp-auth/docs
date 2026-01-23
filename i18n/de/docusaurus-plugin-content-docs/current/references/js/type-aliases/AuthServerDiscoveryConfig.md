---
sidebar_label: AuthServerDiscoveryConfig
---

# Typalias: AuthServerDiscoveryConfig

```ts
type AuthServerDiscoveryConfig = {
  issuer: string;
  type: AuthServerType;
};
```

Discovery-Konfiguration für den entfernten Aussteller (Issuer) des Autorisierungsservers.

Verwende dies, wenn die Metadaten bei Bedarf per Discovery abgerufen werden sollen, sobald sie das erste Mal benötigt werden.
Dies ist nützlich für Edge-Runtimes wie Cloudflare Workers, bei denen asynchrones Fetch auf Top-Level-Ebene
nicht erlaubt ist.

## Beispiel {#example}

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

## Eigenschaften {#properties}

### issuer {#issuer}

```ts
issuer: string;
```

Die Aussteller-URL (Issuer URL) des Autorisierungsservers. Die Metadaten werden vom
well-known Endpoint abgerufen, der von diesem Aussteller abgeleitet wird.

***

### type {#type}

```ts
type: AuthServerType;
```

Der Typ des Autorisierungsservers.

#### Siehe {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) für die möglichen Werte.
