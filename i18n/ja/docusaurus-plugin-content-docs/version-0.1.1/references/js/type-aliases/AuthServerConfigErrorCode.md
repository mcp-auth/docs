---
sidebar_label: AuthServerConfigErrorCode
---

# 型エイリアス: AuthServerConfigErrorCode

```ts
type AuthServerConfigErrorCode = 
  | "invalid_server_metadata"
  | "code_response_type_not_supported"
  | "authorization_code_grant_not_supported"
  | "pkce_not_supported"
  | "s256_code_challenge_method_not_supported";
```

認可サーバーメタデータの検証時に発生する可能性があるエラーのコードです。