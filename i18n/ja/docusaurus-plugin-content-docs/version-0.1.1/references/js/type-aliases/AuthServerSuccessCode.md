---
sidebar_label: AuthServerSuccessCode
---

# 型エイリアス: AuthServerSuccessCode

```ts
type AuthServerSuccessCode = 
  | "server_metadata_valid"
  | "dynamic_registration_supported"
  | "pkce_supported"
  | "s256_code_challenge_method_supported"
  | "authorization_code_grant_supported"
  | "code_response_type_supported";
```

認可サーバーメタデータの検証が成功した場合のコードです。