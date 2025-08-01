---
sidebar_label: AuthServerConfigErrorCode
---

# 型別別名：AuthServerConfigErrorCode

```ts
type AuthServerConfigErrorCode = 
  | "invalid_server_metadata"
  | "code_response_type_not_supported"
  | "authorization_code_grant_not_supported"
  | "pkce_not_supported"
  | "s256_code_challenge_method_not_supported";
```

驗證授權伺服器（authorization server）中繼資料時可能發生的錯誤代碼。