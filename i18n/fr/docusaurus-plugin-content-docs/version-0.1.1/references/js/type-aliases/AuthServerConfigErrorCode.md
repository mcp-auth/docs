---
sidebar_label: AuthServerConfigErrorCode
---

# Alias de type : AuthServerConfigErrorCode

```ts
type AuthServerConfigErrorCode = 
  | "invalid_server_metadata"
  | "code_response_type_not_supported"
  | "authorization_code_grant_not_supported"
  | "pkce_not_supported"
  | "s256_code_challenge_method_not_supported";
```

Les codes des erreurs pouvant survenir lors de la validation des métadonnées du serveur d’autorisation.