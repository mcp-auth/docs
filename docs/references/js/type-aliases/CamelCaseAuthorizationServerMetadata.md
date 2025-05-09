---
sidebar_label: CamelCaseAuthorizationServerMetadata
---

# Type Alias: CamelCaseAuthorizationServerMetadata

```ts
type CamelCaseAuthorizationServerMetadata = {
  authorizationEndpoint: string;
  codeChallengeMethodsSupported?: string[];
  grantTypesSupported?: string[];
  introspectionEndpoint?: string;
  introspectionEndpointAuthMethodsSupported?: string[];
  introspectionEndpointAuthSigningAlgValuesSupported?: string[];
  issuer: string;
  jwksUri?: string;
  opPolicyUri?: string;
  opTosUri?: string;
  registrationEndpoint?: string;
  responseModesSupported?: string[];
  responseTypesSupported: string[];
  revocationEndpoint?: string;
  revocationEndpointAuthMethodsSupported?: string[];
  revocationEndpointAuthSigningAlgValuesSupported?: string[];
  scopeSupported?: string[];
  serviceDocumentation?: string;
  tokenEndpoint: string;
  tokenEndpointAuthMethodsSupported?: string[];
  tokenEndpointAuthSigningAlgValuesSupported?: string[];
  uiLocalesSupported?: string[];
  userinfoEndpoint?: string;
};
```

The camelCase version of the OAuth 2.0 Authorization Server Metadata type.

## Type declaration

### authorizationEndpoint

```ts
authorizationEndpoint: string;
```

### codeChallengeMethodsSupported?

```ts
optional codeChallengeMethodsSupported: string[];
```

### grantTypesSupported?

```ts
optional grantTypesSupported: string[];
```

### introspectionEndpoint?

```ts
optional introspectionEndpoint: string;
```

### introspectionEndpointAuthMethodsSupported?

```ts
optional introspectionEndpointAuthMethodsSupported: string[];
```

### introspectionEndpointAuthSigningAlgValuesSupported?

```ts
optional introspectionEndpointAuthSigningAlgValuesSupported: string[];
```

### issuer

```ts
issuer: string;
```

### jwksUri?

```ts
optional jwksUri: string;
```

### opPolicyUri?

```ts
optional opPolicyUri: string;
```

### opTosUri?

```ts
optional opTosUri: string;
```

### registrationEndpoint?

```ts
optional registrationEndpoint: string;
```

### responseModesSupported?

```ts
optional responseModesSupported: string[];
```

### responseTypesSupported

```ts
responseTypesSupported: string[];
```

### revocationEndpoint?

```ts
optional revocationEndpoint: string;
```

### revocationEndpointAuthMethodsSupported?

```ts
optional revocationEndpointAuthMethodsSupported: string[];
```

### revocationEndpointAuthSigningAlgValuesSupported?

```ts
optional revocationEndpointAuthSigningAlgValuesSupported: string[];
```

### scopeSupported?

```ts
optional scopeSupported: string[];
```

### serviceDocumentation?

```ts
optional serviceDocumentation: string;
```

### tokenEndpoint

```ts
tokenEndpoint: string;
```

### tokenEndpointAuthMethodsSupported?

```ts
optional tokenEndpointAuthMethodsSupported: string[];
```

### tokenEndpointAuthSigningAlgValuesSupported?

```ts
optional tokenEndpointAuthSigningAlgValuesSupported: string[];
```

### uiLocalesSupported?

```ts
optional uiLocalesSupported: string[];
```

### userinfoEndpoint?

```ts
optional userinfoEndpoint: string;
```

## See

[AuthorizationServerMetadata](/references/js/type-aliases/AuthorizationServerMetadata.md) for the original type and field information.
