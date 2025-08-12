---
sidebar_label: fetchServerConfig
---

# Fonction : fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

Récupère la configuration du serveur selon l’émetteur (Issuer) et le type de serveur d’autorisation (Authorization).

Cette fonction détermine automatiquement l’URL well-known en fonction du type de serveur, car les serveurs OAuth et OpenID Connect ont des conventions différentes pour leurs points de terminaison de métadonnées.

## Paramètres {#parameters}

### issuer {#issuer}

`string`

L’URL de l’émetteur (Issuer) du serveur d’autorisation (Authorization).

### config {#config}

`ServerMetadataConfig`

L’objet de configuration contenant le type de serveur et une fonction de transpilation optionnelle.

## Retourne {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

Une promesse qui se résout avec la configuration du serveur.

## Voir {#see}

 - [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) pour l’implémentation sous-jacente.
 - [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) pour la spécification OAuth 2.0 Authorization Server Metadata.
 - [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) pour la spécification OpenID Connect Discovery.

## Exemple {#example}

```ts
import { fetchServerConfig } from 'mcp-auth';
// Récupération de la configuration du serveur OAuth
// Cela va récupérer les métadonnées depuis `https://auth.logto.io/.well-known/oauth-authorization-server/oauth`
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// Récupération de la configuration du serveur OpenID Connect
// Cela va récupérer les métadonnées depuis `https://auth.logto.io/oidc/.well-known/openid-configuration`
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## Exceptions {#throws}

si l’opération de récupération échoue.

## Exceptions {#throws}

si les métadonnées du serveur sont invalides ou ne correspondent pas à la spécification MCP.
