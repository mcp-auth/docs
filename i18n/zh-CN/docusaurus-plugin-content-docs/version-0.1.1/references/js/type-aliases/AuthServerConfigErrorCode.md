---
sidebar_label: AuthServerConfigErrorCode
---

# 类型别名：AuthServerConfigErrorCode

```ts
type AuthServerConfigErrorCode = 
  | "invalid_server_metadata"
  | "code_response_type_not_supported"
  | "authorization_code_grant_not_supported"
  | "pkce_not_supported"
  | "s256_code_challenge_method_not_supported";
```

在验证授权服务器元数据时可能出现的错误代码。