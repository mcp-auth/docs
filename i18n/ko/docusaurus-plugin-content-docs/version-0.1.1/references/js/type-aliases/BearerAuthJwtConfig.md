---
sidebar_label: BearerAuthJwtConfig
---

# 타입 별칭: BearerAuthJwtConfig

```ts
type BearerAuthJwtConfig = {
  jwtVerify?: JWTVerifyOptions;
  remoteJwkSet?: RemoteJWKSetOptions;
};
```

JWT 검증을 사용할 때 Bearer 인증 핸들러를 위한 구성입니다.

## 속성(Properties) {#properties}

### jwtVerify? {#jwtverify}

```ts
optional jwtVerify: JWTVerifyOptions;
```

`jose` 라이브러리의 `jwtVerify` 함수에 전달할 옵션입니다.

#### 참고(See) {#see}

옵션의 타입 정의는 JWTVerifyOptions를 참고하세요.

***

### remoteJwkSet? {#remotejwkset}

```ts
optional remoteJwkSet: RemoteJWKSetOptions;
```

`jose` 라이브러리의 `createRemoteJWKSet` 함수에 전달할 옵션입니다.

#### 참고(See) {#see}

옵션의 타입 정의는 RemoteJWKSetOptions를 참고하세요.
