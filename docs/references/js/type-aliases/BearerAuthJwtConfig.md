---
sidebar_label: BearerAuthJwtConfig
---

# Type Alias: BearerAuthJwtConfig

```ts
type BearerAuthJwtConfig = {
  jwtVerify?: JWTVerifyOptions;
  remoteJwkSet?: RemoteJWKSetOptions;
};
```

Configuration for the Bearer auth handler when using JWT verification.

## Properties {#properties}

### jwtVerify? {#jwtverify}

```ts
optional jwtVerify: JWTVerifyOptions;
```

Options to pass to the `jose` library's `jwtVerify` function.

#### See {#see}

JWTVerifyOptions for the type definition of the options.

***

### remoteJwkSet? {#remotejwkset}

```ts
optional remoteJwkSet: RemoteJWKSetOptions;
```

Options to pass to the `jose` library's `createRemoteJWKSet` function.

#### See {#see}

RemoteJWKSetOptions for the type definition of the options.
