---
sidebar_label: protectedResourceMetadataSchema
---

# Variable: protectedResourceMetadataSchema

```ts
const protectedResourceMetadataSchema: ZodObject<{
  authorization_details_types_supported: ZodOptional<ZodArray<ZodString>>;
  authorization_servers: ZodOptional<ZodArray<ZodString>>;
  bearer_methods_supported: ZodOptional<ZodArray<ZodString>>;
  dpop_bound_access_tokens_required: ZodOptional<ZodBoolean>;
  dpop_signing_alg_values_supported: ZodOptional<ZodArray<ZodString>>;
  jwks_uri: ZodOptional<ZodString>;
  resource: ZodString;
  resource_documentation: ZodOptional<ZodString>;
  resource_name: ZodOptional<ZodString>;
  resource_policy_uri: ZodOptional<ZodString>;
  resource_signing_alg_values_supported: ZodOptional<ZodArray<ZodString>>;
  resource_tos_uri: ZodOptional<ZodString>;
  scopes_supported: ZodOptional<ZodArray<ZodString>>;
  signed_metadata: ZodOptional<ZodString>;
  tls_client_certificate_bound_access_tokens: ZodOptional<ZodBoolean>;
}, $strip>;
```

Zod-Schema für OAuth 2.0 Geschützte Ressourcen-Metadaten (OAuth 2.0 Protected Resource Metadata).
