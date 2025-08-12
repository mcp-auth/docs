---
sidebar_label: BearerAuthConfig
---

# Alias de type : BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer:   | string
     | ValidateIssuerFunction;
  requiredScopes?: string[];
  resource?: string;
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## Propriétés {#properties}

### audience ? {#audience}

```ts
optional audience: string;
```

L’audience attendue du jeton d’accès (Jeton d’accès (Access token)) (`aud` revendication (claim)). Il s’agit généralement du serveur de ressources (API) pour lequel le jeton est destiné. Si non fourni, la vérification de l’audience sera ignorée.

**Remarque :** Si votre serveur d’autorisation ne prend pas en charge les indicateurs de ressource (Indicateurs de ressource (Resource indicators)) (RFC 8707), vous pouvez omettre ce champ car l’audience peut ne pas être pertinente.

#### Voir {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: 
  | string
  | ValidateIssuerFunction;
```

Une chaîne représentant un émetteur (Émetteur (Issuer)) valide, ou une fonction pour valider l’émetteur du jeton d’accès (Jeton d’accès (Access token)).

Si une chaîne est fournie, elle sera utilisée comme valeur d’émetteur attendue pour une comparaison directe.

Si une fonction est fournie, elle doit valider l’émetteur selon les règles de
[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md).

#### Voir {#see}

[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) pour plus de détails sur la fonction de validation.

***

### requiredScopes ? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

Un tableau des portées (Portées (Scopes)) requises que le jeton d’accès (Jeton d’accès (Access token)) doit posséder. Si le jeton ne contient pas toutes ces portées, une erreur sera levée.

**Remarque :** Le gestionnaire vérifiera la revendication (claim) `scope` dans le jeton, qui peut être une chaîne séparée par des espaces ou un tableau de chaînes, selon l’implémentation du serveur d’autorisation. Si la revendication `scope` n’est pas présente, le gestionnaire vérifiera la revendication `scopes` si elle est disponible.

***

### resource ? {#resource}

```ts
optional resource: string;
```

L’identifiant de la ressource protégée. Lorsqu’il est fourni, le gestionnaire utilisera les serveurs d’autorisation configurés pour cette ressource afin de valider le jeton reçu.
Ce champ est requis lors de l’utilisation du gestionnaire avec une configuration `protectedResources`.

***

### showErrorDetails ? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

Indique s’il faut afficher des informations d’erreur détaillées dans la réponse. Ceci est utile pour le débogage pendant le développement, mais doit être désactivé en production pour éviter de divulguer des informations sensibles.

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

Cette fonction doit lever une [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) si le jeton est invalide, ou retourner un objet AuthInfo si le jeton est valide.

#### Voir {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) pour plus de détails.
