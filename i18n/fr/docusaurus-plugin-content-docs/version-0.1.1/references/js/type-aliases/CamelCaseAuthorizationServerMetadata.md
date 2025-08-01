---
sidebar_label: CamelCaseAuthorizationServerMetadata
---

# Alias de type : CamelCaseAuthorizationServerMetadata

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

La version camelCase du type OAuth 2.0 Authorization Server Metadata.

## Déclaration du type {#type-declaration}

### authorizationEndpoint {#authorizationendpoint}

```ts
authorizationEndpoint: string;
```

### codeChallengeMethodsSupported? {#codechallengemethodssupported}

```ts
optional codeChallengeMethodsSupported: string[];
```

### grantTypesSupported? {#granttypessupported}

```ts
optional grantTypesSupported: string[];
```

### introspectionEndpoint? {#introspectionendpoint}

```ts
optional introspectionEndpoint: string;
```

### introspectionEndpointAuthMethodsSupported? {#introspectionendpointauthmethodssupported}

```ts
optional introspectionEndpointAuthMethodsSupported: string[];
```

### introspectionEndpointAuthSigningAlgValuesSupported? {#introspectionendpointauthsigningalgvaluessupported}

```ts
optional introspectionEndpointAuthSigningAlgValuesSupported: string[];
```

### issuer {#issuer}

```ts
issuer: string;
```

### jwksUri? {#jwksuri}

```ts
optional jwksUri: string;
```

### opPolicyUri? {#oppolicyuri}

```ts
optional opPolicyUri: string;
```

### opTosUri? {#optosuri}

```ts
optional opTosUri: string;
```

### registrationEndpoint? {#registrationendpoint}

```ts
optional registrationEndpoint: string;
```

### responseModesSupported? {#responsemodessupported}

```ts
optional responseModesSupported: string[];
```

### responseTypesSupported {#responsetypessupported}

```ts
responseTypesSupported: string[];
```

### revocationEndpoint? {#revocationendpoint}

```ts
optional revocationEndpoint: string;
```

### revocationEndpointAuthMethodsSupported? {#revocationendpointauthmethodssupported}

```ts
optional revocationEndpointAuthMethodsSupported: string[];
```

### revocationEndpointAuthSigningAlgValuesSupported? {#revocationendpointauthsigningalgvaluessupported}

```ts
optional revocationEndpointAuthSigningAlgValuesSupported: string[];
```

### scopeSupported? {#scopesupported}

```ts
optional scopeSupported: string[];
```

### serviceDocumentation? {#servicedocumentation}

```ts
optional serviceDocumentation: string;
```

### tokenEndpoint {#tokenendpoint}

```ts
tokenEndpoint: string;
```

### tokenEndpointAuthMethodsSupported? {#tokenendpointauthmethodssupported}

```ts
optional tokenEndpointAuthMethodsSupported: string[];
```

### tokenEndpointAuthSigningAlgValuesSupported? {#tokenendpointauthsigningalgvaluessupported}

```ts
optional tokenEndpointAuthSigningAlgValuesSupported: string[];
```

### uiLocalesSupported? {#uilocalessupported}

```ts
optional uiLocalesSupported: string[];
```

### userinfoEndpoint? {#userinfoendpoint}

```ts
optional userinfoEndpoint: string;
```

## Voir aussi {#see}

[AuthorizationServerMetadata](/references/js/type-aliases/AuthorizationServerMetadata.md) pour le type original et les informations sur les champs.
