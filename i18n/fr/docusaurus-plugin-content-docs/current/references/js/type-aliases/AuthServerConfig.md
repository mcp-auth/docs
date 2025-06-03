---
sidebar_label: AuthServerConfig
---

# Alias de type : AuthServerConfig

```ts
type AuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

Configuration pour le serveur d'autorisation distant intégré avec le serveur MCP.

## Propriétés {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

Les métadonnées du serveur d’autorisation (Authorization Server), qui doivent être conformes à la spécification MCP
(basée sur les métadonnées du serveur d’autorisation OAuth 2.0).

Ces métadonnées sont généralement récupérées à partir du point de terminaison well-known du serveur (OAuth 2.0
Authorization Server Metadata ou OpenID Connect Discovery) ; elles peuvent également être fournies
directement dans la configuration si le serveur ne prend pas en charge de tels points de terminaison.

**Remarque :** Les métadonnées doivent être au format camelCase comme préféré par la bibliothèque mcp-auth.

#### Voir {#see}

 - [OAuth 2.0 Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

Le type du serveur d’autorisation (Authorization Server).

#### Voir {#see}

[AuthServerType](/references/js/type-aliases/AuthServerType.md) pour les valeurs possibles.
