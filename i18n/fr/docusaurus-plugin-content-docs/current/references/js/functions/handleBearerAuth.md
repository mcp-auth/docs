---
sidebar_label: handleBearerAuth
---

# Fonction : handleBearerAuth()

```ts
function handleBearerAuth(param0: BearerAuthConfig): RequestHandler;
```

Crée une fonction middleware pour gérer l’authentification Bearer dans une application Express.

Ce middleware extrait le jeton Bearer de l’en-tête `Authorization`, le vérifie à l’aide de la fonction
`verifyAccessToken` fournie, et contrôle l’issuer (Émetteur), l’audience (Audience) et les portées (Scopes) requises.

- Si le jeton est valide, il ajoute les informations d’authentification à la propriété `request.auth` ;
sinon, il répond avec un message d’erreur approprié.
- Si la vérification du jeton d’accès (Jeton d’accès) échoue, il répond avec une erreur 401 Unauthorized.
- Si le jeton ne possède pas les portées (Portées) requises, il répond avec une erreur 403 Forbidden.
- Si des erreurs inattendues surviennent lors du processus d’authentification (Authentification), le middleware les relancera.

**Remarque :** L’objet `request.auth` contiendra des champs étendus par rapport à l’interface standard
AuthInfo définie dans le module `@modelcontextprotocol/sdk`. Voir l’interface étendue dans ce fichier pour plus de détails.

## Paramètres {#parameters}

### param0 {#param0}

[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md)

Configuration pour le gestionnaire d’authentification Bearer.

## Retourne {#returns}

`RequestHandler`

Une fonction middleware pour Express qui gère l’authentification Bearer.

## Voir aussi {#see}

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) pour les options de configuration.
