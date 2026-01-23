---
sidebar_label: ResolvedAuthServerConfig
---

# Typalias: ResolvedAuthServerConfig

```ts
type ResolvedAuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

Aufgelöste Konfiguration für den entfernten Autorisierungsserver (authorization server) mit Metadaten.

Verwende dies, wenn die Metadaten bereits verfügbar sind, entweder fest codiert oder zuvor abgerufen
über `fetchServerConfig()`.

## Eigenschaften {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

Die Metadaten des Autorisierungsservers (authorization server), die der MCP-Spezifikation
(basierend auf OAuth 2.0 Authorization Server Metadata) entsprechen sollten.

Diese Metadaten werden typischerweise vom Well-known-Endpunkt des Servers abgerufen (OAuth 2.0
Authorization Server Metadata oder OpenID Connect Discovery); sie können auch direkt in der Konfiguration bereitgestellt werden, wenn der Server solche Endpunkte nicht unterstützt.

**Hinweis:** Die Metadaten sollten im camelCase-Format vorliegen, wie von der mcp-auth-
Bibliothek bevorzugt.

#### Siehe {#see}

 - [OAuth 2.0 Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

Der Typ des Autorisierungsservers (authorization server).

#### Siehe {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) für die möglichen Werte.
