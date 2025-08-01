---
sidebar_label: AuthServerConfig
---

# Typalias: AuthServerConfig

```ts
type AuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

Konfiguration für den entfernten Autorisierungsserver (Authorization Server), der mit dem MCP-Server integriert ist.

## Eigenschaften {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

Die Metadaten des Autorisierungsservers (Authorization Server), die der MCP-Spezifikation entsprechen sollten
(basierend auf OAuth 2.0 Authorization Server Metadata).

Diese Metadaten werden typischerweise vom Well-Known-Endpunkt des Servers abgerufen (OAuth 2.0
Authorization Server Metadata oder OpenID Connect Discovery); sie können auch direkt in der Konfiguration bereitgestellt werden, wenn der Server solche Endpunkte nicht unterstützt.

**Hinweis:** Die Metadaten sollten im camelCase-Format vorliegen, wie von der mcp-auth-Bibliothek bevorzugt.

#### Siehe {#see}

 - [OAuth 2.0 Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

Der Typ des Autorisierungsservers (Authorization Server).

#### Siehe {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) für die möglichen Werte.
