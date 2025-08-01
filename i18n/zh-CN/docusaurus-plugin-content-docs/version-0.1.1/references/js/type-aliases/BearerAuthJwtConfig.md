---
sidebar_label: BearerAuthJwtConfig
---

# 类型别名：BearerAuthJwtConfig

```ts
type BearerAuthJwtConfig = {
  jwtVerify?: JWTVerifyOptions;
  remoteJwkSet?: RemoteJWKSetOptions;
};
```

用于 JWT 验证时 Bearer 认证 (Authentication) 处理器的配置。

## 属性 {#properties}

### jwtVerify? {#jwtverify}

```ts
optional jwtVerify: JWTVerifyOptions;
```

传递给 `jose` 库的 `jwtVerify` 函数的选项。

#### 参见 {#see}

JWTVerifyOptions，用于选项的类型定义。

***

### remoteJwkSet? {#remotejwkset}

```ts
optional remoteJwkSet: RemoteJWKSetOptions;
```

传递给 `jose` 库的 `createRemoteJWKSet` 函数的选项。

#### 参见 {#see}

RemoteJWKSetOptions，用于选项的类型定义。
