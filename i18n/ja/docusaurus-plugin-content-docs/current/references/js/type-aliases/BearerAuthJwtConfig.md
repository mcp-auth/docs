---
sidebar_label: BearerAuthJwtConfig
---

# 型エイリアス: BearerAuthJwtConfig

```ts
type BearerAuthJwtConfig = {
  jwtVerify?: JWTVerifyOptions;
  remoteJwkSet?: RemoteJWKSetOptions;
};
```

JWT 検証を使用する場合の Bearer 認証ハンドラーの設定。

## プロパティ {#properties}

### jwtVerify? {#jwtverify}

```ts
optional jwtVerify: JWTVerifyOptions;
```

`jose` ライブラリの `jwtVerify` 関数に渡すオプション。

#### 参照 {#see}

JWTVerifyOptions の型定義を参照してください。

***

### remoteJwkSet? {#remotejwkset}

```ts
optional remoteJwkSet: RemoteJWKSetOptions;
```

`jose` ライブラリの `createRemoteJWKSet` 関数に渡すオプション。

#### 参照 {#see}

RemoteJWKSetOptions の型定義を参照してください。
