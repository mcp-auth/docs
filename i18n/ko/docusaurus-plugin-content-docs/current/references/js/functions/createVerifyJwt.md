---
sidebar_label: createVerifyJwt
---

# 함수: createVerifyJwt()

```ts
function createVerifyJwt(getKey: JWTVerifyGetKey, options?: JWTVerifyOptions): VerifyAccessTokenFunction;
```

제공된 키 조회 함수와 옵션을 사용하여 JWT 액세스 토큰 (Access token)을 검증하는 함수를 생성합니다.

## 매개변수 {#parameters}

### getKey {#getkey}

`JWTVerifyGetKey`

JWT를 검증하는 데 사용되는 키를 조회하는 함수입니다.

**참고**

키 조회 함수의 타입 정의는 JWTVerifyGetKey를 참고하세요.

### options? {#options}

`JWTVerifyOptions`

선택적으로 사용할 수 있는 JWT 검증 옵션입니다.

**참고**

옵션의 타입 정의는 JWTVerifyOptions를 참고하세요.

## 반환값 {#returns}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

JWT 액세스 토큰 (Access token)을 검증하고, 토큰이 유효한 경우 AuthInfo 객체를 반환하는 함수입니다. 이 함수는 JWT의 페이로드에 `iss`, `client_id`, `sub` 필드가 반드시 포함되어야 하며, 선택적으로 `scope` 또는 `scopes` 필드를 포함할 수 있습니다. JWT 검증은 내부적으로 `jose` 라이브러리를 사용하여 수행됩니다.

## 참고 {#see}

반환되는 함수의 타입 정의는 [VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md)을 참고하세요.
