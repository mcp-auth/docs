---
sidebar_label: AuthServerSuccessCode
---

# 타입 별칭: AuthServerSuccessCode

```ts
type AuthServerSuccessCode = 
  | "server_metadata_valid"
  | "dynamic_registration_supported"
  | "pkce_supported"
  | "s256_code_challenge_method_supported"
  | "authorization_code_grant_supported"
  | "code_response_type_supported";
```

인가 서버 메타데이터의 성공적인 검증을 나타내는 코드입니다.