---
sidebar_label: handleBearerAuth
---

# 함수: handleBearerAuth()

```ts
function handleBearerAuth(param0: BearerAuthConfig): RequestHandler;
```

Express 애플리케이션에서 Bearer 인증 (Authentication)을 처리하기 위한 미들웨어 함수를 생성합니다.

이 미들웨어는 `Authorization` 헤더에서 Bearer 토큰을 추출하고, 제공된 `verifyAccessToken` 함수를 사용하여 토큰을 검증하며, 발급자 (Issuer), 대상 (Audience), 그리고 필요한 스코프 (Scope)를 확인합니다.

- 토큰이 유효하면 인증 (Authentication) 정보를 `request.auth` 속성에 추가합니다.
  유효하지 않은 경우 적절한 오류 메시지로 응답합니다.
- 액세스 토큰 (Access token) 검증에 실패하면 401 Unauthorized 오류로 응답합니다.
- 토큰에 필요한 스코프 (Scope)가 없으면 403 Forbidden 오류로 응답합니다.
- 인증 (Authentication) 과정에서 예기치 않은 오류가 발생하면, 미들웨어가 해당 오류를 다시 throw 합니다.

**참고:**  `request.auth` 객체는 `@modelcontextprotocol/sdk` 모듈에 정의된 표준 AuthInfo 인터페이스보다 확장된 필드를 포함합니다. 자세한 내용은 이 파일의 확장 인터페이스를 참고하세요.

## 매개변수 {#parameters}

### param0 {#param0}

[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md)

Bearer 인증 (Authentication) 핸들러를 위한 구성입니다.

## 반환값 {#returns}

`RequestHandler`

Bearer 인증 (Authentication)을 처리하는 Express용 미들웨어 함수입니다.

## 참고 {#see}

구성 옵션에 대해서는 [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md)를 참고하세요.
