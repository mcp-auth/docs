---
sidebar_label: CamelCaseAuthorizationServerMetadata
---

# 型エイリアス: CamelCaseAuthorizationServerMetadata

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
  scopesSupported?: string[];
  serviceDocumentation?: string;
  tokenEndpoint: string;
  tokenEndpointAuthMethodsSupported?: string[];
  tokenEndpointAuthSigningAlgValuesSupported?: string[];
  uiLocalesSupported?: string[];
  userinfoEndpoint?: string;
};
```

OAuth 2.0 認可サーバーメタデータ (Authorization Server Metadata) 型の camelCase バージョンです。

## 型定義 {#type-declaration}

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

### scopesSupported? {#scopessupported}

```ts
optional scopesSupported: string[];
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

## 参照 {#see}

元の型およびフィールド情報については [AuthorizationServerMetadata](/references/js/type-aliases/AuthorizationServerMetadata.md) を参照してください。
