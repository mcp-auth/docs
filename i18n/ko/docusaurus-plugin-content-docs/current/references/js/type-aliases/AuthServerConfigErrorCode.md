---
sidebar_label: AuthServerConfigErrorCode
---

# 타입 별칭: AuthServerConfigErrorCode

```ts
type AuthServerConfigErrorCode = 
  | "invalid_server_metadata"
  | "code_response_type_not_supported"
  | "authorization_code_grant_not_supported"
  | "pkce_not_supported"
  | "s256_code_challenge_method_not_supported";
```

인가 서버 메타데이터를 검증할 때 발생할 수 있는 오류 코드입니다.