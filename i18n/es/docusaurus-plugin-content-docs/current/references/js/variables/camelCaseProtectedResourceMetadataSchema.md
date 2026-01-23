---
sidebar_label: camelCaseProtectedResourceMetadataSchema
---

# Variable: camelCaseProtectedResourceMetadataSchema

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

La versión en camelCase del esquema Zod de metadatos de recursos protegidos de OAuth 2.0.

## Ver {#see}

[protectedResourceMetadataSchema](/references/js/variables/protectedResourceMetadataSchema.md) para el esquema original e información de los campos.