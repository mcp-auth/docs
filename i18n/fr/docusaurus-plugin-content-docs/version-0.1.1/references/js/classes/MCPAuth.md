---
sidebar_label: MCPAuth
---

# Classe : MCPAuth

La classe principale de la bibliothèque mcp-auth, qui fournit des méthodes pour créer des routeurs et des gestionnaires utiles pour l’authentification (Authentification) et l’autorisation (Autorisation) sur les serveurs MCP.

## Voir {#see}

[MCP Auth](https://mcp-auth.dev) pour plus d’informations sur la bibliothèque et son utilisation.

## Exemple {#example}

Un exemple d’intégration avec un fournisseur OIDC distant :

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();
const mcpAuth = new MCPAuth({
  server: await fetchServerConfig(
    'https://auth.logto.io/oidc',
    { type: 'oidc' }
  ),
});

// Monter le routeur pour gérer les métadonnées du serveur d’autorisation OAuth 2.0
app.use(mcpAuth.delegatedRouter());

// Utiliser le gestionnaire d’authentification Bearer sur la route MCP
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // Traiter la requête MCP ici
  },
);

// Utiliser les informations d’authentification dans le callback MCP
server.tool(
  'add',
  { a: z.number(), b: z.number() },
  async ({ a, b }, { authInfo }) => {
    console.log('Auth Info:', authInfo);
   // ...
  },
);
```

## Constructeurs {#constructors}

### Constructeur {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

#### Paramètres {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

#### Retourne {#returns}

`MCPAuth`

## Propriétés {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

## Méthodes {#methods}

### bearerAuth() {#bearerauth}

#### Signature d’appel {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer">): RequestHandler;
```

Crée un gestionnaire d’authentification Bearer (middleware Express) qui vérifie le jeton d’accès (Jeton d’accès) dans l’en-tête `Authorization` de la requête.

##### Paramètres {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Une fonction qui vérifie le jeton d’accès (Jeton d’accès). Elle doit accepter le jeton d’accès sous forme de chaîne de caractères et retourner une promesse (ou une valeur) qui se résout avec le résultat de la vérification.

**Voir**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) pour la définition du type de la fonction `verifyAccessToken`.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\>

Configuration optionnelle pour le gestionnaire d’authentification Bearer.

**Voir**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) pour les options de configuration disponibles (à l’exception de `verifyAccessToken` et `issuer`).

##### Retourne {#returns}

`RequestHandler`

Une fonction middleware Express qui vérifie le jeton d’accès (Jeton d’accès) et ajoute le résultat de la vérification à l’objet requête (`req.auth`).

##### Voir {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) pour les détails d’implémentation et les types étendus de l’objet `req.auth` (`AuthInfo`).

#### Signature d’appel {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer"> & BearerAuthJwtConfig): RequestHandler;
```

Crée un gestionnaire d’authentification Bearer (middleware Express) qui vérifie le jeton d’accès (Jeton d’accès) dans l’en-tête `Authorization` de la requête en utilisant un mode de vérification prédéfini.

En mode `'jwt'`, le gestionnaire créera une fonction de vérification JWT à l’aide du JWK Set provenant de l’URI JWKS du serveur d’autorisation (Émetteur).

##### Paramètres {#parameters}

###### mode {#mode}

`"jwt"`

Le mode de vérification pour le jeton d’accès (Jeton d’accès). Actuellement, seul 'jwt' est pris en charge.

**Voir**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) pour les modes disponibles.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\> & [`BearerAuthJwtConfig`](/references/js/type-aliases/BearerAuthJwtConfig.md)

Configuration optionnelle pour le gestionnaire d’authentification Bearer, incluant les options de vérification JWT et les options du JWK Set distant.

**Voir**

 - [BearerAuthJwtConfig](/references/js/type-aliases/BearerAuthJwtConfig.md) pour les options de configuration disponibles pour la vérification JWT.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) pour les options de configuration disponibles (à l’exception de `verifyAccessToken` et `issuer`).

##### Retourne {#returns}

`RequestHandler`

Une fonction middleware Express qui vérifie le jeton d’accès (Jeton d’accès) et ajoute le résultat de la vérification à l’objet requête (`req.auth`).

##### Voir {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) pour les détails d’implémentation et les types étendus de l’objet `req.auth` (`AuthInfo`).

##### Lève {#throws}

si l’URI JWKS n’est pas fourni dans les métadonnées du serveur lors de l’utilisation du mode `'jwt'`.

***

### delegatedRouter() {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

Crée un routeur délégué qui sert le point de terminaison des métadonnées du serveur d’autorisation OAuth 2.0 (`/.well-known/oauth-authorization-server`) avec les métadonnées fournies à l’instance.

#### Retourne {#returns}

`Router`

Un routeur qui sert le point de terminaison des métadonnées du serveur d’autorisation OAuth 2.0 avec les métadonnées fournies à l’instance.

#### Exemple {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // Supposons qu’il est initialisé
app.use(mcpAuth.delegatedRouter());
```
