---
sidebar_label: camelCaseProtectedResourceMetadataSchema
---

# 変数: camelCaseProtectedResourceMetadataSchema

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

OAuth 2.0 Protected Resource Metadata Zod スキーマの camelCase バージョンです。

## 参照 {#see}

元のスキーマおよびフィールド情報については、 [protectedResourceMetadataSchema](/references/js/variables/protectedResourceMetadataSchema.md) を参照してください。
