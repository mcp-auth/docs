---
sidebar_label: VerifyAccessTokenFunction
---

# Alias de type : VerifyAccessTokenFunction()

```ts
type VerifyAccessTokenFunction = (token: string) => MaybePromise<AuthInfo>;
```

Type de fonction pour vérifier un jeton d’accès (Access token).

Cette fonction doit lever une [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) si le jeton est invalide,
ou retourner un objet AuthInfo si le jeton est valide.

Par exemple, si vous disposez d'une fonction de vérification JWT, elle doit au minimum vérifier la signature du jeton,
valider son expiration et extraire les revendications (Claims) nécessaires pour retourner un objet `AuthInfo`.

**Remarque :** Il n'est pas nécessaire de vérifier les champs suivants dans le jeton, car ils seront contrôlés
par le gestionnaire :

- `iss` (Émetteur / Issuer)
- `aud` (Audience)
- `scope` (Portées / Scopes)

## Paramètres {#parameters}

### token {#token}

`string`

La chaîne du jeton d’accès (Access token) à vérifier.

## Retourne {#returns}

`MaybePromise`\<`AuthInfo`\>

Une promesse qui se résout en un objet AuthInfo ou une valeur synchrone si le
jeton est valide.
