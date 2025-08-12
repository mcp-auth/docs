---
sidebar_label: ValidateIssuerFunction
---

# 타입 별칭: ValidateIssuerFunction()

```ts
type ValidateIssuerFunction = (tokenIssuer: string) => void;
```

액세스 토큰 (Access token)의 발급자 (Issuer)를 검증하는 함수 타입입니다.

이 함수는 발급자가 유효하지 않은 경우 코드가 'invalid_issuer'인 [MCPAuthBearerAuthError](/references/js/classes/MCPAuthBearerAuthError.md)를 throw해야 합니다. 발급자는 다음을 기준으로 검증되어야 합니다:

1. MCP-Auth의 인증 서버 메타데이터에 구성된 인가 서버 (Authorization server)
2. 보호된 리소스의 메타데이터에 나열된 인가 서버 (Authorization server)

## 매개변수 {#parameters}

### tokenIssuer {#tokenissuer}

`string`

## 반환값 {#returns}

`void`

## 예외 발생 {#throws}

발급자가 인식되지 않거나 유효하지 않은 경우 예외가 발생합니다.
