---
sidebar_label: camelCaseProtectedResourceMetadataSchema
---

# Variable : camelCaseProtectedResourceMetadataSchema

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

La version camelCase du schéma Zod OAuth 2.0 Protected Resource Metadata.

## Voir aussi {#see}

[protectedResourceMetadataSchema](/references/js/variables/protectedResourceMetadataSchema.md) pour le schéma original et les informations sur les champs.
