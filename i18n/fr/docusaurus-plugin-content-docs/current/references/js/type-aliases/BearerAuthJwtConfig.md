---
sidebar_label: BearerAuthJwtConfig
---

# Alias de type : BearerAuthJwtConfig

```ts
type BearerAuthJwtConfig = {
  jwtVerify?: JWTVerifyOptions;
  remoteJwkSet?: RemoteJWKSetOptions;
};
```

Configuration pour le gestionnaire d'authentification Bearer lors de l'utilisation de la vérification JWT.

## Propriétés {#properties}

### jwtVerify ? {#jwtverify}

```ts
optional jwtVerify: JWTVerifyOptions;
```

Options à transmettre à la fonction `jwtVerify` de la bibliothèque `jose`.

#### Voir {#see}

JWTVerifyOptions pour la définition du type des options.

***

### remoteJwkSet ? {#remotejwkset}

```ts
optional remoteJwkSet: RemoteJWKSetOptions;
```

Options à transmettre à la fonction `createRemoteJWKSet` de la bibliothèque `jose`.

#### Voir {#see}

RemoteJWKSetOptions pour la définition du type des options.
