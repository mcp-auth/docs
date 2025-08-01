---
sidebar_label: AuthServerConfigErrorCode
---

# Alias de Tipo: AuthServerConfigErrorCode

```ts
type AuthServerConfigErrorCode = 
  | "invalid_server_metadata"
  | "code_response_type_not_supported"
  | "authorization_code_grant_not_supported"
  | "pkce_not_supported"
  | "s256_code_challenge_method_not_supported";
```

Os códigos para erros que podem ocorrer ao validar os metadados do servidor de autorização.