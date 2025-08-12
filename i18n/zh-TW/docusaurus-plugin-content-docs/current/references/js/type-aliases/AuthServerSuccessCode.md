---
sidebar_label: AuthServerSuccessCode
---

# 型別別名：AuthServerSuccessCode

```ts
type AuthServerSuccessCode = 
  | "server_metadata_valid"
  | "dynamic_registration_supported"
  | "pkce_supported"
  | "s256_code_challenge_method_supported"
  | "authorization_code_grant_supported"
  | "code_response_type_supported";
```

授權伺服器中繼資料驗證成功時所使用的代碼 (The codes for successful validation of the authorization server metadata)。