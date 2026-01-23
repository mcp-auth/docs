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

Die camelCase-Version des OAuth 2.0 Protected Resource Metadata Zod-Schemas.

## Siehe auch {#see}

[protectedResourceMetadataSchema](/references/js/variables/protectedResourceMetadataSchema.md) für das ursprüngliche Schema und Feldinformationen.
