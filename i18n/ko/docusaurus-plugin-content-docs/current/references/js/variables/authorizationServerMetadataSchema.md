---
sidebar_label: authorizationServerMetadataSchema
---

# 변수: authorizationServerMetadataSchema

```ts
const authorizationServerMetadataSchema: ZodObject<{
  authorization_endpoint: ZodString;
  code_challenge_methods_supported: ZodOptional<ZodArray<ZodString>>;
  grant_types_supported: ZodOptional<ZodArray<ZodString>>;
  introspection_endpoint: ZodOptional<ZodString>;
  introspection_endpoint_auth_methods_supported: ZodOptional<ZodArray<ZodString>>;
  introspection_endpoint_auth_signing_alg_values_supported: ZodOptional<ZodArray<ZodString>>;
  issuer: ZodString;
  jwks_uri: ZodOptional<ZodString>;
  op_policy_uri: ZodOptional<ZodString>;
  op_tos_uri: ZodOptional<ZodString>;
  registration_endpoint: ZodOptional<ZodString>;
  response_modes_supported: ZodOptional<ZodArray<ZodString>>;
  response_types_supported: ZodArray<ZodString>;
  revocation_endpoint: ZodOptional<ZodString>;
  revocation_endpoint_auth_methods_supported: ZodOptional<ZodArray<ZodString>>;
  revocation_endpoint_auth_signing_alg_values_supported: ZodOptional<ZodArray<ZodString>>;
  scopes_supported: ZodOptional<ZodArray<ZodString>>;
  service_documentation: ZodOptional<ZodString>;
  token_endpoint: ZodString;
  token_endpoint_auth_methods_supported: ZodOptional<ZodArray<ZodString>>;
  token_endpoint_auth_signing_alg_values_supported: ZodOptional<ZodArray<ZodString>>;
  ui_locales_supported: ZodOptional<ZodArray<ZodString>>;
  userinfo_endpoint: ZodOptional<ZodString>;
}, $strip>;
```

RFC 8414에서 정의된 OAuth 2.0 인가 서버 메타데이터 (Authorization Server Metadata)를 위한 Zod 스키마입니다.

## 참고 {#see}

https://datatracker.ietf.org/doc/html/rfc8414
