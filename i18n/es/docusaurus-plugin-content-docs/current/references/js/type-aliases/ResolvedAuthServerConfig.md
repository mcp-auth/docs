---
sidebar_label: ResolvedAuthServerConfig
---

# Alias de tipo: ResolvedAuthServerConfig

```ts
type ResolvedAuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

Configuración resuelta para el servidor de autorización remoto con metadatos.

Utiliza esto cuando los metadatos ya estén disponibles, ya sea codificados directamente o recuperados previamente
a través de `fetchServerConfig()`.

## Propiedades {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

Los metadatos del servidor de autorización (authorization server), que deben cumplir con la especificación MCP
(basada en los metadatos del servidor de autorización OAuth 2.0).

Estos metadatos normalmente se obtienen del endpoint well-known del servidor (metadatos del servidor de autorización OAuth 2.0
u OpenID Connect Discovery); también se pueden proporcionar directamente en la configuración si el servidor no admite dichos endpoints.

**Nota:** Los metadatos deben estar en formato camelCase según lo preferido por la librería mcp-auth.

#### Ver {#see}

 - [Metadatos del servidor de autorización OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

El tipo de servidor de autorización (authorization server).

#### Ver {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) para los valores posibles.