---
sidebar_label: camelCaseAuthorizationServerMetadataSchema
---

# Variável: camelCaseAuthorizationServerMetadataSchema

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

A versão camelCase do schema Zod de Metadados do Servidor de Autorização OAuth 2.0.

## Veja também {#see}

[authorizationServerMetadataSchema](/references/js/variables/authorizationServerMetadataSchema.md) para o schema original e informações dos campos.