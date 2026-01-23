---
sidebar_label: authorizationServerMetadataSchema
---

# 変数: authorizationServerMetadataSchema

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

RFC 8414 で定義されている OAuth 2.0 認可サーバーメタデータ (Authorization Server Metadata) 用の Zod スキーマです。

## 参照 {#see}

https://datatracker.ietf.org/doc/html/rfc8414
