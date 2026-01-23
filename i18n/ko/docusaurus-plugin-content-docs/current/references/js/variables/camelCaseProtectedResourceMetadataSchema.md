---
sidebar_label: camelCaseProtectedResourceMetadataSchema
---

# 변수: camelCaseProtectedResourceMetadataSchema

```ts
const camelCaseProtectedResourceMetadataSchema: ZodObject<{
  authorizationDetailsTypesSupported: ZodOptional<ZodArray<ZodString>>;
  authorizationServers: ZodOptional<ZodArray<ZodString>>;
  bearerMethodsSupported: ZodOptional<ZodArray<ZodString>>;
  dpopBoundAccessTokensRequired: ZodOptional<ZodBoolean>;
  dpopSigningAlgValuesSupported: ZodOptional<ZodArray<ZodString>>;
  jwksUri: ZodOptional<ZodString>;
  resource: ZodString;
  resourceDocumentation: ZodOptional<ZodString>;
  resourceName: ZodOptional<ZodString>;
  resourcePolicyUri: ZodOptional<ZodString>;
  resourceSigningAlgValuesSupported: ZodOptional<ZodArray<ZodString>>;
  resourceTosUri: ZodOptional<ZodString>;
  scopesSupported: ZodOptional<ZodArray<ZodString>>;
  signedMetadata: ZodOptional<ZodString>;
  tlsClientCertificateBoundAccessTokens: ZodOptional<ZodBoolean>;
}, $strip>;
```

OAuth 2.0 불투명 토큰 (Opaque token) 보호 리소스 메타데이터 Zod 스키마의 camelCase 버전입니다.

## 참고 {#see}

원본 스키마 및 필드 정보는 [protectedResourceMetadataSchema](/references/js/variables/protectedResourceMetadataSchema.md) 를 참고하세요.
