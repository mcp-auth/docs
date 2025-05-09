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

## Properties

### jwtVerify?

```ts
optional jwtVerify: JWTVerifyOptions;
```

Options to pass to the `jose` library's `jwtVerify` function.

#### See

JWTVerifyOptions for the type definition of the options.

***

### remoteJwkSet?

```ts
optional remoteJwkSet: RemoteJWKSetOptions;
```

Options to pass to the `jose` library's `createRemoteJWKSet` function.

#### See

RemoteJWKSetOptions for the type definition of the options.
