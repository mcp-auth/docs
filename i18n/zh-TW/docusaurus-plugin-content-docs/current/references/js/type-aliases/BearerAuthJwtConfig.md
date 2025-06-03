---
sidebar_label: BearerAuthJwtConfig
---

# 型別別名：BearerAuthJwtConfig (Type Alias: BearerAuthJwtConfig)

```ts
type BearerAuthJwtConfig = {
  jwtVerify?: JWTVerifyOptions;
  remoteJwkSet?: RemoteJWKSetOptions;
};
```

使用 JWT 驗證時，Bearer 驗證 (Bearer auth) 處理器的設定。

## 屬性 (Properties) {#properties}

### jwtVerify? {#jwtverify}

```ts
optional jwtVerify: JWTVerifyOptions;
```

傳遞給 `jose` 函式庫 `jwtVerify` 函式的選項。

#### 參見 (See) {#see}

JWTVerifyOptions，該選項的型別定義。

***

### remoteJwkSet? {#remotejwkset}

```ts
optional remoteJwkSet: RemoteJWKSetOptions;
```

傳遞給 `jose` 函式庫 `createRemoteJWKSet` 函式的選項。

#### 參見 (See) {#see}

RemoteJWKSetOptions，該選項的型別定義。
