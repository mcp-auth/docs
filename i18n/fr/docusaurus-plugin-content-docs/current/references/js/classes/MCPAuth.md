---
sidebar_label: MCPAuth
---

# Classe : MCPAuth

La classe principale de la bibliothèque mcp-auth. Elle agit comme une fabrique et un registre pour créer des politiques d'authentification pour vos ressources protégées.

Elle est initialisée avec les configurations de votre serveur et fournit une méthode `bearerAuth` pour générer un middleware Express pour l'authentification basée sur les jetons.

## Exemple {#example}

### Utilisation en mode `resource server` {#usage-in-resource-server-mode}

C'est l'approche recommandée pour les nouvelles applications.

#### Option 1 : Configuration par découverte (recommandée pour les runtimes edge) {#option-1-discovery-config-recommended-for-edge-runtimes}

Utilisez cette option lorsque vous souhaitez que les métadonnées soient récupérées à la demande. Ceci est particulièrement utile pour les runtimes edge comme Cloudflare Workers où la récupération asynchrone au niveau supérieur n'est pas autorisée.

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const resourceIdentifier = 'https://api.example.com/notes';

const mcpAuth = new MCPAuth({
  protectedResources: [
    {
      metadata: {
        resource: resourceIdentifier,
        // Passez simplement l'issuer et le type - les métadonnées seront récupérées lors de la première requête
        authorizationServers: [{ issuer: 'https://auth.logto.io/oidc', type: 'oidc' }],
        scopesSupported: ['read:notes', 'write:notes'],
      },
    },
  ],
});
```

#### Option 2 : Configuration résolue (métadonnées pré-récupérées) {#option-2-resolved-config-pre-fetched-metadata}

Utilisez cette option lorsque vous souhaitez récupérer et valider les métadonnées au démarrage.

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();
const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
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
```

#### Utilisation du middleware {#using-the-middleware}

```ts
// Montez le routeur pour gérer les métadonnées des ressources protégées
app.use(mcpAuth.protectedResourceMetadataRouter());

// Protégez un endpoint API pour la ressource configurée
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // Spécifiez à quelle ressource appartient ce endpoint
    audience: resourceIdentifier, // Optionnellement, validez la revendication 'aud'
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    res.json({ notes: [] });
  },
);
```

### Utilisation héritée en mode `authorization server` (Obsolète) {#legacy-usage-in-authorization-server-mode-deprecated}

Cette approche est prise en charge pour la rétrocompatibilité.

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth = new MCPAuth({
  // Configuration par découverte - métadonnées récupérées à la demande
  server: { issuer: 'https://auth.logto.io/oidc', type: 'oidc' },
});

// Montez le routeur pour gérer les métadonnées héritées du serveur d'autorisation
app.use(mcpAuth.delegatedRouter());

// Protégez un endpoint en utilisant la politique par défaut
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // Gérez ici la requête MCP
  },
);
```

## Constructeurs {#constructors}

### Constructeur {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

Crée une instance de MCPAuth.
Elle valide toute la configuration en amont pour échouer rapidement en cas d'erreur.

#### Paramètres {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

La configuration d'authentification.

#### Retourne {#returns}

`MCPAuth`

## Propriétés {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

La configuration d'authentification.

## Méthodes {#methods}

### bearerAuth() {#bearerauth}

#### Signature d'appel {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken">): RequestHandler;
```

Crée un gestionnaire d'authentification Bearer (middleware Express) qui vérifie le jeton d’accès (Access token) dans l'en-tête `Authorization` de la requête.

##### Paramètres {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Une fonction qui vérifie le jeton d’accès (Access token). Elle doit accepter le jeton d’accès (Access token) sous forme de chaîne et retourner une promesse (ou une valeur) qui se résout avec le résultat de la vérification.

**Voir**

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) pour la définition du type de la fonction `verifyAccessToken`.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Configuration optionnelle pour le gestionnaire d'authentification Bearer.

**Voir**

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) pour les options de configuration disponibles (à l'exclusion de `verifyAccessToken` et `issuer`).

##### Retourne {#returns}

`RequestHandler`

Une fonction middleware Express qui vérifie le jeton d’accès (Access token) et ajoute le résultat de la vérification à l'objet requête (`req.auth`).

##### Voir {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) pour les détails d'implémentation et les types étendus de l'objet `req.auth` (`AuthInfo`).

#### Signature d'appel {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

Crée un gestionnaire d'authentification Bearer (middleware Express) qui vérifie le jeton d’accès (Access token) dans l'en-tête `Authorization` de la requête en utilisant un mode de vérification prédéfini.

En mode `'jwt'`, le gestionnaire créera une fonction de vérification JWT en utilisant le JWK Set de l'URI JWKS du serveur d'autorisation.

##### Paramètres {#parameters}

###### mode {#mode}

`"jwt"`

Le mode de vérification pour le jeton d’accès (Access token). Actuellement, seul 'jwt' est pris en charge.

**Voir**

[VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) pour les modes disponibles.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

Configuration optionnelle pour le gestionnaire d'authentification Bearer, incluant les options de vérification JWT et les options du JWK Set distant.

**Voir**

 - VerifyJwtConfig pour les options de configuration disponibles pour la vérification JWT.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) pour les options de configuration disponibles (à l'exclusion de `verifyAccessToken` et `issuer`).

##### Retourne {#returns}

`RequestHandler`

Une fonction middleware Express qui vérifie le jeton d’accès (Access token) et ajoute le résultat de la vérification à l'objet requête (`req.auth`).

##### Voir {#see}

[handleBearerAuth](/references/js/functions/handleBearerAuth.md) pour les détails d'implémentation et les types étendus de l'objet `req.auth` (`AuthInfo`).

##### Lève {#throws}

si l'URI JWKS n'est pas fourni dans les métadonnées du serveur lors de l'utilisation du mode `'jwt'`.

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

Crée un routeur délégué pour servir l'endpoint hérité des métadonnées du serveur d'autorisation OAuth 2.0 (`/.well-known/oauth-authorization-server`) avec les métadonnées fournies à l'instance.

#### Retourne {#returns}

`Router`

Un routeur qui sert l'endpoint des métadonnées du serveur d'autorisation OAuth 2.0 avec les métadonnées fournies à l'instance.

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

Crée un routeur qui sert l'endpoint OAuth 2.0 des métadonnées des ressources protégées pour toutes les ressources configurées.

Ce routeur crée automatiquement les bons endpoints `.well-known` pour chaque identifiant de ressource fourni dans votre configuration.

#### Retourne {#returns}

`Router`

Un routeur qui sert l'endpoint OAuth 2.0 des métadonnées des ressources protégées.

#### Lève {#throws}

Si appelé en mode `authorization server`.

#### Exemple {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// Supposons que mcpAuth est initialisé avec une ou plusieurs configurations `protectedResources`
const mcpAuth: MCPAuth;
const app = express();

// Ceci servira les métadonnées à `/.well-known/oauth-protected-resource/...`
// en fonction de vos identifiants de ressources.
app.use(mcpAuth.protectedResourceMetadataRouter());
```
