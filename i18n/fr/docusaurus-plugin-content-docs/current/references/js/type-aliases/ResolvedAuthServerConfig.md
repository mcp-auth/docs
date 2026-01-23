---
sidebar_label: ResolvedAuthServerConfig
---

# Alias de type : ResolvedAuthServerConfig

```ts
type ResolvedAuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

Configuration résolue pour le serveur d'autorisation distant avec métadonnées.

Utilisez ceci lorsque les métadonnées sont déjà disponibles, soit codées en dur, soit récupérées au préalable
via `fetchServerConfig()`.

## Propriétés {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

Les métadonnées du serveur d’autorisation (Authorization Server), qui doivent être conformes à la spécification MCP
(basée sur OAuth 2.0 Authorization Server Metadata).

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
