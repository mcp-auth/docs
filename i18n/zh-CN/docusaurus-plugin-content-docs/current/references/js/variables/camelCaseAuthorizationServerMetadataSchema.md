---
sidebar_label: camelCaseAuthorizationServerMetadataSchema
---

# 变量：camelCaseAuthorizationServerMetadataSchema

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

OAuth 2.0 授权服务器元数据 Zod schema 的 camelCase 版本。

## 参见 {#see}

[authorizationServerMetadataSchema](/references/js/variables/authorizationServerMetadataSchema.md) 以获取原始 schema 和字段信息。
