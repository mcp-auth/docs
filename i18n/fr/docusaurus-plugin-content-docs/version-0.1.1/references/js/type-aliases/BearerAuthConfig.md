---
sidebar_label: BearerAuthConfig
---

# Alias de type : BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer: string;
  requiredScopes?: string[];
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## Propriétés {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

L’audience attendue du jeton d’accès (Jeton d’accès (Access token)) (`aud` revendication (claim)). Il s’agit généralement du serveur de ressources
(API) auquel le jeton est destiné. Si ce champ n’est pas renseigné, la vérification de l’audience sera ignorée.

**Remarque :** Si votre serveur d’autorisation ne prend pas en charge les indicateurs de ressource (Indicateurs de ressource (Resource indicators)) (RFC 8707),
vous pouvez omettre ce champ car l’audience peut ne pas être pertinente.

#### Voir {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: string;
```

L’émetteur attendu du jeton d’accès (Jeton d’accès (Access token)) (`iss` revendication (claim)). Il doit s’agir de l’URL du
serveur d’autorisation qui a émis le jeton.

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

Un tableau des portées (Portées (Scopes)) requises que le jeton d’accès (Jeton d’accès (Access token)) doit posséder. Si le jeton ne contient pas
toutes ces portées, une erreur sera levée.

**Remarque :** Le gestionnaire vérifiera la revendication (claim) `scope` dans le jeton, qui peut être une chaîne séparée par des espaces
ou un tableau de chaînes, selon l’implémentation du serveur d’autorisation. Si la revendication `scope` n’est pas présente, le gestionnaire vérifiera la revendication `scopes`
si elle est disponible.

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

Indique s’il faut afficher des informations d’erreur détaillées dans la réponse. Ceci est utile pour le débogage
pendant le développement, mais doit être désactivé en production pour éviter de divulguer des informations sensibles.

#### Valeur par défaut {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

Type de fonction pour vérifier un jeton d’accès (Jeton d’accès (Access token)).

Cette fonction doit lever une [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) si le jeton est invalide,
ou retourner un objet AuthInfo si le jeton est valide.

#### Voir {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) pour plus de détails.
