---
sidebar_label: BearerAuthJwtConfig
---

# Typalias: BearerAuthJwtConfig

```ts
type BearerAuthJwtConfig = {
  jwtVerify?: JWTVerifyOptions;
  remoteJwkSet?: RemoteJWKSetOptions;
};
```

Konfiguration für den Bearer-Auth-Handler bei Verwendung der JWT-Verifizierung.

## Eigenschaften {#properties}

### jwtVerify? {#jwtverify}

```ts
optional jwtVerify: JWTVerifyOptions;
```

Optionen, die an die `jwtVerify`-Funktion der `jose`-Bibliothek übergeben werden.

#### Siehe {#see}

JWTVerifyOptions für die Typdefinition der Optionen.

***

### remoteJwkSet? {#remotejwkset}

```ts
optional remoteJwkSet: RemoteJWKSetOptions;
```

Optionen, die an die `createRemoteJWKSet`-Funktion der `jose`-Bibliothek übergeben werden.

#### Siehe {#see}

RemoteJWKSetOptions für die Typdefinition der Optionen.
