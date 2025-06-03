---
sidebar_label: AuthServerConfig
---

# Alias de tipo: AuthServerConfig

```ts
type AuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

Configuración para el servidor de autorización remoto integrado con el servidor MCP.

## Propiedades {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

Los metadatos del servidor de autorización (Authorization Server), que deben cumplir con la especificación MCP
(basada en los metadatos del servidor de autorización OAuth 2.0).

Estos metadatos normalmente se obtienen del endpoint well-known del servidor (metadatos del servidor de autorización OAuth 2.0 o descubrimiento OpenID Connect); también pueden proporcionarse directamente en la configuración si el servidor no admite dichos endpoints.

**Nota:** Los metadatos deben estar en formato camelCase según lo preferido por la librería mcp-auth.

#### Ver {#see}

 - [Metadatos del servidor de autorización OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc8414)
 - [Descubrimiento OpenID Connect](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

El tipo de servidor de autorización (Authorization Server).

#### Ver {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) para los valores posibles.