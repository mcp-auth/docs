---
sidebar_label: VerifyAccessTokenFunction
---

# 타입 별칭: VerifyAccessTokenFunction()

```ts
type VerifyAccessTokenFunction = (token: string) => MaybePromise<AuthInfo>;
```

액세스 토큰 (Access token)을 검증하는 함수 타입입니다.

이 함수는 토큰이 유효하지 않은 경우 [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md)를 throw 해야 하며,
토큰이 유효한 경우 AuthInfo 객체를 반환해야 합니다.

예를 들어, JWT 검증 함수가 있다면 최소한 토큰의 서명, 만료 여부를 확인하고 필요한 클레임 (Claim)을 추출하여 `AuthInfo`
객체를 반환해야 합니다.

**참고:** 다음 필드는 핸들러에서 확인하므로 토큰에서 별도로 검증할 필요가 없습니다:

- `iss` (발급자 (Issuer))
- `aud` (대상 (Audience))
- `scope` (스코프 (Scopes))

## 매개변수 {#parameters}

### token {#token}

`string`

검증할 액세스 토큰 (Access token) 문자열입니다.

## 반환값 {#returns}

`MaybePromise`\<`AuthInfo`\>

토큰이 유효한 경우 AuthInfo 객체 또는 동기 값으로 resolve 되는 프로미스입니다.