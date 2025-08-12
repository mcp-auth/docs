---
sidebar_label: MCPAuth
---

# Classe : MCPAuth

La classe principale de la bibliothèque mcp-auth. Elle agit comme une fabrique et un registre pour créer des politiques d’authentification pour vos ressources protégées.

Elle est initialisée avec vos configurations serveur et fournit une méthode `bearerAuth` pour générer un middleware Express pour l’authentification basée sur les jetons.

## Exemple {#example}

### Utilisation en mode `resource server` {#usage-in-resource-server-mode}

C’est l’approche recommandée pour les nouvelles applications.

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();

const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
  // `protectedResources` peut être un seul objet de configuration ou un tableau de ceux-ci.
  protectedResources: [
    {
      metadata: {
        resource: resourceIdentifier,
        authorizationServers: [authServerConfig],
        scopesSupported: ['read:notes', 'write:notes'],
      },
    },
  ],
});

// Monter le routeur pour gérer les métadonnées des ressources protégées
app.use(mcpAuth.protectedResourceMetadataRouter());

// Protéger un point de terminaison API pour la ressource configurée
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // Spécifiez à quelle ressource ce point de terminaison appartient
    audience: resourceIdentifier, // Facultatif, valider la revendication 'aud'
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Infos Auth :', req.auth);
    res.json({ notes: [] });
  },
);
```

### Utilisation héritée en mode `authorization server` (Obsolète) {#legacy-usage-in-authorization-server-mode-deprecated}

Cette approche est prise en charge pour la rétrocompatibilité.

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

// Monter le routeur pour gérer les métadonnées héritées du serveur d’autorisation
app.use(mcpAuth.delegatedRouter());

// Protéger un point de terminaison en utilisant la politique par défaut
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Infos Auth :', req.auth);
    // Traiter la requête MCP ici
  },
);
```

## Constructeurs {#constructors}

### Constructeur {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

Crée une instance de MCPAuth.
Elle valide toute la configuration en amont pour échouer rapidement en cas d’erreur.

#### Paramètres {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

La configuration d’authentification.

#### Retourne {#returns}

`MCPAuth`

## Propriétés {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

La configuration d’authentification.

## Méthodes {#methods}

### bearerAuth() {#bearerauth}

#### Signature d’appel {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken">): RequestHandler;
```

Crée un gestionnaire d’authentification Bearer (middleware Express) qui vérifie le jeton d’accès dans l’en-tête
`Authorization` de la requête.

##### Paramètres {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Une fonction qui vérifie le jeton d’accès. Elle doit accepter le
jeton d’accès sous forme de chaîne et retourner une promesse (ou une valeur) qui se résout avec le résultat de la vérification.

**Voir**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) pour la définition du type de la fonction
`verifyAccessToken`.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Configuration optionnelle pour le gestionnaire d’authentification Bearer.

**Voir**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) pour les options de configuration disponibles (à l’exception de
`verifyAccessToken` et `issuer`).

##### Retourne {#returns}

`RequestHandler`

Une fonction middleware Express qui vérifie le jeton d’accès et ajoute le
résultat de la vérification à l’objet requête (`req.auth`).

##### Voir {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) pour les détails d’implémentation et les types étendus de l’objet
`req.auth` (`AuthInfo`).

#### Signature d’appel {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

Crée un gestionnaire d’authentification Bearer (middleware Express) qui vérifie le jeton d’accès dans l’en-tête
`Authorization` de la requête en utilisant un mode de vérification prédéfini.

En mode `'jwt'`, le gestionnaire créera une fonction de vérification JWT en utilisant le JWK Set
depuis l’URI JWKS du serveur d’autorisation.

##### Paramètres {#parameters}

###### mode {#mode}

`"jwt"`

Le mode de vérification pour le jeton d’accès. Actuellement, seul 'jwt' est pris en charge.

**Voir**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) pour les modes disponibles.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

Configuration optionnelle pour le gestionnaire d’authentification Bearer, incluant les options de vérification JWT et
les options du JWK Set distant.

**Voir**

 - VerifyJwtConfig pour les options de configuration disponibles pour la
vérification JWT.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) pour les options de configuration disponibles (à l’exception de
`verifyAccessToken` et `issuer`).

##### Retourne {#returns}

`RequestHandler`

Une fonction middleware Express qui vérifie le jeton d’accès et ajoute le
résultat de la vérification à l’objet requête (`req.auth`).

##### Voir {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) pour les détails d’implémentation et les types étendus de l’objet
`req.auth` (`AuthInfo`).

##### Lève {#throws}

si l’URI JWKS n’est pas fourni dans les métadonnées du serveur lors de
l’utilisation du mode `'jwt'`.

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

Crée un routeur délégué pour servir le point de terminaison hérité OAuth 2.0 Authorization Server Metadata
(`/.well-known/oauth-authorization-server`) avec les métadonnées fournies à l’instance.

#### Retourne {#returns}

`Router`

Un routeur qui sert le point de terminaison OAuth 2.0 Authorization Server Metadata avec les
métadonnées fournies à l’instance.

#### Obsolète {#deprecated}

Utilisez [protectedResourceMetadataRouter](/references/js/classes/MCPAuth.md#protectedresourcemetadatarouter) à la place.

#### Exemple {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // Supposons que ceci est initialisé
app.use(mcpAuth.delegatedRouter());
```

#### Lève {#throws}

Si appelé en mode `resource server`.

***

### protectedResourceMetadataRouter() {#protectedresourcemetadatarouter}

```ts
protectedResourceMetadataRouter(): Router;
```

Crée un routeur qui sert le point de terminaison OAuth 2.0 Protected Resource Metadata
pour toutes les ressources configurées.

Ce routeur crée automatiquement les bons points de terminaison `.well-known` pour chaque
identifiant de ressource fourni dans votre configuration.

#### Retourne {#returns}

`Router`

Un routeur qui sert le point de terminaison OAuth 2.0 Protected Resource Metadata.

#### Lève {#throws}

Si appelé en mode `authorization server`.

#### Exemple {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// Supposons que mcpAuth est initialisé avec une ou plusieurs configurations `protectedResources`
const mcpAuth: MCPAuth;
const app = express();

// Cela servira les métadonnées à `/.well-known/oauth-protected-resource/...`
// selon vos identifiants de ressources.
app.use(mcpAuth.protectedResourceMetadataRouter());
```
