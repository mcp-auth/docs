---
sidebar_label: CamelCaseProtectedResourceMetadata
---

# Alias de Tipo: CamelCaseProtectedResourceMetadata

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

A versão camelCase do tipo de Metadados de Recurso Protegido do OAuth 2.0 (OAuth 2.0 Protected Resource Metadata).

## Declaração do tipo {#type-declaration}

### authorizationDetailsTypesSupported? {#authorizationdetailstypessupported}

```ts
optional authorizationDetailsTypesSupported: string[];
```

### authorizationServers? {#authorizationservers}

```ts
optional authorizationServers: string[];
```

### bearerMethodsSupported? {#bearermethodssupported}

```ts
optional bearerMethodsSupported: string[];
```

### dpopBoundAccessTokensRequired? {#dpopboundaccesstokensrequired}

```ts
optional dpopBoundAccessTokensRequired: boolean;
```

### dpopSigningAlgValuesSupported? {#dpopsigningalgvaluessupported}

```ts
optional dpopSigningAlgValuesSupported: string[];
```

### jwksUri? {#jwksuri}

```ts
optional jwksUri: string;
```

### resource {#resource}

```ts
resource: string;
```

### resourceDocumentation? {#resourcedocumentation}

```ts
optional resourceDocumentation: string;
```

### resourceName? {#resourcename}

```ts
optional resourceName: string;
```

### resourcePolicyUri? {#resourcepolicyuri}

```ts
optional resourcePolicyUri: string;
```

### resourceSigningAlgValuesSupported? {#resourcesigningalgvaluessupported}

```ts
optional resourceSigningAlgValuesSupported: string[];
```

### resourceTosUri? {#resourcetosuri}

```ts
optional resourceTosUri: string;
```

### scopesSupported? {#scopessupported}

```ts
optional scopesSupported: string[];
```

### signedMetadata? {#signedmetadata}

```ts
optional signedMetadata: string;
```

### tlsClientCertificateBoundAccessTokens? {#tlsclientcertificateboundaccesstokens}

```ts
optional tlsClientCertificateBoundAccessTokens: boolean;
```

## Veja também {#see}

[ProtectedResourceMetadata](/references/js/type-aliases/ProtectedResourceMetadata.md) para o tipo original e informações dos campos.