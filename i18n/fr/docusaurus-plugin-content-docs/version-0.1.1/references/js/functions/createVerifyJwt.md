---
sidebar_label: createVerifyJwt
---

# Fonction : createVerifyJwt()

```ts
function createVerifyJwt(getKey: JWTVerifyGetKey, options?: JWTVerifyOptions): VerifyAccessTokenFunction;
```

Crée une fonction pour vérifier les jetons d’accès JWT (Access token) en utilisant la fonction de récupération de clé fournie et les options.

## Paramètres {#parameters}

### getKey {#getkey}

`JWTVerifyGetKey`

La fonction permettant de récupérer la clé utilisée pour vérifier le JWT.

**Voir**

JWTVerifyGetKey pour la définition du type de la fonction de récupération de clé.

### options? {#options}

`JWTVerifyOptions`

Options facultatives de vérification du JWT.

**Voir**

JWTVerifyOptions pour la définition du type des options.

## Retourne {#returns}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

Une fonction qui vérifie les jetons d’accès JWT (Access token) et retourne un objet AuthInfo si le jeton est valide. Elle exige que le JWT contienne les champs `iss`, `client_id` et `sub` dans sa charge utile, et peut éventuellement contenir les champs `scope` ou `scopes`. La fonction utilise la bibliothèque `jose` en interne pour effectuer la vérification du JWT.

## Voir {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) pour la définition du type de la fonction retournée.
