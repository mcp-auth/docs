---
sidebar_label: camelCaseAuthorizationServerMetadataSchema
---

# 變數：camelCaseAuthorizationServerMetadataSchema

```ts
const camelCaseAuthorizationServerMetadataSchema: ZodObject<{
  authorizationEndpoint: ZodString;
  codeChallengeMethodsSupported: ZodOptional<ZodArray<ZodString>>;
  grantTypesSupported: ZodOptional<ZodArray<ZodString>>;
  introspectionEndpoint: ZodOptional<ZodString>;
  introspectionEndpointAuthMethodsSupported: ZodOptional<ZodArray<ZodString>>;
  introspectionEndpointAuthSigningAlgValuesSupported: ZodOptional<ZodArray<ZodString>>;
  issuer: ZodString;
  jwksUri: ZodOptional<ZodString>;
  opPolicyUri: ZodOptional<ZodString>;
  opTosUri: ZodOptional<ZodString>;
  registrationEndpoint: ZodOptional<ZodString>;
  responseModesSupported: ZodOptional<ZodArray<ZodString>>;
  responseTypesSupported: ZodArray<ZodString>;
  revocationEndpoint: ZodOptional<ZodString>;
  revocationEndpointAuthMethodsSupported: ZodOptional<ZodArray<ZodString>>;
  revocationEndpointAuthSigningAlgValuesSupported: ZodOptional<ZodArray<ZodString>>;
  scopesSupported: ZodOptional<ZodArray<ZodString>>;
  serviceDocumentation: ZodOptional<ZodString>;
  tokenEndpoint: ZodString;
  tokenEndpointAuthMethodsSupported: ZodOptional<ZodArray<ZodString>>;
  tokenEndpointAuthSigningAlgValuesSupported: ZodOptional<ZodArray<ZodString>>;
  uiLocalesSupported: ZodOptional<ZodArray<ZodString>>;
  userinfoEndpoint: ZodOptional<ZodString>;
}, $strip>;
```

OAuth 2.0 授權伺服器中繼資料（Authorization Server Metadata）Zod schema 的 camelCase 版本。

## 參見 {#see}

[authorizationServerMetadataSchema](/references/js/variables/authorizationServerMetadataSchema.md) 以取得原始 schema 與欄位資訊。
