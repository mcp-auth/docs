---
sidebar_label: ProtectedResourceMetadata
---

# Type Alias: ProtectedResourceMetadata

```ts
type ProtectedResourceMetadata = {
  authorization_details_types_supported?: string[];
  authorization_servers?: string[];
  bearer_methods_supported?: string[];
  dpop_bound_access_tokens_required?: boolean;
  dpop_signing_alg_values_supported?: string[];
  jwks_uri?: string;
  resource: string;
  resource_documentation?: string;
  resource_name?: string;
  resource_policy_uri?: string;
  resource_signing_alg_values_supported?: string[];
  resource_tos_uri?: string;
  scopes_supported?: string[];
  signed_metadata?: string;
  tls_client_certificate_bound_access_tokens?: boolean;
};
```

Schema for OAuth 2.0 Protected Resource Metadata.

## Type declaration {#type-declaration}

### authorization\_details\_types\_supported? {#authorization-details-types-supported}

```ts
optional authorization_details_types_supported: string[];
```

Authorization details type values supported when using the authorization_details request parameter.

### authorization\_servers? {#authorization-servers}

```ts
optional authorization_servers: string[];
```

List of OAuth authorization server issuer identifiers that can be used with this protected resource.

### bearer\_methods\_supported? {#bearer-methods-supported}

```ts
optional bearer_methods_supported: string[];
```

Supported methods for sending OAuth 2.0 bearer tokens. Values: ["header", "body", "query"].

### dpop\_bound\_access\_tokens\_required? {#dpop-bound-access-tokens-required}

```ts
optional dpop_bound_access_tokens_required: boolean;
```

Whether the protected resource always requires DPoP-bound access tokens.

### dpop\_signing\_alg\_values\_supported? {#dpop-signing-alg-values-supported}

```ts
optional dpop_signing_alg_values_supported: string[];
```

JWS algorithms supported for validating DPoP proof JWTs.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

URL of the protected resource's JSON Web Key (JWK) Set document. This document contains the public keys
that can be used to verify digital signatures of responses or data returned by this protected resource.
This differs from the authorization server's jwks_uri which is used for token validation. When the protected
resource signs its responses, clients can fetch these public keys to verify the authenticity and integrity
of the received data.

### resource {#resource}

```ts
resource: string;
```

The protected resource's resource identifier.

### resource\_documentation? {#resource-documentation}

```ts
optional resource_documentation: string;
```

URL containing developer documentation for using the protected resource.

### resource\_name? {#resource-name}

```ts
optional resource_name: string;
```

Human-readable name of the protected resource for display to end users.

### resource\_policy\_uri? {#resource-policy-uri}

```ts
optional resource_policy_uri: string;
```

URL containing information about the protected resource's data usage requirements.

### resource\_signing\_alg\_values\_supported? {#resource-signing-alg-values-supported}

```ts
optional resource_signing_alg_values_supported: string[];
```

JWS signing algorithms supported by the protected resource for signing resource responses.

### resource\_tos\_uri? {#resource-tos-uri}

```ts
optional resource_tos_uri: string;
```

URL containing the protected resource's terms of service.

### scopes\_supported? {#scopes-supported}

```ts
optional scopes_supported: string[];
```

List of scope values used in authorization requests to access this protected resource.

### signed\_metadata? {#signed-metadata}

```ts
optional signed_metadata: string;
```

A signed JWT containing metadata parameters as claims. The JWT must be signed using JWS and include
an 'iss' claim. This field provides a way to cryptographically verify the authenticity of the metadata
itself. The signature can be verified using the public keys available at the `jwks_uri` endpoint.
When present, the values in this signed metadata take precedence over the corresponding plain
JSON values in this metadata document. This helps prevent tampering with the resource metadata.

### tls\_client\_certificate\_bound\_access\_tokens? {#tls-client-certificate-bound-access-tokens}

```ts
optional tls_client_certificate_bound_access_tokens: boolean;
```

Whether the protected resource supports mutual-TLS client certificate-bound access tokens.
