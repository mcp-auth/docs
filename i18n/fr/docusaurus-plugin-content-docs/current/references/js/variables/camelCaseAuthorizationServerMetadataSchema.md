---
sidebar_label: camelCaseAuthorizationServerMetadataSchema
---

# Variable : camelCaseAuthorizationServerMetadataSchema

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

La version camelCase du schéma Zod des métadonnées du serveur d’autorisation OAuth 2.0.

## Voir aussi {#see}

[authorizationServerMetadataSchema](/references/js/variables/authorizationServerMetadataSchema.md) pour le schéma original et les informations sur les champs.
