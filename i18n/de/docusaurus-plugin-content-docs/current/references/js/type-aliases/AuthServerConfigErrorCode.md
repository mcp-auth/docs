---
sidebar_label: AuthServerConfigErrorCode
---

# Typalias: AuthServerConfigErrorCode

```ts
type AuthServerConfigErrorCode = 
  | "invalid_server_metadata"
  | "code_response_type_not_supported"
  | "authorization_code_grant_not_supported"
  | "pkce_not_supported"
  | "s256_code_challenge_method_not_supported";
```

Die Codes für Fehler, die bei der Validierung der Metadaten des Autorisierungsservers auftreten können.