---
sidebar_label: BearerAuthJwtConfig
---

# Alias de Tipo: BearerAuthJwtConfig

```ts
type BearerAuthJwtConfig = {
  jwtVerify?: JWTVerifyOptions;
  remoteJwkSet?: RemoteJWKSetOptions;
};
```

Configuração para o manipulador de autenticação Bearer ao usar verificação JWT.

## Propriedades {#properties}

### jwtVerify? {#jwtverify}

```ts
optional jwtVerify: JWTVerifyOptions;
```

Opções para passar para a função `jwtVerify` da biblioteca `jose`.

#### Veja também {#see}

JWTVerifyOptions para a definição do tipo das opções.

***

### remoteJwkSet? {#remotejwkset}

```ts
optional remoteJwkSet: RemoteJWKSetOptions;
```

Opções para passar para a função `createRemoteJWKSet` da biblioteca `jose`.

#### Veja também {#see}

RemoteJWKSetOptions para a definição do tipo das opções.