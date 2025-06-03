---
sidebar_label: AuthServerConfigErrorCode
---

# Alias de tipo: AuthServerConfigErrorCode

```ts
type AuthServerConfigErrorCode = 
  | "invalid_server_metadata"
  | "code_response_type_not_supported"
  | "authorization_code_grant_not_supported"
  | "pkce_not_supported"
  | "s256_code_challenge_method_not_supported";
```

Los códigos para los errores que pueden ocurrir al validar los metadatos del servidor de autorización.