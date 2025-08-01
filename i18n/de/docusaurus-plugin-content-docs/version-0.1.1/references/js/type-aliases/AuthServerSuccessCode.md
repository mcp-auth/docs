---
sidebar_label: AuthServerSuccessCode
---

# Typalias: AuthServerSuccessCode

```ts
type AuthServerSuccessCode = 
  | "server_metadata_valid"
  | "dynamic_registration_supported"
  | "pkce_supported"
  | "s256_code_challenge_method_supported"
  | "authorization_code_grant_supported"
  | "code_response_type_supported";
```

Die Codes für die erfolgreiche Validierung der Metadaten des Autorisierungsservers (authorization server metadata).