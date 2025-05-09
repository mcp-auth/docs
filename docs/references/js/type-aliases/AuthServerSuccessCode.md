---
sidebar_label: AuthServerSuccessCode
---

# Type Alias: AuthServerSuccessCode

```ts
type AuthServerSuccessCode = 
  | "server_metadata_valid"
  | "dynamic_registration_supported"
  | "pkce_supported"
  | "s256_code_challenge_method_supported"
  | "authorization_code_grant_supported"
  | "code_response_type_supported";
```

The codes for successful validation of the authorization server metadata.
