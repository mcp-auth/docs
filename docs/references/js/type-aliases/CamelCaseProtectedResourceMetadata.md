---
sidebar_label: CamelCaseProtectedResourceMetadata
---

# Type Alias: CamelCaseProtectedResourceMetadata

```ts
type CamelCaseProtectedResourceMetadata = {
  authorizationDetailsTypesSupported?: string[];
  authorizationServers?: string[];
  bearerMethodsSupported?: string[];
  dpopBoundAccessTokensRequired?: boolean;
  dpopSigningAlgValuesSupported?: string[];
  jwksUri?: string;
  resource: string;
  resourceDocumentation?: string;
  resourceName?: string;
  resourcePolicyUri?: string;
  resourceSigningAlgValuesSupported?: string[];
  resourceTosUri?: string;
  scopesSupported?: string[];
  signedMetadata?: string;
  tlsClientCertificateBoundAccessTokens?: boolean;
};
```

The camelCase version of the OAuth 2.0 Protected Resource Metadata type.

## Type declaration

### authorizationDetailsTypesSupported?

```ts
optional authorizationDetailsTypesSupported: string[];
```

### authorizationServers?

```ts
optional authorizationServers: string[];
```

### bearerMethodsSupported?

```ts
optional bearerMethodsSupported: string[];
```

### dpopBoundAccessTokensRequired?

```ts
optional dpopBoundAccessTokensRequired: boolean;
```

### dpopSigningAlgValuesSupported?

```ts
optional dpopSigningAlgValuesSupported: string[];
```

### jwksUri?

```ts
optional jwksUri: string;
```

### resource

```ts
resource: string;
```

### resourceDocumentation?

```ts
optional resourceDocumentation: string;
```

### resourceName?

```ts
optional resourceName: string;
```

### resourcePolicyUri?

```ts
optional resourcePolicyUri: string;
```

### resourceSigningAlgValuesSupported?

```ts
optional resourceSigningAlgValuesSupported: string[];
```

### resourceTosUri?

```ts
optional resourceTosUri: string;
```

### scopesSupported?

```ts
optional scopesSupported: string[];
```

### signedMetadata?

```ts
optional signedMetadata: string;
```

### tlsClientCertificateBoundAccessTokens?

```ts
optional tlsClientCertificateBoundAccessTokens: boolean;
```

## See

[ProtectedResourceMetadata](/references/js/type-aliases/ProtectedResourceMetadata.md) for the original type and field information.
