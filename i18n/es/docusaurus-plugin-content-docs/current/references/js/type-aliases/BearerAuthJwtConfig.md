---
sidebar_label: BearerAuthJwtConfig
---

# Alias de tipo: BearerAuthJwtConfig

```ts
type BearerAuthJwtConfig = {
  jwtVerify?: JWTVerifyOptions;
  remoteJwkSet?: RemoteJWKSetOptions;
};
```

Configuración para el manejador de autenticación Bearer al usar la verificación JWT.

## Propiedades {#properties}

### jwtVerify? {#jwtverify}

```ts
optional jwtVerify: JWTVerifyOptions;
```

Opciones para pasar a la función `jwtVerify` de la librería `jose`.

#### Ver {#see}

JWTVerifyOptions para la definición de tipo de las opciones.

***

### remoteJwkSet? {#remotejwkset}

```ts
optional remoteJwkSet: RemoteJWKSetOptions;
```

Opciones para pasar a la función `createRemoteJWKSet` de la librería `jose`.

#### Ver {#see}

RemoteJWKSetOptions para la definición de tipo de las opciones.